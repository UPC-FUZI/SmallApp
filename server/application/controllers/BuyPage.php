<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class BuyPage extends CI_Controller {
	public function index(){
      $arr = array();
      $arr['success'] = true;
      $arr['message'] = "成功";
      $arr['data']['count'][0] = 10;
      $arr['data']['carInfos'][0]['indexPic'] = 'https://dm30webimages.geely.com/GeelyPromotion/DiHaoGS/SectionFourth/showpic/pc/3s.jpg';
      $arr['data']['carInfos'][0]['brand'] = '本田杰徳';
      $arr['data']['carInfos'][0]['brand_detail'] = '2016款 1.8L 自动舒适精英版 5 座';
      $arr['data']['carInfos'][0]['license_date'] = '2016年3月';
      $arr['data']['carInfos'][0]['mileage'] = '1.8万公里';
      $arr['data']['carInfos'][0]['price'] = '16.80万';
      $arr['data']['carInfos'][1] = $arr['data']['carInfos'][0];
      $arr['data']['carInfos'][2] = $arr['data']['carInfos'][0];
      $arr['data']['carInfos'][3] = $arr['data']['carInfos'][0];
      $arr['data']['carInfos'][4] = $arr['data']['carInfos'][0];
      $arr['data']['carInfos'][5] = $arr['data']['carInfos'][0];
      $arr['data']['carInfos'][6] = $arr['data']['carInfos'][0];
      $arr['data']['carInfos'][7] = $arr['data']['carInfos'][0];
      $arr['data']['carInfos'][8] = $arr['data']['carInfos'][0];
      $arr['data']['carInfos'][9] = $arr['data']['carInfos'][0];
      echo json_encode($arr);
	}
}
