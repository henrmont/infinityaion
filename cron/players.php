<?php

class Players
{
    private $player_id;
    private $player_name;
    private $user_id;
    private $user_name;
    private $dblocal = "localhost";
    private $dbuser = "aionsys";
    private $dbpass = "1nf1A10nS3rVr";
    // private $dbuser = "devsms";
    // private $dbpass = "s3cr3t05";
    private $dbname = "al_server_gs";
    private $dbinfinity = "infinityaion";

    public function setPlayerId($id){
        $this->player_id = $id;
    }

    public function setPlayerName($name){
        $this->player_name = $name;
    }

    public function setUserId($id){
        $this->user_id = $id;
    }

    public function setUserName($name){
        $this->user_name = $name;
    }

    private function insertPlayer(){
        $mysqli = new mysqli($this->dblocal,$this->dbuser,$this->dbpass,$this->dbinfinity);

        $query = "
            INSERT INTO Player
            VALUES ('',$this->player_id,'$this->player_name',$this->user_id,'$this->user_name',localtime(),localtime())
        ";
        $result = $mysqli->query($query);

        $mysqli->close();
    }

    public function getAllPlayers(){
        $mysqli = new mysqli($this->dblocal,$this->dbuser,$this->dbpass,$this->dbname);

        $query = "SELECT players.id, players.name, players.account_id, players.account_name FROM players";
        $result = $mysqli->query($query);

        $res = $result->fetch_all();

        $mysqli->close();

        return $res;
    }

    public function checkPlayer($name){
        $mysqli = new mysqli($this->dblocal,$this->dbuser,$this->dbpass,$this->dbinfinity);

        $query = "
            SELECT Player.player_id, Player.player_name, Player.user_id, Player.user_name 
            FROM Player
            WHERE Player.player_name = '".$name."' 
        ";

        $result = $mysqli->query($query);

        if(($result->num_rows)==0){
            $this->insertPlayer();
        }

        $mysqli->close();
    }
}

$players = new Players();
$player = $players->getAllPlayers();

foreach($player as $vlr){
    $players->setPlayerId($vlr[0]);
    $players->setPlayerName($vlr[1]);
    $players->setUserId($vlr[2]);
    $players->setUserName($vlr[3]);

    $players->checkPlayer($vlr[1]);
}