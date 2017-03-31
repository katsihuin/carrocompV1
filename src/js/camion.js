function Camion(){
	this.litrosGastados = function(distance){
		var consumo = 6; 
        var bencina = 673;
        return (distance/consumo)*bencina;
	};
}
