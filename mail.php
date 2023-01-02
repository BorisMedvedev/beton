<?php


$mail_to = "mosbetonstroi@yandex.ru"; // Email куда будет отправлено письмо
$email_from = "mosbetonstroi@yandex.ru"; // Указываем от кого будет отправлено письмо, email, reply to
$name_from = "Сайт по доставке бетона Москва"; // Указываем от кого будет отправлено письмо, имя
$subject = "Сообщение с сайта по доставке бетона Москва!"; // Тема письма

// Формируем текст письма
$message =  "Вам пришло новое сообщение с сайта: <br><br>\n" .
    "<strong>Имя отправителя:</strong>" . strip_tags(trim($_POST['name'])) . "<br>\n" .
    "<strong>Телефон отправителя: </strong>" . strip_tags(trim($_POST['phone'])) . "<br>\n" .
    "<strong>Почта отправителя: </strong>" . strip_tags(trim($_POST['email']));

// Формируем тему письма, специально обрабатывая её
$subject = "=?utf-8?B?" . base64_encode($subject) . "?=";

// Формируем заголовки письма
$headers = "MIME-Version: 1.0" . PHP_EOL .
    "Content-Type: text/html; charset=utf-8" . PHP_EOL .
    "From: " . "=?utf-8?B?" . base64_encode($name_from) . "?=" . "<" . $email_from . ">" .  PHP_EOL .
    "Reply-To: " . $email_from . PHP_EOL;

// Отправляем письмо
$mailResult = mail($mail_to, $subject, $message, $headers);

if ($mailResult) {
    // Перенаправляем на страницу "Спасибо"
    header('location: thankyou.html');
} else {
    header('location: error.html');
}
