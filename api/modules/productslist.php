<?php
include "../api/config/database.php";

class ProductsList extends DataBase
{
    public function showAllItems()
    {
        $jsondata = [];
        $result = $this->dbconnection->query("SELECT * FROM `product_list`;");
        while ($row = $result->fetch_assoc()) {
			$jsondata[] = $row;
		}
        return json_encode($jsondata);
    }

    public function __construct()
    {
        parent::__construct();
    }

    public function __destruct()
    {
        parent::__destruct();
    }
}
