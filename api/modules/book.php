<?php
include "../api/modules/baseproduct.php";

class Book extends BaseProduct
{
    private $weight;

    final public function mysqlQuery()
    {
        if ($this->sku == null) {
            echo "sku cannot be empty";
            return 0;
        } else if ($this->productname == null) {
            echo "product name cannot be empty";
            return 0;
        } else if ($this->price == null) {
            echo "price cannot be empty";
            return 0;
        } else if ($this->weight == null) {
            echo "weight cannot be empty";
            return 0;
        } else {
            $sql = "INSERT INTO `product_list`(`sku`, `name`, `price`, `weight`) VALUES ($this->sku, $this->productname, $this->price , $this->weight);";
            $this->dbconnection->query($sql);
        }
    }

    public function setWeight($weight)
    {
        if ($weight == null) {
            die("weight of a product cannot be empty");
        } else {
            $this->weight = "'$weight'";
        }
    }

    public function getWeight()
    {
        return $this->weight;
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
