$(document).ready(function(){
	// Tableau affichant les informations dans la page d'administration

	// Utilisation du plugin "DataTable" de jquery pour interagir facilement avec le tableau HTML (personnalisation du style, pagination, filtrage de données,s, tri sur une ou plusieurs colonnes)
	TableOrders = $("#tableOrders").DataTable({
		// Paramètre qui permet d'afficher les options spécifiques aux colonnes du tableau.
		"columnDefs":[{
			// Fournit les informations requises par DataTable pour quelles colonnes de la table dl'objet de définition de colonne doit être appliqué
			"targets":-1,
			// Afficher une châine vide lorsque la valeur d'un champs est null
			"data":null,
			// Définit un contenu statique dans une colonne (boutons).
			"defaultContent":"<div class='text-center'><div class='btn-group'><button class='btn btn-primary btnEdit'>Edit</button><button class='btn btn-danger btnDelete'>Delete</button></div></div>"			
		}]
	});
	
	// Définition du bouton permettant d'ajouter une nouvelle commande
	$("#newBtn").click(function(){
		// Déclenche l'événement "reset" pour le contenu dont l'id est "formOrders"
		$("#formOrders").trigger("reset");
		// On définit la couleur de fond de la fenêtre modale
		$(".modal-header").css("background-color", "#2EB26E");
		// On définit la couleur du texte de la fenêtre modale
		$(".modal-header").css("color","white");
		// On définit le texte du bouton 
		$(".modal-title").text("New Order");
		// On affiche la fenêtre modale 
		$("#modalCRUD").modal("show");		
		id=null;
		option=1;		
	});
	
	// On déclare le tableau des informations des commandes
	var rowtableorder;
	
	// On définit l'action réalisée par le bouton "Edit" du tableau d'administration
	$(document).on("click", ".btnEdit", function(){
		// On renvoie le permier ancêtre de l'élément sélectionné
		rowtableorder = $(this).closest("tr");
		// On sélectionne le premier élément de cellule
		id = parseInt(rowtableorder.find('td:eq(0)').text());
		// On sélectionne le deuxième élément de cellule
		order = rowtableorder.find('td:eq(1)').text();
		// On sélectionne le troisième élement de cellule
		total = rowtableorder.find('td:eq(2)').text();

		// On définit la valeur du champ "order "et la valeur du champ "total"
		$("#order").val(order);
		$("#total").val(total);		
		option = 2;
		// On définit la couleur de texte et la couleur de fond de la fenêtre modale
		$(".modal-header").css("background-color", "#007bff");
		$(".modal-header").css("color", "white");
		// On définit le texte du bouton
		$(".modal-title").text("Edit Order");
		// On affiche la fenêtre modale
		$("#modalCRUD").modal("show");		
	});
	
	// On définit l'action réalisée par le bouton "Delete" du tableau d'administration
	$(document).on("click", ".btnDelete", function(){
		// On définit "rowtableorder" comme l'élément HTML courant
		rowtableorder = $(this);
		// On renvoie l'ancêtre de la colonne et on cherche le texte du premier élément de ligne de la colonne
		id = parseInt($(this).closest("tr").find('td:eq(0)').text());
		option = 3;
		
	//	TableOrders.row(rowtableorder.parents('tr')).remove().draw();
		
		// On fait un appel au fichier "crud.php" avec l'ajax en jQuery
		$.ajax({			
			// Chemin du fichier à charger (ressource ciblée)
			url:"../db/crud.php",
			// Type de la requête HTTP
			type: "POST",
			// Type de données 
			dataType: "json",
			// On fait passer les paramètres
			data: {option:option,id:id},			
			// Attache une fonction à exécuter chaque fois qu'une requête Ajax se termine avec succès (événement Ajax)
			success: function(data){			
				// On affiche un message 
				console.log(`success:$(data)`);
				// On supprime la colonne parente
				TableOrders.row(rowtableorder.parents('tr')).remove().draw();
			}, error(x,y,z){
				console.log('pas passé');
				// On affiche les valeurs d'erreur
				console.log(x);
				console.log(y);
				console.log(z);
			}
		});		
	});
	
	// On définit l'action à la soumission du formaulaire
	$("#formOrders").submit(function(e){
		// On empêche un lien d'ouvrir l'URL
		e.preventDefault();
		// On retirer les blancs en début et fin de chaîne
		order = $.trim($("#order").val());
		total = $.trim($("#total").val());
		// On fait un appel au fichier "crud.php" avec l'ajax en jQuery
		$.ajax({
			// Chemin du fichier à charger (ressource ciblée)
			url:"../db/crud.php",
			// Type de la requête HTTP
			type: "POST",
			// Type de données 
			dataType: "json",
			// On fait passer les paramètres
			data: {order:order,total:total,id:id,option:option},
			// Attache une fonction à exécuter chaque fois qu'une requête Ajax se termine avec succès (événement Ajax)
			success: function(data){
				// On affiche un message
				console.log(`success:$(data)`);
				// On définit la valeur de l'id
				id = data[0].id;
				
				if(option==1){
					TableOrders.row.add([id,order,total]).draw();
				} else{
					TableOrders.row(rowtableorder).data([id,order,total]).draw();
				}
			}, error(x,y,z){
				console.log('error scripting record');
				// On affiche les valeurs d'erreur
				/*console.log(x);
				console.log(y);
				console.log(z);*/
			}
		});	
		// On cache la fenêtre modale
		$("#modalCRUD").modal("hide");
	});		
}); // END DOCUMENT READY