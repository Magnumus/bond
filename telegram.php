<?php 
    if(($_SERVER["HTTP_REFERER"]) != "https://money.yandex.ru/quickpay/confirm.xml"){
        header("Location:index.php");
    } else {
?>
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="css/123.css">
    <link rel="stylesheet" href="css/fontello.css">
    <link rel="stylesheet" href="css/fontello-codes.css">
	<link rel="stylesheet" href="font/stylesheet.css">
    <title>Telegram</title>
    <style>
    body{
        width: 100%;
        height: 100vh;
        background-image: url(images/back.png);
        background-position: center;
        display: flex;
        justify-content: center;
        align-content: center;
        align-items: center;
        }
        #container{
            width: 30%;
            height: auto;
        }
        p{
            font-size: 2em;
            font-family: 'SF UI Display'!important;
            outline: none;
            color: #ffd797;
            margin-bottom: 5vh;
        }
        button{
            width: 100%;
            height: auto;
            background-color: #ffd797;
            border: none;
            color: #000;
            font-size: 3em;
            padding: 20px 0px;
            font-family: 'SF UI Display'!important;
            outline: none;
            border-radius: 10px;
        }
    </style>
</head>
<body>
  <div id="container">
   <p>Вот ваша кнопка для вступления в VIP чат, где хранится информация по SMM.</p>
   <form action="tel.php">
    <button type="submit">Перейти в чат</button>
    </form>
    </div>
</body>
</html>
<?php } ?>