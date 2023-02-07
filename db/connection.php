<?php
class Connection{
	public static function Connect(){
		define('server', 'localhost');
		define('db_name', 'c0es6');
		define('user', 'c0es6user');
		define('password', 'ksddxG@FS5C6W');
		
		$options = array(
				PDO::MYSQL_ATTR_INIT_COMMAND
				=> 
				"SET NAMES utf8"
		);		
	
		try{
			$connection = new PDO("mysql:host=".server."; dbname=".db_name,user,password, $options);
			return $connection;			
		} catch(Exception $e){			
			die("Connection Error:". $e->getMessage());
		}
	}	
}
?>
