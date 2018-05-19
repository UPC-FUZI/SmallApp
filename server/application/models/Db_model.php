<?php
class Db_model extends CI_Model {  
  //row_array()和row(),result_array()和result()分别返回数组和对象
  public function __construct()  
  {  
    //连接数据库  
    $this->load->database();  
  }  
  
  public function get(){  
     //查询数据库  
     $query=$this->db->get('users');  
     //以数组形式返回查询结果  
     return $query->result_array();  
  }  
//---------卖车---------------
  //插入卖车信息
  public function insertSellerCarInfo($data){
    $this->db->insert('seller_car_info', $data);
    return $this->db->affected_rows() > 0 ? true : false;
  }
  //查询未处理的卖家卖车信息 is_contacted为0表示未处理
  public function listSellerCarInfo($data){
    $query = $this->db->get_where('seller_car_info', array('is_contacted' => 0));
    return $query->result_array();
  }
  //首页-最新上线
  public function listNewCarIfo($data){
    //$data = array('enabled'=>0);
    $this->db->select('id, index_pic_url, brand, brand_detail, license_date, mileage, price');
    $this->db->order_by('create_time','desc');
    $query = $this->db->get_where('car_info',$data,0,10);
    return $query->result_array();
  }
  //买车-最新上线
  public function listAllCarIfo($data){
    //$data = array('enabled'=>0);
    $this->db->select('id, index_pic_url, brand, brand_detail, license_date, mileage, price');
    $this->db->order_by('create_time','desc');
    $query = $this->db->get_where('car_info',$data);
    return $query->result_array();
  }
  //---------详情---------------
  public function getCarDetailInfo($data){
    //$data = array('id' => xx)
    $query = $this->db->get_where('car_info', $data);
    return $query->row_array();
  }
//--------------后台数据操作  (BS标注的均为后台管理系统方法)
  //提交车的详细信息
  public function insertDetailCarInfo_BS($data){
    $this->db->insert('car_info', $data);
    return $this->db->affected_rows() > 0 ? true : false;
  }
  //获取简要车辆信息
  public function listAllCarInfo_BS($data){
    //$data = array('enabled'=>0) $data中数据可选
    $this->db->select('id, create_time, brand_detail, license_date, mileage, price, enabled, sell_time');
    $query = $this->db->get_where('car_info',$data);
    return $query->result_array();
  }
  //通过id获取车辆详细信息
  public function getCarInfoById_BS($data){
    $query = $this->db->get_where('car_info', $data);
    return $query->row_array();
  }
} 