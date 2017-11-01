"use strict";
function showDef(){
				var query = document.getElementById("queryTxtBox").value.toLowerCase();
				var xhttp = new XMLHttpRequest();



				
				var xmlhttp= new XMLHttpRequest();
				xmlhttp.onreadystatechange = function(){
					if (this.readyState==4 && this.status == 200){
						Search(this,Search,query)
							
						}
					}
				
			
			xmlhttp.open("GET", "request.php",true);
			xmlhttp.send();

		}
		function Search(xml,Search,query){
			var xmlDoc = xml.resonseXML;
			var x = xmlDoc.getElementsByTagName("definition")
			var def;

			if(Search){

				def = x[1].chiildNodes[0].nodeValue

				alert(def)
			}
		},;