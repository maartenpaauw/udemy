<?php


class HandleError extends AssertionError {

}

$num = "hello";

assert(is_numeric($num), new HandleError("NaN"));
