// inclusion de wow pour les effets pour l'affichage des div des livres
new WOW().init();

// Variables globales utilisées
var products = [];
var cartItems = [];
var cart_n = document.getElementById("cart_n");

// Les différentes sections de li
var romansDIV = document.getElementById("romansDIV");
var thrillerDIV = document.getElementById("thrillerDIV");
var policierDIV = document.getElementById("policierDIV");
var epouvanteDIV = document.getElementById("epouvanteDIV");
var sciencefictionDIV = document.getElementById("sciencefictionDIV");

// INFORMATION 
var ROMAN = [
	{name: 'Lorem ipsum dolor sit amet.', cote:'★ ★ ★ ★', price: 0.00, author: 'Sit Amet,', resume: 'Consectetur adipiscing elit.'},
	{name: 'Sed do', price: 0.00, cote:'★ ★ ★ ★ ★', author: 'Eiusmod Tempor', resume: 'Incididunt ut labore et.'},
	{name: 'Dolore magna aliqua', price: 0.00, cote:'★ ★ ★ ★', author: 'Nisl Tincidunt', resume: 'Quis hendrerit dolor magna eget.'},
	{name: 'Est lorem ipsum', cote:'★ ★ ★ ★', price:0.00, author: 'Magna Eget.', resume: 'Volutpat odio facilisis.'},
	{name: 'Commodo odio', cote:'★ ★ ★', price:0.00, author: 'Aenean Sed', resume: 'Adipiscing diam donec.'},
	{name: 'Adipiscing tristique', cote:'★ ★ ★', price:0.00, author: 'Mi Eget', resume: 'Non tellus orci ac auctor augue.'}
];

var THRILLER = [
	{name: 'Elit at imperdiet dui', price: 0.00, cote:'★ ★ ★ ★ ★', author:'Accumsan Sit', resume: 'Ornare arcu dui vivamus arcu felis. .'},
	{name: 'Egestas integer', cote:'★ ★ ★', price: 0.00, author:'Eget Aliquet', resume: 'In hac habitasse platea dictumst.'},
	{name: 'Uisque sagittis purus', cote:'★ ★ ★ ★', price: 0.00, author:'Integer Enim', resume: 'Neque volutpat ac.'},
	{name: 'Senectus et netus', price: 0.00, cote:'★ ★ ★ ★', author:'Et malesuada', resume: 'Nunc pulvinar sapien.'},
	{name: 'Et Ligula', cote:'★ ★ ★', price: 0.00, author:'Ulamcorper', resume: 'Malesuada proin.'},
	{name: 'Neque convallis', cote:'★ ★ ★ ★', price: 0.00, author:'Convallis', resume: 'A cras semper auctor.'}
];

var POLICIER = [
	{name: 'Libero id faucibus', price: 0.00, cote:'★ ★ ★ ★ ★', author:'Nisi Scelerisque', resume:'Porttitor rhoncus dolor purus.'},
	{name: 'Et malesuada fames', price: 0.00, cote:'★ ★ ★ ★ ★', author: 'Eros Donec', resume: 'Sit amet nulla facilisi.'},
	{name: 'Curabitur id sodales', price: 0.00, cote:'★ ★ ★', author:'Vestibulum Mollis', resume:'In nunc felis, ultricies eu augue a.'}
];

var EPOUVANTE = [
	{name: 'Cras congue enim id magna', price: 0.00, cote:'★ ★ ★ ', author:'Nullam Sit Amet', resume:'Libero id placerat sodales.'},
	{name: 'Etiam accumsan', price: 0.00, cote:'★ ★ ★', author: 'In tempor', resume: 'Massa sem vehicula ante.'},
	{name: 'Sed et blandit nulla', price: 0.00, cote:'★ ★ ★ ★', author:'Vestibulum Sagittis', resume:'Ut leo ultricies imperdiet .'},
	{name: 'Morbi sagittis', price: 0.00, cote:'★ ★ ★ ★ ★', author:'Mauris Vitae', resume:'Et nunc vitae semper. '}
];

