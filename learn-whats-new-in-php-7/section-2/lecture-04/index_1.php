<?php

function parse ( array $kit ) {
  echo "<pre>" . json_encode($kit, JSON_PRETTY_PRINT) . "</pre>";
}

$arr = array("hello", "world", "another", "word");

parse($arr);
