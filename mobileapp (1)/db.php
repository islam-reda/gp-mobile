<?php
error_reporting(E_ALL ^ E_WARNING); 
class DB{
	  protected $secretHash;
	  protected $encryptionMethod;
	  const METHOD = 'aes-256-ctr';
	  function __construct(){
		$this->secretHash = 'djvb151f2nbcffcd13bdjaveu';
		$this->encryptionMethod = 'AES-256-CBC';
	  }
    public function getAllData($table,$conn){
        $stmt = $conn->prepare("SELECT * FROM ".$table."");
        $stmt->execute();
        $row = $stmt->fetchAll();
        return  $row;
    }
    public function getAllDatawithCondition($table,$conn,$field,$value){
        $stmt = $conn->prepare("SELECT * FROM ".$table." WHERE ".$field." = '".$value."'");
        $stmt->execute();

        $row = $stmt->fetchAll();
        return  $row;
    }
	public function encryptToken($textToEncrypt){
		$iv_size = mcrypt_get_iv_size(MCRYPT_RIJNDAEL_128, MCRYPT_MODE_CBC);
		$iv = mcrypt_create_iv($iv_size, MCRYPT_RAND);
		//To encrypt
		$encryptedMessage = openssl_encrypt($textToEncrypt, $this->encryptionMethod, $this->secretHash, 0, $iv);
	
		return $encryptedMessage;
	}
	 public static function encrypt($message, $key, $encode = false)
    {
        $nonceSize = openssl_cipher_iv_length(self::METHOD);
        $nonce = openssl_random_pseudo_bytes($nonceSize);

        $ciphertext = openssl_encrypt(
            $message,
            self::METHOD,
            $key,
            OPENSSL_RAW_DATA,
            $nonce
        );

        // Now let's pack the IV and the ciphertext together
        // Naively, we can just concatenate
        if ($encode) {
            return base64_encode($nonce.$ciphertext);
        }
        return $nonce.$ciphertext;
    }

    /**
     * Decrypts (but does not verify) a message
     * 
     * @param string $message - ciphertext message
     * @param string $key - encryption key (raw binary expected)
     * @param boolean $encoded - are we expecting an encoded string?
     * @return string
     */
    public static function decrypt($message, $key, $encoded = false)
    {
        if ($encoded) {
            $message = base64_decode($message, true);
            if ($message === false) {
                throw new Exception('Encryption failure');
            }
        }

        $nonceSize = openssl_cipher_iv_length(self::METHOD);
        $nonce = mb_substr($message, 0, $nonceSize, '8bit');
        $ciphertext = mb_substr($message, $nonceSize, null, '8bit');

        $plaintext = openssl_decrypt(
            $ciphertext,
            self::METHOD,
            $key,
            OPENSSL_RAW_DATA,
            $nonce
        );

        return $plaintext;
    }
	function EncrypttionAlogo( $string, $action = 'e' ) {
		// you may change these values to your own
		$secret_key = 'M-SV42`Q9K`0a,&hRm2dRXq?.fQd`|';
		$secret_iv = './}zs70AsLBsz%t';
	 
		$output = false;
		$encrypt_method = "AES-256-CBC";
		$key = hash( 'sha256', $secret_key );
		$iv = substr( hash( 'sha256', $secret_iv ), 0, 16 );
	 
		if( $action == 'e' ) {
			$output = base64_encode( openssl_encrypt( $string, $encrypt_method, $key, 0, $iv ) );
		}
		else if( $action == 'd' ){
		
			$output = openssl_decrypt( base64_decode( $string ), $encrypt_method, $key, 0, $iv );
		}
	 
		return $output;
	}
	public function decryptToken($textToDecrypt){
		$iv_size = mcrypt_get_iv_size(MCRYPT_RIJNDAEL_128, MCRYPT_MODE_CBC);
		$iv = mcrypt_create_iv($iv_size, MCRYPT_RAND);
		$decryptedMessage = openssl_decrypt($textToDecrypt, $this->encryptionMethod, $this->secretHash, 0, $iv);
		return $decryptedMessage;
	}
    public function Login($table,$conn,$email,$password){
        $password = sha1($password);
        $stmt = $conn->prepare("SELECT * FROM ".$table." WHERE username = '".$email."' AND  password = '".$password."'");
        $stmt->execute();
        $row = $stmt->fetch();
        if($row){
            return $row;
        }
        return false;
    }
    public function checkFieldExistance($table,$conn,$field,$value){
        $stmt = $conn->prepare("SELECT * FROM ".$table." WHERE ".$field." = '".$value."'");

        $stmt->execute();
        $row = $stmt->fetch();

        if($row){
            return $row;
        }
        return false;
    }
//    public function checkFieldExistance($table,$conn,$field,$value){
//        $alldata = $this->getAllData($table, $conn);
//        foreach($alldata as $data){
//            if($data[$field] == $value){
//                return false;
//            }
//        }
//        return true;
//    }
    public function add($table,$data,$conn){
      try{
        $q = "INSERT INTO ".$table."";
        $q .= "(";

        foreach ($data as $key => $ff){
            $q .= $key.",";
        }
        $q = rtrim($q,",");
        $q .= ") VALUES (";
        foreach ($data as $key => $value){
            if(is_string($value)){
                $q .= '"'.$value.'"'.",";
            }else{
                $q .= $value.",";
            }
        }
        $q = rtrim($q,"',");
        $q .= ")";
        $conn->exec($q);
        return true;
      }catch(Exception $e){
        return false;
      }
    }
    public function update($table,$data,$field,$valuecondition,$conn){
        $q = "UPDATE ".$table." SET ";

        foreach ($data as $key => $val){
            $value = "";
            if(is_string($val)){
                $value .= "'".$val."'";
            }else{
                $value .= $val;
            }
            $q .= $key.' = '.$value.',';
        }
        $q = rtrim($q,",");
        $q .= " WHERE ".$field.' = '.$valuecondition;
        //$this->pprint($q);
        $conn->exec($q);
    }
    public function pprint($obj){
        ?><pre> <?php
         var_dump($obj);
        ?></pre><?php
    }
}
