<?php

class Cake {

  function icing (self $thisCake) {
    echo "Cake to ice: <br />";
    echo var_dump($thisCake);
  }
}

class pudding { }

$cake1 = new Pudding;
$cake2 = new Cake;

$cake2->icing($cake2);
