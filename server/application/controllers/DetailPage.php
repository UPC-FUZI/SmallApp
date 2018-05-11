<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class DetailPage extends CI_Controller {
  public function index(){
      $arr = array();
      $arr['success'] = true;
      $arr['message'] = "成功";
      $arr['data']['carInfo']['videoUrl'] = "https://dm30webimages.geely.com/GeelyPromotion/DiHaoGS/SectionFourth/videos/video/pc1.mp4";
      $arr['data']['carInfo']['imgUrls'][0] = '../../images/car/gs1.png'; 
      $arr['data']['carInfo']['imgUrls'][1] = '../../images/car/gs2.png'; 
      $arr['data']['carInfo']['imgUrls'][2] = '../../images/car/gs3.png'; 
      $arr['data']['carInfo']['imgUrls'][3] = '../../images/car/gs4.png'; 
      $arr['data']['carInfo']['brand_detail'] = "2018款 优雅版 1.8L 手动风尚型";
      $arr['data']['carInfo']['price'] = '4.70 万';
      $arr['data']['carInfo']['new_price'] = '11.28万(含税)';
      $arr['data']['carInfo']['license_date'] = '2016年10月';
      $arr['data']['carInfo']['mileage'] = '1000公里';
      $arr['data']['carInfo']['gear'] = '手动一体';
      $arr['data']['carInfo']['discharge'] = '欧5';
      $arr['data']['carInfo']['displacement'] = '1.6L';
      $arr['data']['carInfo']['license'] = '潍坊';
      echo json_encode($arr);
  }
}
