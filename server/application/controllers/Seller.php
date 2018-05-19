<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Seller extends CI_Controller {

  public function __construct()  
  {  
    parent::__construct();  
    //加载数据模型  
    $this->load->model('db_model');  
  }
  //卖家提交卖车基本信息
  public function submitCarInfo(){
    $data = array('wx_user_id'=>$_POST['userName'], 'telephone'=>$_POST['telephone'],'city'=>$_POST['city'],
                  'brand'=>$_POST['brand'],'mileage'=>$_POST['mileage'],'license_date'=>$_POST['licenseDate'],
                  'create_time'=>date("Y-m-d H:i:s"));
    $dbResult = $this->db_model->insertSellerCarInfo($data);  
    if($dbResult){
      echo json_encode(array('success'=>true,'message'=>'提交成功'));
    }else{
      echo json_encode(array('success'=>false,'message'=>'提交失败'));
    }
  }
}
