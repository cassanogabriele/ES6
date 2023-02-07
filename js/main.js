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
	{name: 'Alice au pays des merveilles', cote:'★ ★ ★ ★', price:30, author: 'Benjamin Lacombe', resume: 'Ce livre est publié en 1865 par Charles Lutwidge Dogdson, plus connu sous le nom de Lewis Caroll. Les aventures de la jeune Alice sont l’occasion de railler.'},
	{name: 'Candide', price:6, cote:'★ ★ ★ ★ ★', author: 'Voltaire', resume: 'Le récit a lieu au château du baron de thunder-ten-tronckh en Allemagne. Candide, un jeune homme dont la naissance est suspecte, sans richesse.'},
	{name: 'Germinal', price:4, cote:'★ ★ ★ ★', author: 'Emile Zola', resume: 'Fils de Gervaise Macquart et de son amant Auguste Lantier, le jeune Étienne Lantier s\'est fait renvoyer de son travail.'},
	{name: 'Les Fleurs du mal', cote:'★ ★ ★ ★', price:4, author: 'Charles Baudelaire.', resume: 'Les Fleurs du mal est un recueil de poèmes de Charles Baudelaire, englobant la quasi-totalité de sa production en vers, de 1840 jusqu\'à sa mort survenue fin août 1867.'},
	{name: 'Andromaque', cote:'★ ★ ★', price:5, author: 'Jean Racine', resume: 'Après la prise de Troie, Andromaque, veuve d’Hector, et son fils Astyanax sont échus en partage à Pyrrhus, roi d’Épire. Celui-ci, déjà fiancé avec Hermione, fille de Ménélas.'},
	{name: 'Moby-Dick', cote:'★ ★ ★', price:1, author: 'Herman Melville', resume: 'Attiré par la mer et le large, Ismaël, le narrateur, décide de partir à la chasse à la baleine. Il embarque sur le Pequod, baleinier commandé par le capitaine Achab.'}
];

var THRILLER = [
	{name: 'Shutter Island', price:8, cote:'★ ★ ★ ★ ★', author:'Dennis Lehane', resume: 'Shutter Island est un îlot au large de Boston où un hôpital psychiatrique semblable à une forteresse accueille des pensionnaires atteints de troubles mentaux graves et coupables de crimes abominables.'},
	{name: 'La nuit du renard ', cote:'★ ★ ★', price:4, author:'Mary Higgins Clark', resume: 'Ronald Thompson doit mourir sur la chaise électrique. Témoin terrorisé, le petit Neil a affirmé, au cours du procès, le reconnaître comme le meurtrier de sa mère. Mais Ronald a toujours clamé son innocence.'},
	{name: 'La Conjuration primitive', cote:'★ ★ ★ ★', price:8, author:'Maxime Chattam', resume: 'Et si seul le mal pouvait combattre le mal ? Les enquêteurs les surnomment La Bête et Le Fantôme... Si les meurtres qu\'ils commettent ne se ressemblent pas, leur sauvagerie est comparable.'},
	{name: 'Les Rivières pourpres', price:9, cote:'★ ★ ★ ★', author:'Jean-Christophe Grangé', resume: 'Un cadavre, horriblement mutilé, suspendu entre ciel et terre dans les montagnes de la région grenobloise. Une tombe, celle d\'un petit garçon, mystérieusement visitée pendant la nuit.'},
	{name: 'Séquestrée', cote:'★ ★ ★', price:7, author:'Chevy Stevens ', resume: 'Lisa GardnerAnnie O\'Sullivan, 32 ans, est agent immobilier sur l\'île de Vancouver. Par un beau dimanche ensoleillé d\'août, alors qu\'elle fait visiter une maison à un potentiel acquéreur...'},
	{name: 'Sueurs froides', cote:'★ ★ ★ ★', price:6, author:'Boileau-Narcejac', resume: 'Chargé de la filature d\'une jeune femme, Flavières en tombe éperdument amoureux et se retrouve plongé au coeur d\'un machination diabolique, pleine de mensonges.'}
];

