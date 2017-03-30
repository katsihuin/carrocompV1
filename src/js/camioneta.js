function Camioneta(){
	this.litrosGastados = function(distance){
	var consumo = 7; 
    var bencina = 673;
        return (distance/consumo)*bencina;
	};
}
