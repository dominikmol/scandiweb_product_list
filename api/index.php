<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

$method = $_SERVER["REQUEST_METHOD"];

switch($method) {
	case "GET":
		include "./productlist.php";

		$db = new ProductList();
		$db->connect();
		$result = $db->mysqlQuery();
		echo json_encode($result);
		break;
	case "POST":
		$data = json_decode(file_get_contents("php://input"));
		
		switch($data->action) {
			case "delete":
				include "./delteitems.php";
				$db = new DeleteItems();
				$db->connect();
				if ($data->sku == NULL) {
					exit();
				}
				$db->mysqlQuery($data->sku);
				break;
			case "add":
				include "./additem.php";
				$db = new AddItems();
				$db->connect();
				$dimensions = "NULL";
				if ($data->height != null && $data->width != null && $data->length != null) {
					$dimensions = "'".$data->height."x".$data->width."x".$data->length."'";
				}
				$db->mysqlQuery($data->sku, $data->name, $data->price, $data->size, $data->weight, $dimensions);
				break;
			default:
				break;
		}
		break;
}