var POLICIER = [
	{name: 'sueurs froides', price:6, cote:'★ ★ ★ ★ ★', author:'Alfred Hitchcock', resume:'L\'histoire se déroule en France, durant la Seconde Guerre mondiale. Flavières, ancien inspecteur de police, est approché par Gevigne.'},
	{name: 'Dix petits nègres', price:6, cote:'★ ★ ★ ★ ★', author: 'Agatha Christie', resume: 'Publié en 1939, il s’agit d’un des romans les plus célèbres d’Agatha Christie. Le livre a été vendu à 100 millions d’exemplaires dans le monde.'},
	{name: 'Le Diable, tout le temps', price:15, cote:'★ ★ ★', author:'Donal Ray Pollock', resume:'De l\'Ohio à la Virginie-Occidentale, de 1945 à 1965, des destins se mêlent et s\'entrechoquent : un rescapé de l\'enfer du Pacifique.'}
];

var EPOUVANTE = [
	{name: 'La Maison hantée', price:8, cote:'★ ★ ★ ', author:'Shirley Jackson', resume:'Le docteur Montague, intéressé par les phénomènes parapsychologiques, décide de passer un été dans une maison réputée hantée.'},
	{name: 'Un bébé pour Rosemary', price:5, cote:'★ ★ ★', author: 'Ira Levin', resume: 'Un cinq pièces au Bradford en plein cœur de New York, quel bonheur pour un jeune couple! Rosemary et Guy n\'en reviennent pas.'},
	{name: 'La Foire des ténèbres', price:9, cote:'★ ★ ★ ★', author:'Ray Bradbury', resume:'Quelques jours avant Halloween, la foire est arrivée à Green Town en pleine nuit, dans un train mystérieux. flet du train, ils ont vu la foire débarquer.'},
	{name: 'Fog', price:10, cote:'★ ★ ★ ★ ★', author:'Ray Bradbury', resume:'Cela commença par un tremblement de terre. Dans la confusion, au milieu des cris des victimes, personne ne prêta vraiment attention à ce brouillard jaunâtre qui, s\'échappait de la terre éventrée.'}
];

var SCIENCEFICTION = [
	{name: 'La guerre des mondes', price:8, cote:'★ ★ ★ ★', author:'H.G. Wells', resume:'La guerre des mondes est un récit passionnant qui relate l\'invasion de la Terre par des Martiens. C\'est un témoin extérieur qui nous montre le désarroi et la lutte désespérée des hommes face à un cataclysme directement sorti de l\'enfer.'},
	{name: 'La Planète des singes', price:5, cote:'★ ★ ★ ★ ★', author: 'Pierre Boulle ', resume: 'Y a-t-il des êtres humains ailleurs que dans notre galaxie ? C\'est la question que se posUlysse Mérou, lorsque, de leur vaisseau spatial, ils observent le paysage d\'une planète proche de Bételgeuse: on y aperçoit des villes, des routes.'},
	{name: 'Le Seigneur des anneaux', price:18, cote:'★ ★ ★ ★ ★', author:'J.R.R. Tolkien', resume:'Après un prologue décrivant les Hobbits et leurs mœurs, le passé de la Terre du Milieu et un rapide résumé des aventures de Bilbo Bessac, le livre I s\'ouvre sur le cent onzième anniversaire de ce dernier, soixante années.'},
	{name: 'Dune', price:6, cote:'★ ★ ★ ★', author:'Frank Herbert', resume:'L’histoire débute en l’an 10191 après la fondation de la Guilde spatiale. L\'univers connu est régi par l’empereur Padishah Shaddam IV, le chef de la Maison Corrino, qui exerce son pouvoir féodal6 sur la multitude de planètes de l\'Imperium, un vaste empire.'},
	{name: '2001 : L\'Odyssée de l\'espace ', price:6, cote:'★ ★ ★ ★', author:'Arthur C. Clarke', resume:'Le vaisseau Explorateur 1 est en route vers Saturne. A son bord, deux astronautes et le plus puissant ordinateur jamais conçu, Carl 9000. Cinq ans plus tôt, un étrange monolithe noir a été découvert sur la lune. La première preuve d\'une existence extra-terrestre. '},
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