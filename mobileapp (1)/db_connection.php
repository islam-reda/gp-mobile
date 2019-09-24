<?php
class connection {
  protected $dsn;

  protected $user;

  protected $password;
  protected $options;
  public $conn;
  function __construct(){
    $this->dsn = 'mysql:host=192.168.1.107:3306;dbname=crm_db';
    $this->user = 'user';
    $this->password = 'password';
    $this->options=array(
        PDO::MYSQL_ATTR_INIT_COMMAND=>'SET NAMES utf8 '
    );
    $this->connect();
  }
  function connect(){
    try {
      $conn = new PDO($this->dsn ,$this->user,$this->password,$this->options);
      $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
      $this->conn = $conn;
    } catch (Exception $ex) {
        echo "not connected".$ex->getMessage();
    }
  }
}
