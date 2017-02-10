
<?php
header("Access-Control-Allow-Origin: *");
$str=file_get_contents("/tmp/newfile.txt");
echo  $str;
?>


