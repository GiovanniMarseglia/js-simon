// Descrizione:
// fruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani! Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di domani mattina!
// Consigli del giorno:
// Questo esercizio richiede un po' di ricerca ma anche un po' di domande che accompagnano l'uomo da tempo immemore:
// Da quante ore è composto un giorno?
// Da quanti minuti è composta un'ora?
// Da quanti secondi è composto un minuto?
// Da quanti millisecondi è composto un secondo?
// Quanti millisecondi mi separano da domani alle 9:30?

let ora = new Date().getHours();
let minuti = new Date().getMinutes();
let secondi = new Date().getSeconds();


console.log(ora,minuti,secondi)

if(ora=9){
    ora=0
}else if((ora<24)&&(ora>9)){
    ora=(23-ora)+9
    console.log(ora)
    
}else{
    ora=9-ora
}

if((minuti<=30)&&(minuti>=0)){
    minuti=(30-minuti)
    console.log(minuti)
}else if((minuti>30)&&(minuti<59)){
    minuti=(59-minuti)+30
}


console.log("pausa")


const myInterval = setInterval(function(){

    if((ora==0) && (minuti==30) && (secondi==0)){
        console.log("la lezione è iniziata")
        myInterval.clearInterval()
    }else if((secondi==0)&&(minuti==0)){
        ora=ora-1
        minuti=59
        secondi=60
    }else if(secondi==0){
        secondi=60
        minuti=minuti-1
    }else{
        secondi=secondi-1
    }

    console.log(ora,minuti,secondi)
}, 1000);















