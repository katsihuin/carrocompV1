$(document).on('ready', init);

var map;
var origen = $('#start');
var destino = $('#end');
var directionsDisplay = null;
var directionsService = null;
var v=true;

function init() {
  $('#btn-search').on('click', onValidateCity);
  $('#btn-share').on('click', verificar);
  $("car-list-container").hide();
  $(".list-car .list").on('mouseover', onMouseOver);
  $(".list-car .list").on('mouseleave', onMouseLeave);
  $("car-list-container").hide();
  getMyLocation();
  addClickEvent();
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

function onValidateCity() {    
    if (origen.val() === ''||destino.val() === '') {
        
        swal({
                title: "¡Formulario Incompleto!",
                text:"Desbes escoger ciudad de origen y destino",
            });
    
    } else {
        $('#car-list-container').css({ 'display': 'inline-block'});
        $('#btn-share').attr('disabled', false);

        var ciudadOrigen = origen.val(),
     ciudadDestino = destino.val();
    //addCitiesToSystem(sCiudadOrigen, sCiudadDestino); 
        calculateDistance();
    }          
}

//esta funcion encuentra la distancia por cada ciudad
function getDistanceStart(){
  var distanceStart=0; 
  var regions = get_regiones();
        
    for(var i in regions){
        
        if (regions[i].name === origen ) {
            var distanceStart = regions[i].distance;
            //console.log(regions[i].distance); 
        } 
    return distanceStart;    
  }

}

function getDistanceEnd(){
  var distanceEnd=0; 
  var regions = get_regiones();
        
    for(var i in regions){
        
        if (regions[i].name === origen ) {
            var distanceEnd = regions[i].distance;
            //console.log(regions[i].distance);         
        } 
    return distanceEnd;
  }

}
function calculateDistance() {
    var distance = parseInt(getDistanceStart())+ parseInt(getDistanceEnd());
    return distance;
    //display the result
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
	
	if(name=='Motocicleta')
    {
    	localStorage.setItem('type',1); 
    	chooseCar = true;
    }
	if(name=='Automovil')
    {
    	localStorage.setItem('type',2); 
    	chooseCar = true;
    }
    if(name=='Camioneta')
    {
    	localStorage.setItem('type',3);
    	chooseCar = true;
    }
    if(name=='Camion')
    {
    	localStorage.setItem('type',4);
    	chooseCar = true;
    }
}

function verificar(){

        var v1=0,v2=0;
        v1=validacion('txtId');
        v2=validacion('vehicle');
        var moto = localStorage.getItem("type")==1;
        var moto = localStorage.getItem("type")==2;
        var moto = localStorage.getItem("type")==3;
        var moto = localStorage.getItem("type")==4;
        var imgVehicle=localStorage.getItem('imgCar');
        if (v1===false || v2===false ) 
        {
            swal({
                title: "¡Formulario Incompleto!",
                text:"Completa todos los campos requeridos correctamente",
            });
        }
        else
        {
            swal({
                text: "carrcomp!",
                imageUrl: "imgVehicle",
                text:"Costo por persona",
                title:"$3670 CLP,"
            });
        }
    } 

function  validacion(campo){
  var a=0;
  if (campo==='vehicle'){
            opciones = document.getElementsByName(campo);
            var seleccionado = false;
            for(var i=0; i<opciones.length; i++) {    
              if(opciones[i].checked) {
                seleccionado = true;
                break;
              }
            }
             
            if(!seleccionado) {
            swal({
                title: "¡Formulario Incompleto!",
                text:"Desbes escoger un vehiculo",
            });
                return false;
            }
            else{
               swal({
                title: "¡Gracias!",
                text:"Escogiste un vehiculo",
            });
                //validatePassengers();
                return true;
                
                
                
            }
        }

  if (campo==='txtId')
        {
            var moto = 
            txtId = document.getElementById(campo).value;
            if( txtId == null || txtId.length == 0 || /^\s+$/.test(txtId) ) {
                swal({
                title: "¡Formulario Incompleto!",
                text:"No ingresaste el numero de pasajeros",
            });
                return false;

            }
            else
            {
                if(isNaN(txtId)) {
                  swal({
                    title: "¡Formulario Incorrecto!",
                    text:"No se acepta letras",
                });
                    return false;
                }
                else{
                    swal({
                      title: "¡Felicitaciones!",
                      text:"Completaste el formulario",
                  }); 
                    return true;
                }
                
                
            }
            
        }
}
