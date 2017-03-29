 var ciudades = new Array();
    ciudades["Iquique"]=2059;
    ciudades["Antofagasta"]=1789;
    ciudades["Calama"]=1368;
    ciudades["La Senera"]=1567;
    ciudades["Valparaiso"]=470;
    ciudades["Santiago"]=116;
    ciudades["Rancagua"]=0;
    ciudades["Talca"]=84;
    ciudades["Concepcion"]=257;
    ciudades["Temuco"]=500;
    ciudades["Valdivia"]=690;
    ciudades["Puerto Montt"]=848;
    ciudades["Coyhaique"]=1032;
    ciudades["Calama"]=1888;
    ciudades["Punto Arenas"]=3004;


$(document).on('ready', init);


function init() {
    $('#btn-search').on('click', onValidateCity);
    $('#btn-share').on('click', onValidateVehicle);
    $("car-list-container").hide();
}

function onValidateCity() {    
    
    var origen = $('#start');
    var destino = $('#end');
    
    if (origen.val() === ''||destino.val() === '') {
        
        swal({
                title: "¡Formulario Incompleto!",
                text:"Desbes escoger ciudad de origen y destino",
            });
    
    } else {
        $('#car-list-container').css({ 'display': 'inline-block'});
        $('#btn-share').attr('disabled', false);
        calculateDistance(); 
    }          
}

//esta funcion encuentra la distancia por cada ciudad
function getDistanceStart()
{
    var distanceStart=0;
    //Get a reference to the form
    var theForm = document.forms["list-city"];
    //Get a reference to the select id=
     var selectedCity = theForm.elements["start"];
     
    //set cakeFilling Price equal to value user chose
    //For example filling_kms["Lemon".value] would be equal to 5
    distanceStart = filling_kms[selectedCity.value];

    //finally we return 
    return distanceStart;
}

//esta funcion encuentra la distancia por cada ciudad
function getDistanceEnd()
{
    var distanceEnd=0;
    //Get a reference to the form
    var theForm = document.forms["list-city"];
    //Get a reference to the select id=
     var selectedCity = theForm.elements["end"];
     
    //set cakeFilling Price equal to value user chose
    //For example filling_kms["Lemon".value] would be equal to 5
    distanceEnd = filling_kms[selectedCity.value];

    //finally we return 
    return distanceSEnd;
}
function calculateDistance() {
    var distance = getDistanceStart() + getDistanceEnd();
    return distance;
}

function get_regiones(){
	return [
		{
			name: "arica",
			distance: 2059
		},
		{
			name: "iquique",
			distance: 1789
		},
		{
			name: "antofagasta",
			distance: 1368
		},
		{
			name: "copiapo",
			distance: 1567
		},
		{
			name: "la_serena",
			distance: 470
		},
		{
			name: "valparaiso",
			distance: 116
		},
		{
			name: "rancagua",
			distance: 0
		},
		{
			name: "talca",
			distance: 84
		},
		{
			name: "concepcion",
			distance: 257
		},
		{
			name: "temuco",
			distance: 500
		},
		{
			name: "valdivia",
			distance: 690
		},
		{
			name: "puerto_montt",
			distance: 848
		},
		{
			name: "coyhaique",
			distance: 1032
		},
		{
			name: "punta_arenas",
			distance: 1888
		},
		{
			name: "santiago",
			distance: 3004
		}
	]
}