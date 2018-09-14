<?php

function satNav () {
  
  $distance = 0;

  echo "Part A <br/><br/>";

  $distance = yield;
  
  echo " Part B {$distance} <br/><br/>";
  
  $distance = yield;

  echo "The distance is {$distance}";

}

$control = satNav();
$control->current();
$control->send(1);
$control->send(2);
