
//variables globales
var correcta=0;
let question;
let respuestas=[];
let respuesta;


//en esta funcion conecto con el API y guardo los datos que necesito
async function sendApiRequest(){
	    let response = await fetch('https://opentdb.com/api.php?amount=1&category=17&type=multiple');
	    let data =await response.json();
	    
	    question=data.results[0].question;
	    respuesta=data.results[0].correct_answer;
	    
	    indice=Math.floor(Math.random()*4);

        respuestas[indice]=data.results[0].correct_answer;
        
        var id=0;
        for (var i=0;i<4;i++){
			
			if(i!=indice){
				respuestas[i]=data.results[0].incorrect_answers[id]; 
				id++;}
		 }
}
//llamamos la funcion
sendApiRequest();
