<?php
include "../api/modules/baseproduct.php";

class DVD extends BaseProduct
{
    private $size;

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
        } else if ($this->size == null) {
            echo "size cannot be empty";
            return 0;
        } else {
            $sql = "INSERT INTO `product_list`(`sku`, `name`, `price`, `size`) VALUES ($this->sku, $this->productname, $this->price , $this->size);";
            $this->dbconnection->query($sql);
        }
    }

    public function setSize($size)
    {
        if ($size == null) {
            die("size of a product cannot be empty");
        } else {
            $this->size = "'$size'";
        }
    }

    public function getSize()
    {
        return $this->size;
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
