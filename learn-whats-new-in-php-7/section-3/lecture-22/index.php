<?php

class OBJ { }

function values () {
  yield 'string';
  yield 100;
  yield 100.11;
  yield true;
  yield from [1, 2, 3];
  yield from array('key' => 'value');
  yield new OBJ;
  yield function () {
    return "test";
  };
}

$control = values();

foreach ($control as $value) {
  echo json_encode($value, 128) . PHP_EOL;
}
