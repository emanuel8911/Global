<?php
	$conexiune=mysql_pconnect("localhost", "root", "");// ma conectez la baza de date
	mysql_select_db("prima_baza", $conexiune); //se selecteaza baaza de date
			
		$cerere="INSERT INTO personaje values ('$_POST[Nume]', '$_POST[Puteri]','$_POST[Varsta]')";
		//creez o variabila cu numele cererea in care imi introduc linia de cod SQL
		//NUmele campurilor ar trebui sa fie intre apostroafe
		
		mysql_query($cerere);
		echo "Datele au fost introduse. Numele este ".$_POST[Nume]." bznaba".$_POST[Puteri]; //este raportat succesul chiar daca nu am verificat ca cdatele au fost introduse in DB
		echo "<hr>";
		$asd=$_POST['Nume'];
		$query = " SELECT * FROM personaje WHERE nume='$asd'";
		$resultat=mysql_query($query);
		while ($arrayul=mysql_fetch_array($resultat))//se extrag liniile din raspuns pana cand nu mai sunt linii
			{
				echo $arrayul["nume"] . " are puterile <b>" . $arrayul["puteri"] . "</b> si are <i>". $arrayul["varsta"] . "</i> ani.<br>";//este afisata o linie de rezultat
			}
		
?>