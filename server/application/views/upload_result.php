<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?>
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- 通用CSS -->
    <link rel="stylesheet"  type="text/css" href="static/css/bootstrap.min.css"/>
    <!-- 通用JS -->
    <script type="text/javascript" src="static/js/bootstrap.min.js"></script>
  </head>
  <body>
  <?php if($success){?>
    <address>
      <strong><?=$message?></strong><br>
      <a class="btn btn-default" href="backStage" role="button">继续添加</a>
    </address>
  <?php }else{?>
    <address>
      <strong><?=$message?></strong><br>
      <a class="btn btn-default" href="backStage" role="button">继续添加</a>
    </address>
  <?php }?>
  </body>
</html>