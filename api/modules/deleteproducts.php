<?php
include "../api/config/database.php";

class DeleteProducts extends DataBase
{
    private $skulist;

    public function deleteItems()
    {
        if ($this->skulist == null) {
            echo "there needs to be at least one SKU of product in the list";
            return 0;
        } else {
            $str = implode(", ", $this->skulist);
            $str = str_replace("\"", "'", $str);
            $sql = "DELETE FROM `product_list` WHERE `sku` IN ($str);";
            $this->dbconnection->query($sql);
        }
    }

    public function setSkuList($skulist)
    {
        if ($skulist == null) {
            echo "there needs to be at least one SKU of product in the list";
            return 0;
        } else {
            $this->skulist = $skulist;
        }
    }
    
    public function getSkuList()
    {
        return $this->skulist;
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