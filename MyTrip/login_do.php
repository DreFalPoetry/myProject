<?php
	header("Content-type:text/html;charset=utf-8");
	include 'common_link.php';
	$username=$_REQUEST["username"];
	$pwd=$_REQUEST["pwd"];
	$query="select * from user_info where user_name='".$username."'and password='".$pwd."'or phone='".$username."'and password='".$pwd."'";
	$result=mysql_query($query,$link)or die("查找错误");
	$row=mysql_fetch_array($result,MYSQL_ASSOC);
    if ($row){
    	foreach ($row as $key => $value){
    		$row[$key]=urlencode($value);
    	}
    	$ss=urldecode(json_encode($row));
//     	echo "</br>";
//     	echo $ss;
		session_start();
		$_SESSION["username"]=$username;
//     	header("location:../../four/zhanghao.html");
    }
    else {
//     	session_start();
//     	$_SESSION["msg"]="用户名或密码错误";
    	echo "aaa";
//     	echo "用户名或密码错误";
//     	header("location:../../four/login.html");
    }
	   //释放资源
	   mysql_free_result($result);
	   //关闭连接
	   mysql_close($link);
?>