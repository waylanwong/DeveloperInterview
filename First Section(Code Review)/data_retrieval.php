<?php
	//Option 1
	function getUnreadedMessageNum_1($link, $userid){
		$sql = "SELECT * 
				FROM Message
				WHERE Message.readFlag = 0 AND Message.ownerid = $userid";
		$result = mysql_query($sql, $link);
		$num = 0;
		while($row = mysql_fetch_row($result)){
			$num++;
		}
		return $num;
	}
	
	//Option 2
	function getUnreadedMessageNum_2($link, $userid){
		$sql = "SELECT COUNT(Message.id)
				FROM Message
				WHERE Message.readFlag = 0 AND Message.ownerid = $userid";
		$result = mysql_query($sql, $link);
		$row = mysql_fetch_row($result);
		return $row[0];
	}
?>