<?php
include_once 'connection.php';
$object = new Connection();
$connection = $object->Connect();

$order = (isset($_POST['order'])) ? $_POST['order']: '';
$total = (isset($_POST['total'])) ? $_POST['total']: '';
$option = (isset($_POST['option'])) ? $_POST['option']: '';
$id = (isset($_POST['id'])) ? $_POST['id']: '';

switch($option){
	case 1:
		$query = "INSERT INTO product_order(product_order, total) VALUES('$order', '$total')";
		$res = $connection->prepare($query);
		$res->execute();
			
		$query = "SELECT id,product_order,total FROM product_order ORDER BY id DESC LIMIT 1";
		$res = $connection->prepare($query);
		$res->execute();	
		$data = $res->fetchAll(PDO::FETCH_ASSOC);
		break;
	case 2:
		$query = "UPDATE product_order SET product_order='$order', total='$total' WHERE id='$id'"; 
		$res = $connection->prepare($query);
		$res->execute();
		
		$query = "SELECT id,product_order,total FROM product_order WHERE id='$id'";
		$res = $connection->prepare($query);
		$res->execute();
		$data = $res->fetchAll(PDO::FETCH_ASSOC);
		break;
	case 3:
		$query = "SELECT id,product_order,total FROM product_order WHERE id='$id'";
		$res = $connection->prepare($query);
		$res->execute();
		$data = $res->fetchAll(PDO::FETCH_ASSOC);
		
		$query = "DELETE FROM product_order WHERE id='$id'"; 
		$res = $connection->prepare($query);
		$res->execute();
		break;
	default:
		break;
}

print json_encode($data, JSON_UNESCAPED_UNICODE);
$connection = null;
?>