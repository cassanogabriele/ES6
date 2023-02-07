<?php
include_once '../db/connection.php';
$object = new Connection();
$connection = $object->Connect();

$query = "SELECT * FROM product_order";
$result = $connection->prepare($query);
$result->execute();
$data = $result->fetchAll(PDO::FETCH_ASSOC);

$id = $_POST['id'];
echo "<p style='margin-top:150px;'>id : "; var_dump($id); echo "</p>";
?>
<!DOCTYPE html>
	<html lang="fr">
		<head>
			<meta charset="utf-8"> 			
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<meta http-equiv="X-UA-Compatible" content="IE=edge">
			<title>Organic Store</title>			
			<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
			<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css" rel="stylesheet">
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css">			
			<link rel="stylesheet" href="../css/carousel.css">
			<link rel="stylesheet" href="../css/style.css">			
			<link rel="stylesheet" href="//cdn.datatables.net/1.10.20/css/jquery.dataTables.min.css">
			<script src="https://kit.fontawesome.com/a076d05399.js"></script>			
			<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
		</head>			
		
		<body>
			<header>
				<nav class="navbar fixed-top navbar-expand-md navbar-dark bg-success text-white" style="background:#2EB26E !important;">
					<a class="text-white navbar-brand" href="http://bookstore.gabriel-cassano.be">
						<i class="fab fa-pagelines"></i> Organic Store
					</a>
					
					<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>
					
					<div class="collapse navbar-collapse" id="navbarCollapse">
						<ul class="navbar-nav mr-auto menu">
							<li class="nav-item active">
								<a class="nav-link" href="http://bookstore.gabriel-cassano.be">Home</a>								
							</li>														
						</ul>
						
						<form class="form-inline mt-2 mt-md-0" action="">
							<a style="cursor:pointer;" class="nav-link text-white" href="../index.html">
							EXIT	
							</a>							
						</form>
					</div>					
				</nav>			
			</header>	
			
			<div class="container mt-3">
				<div class="row">
					<div class="col-lg-12">
						<button data-toggle="modal" id="newBtn" type="button" class="mt-4 btn btn-success">
						New order
						</button>
					</div>
				</div>
			</div>
			
			<br>
			
			<div class="container">
				<div class="row">
					<div class="col-lg-12">
						<div class="table-responsive">
							<table id="tableOrders" class="table table-stripped table-bordered table-condensed" style="width:95%;">
								<thead class="text-center">
									<tr>
										<th>Id</th>
										<th>Order</th>
										<th>Total</th>
										<th>Options</th>
									</tr>
								</thead>
								<tbody>
								<?php
								foreach($data as $dat){
									
								
								?>
								<tr>
									<td><?php echo $dat['id']; ?></td>
									<td><?php echo $dat['product_order']; ?></td>
									<td><?php echo $dat['total']; ?></td>
									<td></td>
								</tr>
								<?php								
								}
								?>								
								</tbody>
							</table>							
						</div>					
					</div>
				</div>
			</div>			

			<!-- Fenêtre modale qui s'affiche quand on clique sur "Nouvelle commande". -->
			<div class="modal fade" id="modalCRUD" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div role="document" class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							<h5 class="modal-title" id="exampleModalLabel"></h5>
							<button type="button" class="close" data-dismiss="modal" aria-labeL="close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
					
						<form id="formOrders">
							<div class="modal-body">
								<div class="form-group">
									<label for="order" class="col-form-label">Commande: </label>
									<input type="text" class="form-control" id="order">
								</div>
								<div class="form-group">
									<label for="total" class="col-form-label">Total: </label>
									<input type="text" class="form-control" id="total">
								</div>
								<div class="modal-footer">
									<button type="button" class="btn btn-light" data-dismiss="modal">Cancel</button>
									<button type="submit" id="btnSaveOrder" class="btn btn-success">Save</button>
								</div>							
							</div>						
						</form>
					</div>
				</div>		
			</div>
			
			<div class="container">					
				<footer class="container">
					<p class="float-right">
						<a href="#">TOP</a>
					</p>
						
					<div class="row">
						SALVANDO EL SEMESTRE - YOU TUBE CHANNEL
					</div>
				</footer>				
			</div>
					
			<script
			  src="https://code.jquery.com/jquery-3.4.1.js"
			  integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU="
			  crossorigin="anonymous"></script>
			<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
			<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
			<script src="https://cdn.jsdelivr.net/npm/sweetalert2@9.7.1/dist/sweetalert2.all.min.js"></script>
			<script src="../js/wow.js"></script>	
			<script src="../js/cart.js"></script>	
			<script src="//cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js"></script>
			<script src="../admin.js"></script>					
		</body>
	</html>