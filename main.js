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


let orerimanenti=0
let minutirimanenti=0
let secondirimanenti=60-secondi



if((ora<24)&&(ora>10)){
    orerimanenti=(24-ora)+9
    console.log(orerimanenti)
    
}else{
    orerimanenti=9-ora
}

if((minuti<=30)&&(minuti>=0)){
    minutirimanenti=(30-minuti)
    console.log(minutirimanenti)
}else if((minuti>30)&&(minuti<59)){
    minutirimanenti=(minuti-60)+30
}

console.log("pausa")



let totalesecondi=orerimanenti+minutirimanenti+secondirimanenti




const myInterval = setInterval(function(){

    if((orerimanenti==0) && (minuti==30) && (secondi==0)){
        console.log("la lezione è iniziata")
        clearInterval()
    }else if((secondirimanenti==0)&&(minutirimanenti==0)){
        orerimanenti=orerimanenti-1
    }else if(secondirimanenti==0){
        minuti=minuti-1
    }else if(secondi==0){
        secondi=60
        minuti=minuti-1
    }else{
        secondi=secondi-1
    }


    // if(totalesecondi>0){
    //     totalesecondi=totalesecondi-1
    //     console.log(totalesecondi)
    // }else{
    //     clearInterval()
    // }
    console.log(orerimanenti,minuti,secondi)
}, 1000);















