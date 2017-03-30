function Moto(){
	this.litrosGastados = function(distance){
        var consumo = 21; 
        var bencina = 673;
        return (distance/consumo)*bencina;
	};
}
	