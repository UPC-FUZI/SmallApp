<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?>
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- CSS -->
    <link rel="stylesheet" type="text/css" href="<?=base_url('static/css/bootstrap.css')?>"/>
    <!-- JS -->
    <script type="text/javascript" src="<?=base_url('static/js/jquery-1.10.2.min.js')?>"></script>
    <script type="text/javascript" src="<?=base_url('static/js/bootstrap.min.js')?>"></script>
  </head>
  <body>
    <div class="container">
      <table class="table table-hover">
        <thead>
          <tr>
            <th>创建时间</th><th>车系</th><th>上牌时间</th><th>行车里程</th><th>价格</th><th>售卖时间</th><th>操作</th>
          </tr>
        </thead>
        <tbody>
        <?php foreach($data as $item){?>
          <tr>
            <td><?=$item['create_time']?></td><td><?=$item['brand_detail']?></td><td><?=$item['license_date']?></td>
            <td><?=$item['mileage']?></td><td><?=$item['price']?></td>
            <td><?php if($item==1) echo $item['price']; else echo "--"?></td>
            <td><a href="<?php echo base_url('backStage/getCarInfoById?id='.$item['id'])?>">修改</a></td>
          </tr>
        <?php }?>
        </tbody>
      </table>
    </div>
  </body>
</html>