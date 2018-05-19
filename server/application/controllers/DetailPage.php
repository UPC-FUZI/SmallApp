<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class DetailPage extends CI_Controller {

  public function __construct()  
  {  
    parent::__construct();  
    //加载数据模型  
    $this->load->model('db_model');  
  }

  public function index(){
    $requestDate = array('id' => $_POST['id']);
    $result = $this->db_model->getCarDetailInfo($requestDate);
    $count = count($result);

    $arr = array();
    if($count == 0){
      $arr['success'] = false;
      $arr['message'] = "没有该辆车的详细信息";
      echo json_encode($arr);
      return;
    }
    $arr['success'] = true;
    $arr['message'] = "成功";
    $arr['data']['carInfo'] = $result;
    $pic_urls = $arr['data']['carInfo']['pic_urls'];
    $arr['data']['carInfo']['imgUrls'] = explode('#', $pic_urls);
    echo json_encode($arr);
  }
}
