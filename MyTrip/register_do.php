<?php
	header("Content-type:text/html;charset=utf-8");
	include 'common_link.php';
	$phone=$_REQUEST["phone"];
	$newpwd=$_REQUEST["newpwd"];
	$query="insert into user_info values (default,'".$phone."','".$newpwd."','13838565641')";
	$result=mysql_query($query,$link)or die("查找错误");
	if ($result){
		echo "用户添加成功";
		session_start();
		$_SESSION["phone"]=$phone;
		$_SESSION["newpwd"]=$newpwd;
	}
	else {
		echo "aaa";
	}
	//释放资源
	mysql_free_result($result);
	//关闭连接
	mysql_close($link);
?>