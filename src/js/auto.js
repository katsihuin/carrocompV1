function Auto(){
	this.litrosGastados = function(distance){
		var consumo = 12; 
        var bencina = 673;
        return (distance/consumo)*bencina;
	};

}
