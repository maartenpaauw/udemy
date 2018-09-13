<?php

$framework = new class("test") {

  private $read;

  function __construct ($read) {
    $this->read = $read;
  }

  public function print () {
    echo $this->read;
  }

  static function hello() {
    echo "Hello!";
  }
};

$framework->print();
$framework::hello();
