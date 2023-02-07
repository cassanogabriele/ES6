// Déclaration de variables globales

// On analyse, avec la méthode JSON.parse, une chaîne de caractère JSON et on construit la valeur JavaScript 
// ou l'objet décrit par cette chaîne.
var products = JSON.parse(localStorage.getItem('cart'));
// On déclare un tableau contenant les éléments du panier
var cartItems = [];
// On récupère l'id de l'élémnet permettant d'afficher le panier.
var cart_n = document.getElementById("cart_n");
// On récupére l'id de la table des informations du panier.
var table = document.getElementById("table");
// On affecte la valeur 0 pour le total de départ
var total = 0;
// Ici, on ne met qu'un article à la fois dans le panier, donc la quantité est toujours égale à 1
var qty_article_on_cart = 1;

console.log(products);

// Tableau qui affiche les informations d'achats dans le panier
function tableHTML(i){
	return `
		<tr>
			<th scope="row">${i+1}</th>
			<td><img style="width:90px;" src="${products[i].url}"></td>
			<td>${products[i].name}</td>
			<td>${qty_article_on_cart}</td>
			<td>${products[i].price}€</td>
		</tr>
	`;
}

// Fonction qui permet d'effacer les éléments contenus dans le panier
function clean(){
	// On supprime toutes les entrées du "Storage".
	localStorage.clear();
	
	// Boucle qui pour chaque index jusqu'à ce que l'index est plus petit que la taille du tableau "products", modifier le contenu du tableau qui affiche les informations du panier,  
	// on ajoute l'index, on définit le prix comme étant le prix de départ (0) auquel on ajouter le prix de l'index du tableau "products".
	for(let index = 0; index < products.length; index++){
		table.innerHTML+=tableHTML(index);
		total = total+parseInt(products[index].price);
	}
	
	// On met le total à 0
	total = 0;
	
	// On ajoute des cellules et colonnes vides à la table qui affiche les informations du panier
	table.innerHTML = `
		<tr>
			<th></th>
			<th></th>
			<th></th>
			<th></th>
			<th></th>
		</tr>				
	`;		
	
	// On efface les boutons du panier
	cart_n.innerHTML = '';
	document.getElementById("btnBuy").style.display = "none;"
	document.getElementById("btnClear").style.display = "none;"
}

// Fonction qui est exécutée dans la page "cart.php"
function render(){
	for(let index = 0; index < products.length; index++){
		table.innerHTML+= tableHTML(index);
		total = total+parseInt(products[index].price);
	}
	
	// On affiche le produit et le total dans la consolle
	console.log(products);
	console.log(total);
		
	// On ajoute des colonnes vides au tableau qui affiche les informations du panier, le total en €, le bouton qui permet de vider le panier et le bouton qui permet d'acheter.
	table.innerHTML+=`
		<tr>
			<th scope="col"></th>
			<th scope="col"></th>
			<th scope="col"></th>
			<th scope="col"></th>
			<th scope="col">Total: ${total}€</th>		
		</tr>
		<tr>
			<th scope="col"></th>
			<th scope="col"></th>
			<th scope="col"></th>
			<th scope="col">
				<button id="btnClean" onclick="clean()" class="btn text-white btn-warning">
					Supprimer les articles
				</button>
			</th>	
			<th scope="col">
				<form id="formAdd">
					<button type="submit" id="btnBuy" class="btn btn-success">Acheter</button>
				</form>
			</th>
		</tr>
	`;
	
	// localStorage stocke les paires clés-valeurs
	products = JSON.parse(localStorage.getItem("cart"));
	cart_n.innerHTML = `[${products.length}]`;
}

$(document).ready(function(){
	$("#formAdd").submit(function(e){		
		e.preventDefault();
		var option = 1;
		post = $.trim(option);
		$.ajax({
			url:"./db/crud.php",	
			type: "POST",				
			dataType: "json",
			data: {order:total*total*23,total:total,option:post},
			success: function(data){
				console.log(`success:$(data)`);
			}, 
			error: function (e) {
                console.log(response);
            }
		});		
	
		Swal.fire({		
			position: 'center',
			type: 'success',
			title: 'Purchase made successfully',
			text: `Your purchase order is : ${total*total*23}`,
			showConfirmButton: true,
			timer: 5000		
		});
	
		clean();
	});
});