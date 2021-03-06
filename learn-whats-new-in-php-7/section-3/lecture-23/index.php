<?php

function values () {
  yield from [1, 2, 3];
  yield from step();
  yield 100;
  yield 200;
  return 300;
}

function step () {
  yield 1;
  yield 2;
  yield 3;
  yield from moreSteps();
}

function moreSteps () {
  yield 4;
  yield 5;
  yield 6;
};

$control = values();

foreach ($control as $key => $value) {
  echo $value . "<br/>";
}

echo $control->getReturn();
