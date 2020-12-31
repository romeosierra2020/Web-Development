//import {box, display} from './dndinit.js';
import { game } from './dndinit.js';
export default class DndIO {
    constructor() {
        document.addEventListener('click', event => {
            this.inputEvent(event.toElement.id);
        });
    }
    inputEvent(input) {
        switch(input) {
            case 'btnOpt':
                game.buttonPressed = 10;
                break;
            default :
                game.buttonPressed = input.charCodeAt(3)-65;
                break;
        }
    }

}