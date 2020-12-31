
import {box, display} from './dndinit.js';
export default class DndIO {
    constructor(game) {
        document.addEventListener('click', event => {
            game.inputSelection = (event.toElement.id);
            game.inputReaction(box, display);

        });
    }

}

