<?php

if(!isset($_SERVER['HTTP_X_REQUESTED_WITH']) AND strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) != 'xmlhttprequest') {
 $answer_serv = json_encode(
 array( 
 'text' => 'Возникла ошибка при отправке данных'
 ));
 die($answer_serv);
 }

if(!isset($_POST["user_phone"]))
 {
 $answer_serv = json_encode(array('type'=>'error', 'text' => 'Заполните форму'));
 die($answer_serv);
 }

$user_Name = htmlspecialchars($user_Name);
$user_Name = urldecode($user_Name);
$user_Name = trim($user_Name);
$user_Name = filter_var($_POST["user_name"], FILTER_SANITIZE_STRING);

$user_Phone = htmlspecialchars($user_Phone);
$user_Phone = urldecode($user_Phone);
$user_Phone = trim($user_Phone);
$user_Phone = filter_var($_POST["user_phone"], FILTER_SANITIZE_STRING);

$to_Email = "tani_danilova@mail.ru"; 
$subject = 'Zakaz zvonka';

$msg = "Name: $user_Name\n".
       "Phone: $user_Phone\n";
       
 if(!mail($to_Email, $subject, $msg, "From: myWebSite@tanya.com \r\n"))
 {
$answer_serv = json_encode(array('text' => 'Не могу отправить почту! Пожалуйста, проверьте ваши настройки PHP почты.'));
 die($answer_serv);
 }else{
$answer_serv = json_encode(array('text' => 'Спасибо! , ваше сообщение отправлено.'));
 die($answer_serv);
 }

?>