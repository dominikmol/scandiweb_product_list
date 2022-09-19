<?php
include "./database.php";

class ProductList extends Database
{
    final public function mysqlQuery()
    {
        $json_data = [];
        $result = $this->connection->query("SELECT * FROM `product_list`;");
        while ($row = $result->fetch_assoc()) {
			$json_data[] = $row;
		}
        return $json_data;
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
