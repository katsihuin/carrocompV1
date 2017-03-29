function Camioneta(){
	this.litrosGastados = function(distance){
	var consumo = 7; 
    var bencina = 673;
        return (distance/consumo)*bencina;
	};
    $('#carImgRequest').attr({'src': localStorage.getItem('srcCarImg')});
	$('#carNameRequest').text(localStorage.getItem('srcCarName'));
	$('#carSeatsRequest').text(localStorage.getItem('srcCarSeats'));
}
