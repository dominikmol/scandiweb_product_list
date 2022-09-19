<?php
abstract class Database
{
    private $servername;
    private $username;
    private $password;
    private $dbname;

    protected $connection;

    abstract protected function mysqlQuery();

    public function connect()
    {
        $this->connection = new mysqli($this->servername, $this->username, $this->password, $this->dbname);
        
        if ($this->connection->connect_error) {
            die("Connection failed: " . $this->connection->connect_error);
		}
    }

    public function disconnect()
    {
        $this->connection->close();
    }

    public function __construct($servername = "localhost", $username = "id19568498_dbadmin", $password = "6>Z}&vH2wX\=jhmC", $dbname = "id19568498_products")
    {
        $this->servername = $servername; //"localhost";
        $this->username = $username; //"id19568498_dbadmin";
        $this->password = $password; //"2wsxCDE#21"; "6>Z}&vH2wX\=jhmC"
        $this->dbname = $dbname; //"id19568498_products"; 
    }

    public function __destruct()
    {
        if (mysqli_ping($this->connection)) {
            $this->connection->close();
        }
    }
}
