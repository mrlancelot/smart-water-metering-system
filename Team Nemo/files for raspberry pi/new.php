<?php
 $name= $_POST["name"];
$myfile=fopen("/tmp/newfile.txt","w") or die("Unable to Open file");
fwrite($myfile,$name);
fclose($myfile);
?>
