<?php
include "../api/modules/baseproduct.php";

class Furniture extends BaseProduct
{
    private $dimensions;

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
        } else if ($this->dimensions == null) {
            echo "dimensions cannot be empty";
            return 0;
        } else {
            $sql = "INSERT INTO `product_list`(`sku`, `name`, `price`, `dimensions`) VALUES ($this->sku, $this->productname, $this->price , $this->dimensions);";
            $this->dbconnection->query($sql);
        }
    }

    public function setDimensions($dimensions)
    {
        if ($dimensions == null) {
            die("dimensions of a product cannot be empty");
        } else {
            $this->dimensions = "'$dimensions'";
        }
    }

    public function getDimensions()
    {
        return $this->dimensions;
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
