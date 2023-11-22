//Esercizio 1 dato il mock di partenza, stampa in console la lista dei prodotti;
//Esercizio 2 dato il mock di partenza, stampa in console il terzo oggetto della lista dei prodotti, cioé le cuffie...
//Esercizio 3 dato il mock di partenza, stampa in consolela lista dei prodotti che costano meno di 200 euro
//Esercizio 4 dato il mock di partenza, stampa in console il prodotto con id 8, (ATTENZIONE:come oggetto non come lista)
//Esercizio 5 dato il mock di partenza, stampa in console solo i nomi dei prodotti presenti nel mock



import products from "./mock.json" assert {type: "json"};

// Esercizio 1 dato il mock di partenza, stampa in console la lista dei prodotti;
console.log(products.productsList);

// Esercizio 2 dato il mock di partenza, stampa in console il terzo oggetto della lista dei prodotti, cioé le cuffie...
console.log(products.productsList[2])

///Esercizio 3 dato il mock di partenza, stampa in consolela lista dei prodotti che costano meno di 200 euro

console.log(products.productsList.filter((products) => products.price<200))

// 3 con ciclo
function costsLess(element){
    for (let i=0; i<products.productsList.length; i++){
    if (productsList[i].price < 200){
    console.log(products.productsList[i])
    }
    else null
}
}

// Esercizio 4 dato il mock di partenza, stampa in console il prodotto con id 8, (ATTENZIONE:come oggetto non come lista)
console.log(products.productsList.filter((el) => el.id === 8));


//4 correzione
console.log(products.productsList.filter((el) => el.id === 8)[i]);


//4 con ciclo
function findId(){
    for (let j=0; j<products.productsList.length; j++){
        if (products.productsList[j].id === 8){
        console.log(products.productsList[j])
    }
}
}

findId()


//Esercizio 5 dato il mock di partenza, stampa in console solo i nomi dei prodotti presenti nel mock
console.log(products.productsList.forEach((el)=> el.name));



//5 con ciclo

function printNames(){
    for (let d=0; d<products.productsList.length; d++){
        console.log(products.productsList[d].name)
    }
}

printNames()

//5 correzione 
products.productsList.map((prod)=> console.log(prod.name))
