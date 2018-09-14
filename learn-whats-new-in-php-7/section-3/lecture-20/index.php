<?php

function satNav () {
  
  $distance = 0;

  echo "Part A <br/><br/>";

  yield "Stop A <br/><br/>";
  
  echo "Part B <br/><br/>";
  
  yield "Stop B <br/><br/>";
  
  echo "Part C <br/><br/>";

  yield "Stop C <br/><br/>";
  
  echo "Part D <br/><br/>";
  
  yield "Stop D <br/><br/>";
  
  echo "Part E <br/><br/>";

  echo "The distance is {$distance}";

}

$control = satNav();

echo $control->current();
echo $control->next();
echo $control->current();
echo $control->next();
echo $control->current();
echo $control->next();
echo $control->current();
echo $control->next();