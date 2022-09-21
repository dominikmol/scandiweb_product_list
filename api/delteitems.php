<?php
include "./database.php";

class DeleteItems extends Database
{
    final public function mysqlQuery($sku = null)
    {
        if ($sku == null) {
            exit();
        } else {
            $str = implode(", ", $sku);
            $str = str_replace("\"", "'", $str);
            $sql = "DELETE FROM `product_list` WHERE `sku` IN ($str);";
            $this->connection->query($sql);
        }   
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
