<?php

class Membership
{
    private $user_id;
    private $dblocal = "localhost";
    private $dbuser = "aionsys";
    private $dbpass = "1nf1A10nS3rVr";
    // private $dbuser = "devsms";
    // private $dbpass = "s3cr3t05";
    private $dbname = "al_server_ls";

    public function setUserId($id){
        $this->user_id = $id;
    }

    public function getMembershipAll(){
        $mysqli = new mysqli($this->dblocal,$this->dbuser,$this->dbpass,$this->dbname);

        $query = "
            SELECT account_data.id, account_data.name, account_data.membership, account_data.expire 
            FROM account_data
            WHERE account_data.membership = 2
        ";
        $result = $mysqli->query($query);

        $res = $result->fetch_all();

        $mysqli->close();

        return $res;
    }

    public function updateMembership(){
        $mysqli = new mysqli($this->dblocal,$this->dbuser,$this->dbpass,$this->dbname);

        $query = "
            UPDATE account_data 
            SET account_data.membership = 0, account_data.expire = null
            WHERE account_data.id = ".$this->user_id."
        ";

        $result = $mysqli->query($query);

        $mysqli->close();
    }
}

$user = new Membership();
$users = $user->getMembershipAll();

foreach($users as $vlr){
    $date = strtotime(date('Y-m-d H:i:s'));
    $expire = strtotime($vlr[3]);
    if(($expire-$date)<0){
        $user->setUserId($vlr[0]);
        $user->updateMembership();
    }
}