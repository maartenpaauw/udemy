<?php

const PERSON = array('PERSON', 200, true);
Define('OFFICE', array('OFFICE', 400, true));

echo json_encode(PERSON, 128);
echo json_encode(OFFICE, 128);
