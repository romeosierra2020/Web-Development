/*
Class InputHandler
values  
    Selection

Methods 
    identifyInput()
    set event listeners()
*/
//import Game from './dndgame.js';

export default class DndIO {
    

    
    //set listeners to call function that returns button clicked
    setListeners() {
 // Ascii value of capital A
        // set event listeners for buttons A thru' J
        document.addEventListener('click', function(event) {
            console.log(event.toElement.id);
        });
        }
        
    
    // Called from event listeners. Updates game class on selection made.
    button(event) {
        const ASCIIA = 65; 
        //game.playerSelection = selection;
        console.log(event);
    }

}


