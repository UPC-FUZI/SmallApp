<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Saler extends CI_Controller {
  public function submitCarInfo(){
          $this->json([
              'code' => -1,
              'error' => "success",
              'userName'=>$_POST['userName']
          ]);
  }
}
