<?php
defined('BASEPATH') OR exit('No direct script access allowed');

use \QCloud_WeApp_SDK\Conf as Conf;
use \QCloud_WeApp_SDK\Cos\CosAPI as Cos;
use \QCloud_WeApp_SDK\Constants as Constants;

class BackStage extends CI_Controller {

  public function __construct()  
  {  
    parent::__construct();  
    //加载数据模型  
    $this->load->model('db_model');            
    // $this->load->library('upload');  
    $this->load->helper(array('form', 'url'));
  }
  //跳转车辆详情填写页
  public function index()
  {
      $this->load->view('upload_car_info');
  }
  //提交车辆的详细信息
  public function submitDetailCarInfo(){
    $arr = array();

    $config['upload_path'] = './uploads/'.$_POST['brand'].'_'.date('Y-m-d H:i:s').'/';
    $config['allowed_types'] = 'gif|jpg|png|mp4';
    $config['max_size'] = '10240';
    $config['max_width']  = '1024';
    $config['max_height']  = '768';
    $this->load->library('upload', $config);

    if(!is_dir('./uploads/')){
      mkdir('./uploads/',0777);
      chmod('./uploads/',0777);
    }
    if(!is_dir($config['upload_path'])){
      mkdir($config['upload_path'], 0777); 
      chmod($config['upload_path'], 0777);
    }
    //上传index图片
    if (!$this->upload->do_upload('index_pic')) {  
      $arr['success'] = false;
      $arr['message'] = $this->upload->display_errors();
      echo json_encode($arr);
      // return;
    } else {  
      $index_pic_url = $config['upload_path'].$this->upload->data('file_name');   //上传文件名称
    }
    //上传多张图片
    $multUploadResult = $this->upload->multiple('pics');
    if($multUploadResult['success']){
      $arr['success'] = false;
      $arr['message'] = $multUploadResult['error'];
      echo json_encode($arr);
      // return;
    }
    for($i=0;$i<count($multUploadResult['fileNames']);$i++){
      if($i==0){
        $pic_urls = $config['upload_path'].$multUploadResult['fileNames'][$i];
      }else{
        $pic_urls = $pic_urls.'#'.$config['upload_path'].$multUploadResult['fileNames'][$i];
      }
    }
    //数据插入数据库
    $requestData = array('brand'=>$_POST['brand'],'brand_detail'=>$_POST['brand_detail'],'license_date'=>$_POST['license_date'],
                        'mileage'=>$_POST['mileage'],'price'=>$_POST['price'],'new_price'=>$_POST['new_price'],
                        'gear'=>$_POST['gear'],'discharge'=>$_POST['discharge'],'displacement'=>$_POST['displacement'],
                        'license'=>$_POST['license'],'index_pic_url'=>$index_pic_url,'pic_urls'=>$pic_urls,
                        'video_url'=>$_POST['video'],'create_time'=>date("Y-m-d H:i:s"));
    $dbResult = $this->db_model->insertDetailCarInfo_BS($requestData);
    echo $dbResult;
    if($dbResult){
      $this->load->view('upload_result',array('success'=>true,'message'=>'提交成功'));
    }else{
      $this->load->view('upload_result',array('success'=>false,'message'=>'提交失败'));
    }
  }
  public function listCarInfo(){
    $requestData = array();
    $dbResult = $this->db_model->listAllCarInfo_BS($requestData);
    $count = count($dbResult);
    if($count == 0){
      $this->load->view('upload_result',array('success'=>true,'message'=>'查询失败'));
    }else{
      $this->load->view('list_car_info',array('success'=>true,'message'=>'提交成功','data'=>$dbResult));
    }
  }
  public function getCarInfoById(){
    $requestData = array('id'=>$_GET['id']);
    $dbResult = $this->db_model->getCarInfoById_BS($requestData);
    $count = count($dbResult);

    if($count == 0){
      $this->load->view('alter_car_info',array('success'=>true,'message'=>'查询失败'));
    }else{
      $this->load->view('alter_car_info',array('success'=>true,'message'=>'提交成功','data'=>$dbResult));
    }
  }
  public function alterCarInfo(){
  }
}
