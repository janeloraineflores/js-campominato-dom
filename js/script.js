/*
--------------------------------------------------------------------------------------------------
                           PRIMA PARTE  CONSEGNA

 - L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
 - Ogni cella ha un numero progressivo, da 1 a 100.
 - Ci saranno quindi 10 caselle per ognuna delle 10 righe.
 - Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un 
    messaggio in console con il numero della cella cliccata.

----------------------------------------------------------------------------------------------------
*/


/* 
---------------------------------------------------------------------------------------------------------------------------------------------------------------
                        SECONDA PARTE CONSEGNA

    - Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: LE BOMBE
      (Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell'array delle bombe 
        non potranno esserci due numeri uguali.)
    - In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - 
     abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro 
     e l'utente può continuare a cliccare sulle altre celle.
    - La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti 
      (ovvero quando ha rivelato tutte le celle che non sono bombe).
    - Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha cliccato su una cella che non era una bomba.
    
-----------------------------------------------------------------------------------------------------------------------------------------------------------------
*/


// Creo una variabile per il buttone 
const myButton = document.querySelector('button');

myButton.addEventListener ('click',
    
    function () {

        // Prendo il mio container da HTML
        const gridContainer = document.querySelector('.grid-container');
        gridContainer.innerHTML = '';

        // Creo un ciclo di numeri da 1 a 100
        for (let i = 1; i <= 100; i++) {

            // Creo un elemento HTML per mettere i miei numeri da 1 a 100
            const newCell = document.createElement('div');
            newCell.append(i);
            newCell.classList.add('cell');
                        

            gridContainer.append(newCell);

            
        }

        newCell.addEventListener ('click', function () {
            if (randomNumbers.includes(this.innerHTML)) {
                newCell.classList.add('red');
            }

        });

        // Genero 16 numeri casuali 

        const randomNumbers = [];

        const x = 16;

        while (randomNumbers.length < x) {
            const aNumber = randomNumber(1, 100);
            console.log('aNumber', aNumber, typeof aNumber);

            if (!randomNumbers.includes(aNumber)) {
                randomNumbers.push(aNumber);
            }
            
        }

        console.log(randomNumbers);


        function randomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1) ) + min;
        }

                
       
       
        
        
    },


)






