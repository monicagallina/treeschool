//Esercizio 1 dato il mock di partenza, stampa in console la lista dei prodotti;
//Esercizio 2 dato il mock di partenza, stampa in console il terzo oggetto della lista dei prodotti, cioé le cuffie...
//Esercizio 3 dato il mock di partenza, stampa in consolela lista dei prodotti che costano meno di 200 euro
//Esercizio 4 dato il mock di partenza, stampa in console il prodotto con id 8, (ATTENZIONE:come oggetto non come lista)
//Esercizio 5 dato il mock di partenza, stampa in console solo i nomi dei prodotti presenti nel mock


// es 1

import products from "./mock.json" assert {type: "json"};

console.log(products.productsList);

// 2
console.log(products.productsList[2])

//3
function costsLess(element){
    for (let i=0; i<products.productsList.length; i++){
    if (productsList[i].price < 200){
    console.log(products.productsList[i])
    }
    else null
}
}


//4 
function findId(){
    for (let j=0; j<products.productsList.length; j++){
        if (products.productsList[j].id === 8){
        console.log(products.productsList[j])
    }
}
}

findId()

//5 

function printNames(){
    for (let d=0; d<products.productsList.length; d++){
        console.log(products.productsList[d].name)
    }
}

printNames()