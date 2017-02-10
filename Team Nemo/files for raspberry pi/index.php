
<?php
header("Access-Control-Allow-Origin: *");
$output = shell_exec('/opt/vc/bin/vcgencmd measure_temp|cut -c6-9');
$uptime=shell_exec("cut -d. -f1 /proc/uptime");
$volume=$output*$uptime;
echo  json_encode(array("a" =>$output,"b" =>$uptime,"c" =>$volume));
?>


