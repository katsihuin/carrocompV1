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


//esta funcion encuentra la distancia por cada ciudad
function getDistance()
{
    var distanceKMS=0;
    //Get a reference to the form
    var theForm = document.forms["list-city"];
    //Get a reference to the select id=
     var selectedCity = theForm.elements["start"];
     
    //set cakeFilling Price equal to value user chose
    //For example filling_kms["Lemon".value] would be equal to 5
    distanceKMS = filling_kms[selectedCity.value];

    //finally we return 
    return distanceKMS;
}

function get_regiones(){
	return [
		{
			name: "arica",
			distance: 0
		},
		{
			name: "iquique",
			distance: 0
		},
		{
			name: "antofagasta",
			distance: 0
		},
		{
			name: "copiapo",
			distance: 0
		},
		{
			name: "la_serena",
			distance: 0
		},
		{
			name: "valparaiso",
			distance: 0
		},
		{
			name: "rancagua",
			distance: 0
		},
		{
			name: "talca",
			distance: 0
		},
		{
			name: "concepcion",
			distance: 0
		},
		{
			name: "temuco",
			distance: 0
		},
		{
			name: "valdivia",
			distance: 0
		},
		{
			name: "puerto_montt",
			distance: 0
		},
		{
			name: "coyhaique",
			distance: 0
		},
		{
			name: "punta_arenas",
			distance: 0
		},
		{
			name: "santiago",
			distance: 0
		}
	]
}