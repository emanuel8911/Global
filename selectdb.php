<html>
<head>
<title> bla bal</title>
</head>

<body>
		
		<?php
			$conexiune=mysql_pconnect("localhost", "root", ""); // ne conectam la serverul specifica intre paranteze cu user si parola specificate
			mysql_select_db("prima_baza", $conexiune); // se seleceaza baza de date
			$cerere="SELECT * from personaje"; // se pregateste cererea. In variabila cerere se salveaza codul SQL pentru a selecta elementele din tabel
			$raspuns=mysql_query($cerere);//se executa cererea
			
			while ($arrayul=mysql_fetch_array($raspuns))//se extrag liniile din raspuns pana cand nu mai sunt linii
			{
				echo $arrayul["nume"] . " are puterile <b>" . $arrayul["puteri"] . "</b> si are <i>". $arrayul["varsta"] . "</i> ani.<br>";//este afisata o linie de rezultat
			}
		?>

</body>
</html>