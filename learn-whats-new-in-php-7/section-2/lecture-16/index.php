<?php

session_start([
  "cache_limiter" => "private",
  "read_and_close" => false
]);

$_SESSION["name"] = "Maarten Paauw";

?>

<a href="loggedin.php">Logged in</a>
