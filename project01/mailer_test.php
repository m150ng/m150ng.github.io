<?php
include_once('PHPMailer/mailer.lib.php');


$name =$_POST['wr_name']; //성함
$wr_subject = $_POST['wr_subject'];  //이메일
$wr_content =$_POST['wr_content'];  //내용

 
// mailer("보내는 사람 이름", "보내는 사람 메일주소", "받는 사람 메일주소", "제목", "내용", "1");
mailer("$name", "hnjm0402@naver.com", "hnjm0402@naver.com", "$wr_subject", "$wr_content", 1);
?>

