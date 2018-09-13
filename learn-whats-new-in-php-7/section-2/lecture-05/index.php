<?php

interface Register {}

class OBJ implements Register {}

function dataReturn (): Register
{
  return new OBJ();
}

echo var_export(dataReturn());
