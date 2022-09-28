<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: GET");

function getProducts()
{
	include "./modules/productslist.php";
		
	$db = new ProductsList();
	$db->dbConnect();
	echo $db->showAllItems();
}

function delete($skulist)
{
	include "./modules/deleteproducts.php";

	$db = new DeleteProducts();
	$db->dbConnect();
	$db->setSkuList($skulist->sku);
	$db->deleteItems();
}

function addBook($productdata)
{
	include "./modules/book.php";

	$book = new Book();
	$book->dbConnect();
	$book->setSku($productdata->sku);
	$book->setName($productdata->name);
	$book->setPrice($productdata->price);
	$book->setWeight($productdata->weight);
	$book->mysqlQuery();
}

function addDVD($productdata)
{
	include "./modules/dvd.php";

	$dvd = new DVD();
	$dvd->dbConnect();
	$dvd->setSku($productdata->sku);
	$dvd->setName($productdata->name);
	$dvd->setPrice($productdata->price);
	$dvd->setSize($productdata->size);
	$dvd->mysqlQuery();
}

function addFurniture($productdata)
{
	include "./modules/furniture.php";

	$furniture = new Furniture();
	$furniture->dbConnect();
	$furniture->setSku($productdata->sku);
	$furniture->setName($productdata->name);
	$furniture->setPrice($productdata->price);
	$furniture->setDimensions($productdata->dimensions);
	$furniture->mysqlQuery();
}

if (isset($_GET['action'])) {
	try {
		call_user_func($_GET['action']);
	} catch (Exception $e) {
		echo 'Caught exception: ',  $e->getMessage(), "\n";
	}
} elseif (isset($_GET['data'])) {

	$data = json_decode($_GET['data']);
	$callfun = $data->action;
	if ($data->type != null) {
		$callfun .= $data->type;
	}
	try {
		call_user_func($callfun, $data);
	} catch (Exception $e) {
		echo 'Caught exception: ',  $e->getMessage(), "\n";
	}
}
