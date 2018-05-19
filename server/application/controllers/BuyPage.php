<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class BuyPage extends CI_Controller {

  public function __construct()  
  {  
    parent::__construct();  
    //加载数据模型  
    $this->load->model('db_model');  
  }

	public function index(){
    $requestData = array('enabled'=>0);
    $result = $this->db_model->listAllCarIfo($requestData);
    $count = count($result);
    
    $arr = array();
    if($count == 0){
      $arr['success'] = false;
      $arr['message'] = "没有车辆信息";
    }else{
      $arr['success'] = true;
      $arr['message'] = "成功";
      $arr['data']['count'][0] = $count;
      $arr['data']['carInfos'] = $result;
    }
    echo json_encode($arr);
	}
}
