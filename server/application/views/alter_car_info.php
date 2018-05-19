<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?>
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- CSS -->
    <link rel="stylesheet" type="text/css" href="<?=base_url('static/css/bootstrap.css')?>"/>
    <link rel="stylesheet" type="text/css" href="<?=base_url('static/css/bootstrapValidator.css')?>"/>
    <!-- JS -->
    <script type="text/javascript" src="<?=base_url('static/js/jquery-1.10.2.min.js')?>"></script>
    <script type="text/javascript" src="<?=base_url('static/js/bootstrap.min.js')?>"></script>
    <script type="text/javascript" src="<?=base_url('static/js/bootstrapValidator.js')?>"></script>
  </head>
  <body>
    <div class="container">
      <h1>Bootstrap heading</h1>
      <form action="<?=base_url('backStage/submitDetailCarInfo')?>" id="carInfoForm" enctype="multipart/form-data" method="POST"
                data-bv-message="This value is not valid"
                data-bv-feedbackicons-valid="glyphicon glyphicon-ok"
                data-bv-feedbackicons-invalid="glyphicon glyphicon-remove"
                data-bv-feedbackicons-validating="glyphicon glyphicon-refresh">
          <input type="text" style="display:none;" name="id" value="<?=$data['id']?>">
          <div class="form-group col-sm-6">
            <label for="brand">品牌</label>
            <input type="text" class="form-control" id="brand" name="brand" value="<?=$data['brand']?>" placeholder="请输入品牌" required data-bv-notempty-message="品牌不为空">
          </div>
          <div class="form-group col-sm-6">
            <label for="brand_detail">详细品牌车系</label>
            <input type="text" class="form-control" id="brand_detail" name="brand_detail" value="<?=$data['brand_detail']?>" placeholder="请输入详细品牌车系" required data-bv-notempty-message="详细品牌车系不为空"/>
          </div>
          <div class="form-group col-sm-6">
            <label for="license_date">上牌时间</label>
            <input type="text" class="form-control" id="license_date" name="license_date" value="<?=$data['license_date']?>" placeholder="请输入上牌时间" required data-bv-notempty-message="上牌时间不为空"/>
          </div>
          <div class="form-group col-sm-6">
            <label for="mileage">行车里程</label>
            <input type="text" class="form-control" id="mileage" name="mileage" value="<?=$data['mileage']?>" placeholder="请输入行车里程" required data-bv-notempty-message="行车里程不为空">
          </div>
          <div class="form-group col-sm-6">
            <label for="price">推荐价</label>
            <input type="text" class="form-control" id="price" name="price" value="<?=$data['price']?>" placeholder="请输入推荐价"  required data-bv-notempty-message="推荐价不为空">
          </div>
          <div class="form-group col-sm-6">
            <label for="new_price">新车价</label>
            <input type="text" class="form-control" id="new_price" name="new_price" value="<?=$data['new_price']?>" placeholder="请输入新车价" required data-bv-notempty-message="新车价不为空">
          </div>
          <div class="form-group col-sm-6">
            <label for="gear">档位</label>
            <input type="text" class="form-control" id="gear" name="gear" value="<?=$data['gear']?>" placeholder="请输入档位" required data-bv-notempty-message="档位不为空">
          </div>
          <div class="form-group col-sm-6">
            <label for="discharge">排放标准</label>
            <input type="text" class="form-control" id="discharge" name="discharge" value="<?=$data['discharge']?>" placeholder="请输入排放标准" required data-bv-notempty-message="排放标准不为空">
          </div>
          <div class="form-group col-sm-6">
            <label for="displacement">排量</label>
            <input type="text" class="form-control" id="displacement" name="displacement" value="<?=$data['displacement']?>" placeholder="请输入排量" required data-bv-notempty-message="排量不为空">
          </div>
          <div class="form-group col-sm-6">
            <label for="license">车牌</label>
            <input type="text" class="form-control" id="license" name="license" value="<?=$data['license']?>" placeholder="请输入车牌" required data-bv-notempty-message="车牌不为空">
          </div>
          <div class="col-sm-12 form-group">
            <label for="video">视频链接</label>
            <input type="text" class="form-control" id="video" name="video" value="<?=$data['video_url']?>" placeholder="请输入视频链接" required data-bv-notempty-message="视频链接不为空">
          </div>
          <div class="form-group col-sm-6">
            <label for="index_pic">首页图片展示(单张图片小于1M)</label>
            <input type="file" id="index_pic" name="index_pic" required data-bv-notempty-message="首页图片不为空">
          </div>
          <div class="form-group col-sm-6">
            <label for="pics">详情页图片展示(可选择多张，单张图片小于1M)</label>
            <input type="file" id="pics" name="pics[]" multiple  required data-bv-notempty-message="详情页图片不为空">
          </div>
          <div class="form-group col-sm-6">
            <button type="submit" id="validateBtn" class="btn btn-primary">Submit</button>
          </div>
      </form>
    </div>
<script type="text/javascript">
    $(document).ready(function() {
        $('#carInfoForm').bootstrapValidator();
    });
</script>
    </div>
  </body>
</html>