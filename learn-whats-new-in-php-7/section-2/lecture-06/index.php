<?php

echo "<pre>" . json_encode($_GET, JSON_PRETTY_PRINT) . "</pre>";

echo $person ?? $_GET['name'] ?? "Maarten";
