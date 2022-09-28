<?php
class DataBase
{
    private $servername;
    private $username;
    private $password;
    private $dbname;

    public function dbConnect()
    {
        $this->dbconnection = new mysqli($this->servername, $this->username, $this->password, $this->dbname);
        
        if ($this->dbconnection->connect_error) {
            die("Connection failed: " . $this->dbconnection->connect_error);
		}
    }

    public function setServerName($servername)
    {
        if ($servername == null) {
            die("servername for the database cannot be empty");
        } else {
            $this->servername = $servername;
        }
    }

    public function getServerName()
    {
        return $this->servername;
    }

    public function setUsername($username)
    {
        if ($username == null) {
            die("username for the database cannot be empty");
        } else {
            $this->username = $username;
        }
    }

    public function getUsername()
    {
        return $this->username;
    }

    public function setPassword($password)
    {
        if ($password == null) {
            die("password for the database cannot be empty");
        } else {
            $this->password = $password;
        }
    }

    public function getPassword()
    {
        return $this->password;
    }

    public function setDbname($dbname)
    {
        if ($dbname == null) {
            die("name of the database cannot be empty");
        } else {
            $this->dbname = $dbname;
        }
    }

    public function getDbname()
    {
        return $this->dbname;
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
        if (mysqli_ping($this->dbconnection)) {
            $this->dbconnection->close();
        }
    }
}
