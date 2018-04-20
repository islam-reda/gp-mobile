
<?php

include './db_connection.php';
include './db.php';
// error_reporting(E_WARNING);
class login extends connection {
  function login(){
    parent::__construct();
    $data = file_get_contents('php://input');
    $data = json_decode($data);
    $password = $data->password;
    $username = $data->username;
    $db = new DB();
    $returnarray = array();
    if($username && $password){
      try{
        $is_exist = $db->Login('customers',$this->conn,$username,$password);
        if(!$is_exist){ #failed if false
          $message = '';
          $returnarray = array(
            'success' => false,
            'message' => 'invalid username or password',
          );
        }else{ #success
    		if($is_exist['jwt']){
    			$Ctoken = $db->EncrypttionAlogo($is_exist['jwt']);
    		}
        $returnarray = array(
            'success' => true,
            'message' => 'You can login now',
            'status' => ($is_exist['status']) ? true : false,
			      'token' => ($is_exist['jwt']) ? $Ctoken : false,
          );
        }
      }catch(Exception $e){
        $returnarray = array(
          'success' => false,
          'message' => 'There is an error occur',
        );
      }
    }else{
      $returnarray = array(
        'success' => false,
        'message' => 'username and password required',
      );
    }
    echo json_encode($returnarray);
  }
  
  
  function register(){
    parent::__construct();
    $data = file_get_contents('php://input');
    $data = json_decode($data);
    $db = new DB();
    $returnarray = array();
    if($data->username && $data->password && $data->name){
      try{
        $is_added = $db->add('customers',$data,$this->conn);
        if($is_added){
          $is_exist = $db->Login('customers',$this->conn,$data->username,$data->password);
          if(!$is_exist){ #failed if false
            $message = '';
            $returnarray = array(
              'success' => false,
              'message' => 'invalid operation',
            );
          }else{ #success
            $token = $is_exist['id'].$is_exist['phone'].'Fych4rcbMtC|dejv!f]LxYeY$2weY5#-';
            $token = md5($token);
            $token = $db->EncrypttionAlogo($token);
            $data  = array(
              'status' => 1,
              'jwt' => $token,
            );
            $db->update('customers',$data,'id',$is_exist['id'],$this->conn);
            $Ctoken = $db->EncrypttionAlogo($token);
            $returnarray = array(
              'success' => true,
              'message' => 'regiserd success',
              'user' => $is_exist,
              );
            }
        }else{
          $returnarray = array(
              'success' => false,
              'message' => 'data is dosen`t added',
          );
        }
      }catch(Exception $e){
        $returnarray = array(
          'success' => false,
          'message' => 'There is an error occur',
        );
      }
    }else{
      $returnarray = array(
        'success' => false,
        'message' => 'data is required',
      );
    }
    echo json_encode($returnarray);
  }
  function verfyuser(){
    parent::__construct();
    $data = file_get_contents('php://input');
    $data = json_decode($data);
    $token = $data->token;
    $db = new DB();

	$token = $db->EncrypttionAlogo($token,'d');
    $returnarray = array();
    if($token){
      try{
        $is_exist = $db->checkFieldExistance('customers',$this->conn,'jwt',$token);
        if(!$is_exist){ #failed if false
          $message = '';
          $returnarray = array(
            'success' => false,
            'status' => false,
          );
        }else{ #success
      		  $returnarray = array(
      			'success' => true,
      			'status' => ($is_exist['status']) ? true: false,
      		  );
        }
      }catch(Exception $e){
        $returnarray = array(
          'success' => false,
          'message' => 'There is an error occur',
        );
      }
    }else{
      $returnarray = array(
        'success' => false,
        'message' => 'Code is required',
      );
    }
    echo json_encode($returnarray);
  }
  function getuser(){
    parent::__construct();
    $data = file_get_contents('php://input');
    $data = json_decode($data);
    $token = $data->token;
    $db = new DB();
	  $token = $db->EncrypttionAlogo($token,'d');
    $returnarray = array();
    if($token){
      try{
        $is_exist = $db->checkFieldExistance('customers',$this->conn,'jwt',$token);
        if(!$is_exist){ #failed if false
          $message = '';
          $returnarray = array(
            'success' => false,
            'status' => false,
          );
        }else{ #success
      		  $returnarray = array(
      			'success' => true,
      			'phone' => $is_exist,
      		  );
        }
      }catch(Exception $e){
        $returnarray = array(
          'success' => false,
          'message' => 'There is an error occur',
        );
      }
    }else{
      $returnarray = array(
        'success' => false,
        'message' => 'Code is required',
      );
    }
    echo json_encode($returnarray);
  }
}
if($_GET["function"] == "login"){
	$login = new login();
	$login->isPhoneExist();
}
if($_GET["function"] == "verfyuser"){
	$login = new login();
	$login->login();
}
if($_GET["function"] == "getuser"){
	$login = new login();
	$login->getuser();
}
if($_GET["function"] == "register"){
  $login = new login();
  $login->register();
}



