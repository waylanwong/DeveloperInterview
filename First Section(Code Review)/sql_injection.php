<?php
	//Option 1
	function createUser_1($link){
		$sql = 'INSERT INTO User(name) VALUE(' . $POST['name'] . ')';
		mysql_query($sql, $link);
	}
	
	//option 2 (PreparedStatement)
	function createUser_1($pdo){
		$preparedStatement = $pdo->prepare('INSERT INTO User(name) VALUE(:name)');
		$preparedStatement->execute(array(':name' => $POST['name']));
	}
?>