var SCIENCEFICTION = [
	{name: 'Quisque ullamcorper', price: 0.00, cote:'★ ★ ★ ★', author:'Consectetur Adipiscing', resume:'Etiam justo velit.'},
	{name: 'Etiam justo velit', price: 0.00, cote:'★ ★ ★ ★ ★', author: 'Quam Sit Amet', resume: 'Vestibulum consequat nisi..'},
	{name: 'Suspendisse lobortis', price: 0.00, cote:'★ ★ ★ ★ ★', author:'Iaculis Scelerisque', resume:'Integer blandit euismod tellus.'},
	{name: 'Aenean viverra', price: 0.00, cote:'★ ★ ★ ★', author:'Nulla At', resume:'Nisl aliquet ut.'},
	{name: 'Curabitur vel ', price: 0.00, cote:'★ ★ ★ ★', author:'Consequat Cursus', resume:'Pellentesque vitae posuere ex, eu dapibus neque. '},
];

// HTML
function HTMLRomanProduct(con){
	let URL = `img/romans/roman${con}.jpg`;
	let btn = `btnRoman${con}`;
	return `
		<div class="col-md-4 wow zoomIn data-wow-duration="10s" data-wow-offset="240">
			<div class="card mb-4 shawow-sm">
				<img class="card-img-top" src="${URL}" alt="book images">
				<div>
					<div class="card-body">	
						<p class="card-text star"><span class="cote">${ROMAN[con-1].cote}</span></p>	
						<p class="card-text" id="title"><b>${ROMAN[con-1].name}</b></p>
						<p class="card-text"><b>Auteur :</b> ${ROMAN[con-1].author}</p>							
						<p class="card-text"><b>Prix :</b> ${ROMAN[con-1].price} €</p>	
						<p class="card-text"><b>Résumé</b> : ${ROMAN[con-1].resume}</p>	
						<div class="d-flex justify-content-between align-items-center">
							<div class="btn-group">
								<button type="button" onclick="cart2('${ROMAN[con-1].name}','${ROMAN[con-1].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary">
									<a style="color:inherit;" href="cart.php">Acheter</a>								
								</button>
								<button id="${btn}" type="button" onclick="cart('${ROMAN[con-1].name}','${ROMAN[con-1].price}','${URL}','${con}','${btn}')"	class="btn btn-sm btn-outline-secondary">
									<a style="color:inherit;" href="#">Ajouter au panier</a>								
								</button>								
							</div>
								<small class="text-muted"> Livraison gratuite</small>
						</div>
					</div>
				</div>
			</div>
		</div>
	`;	
}

function HTMLThrillerProduct(con){
	let URL = `img/thrillers/thriller${con}.jpg`;
	let btn = `btnThriller${con}`;
	return `
		<div class="col-md-4 wow zoomIn data-wow-duration="10s" data-wow-offset="240">
			<div class="card mb-4 shawow-sm">
				<img class="card-img-top" src="${URL}" alt="book images">
				<div>
					<div class="card-body">	
						<p class="card-text star"><span class="cote">${THRILLER[con-1].cote}</span></p>
						<p class="card-text" id="title"><b>${THRILLER[con-1].name}</b></p>
						<p class="card-text"><b>Auteur :</b> ${THRILLER[con-1].author}</p>	
						<p class="card-text"><b>Prix :</b> ${THRILLER[con-1].price} €</p>
						<p class="card-text"><b>Résumé</b> : ${THRILLER[con-1].resume}</p>	
						<div class="d-flex justify-content-between align-items-center">
							<div class="btn-group">
								<button type="button" onclick="cart2('${THRILLER[con-1].name}','${THRILLER[con-1].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary">
									<a style="color:inherit;" href="cart.php">Acheter</a>								
								</button>
								<button id="${btn}" type="button" onclick="cart('${THRILLER[con-1].name}','${THRILLER[con-1].price}','${URL}','${con}','${btn}')"	class="btn btn-sm btn-outline-secondary">
									<a style="color:inherit;" href="#">Ajouter au panier</a>								
								</button>								
							</div>
								<small class="text-muted"> Livraison gratuite</small>
						</div>
					</div>
				</div>
			</div>
		</div>
	`;	
}

