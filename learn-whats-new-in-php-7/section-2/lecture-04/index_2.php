<?php

function parse(callable $callback) {
  echo "text";
  $callback();
}

parse(function() {
  echo "more text";
});