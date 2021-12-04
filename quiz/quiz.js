
//variable global
const final='<img id="win" src="undraw_winners_ao2o 2.svg" height="100" width="200"><p id="result">Results</p><p>you got<span id="correcta"></span>correct answers</p><button id="try" type="button" onclick="quiz()">Try again</button>'
let try_again=0;

//esa funcion dependiendo de los datos recibidos crea un button
function button(p1,p2,ic,c){
	
	var buttonParent=document.createElement("button");
    buttonParent.setAttribute("type","button");
    
    if(c!="no"){buttonParent.setAttribute("id",c);}
    
    
    var buttonChild=document.createElement("span");
    var textoNode=document.createTextNode(p1);
    buttonChild.appendChild(textoNode);
    
    var buttonChild3=document.createElement("span");
    var textoNode=document.createTextNode(p2);
    buttonChild3.appendChild(textoNode);
   
    if(ic=="bi bi-x-circle"){
        var buttonChild2=document.createElement("i");
        buttonChild2.setAttribute("class","bi bi-x-circle");
        buttonParent.appendChild(buttonChild2);}
    
    if(ic=="bi bi-check-circle"){
        var buttonChild2=document.createElement("i");
        buttonChild2.setAttribute("class","bi bi-check-circle");
        buttonParent.appendChild(buttonChild2);
        }
    buttonParent.appendChild(buttonChild);
    buttonParent.appendChild(buttonChild3);
	return buttonParent;
	}


function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

//funcion para crear la interfaz de pregunta y respuestas
function quiz(){
	var text='<aside id="aventura"><img src="undraw_adventure_4hum 1.svg" height="100" width="115"></aside>'
	
	
	if(try_again>0){document.getElementById("cabeza").insertAdjacentHTML('afterbegin',text);}
	var parentNode=document.getElementById("preguntas");
    
    var questionNode=document.createElement("p");
    questionNode.setAttribute("id","pregunta");
    var qtextNode=document.createTextNode(question);
    questionNode.appendChild(qtextNode);
    
    removeAllChildNodes(parentNode);
    parentNode.appendChild(questionNode);
   
    parentNode.appendChild(button("A",respuestas[0],"no","no"));
    parentNode.appendChild(button("B",respuestas[1],"no","no"));
    parentNode.appendChild(button("C",respuestas[2],"no","no"));
    parentNode.appendChild(button("D",respuestas[3],"no","no"));
    
    //clickeable button
    parentNode.children[1].setAttribute('onclick',"resultado(0);");
    parentNode.children[2].setAttribute('onclick',"resultado(1);");
    parentNode.children[3].setAttribute('onclick',"resultado(2);");
    parentNode.children[4].setAttribute('onclick',"resultado(3);");
    
    try_again++;
}

//funcion para la ultima interfaz
function lose(){
	
	document.getElementById("aventura").remove();
	var parentNode=document.getElementById("preguntas");
	removeAllChildNodes(parentNode);
	
	parentNode.innerHTML=final;
	
	document.getElementById("correcta").innerHTML=correcta;
}



//funcion para verificar respuestas del usuario
function resultado(x){
	
	var punto=['A','B','C','D'];
	
	var parentNode=document.getElementById("preguntas");
	//eliminar pantalla
    parentNode.removeChild(parentNode.lastChild);
    parentNode.removeChild(parentNode.lastChild);
    parentNode.removeChild(parentNode.lastChild);
    parentNode.removeChild(parentNode.lastChild);
    
    
    if(respuestas[x]==respuesta){
			 for (var i=0;i<4;i++){
				 if(x==i){
                   parentNode.appendChild(button(punto[i],respuestas[i],"bi bi-check-circle","butt_win"));
                   }
                  
                 else{ parentNode.appendChild(button(punto[i],respuestas[i],"no","no"));}
                }
          
           correcta++;
           //next action
           var nextButton=document.createElement("button");
           var text=document.createTextNode("Next");
           nextButton.appendChild(text);
           nextButton.setAttribute("id","nextButton");
           nextButton.setAttribute("type","button");
           nextButton.setAttribute('onclick',"quiz();");
           parentNode.appendChild(nextButton);sendApiRequest();}
           
    else{
			
			for (var i=0;i<4;i++){
			   if(respuestas[i]==respuesta){
                   parentNode.appendChild(button(punto[i],respuestas[i],"bi bi-check-circle","butt_win"));}
               else if(x==i){
				   parentNode.appendChild(button(punto[i],respuestas[i],"bi bi-x-circle","butt_los"));}
			   else{
				   parentNode.appendChild(button(punto[i],respuestas[i],"no","no"));
				   }
                  }
                  
                   //next action
                   var nextButton=document.createElement("button");
                   var text=document.createTextNode("Next");
                   nextButton.appendChild(text);
                   nextButton.setAttribute("id","nextButton");
                   nextButton.setAttribute("type","button");
                   nextButton.setAttribute('onclick',"lose();");
                   parentNode.appendChild(nextButton);
                  }
}


 
