function HTMLPolicierProduct(con){
	let URL = `img/policiers/policier${con}.jpg`;
	let btn = `btnPolicier${con}`;
	return `
		<div class="col-md-4 wow zoomIn data-wow-duration="10s" data-wow-offset="240">
			<div class="card mb-4 shawow-sm">
				<img class="card-img-top" src="${URL}" alt="book images">
				<div>
					<div class="card-body">	
						<p class="card-text star"><span class="cote">${POLICIER[con-1].cote}</span></p>
						<p class="card-text" id="title"><b>${POLICIER[con-1].name}</b></p>
						<p class="card-text"><b>Auteur :</b> ${POLICIER[con-1].author}</p>	
						<p class="card-text"><b>Prix :</b> ${POLICIER[con-1].price} €</p>
						<p class="card-text"><b>Résumé</b> : ${POLICIER[con-1].resume}</p>	
						<div class="d-flex justify-content-between align-items-center">
							<div class="btn-group">
								<button type="button" onclick="cart2('${POLICIER[con-1].name}','${POLICIER[con-1].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary">
									<a style="color:inherit;" href="cart.php">Acheter</a>								
								</button>
								<button id="${btn}" type="button" onclick="cart('${POLICIER[con-1].name}','${POLICIER[con-1].price}','${URL}','${con}','${btn}')"	class="btn btn-sm btn-outline-secondary">
									<a style="color:inherit;" href="#">Ajouter au panier</a>								
								</button>								
							</div>
								<small class="text-muted"> Livraison gratuite</small>
						</div>
					</div>
				</div>
			</div>
		</div>
	`;	
}

function HTMLEpouvanteProduct(con){
	let URL = `img/epouvante/epouvante${con}.jpg`;
	let btn = `btnEpouvante${con}`;
	return `
		<div class="col-md-4 wow zoomIn data-wow-duration="10s" data-wow-offset="240">
			<div class="card mb-4 shawow-sm">
				<img class="card-img-top" src="${URL}" alt="book images">
				<div>
					<div class="card-body">	
						<p class="card-text star"><span class="cote">${EPOUVANTE[con-1].cote}</span></p>
						<p class="card-text" id="title"><b>${EPOUVANTE[con-1].name}</b></p>
						<p class="card-text"><b>Auteur :</b> ${EPOUVANTE[con-1].author}</p>	
						<p class="card-text"><b>Prix :</b> ${EPOUVANTE[con-1].price} €</p>
						<p class="card-text"><b>Résumé</b> : ${EPOUVANTE[con-1].resume}</p>	
						<div class="d-flex justify-content-between align-items-center">
							<div class="btn-group">
								<button type="button" onclick="cart2('${EPOUVANTE[con-1].name}','${EPOUVANTE[con-1].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary">
									<a style="color:inherit;" href="cart.php">Acheter</a>								
								</button>
								<button id="${btn}" type="button" onclick="cart('${EPOUVANTE[con-1].name}','${EPOUVANTE[con-1].price}','${URL}','${con}','${btn}')"	class="btn btn-sm btn-outline-secondary">
									<a style="color:inherit;" href="#">Ajouter au panier</a>								
								</button>								
							</div>
								<small class="text-muted"> Livraison gratuite</small>
						</div>
					</div>
				</div>
			</div>
		</div>
	`;	
}

