<?php

$context = function () {

  echo $this->prop;

};

class OBJ {
  public $prop = 'property';
}

$context->call(new OBJ);
