<?php

interface Checker { }

class Cake implements Checker { }
class Salad implements Checker { }

function restaurant (Checker $food) {
  echo var_dump($food);
}

$box = new Cake;

restaurant($box);
