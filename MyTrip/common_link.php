<?php
	$host="localhost";
	$aduser="root";
	$pwdone="root";
	$db="music";
	$link=mysql_connect($host,$aduser,$pwdone);
	mysql_select_db($db) or die("无法连接到数据库");
	mysql_query("set names utf8");
?>
