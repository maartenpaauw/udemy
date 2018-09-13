<?php

class OBJ {

  public $prop = "Hello World!";

  private $priv = "Text";

  private $arr = [20, 40, 60, 80];

}

$data = serialize(new OBJ);

$unserialize = unserialize($data, [
  "allowed_classes" => ["OBJ"]
]);
  
echo $unserialize->prop;
