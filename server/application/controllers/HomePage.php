<?php
defined('BASEPATH') OR exit('No direct script access allowed');

use \QCloud_WeApp_SDK\Tunnel\TunnelService as TunnelService;
use \QCloud_WeApp_SDK\Auth\LoginService as LoginService;
use QCloud_WeApp_SDK\Constants as Constants;

require APPPATH.'business/ChatTunnelHandler.php';

class homePage extends CI_Controller {
    public function index() {
      $arr = array();
      $arr['success'] = true;
      $arr['message'] = "成功";
      $arr['data']['imgUrls'][0] = 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg';
      $arr['data']['imgUrls'][1] = 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg';
      $arr['data']['imgUrls'][2] = 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg';
      $arr['data']['newCarInfos'][0]['indexPic'] = 'https://dm30webimages.geely.com/GeelyPromotion/DiHaoGS/SectionFourth/showpic/pc/3s.jpg';
      $arr['data']['newCarInfos'][0]['brand'] = '本田杰徳';
      $arr['data']['newCarInfos'][0]['brand_detail'] = '2016款 1.8L 自动舒适精英版 5 座';
      $arr['data']['newCarInfos'][0]['license_date'] = '2016年3月';
      $arr['data']['newCarInfos'][0]['mileage'] = '1.8万公里';
      $arr['data']['newCarInfos'][0]['price'] = '16.80万';
      $arr['data']['newCarInfos'][1] = $arr['data']['newCarInfos'][0];
      $arr['data']['newCarInfos'][2] = $arr['data']['newCarInfos'][0];
      $arr['data']['newCarInfos'][3] = $arr['data']['newCarInfos'][0];
      $arr['data']['newCarInfos'][4] = $arr['data']['newCarInfos'][0];
      $arr['data']['newCarInfos'][5] = $arr['data']['newCarInfos'][0];
      $arr['data']['newCarInfos'][6] = $arr['data']['newCarInfos'][0];
      echo json_encode($arr);
    }
}
