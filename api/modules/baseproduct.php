<?php
include "../api/config/database.php";

abstract class BaseProduct extends DataBase
{
    protected $sku;
    protected $productname;
    protected $price;
    protected $dbconnection;

    abstract public function mysqlQuery();

    public function setSku($sku)
    {
        if ($sku == null) {
            die("SKU of a product cannot be empty");
        } else {
            $this->sku = "'$sku'";
        }
    }

    public function getSku()
    {
        return $this->sku;
    }

    public function setName($productname)
    {
        if ($productname == null) {
            die("product name cannot be empty");
        } else {
            $this->productname = "'$productname'";
        }
    }

    public function getName()
    {
        return $this->productname;   
    }

    public function setPrice($price)
    {
        if ($price == null) {
            die("price of a product cannot be empty");
        } else {
            $this->price = "'$price'";
        }
    }

    public function getPrice()
    {
        return $this->price;
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
