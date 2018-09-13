<?php

$subject = 'Aaaa aa aa aa aa aa Bbb';

$count;

preg_replace_callback_array([
  '~[a]+~i' => function ($match) { echo $match[0] . ' match found for [a] <br/> <br/>'; },
  '~[b]+~i' => function ($match) { echo $match[0] . ' match found for [b] <br/> <br/>'; }
], $subject, -1, $count);

echo $count;
