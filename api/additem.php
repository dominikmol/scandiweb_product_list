<?php
include "./database.php";

class AddItems extends Database
{
    final public function mysqlQuery($sku = null, $name="", $price="", $size="", $weight="", $dimensions="")
    {
        
        $nullVal = "NULL";
        if ($size == null) {
            $size = $nullVal;
        } else {
            $size = "'$size'";
        }
        
        if ($weight == null) {
            $weight = $nullVal;
        } else {
            $weight = "'$weight'";
        }

        if ($dimensions == null) {
            $dimensions = $nullVal;
        } else {
            $dimensions = "'$dimensions'";
        }

        $sql = "INSERT INTO `product_list`(`sku`, `name`, `price`, `size`, `weight`, `dimensions`) VALUES ('$sku','$name','$price', $size, $weight, $dimensions);";
        $this->connection->query($sql);
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