function HTMLSciencefictionProduct(con){
	let URL = `img/sciencefiction/sciencefiction${con}.jpg`;
	let btn = `btnSciencefiction${con}`;
	return `
		<div class="col-md-4 wow zoomIn data-wow-duration="10s" data-wow-offset="240">
			<div class="card mb-4 shawow-sm">
				<img class="card-img-top" src="${URL}" alt="book images">
				<div>
					<div class="card-body">	
						<p class="card-text star"><span class="cote">${SCIENCEFICTION[con-1].cote}</span></p>
						<p class="card-text" id="title"><b>${SCIENCEFICTION[con-1].name}</b></p>
						<p class="card-text"><b>Auteur :</b> ${SCIENCEFICTION[con-1].author}</p>	
						<p class="card-text"><b>Prix :</b> ${SCIENCEFICTION[con-1].price} €</p>
						<p class="card-text"><b>Résumé</b> : ${SCIENCEFICTION[con-1].resume}</p>	
						<div class="d-flex justify-content-between align-items-center">
							<div class="btn-group">
								<button type="button" onclick="cart2('${SCIENCEFICTION[con-1].name}','${SCIENCEFICTION[con-1].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary">
									<a style="color:inherit;" href="cart.php">Acheter</a>								
								</button>
								<button id="${btn}" type="button" onclick="cart('${SCIENCEFICTION[con-1].name}','${SCIENCEFICTION[con-1].price}','${URL}','${con}','${btn}')"	class="btn btn-sm btn-outline-secondary">
									<a style="color:inherit;" href="#">Ajouter au panier</a>								
								</button>								
							</div>
								<small class="text-muted"> Livraison gratuite</small>
						</div>
					</div>
				</div>
			</div>
		</div>
	`;	
}

// ANIMATION 
function animation(){
	const toast = swal.mixin({
		toast:true,
		position:'top-end',
		showConfirmationButton:false,
		timer:1000
	});
	toast({
		type:'success',
		title:'Ajouté au panier'
	});
}

// CART FUNCTIONS 
function cart(name,price,url,con,btncart){
	var item={
		name:name,
		price:price,
		url:url
	}
	
	cartItems.push(item);
	
	let storage = JSON.parse(localStorage.getItem("cart"));
	
	if(storage==null){
		products.push(item);
		localStorage.setItem("cart", JSON.stringify(products));
	} else{
		products = JSON.parse(localStorage.getItem("cart"));
		products.push(item);
		localStorage.setItem("cart", JSON.stringify(products));
	}
	product = JSON.parse(localStorage.getItem("cart"));
	cart_n.innerHTML = `[${products.length}]`;
	document.getElementById(btncart).style.display="none";
	animation();
}

function cart2(name,price,url,con,btncart){
	var item = {
		name: name,
		price:price,
		url:url
	}
	
	cartItems.push(item);
	
	let storage = JSON.parse(localStorage.getItem("cart"));
	
	if(storage==null){
		products.push(item);
		localStorage.setItem("cart", JSON.stringify(products));
	} else{
		products = JSON.parse(localStorage.getItem("cart"));
		products.push(item);
		localStorage.setItem("cart".JSON.stringify(products));
	}	
	
	product = JSON.parse(localStorage.getItem("cart"));
	cart_n.innerHTML = `[${products.length}]`;
	document.getElementById(btncart).style.display="none";
}

// RENDER
function render(){
	for(let index = 1; index <= 6; index++){
		romansDIV.innerHTML+= `${HTMLRomanProduct(index)}`;
	}
	
	for(let index = 1; index <= 6; index++){
		thrillerDIV.innerHTML+= `${HTMLThrillerProduct(index)}`;		
	}
	
	for(let index = 1; index <= 3; index++){
		policierDIV.innerHTML+= `${HTMLPolicierProduct(index)}`;		
	}	
	
	for(let index = 1; index <= 4; index++){
		epouvanteDIV.innerHTML+= `${HTMLEpouvanteProduct(index)}`;		
	}
	
	for(let index = 1; index <= 5; index++){
		sciencefictionDIV.innerHTML+= `${HTMLSciencefictionProduct(index)}`;		
	}
	
	
	if(localStorage.getItem("cart")==null){
		
	} else{
		products = JSON.parse(localStorage.getItem("cart"));
		cart_n.innerHTML = `[${products.length}]`;
	}
}

// Login
var login = document.getElementById("formA").addEventListener("submit", (e)=>{
	e.preventDefault();
	var userLogin = document.getElementById("usera");	
	var passLogin = document.getElementById("passworda");
	
	if(userLogin.value=="ADMIN" && passLogin.value=="123"){
		Swal.fire({
			title:'Welcome',
			html:'Acces granted',
			type:'success'
		});		
		setTimeout(()=>{
			loadPage();
		}, 300);		
	} else{		
		Swal.fire({
			title:'Error',
			html:'Acces granted',
			type:'error'
		});
	}
	
	function loadPage(){
		window.location.href="./admin/admin.php"
	}
});