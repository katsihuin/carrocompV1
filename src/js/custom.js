$(document).on('ready', init);

var map;
var dropOffLocation = null;
var currentMarker = null;
var directionsDisplay = null;
var directionsService = null;

function init() {
    var dropOffLocation = null;
    $('#btnShowCars').on('click', displayCars);
    $(".list-car .list").on('mouseover', onMouseOver);
    $(".list-car .list").on('mouseleave', onMouseLeave);
    getMyLocation();
}

function getMyLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
  } else {
    alert('Sin soporte de geolocalización');
  }
}

//función invoca asincrónicamente por la API de geolocalización HTML5
function geoSuccess(position) {

  //Valores de latitud y longitud obtenidos de HTML5 API
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;

  // Creando un nuevo objeto para el uso de valores de latitud y longitud con Google map
  var latLng = new google.maps.LatLng(latitude, longitude);

  initMap(latLng);
  //createMarker(position);
}

//función Error
function geoError() {
  alert("Geocoder falló.");
}



function initMap(latLng) {
  var directionsService = new google.maps.DirectionsService;
  var directionsDisplay = new google.maps.DirectionsRenderer;
  var map = new google.maps.Map(document.getElementById('map'), {
  center: latLng,
  zoom: 15
  });
  directionsDisplay.setMap(map);

  var onChangeHandler = function() {
    calculateAndDisplayRoute(directionsService, directionsDisplay);
  };
  document.getElementById('start').addEventListener('change', onChangeHandler);
  document.getElementById('end').addEventListener('change', onChangeHandler);
}

function calculateAndDisplayRoute(directionsService, directionsDisplay) {
  directionsService.route({
    origin: document.getElementById('start').value,
    destination: document.getElementById('end').value,
    travelMode: google.maps.TravelMode.DRIVING
  }, function(response, status) {
    if (status === google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
    } else {
      window.alert('Directions request failed due to ' + status);
    }
  });
}

function displayCars(){
    var e = document.getElementById("start");
    var strUser = e.options[e.selectedIndex].value;
    
	if (strUser == null){
		alert("Debe escoger una ciudad");
	}else{
    	$('#car-list-container').show();
	}
	
}

function createMarker(position) {
  map.setCenter(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
  currentMarker = new google.maps.Marker({
    position: latlng,
    map: map,
    title:"Aqui estoy!!!",
    icon: "img/person2.png"
  });

  var markerOptions = {
    //position:latLng,
    map: map,
    animation: google.maps.Animation.DROP,
    clickable: true,
    title: '¡Estoy Aqui!',
    icon: 'img/person2.png'
  }
  //var marker = new google.maps.Marker(markerOptions);

  var marker = new google.maps.Marker({
  //position: new google.maps.LatLng(latitude + 0.002, longitude),
  map: map,
  animation: google.maps.Animation.DROP,
  clickable: true,
  title: 'taxi lyft',
  icon: 'img/coche2x.png'});

  var marker = new google.maps.Marker({
 // position: new google.maps.LatLng(latitude + 0.002, longitude),
  map: map,
  animation: google.maps.Animation.DROP,
  clickable: true,
  title: 'taxi lyft',
  icon: 'img/coche3x.png'});
  

  var geocoder = new google.maps.Geocoder();
  getAddress(geocoder, currentMarker.position,'address');
}

function onMouseOver() {
	$(this).addClass("active");
    $(this).addClass("purple");
}

function onMouseLeave() {
	$(this).removeClass("active");
    $(this).removeClass("purple");
}

function addClickEvent(){
	var list = $('.form-group');
	$.each(list, function() {$(this).on('click',onClickList)});
}

function onClickList(event){
	
	var imgCar= $(event.currentTarget).find('#carImgPickUp').attr('src');
	localStorage.setItem('srcCarImg', imgCar);

	var carName= $(event.currentTarget).find('#carNamePickUp').text();
	localStorage.setItem('srcCarName', carName);

	var carSeats= $(event.currentTarget).find('#carSeatsPickUp').text();
	localStorage.setItem('srcCarSeats', carSeats);
	
	if(name=='Line')
    {
    	localStorage.setItem('type',1); 
    	chooseCar = true;
    }
	if(name=='Lyft')
    {
    	localStorage.setItem('type',2); 
    	chooseCar = true;
    }
    if(name=='Plus')
    {
    	localStorage.setItem('type',3);
    	chooseCar = true;
    }
    if(name=='Premier')
    {
    	localStorage.setItem('type',4);
    	chooseCar = true;
    }
}


