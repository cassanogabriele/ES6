<?php
// On inclut le fichier de connection à la base de données
include_once('db/connection.php');
$object = new Connection();
$connection = $object->Connect();
?>

<!-- Page du panier -->
<!DOCTYPE html>
	<html lang="fr">
		<head>
			<meta charset="utf-8"> 			
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<meta http-equiv="X-UA-Compatible" content="IE=edge">
			<title>Book Store</title>	
			<link rel="shortcut icon" type="image/jpg" href="img/book.jpg"/>
			<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
			<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css" rel="stylesheet">
			<link rel="stylesheet" href="css/style.css">
			<link rel="stylesheet" href="css/carousel.css">
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css">
			<script src="https://kit.fontawesome.com/a076d05399.js"></script>			
		</head>			
		
		<body onload="render()">	
			<!-- En-tête du site -->
			<header >
				<nav class="navbar navbar-expand-md navbar-dark fixed-top bg-success text-white">
					<a class="text-white navbar-brand" href="#">
						<i class="fa fa-book" aria-hidden="true" style="color:#ffc107 !important;"></i> <span id="title-site">&nbsp; Book Store</span>
					</a>
					
					<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>
					
					<div class="collapse navbar-collapse" id="navbarCollapse">
						<ul class="navbar-nav mr-auto menu">
							<li class="nav-item active">
								<a class="nav-link" href="http://bookstore.gabriel-cassano.be">Accueil</a>								
							</li>								
						</ul>
						
						<form class="form-inline mt-2 mt-md-0">
							<a class="text-white nav-link" href="cart.php">
								<i class="text-warning fas fa-shopping-cart"></i> Panier <i style="color:yellow;" id="cart_n"></i>
							</a>													
						</form>
					</div>					
				</nav>			
			</header>		
						
			<!-- Tableau affichant les informations des articles ajoutés dans le panier. -->
			<div class="container mt-3">
				<main role="main">
					<div class="row">
						<div class="col">
							<div class="table-responsive-sm">
								<table class="table">
									<thead>
										<tr>
											<th scope="col">#</th>
											<th scope="col">Article</th>
											<th scope="col">Description</th>
											<th scope="col">Quantité</th>
											<th scope="col">Prix</th>
										</tr>
									</thead>
									
									<tbody id="table">
										
									</tbody>
								</table>
							</div>
						</div>
					</div>
					<hr class="featurette-divider">
				</main>
			</div>			
			
			<!-- Pied de page de la page du panier -->
			<div class="container">					
				<footer class="container">
					<!-- Bouton permettant de retourner en haut du site -->
					<p class="float-right">
						<a href="#"><img src="img/back-to-top.png" alt="back to top" id="back-to-top"></a>
					</p>
						
					<div class="row">
					Tous droits réservés &copy; <a href="https://gabriel-cassano.be/">Gabriele Cassano</a>
					</div>
				</footer>				
			</div>

			<!-- Inclusion des librairies utilisées -->
			<script
			  src="https://code.jquery.com/jquery-3.4.1.js"
			  integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU="
			  crossorigin="anonymous"></script>
			<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
			<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
			<script src="https://cdn.jsdelivr.net/npm/sweetalert2@9.8.2/dist/sweetalert2.all.min.js"></script>				
			<!-- Script permettant d'afficher les inforamtions du panier dans le tableau HTML de la page Panier -->
			<script src="./js/cart.js"></script>			
			<script src="./js/wow.js"></script>				
		</body>
	</html>