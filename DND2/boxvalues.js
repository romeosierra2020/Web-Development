
import {values} from './dndinit.js';

export default class BoxValues {
    constructor() {
        this.values = [  [0.01, true, 'value0', '1p'],
                        [1, true, 'value1', '£1.00'],
                        [5, true, 'value2', '£5.00'],
                        [10, true, 'value3', '£10.00'],
                        [50, true, 'value4', '£50.00'],
                        [100, true, 'value5', '£100'],
                        [500, true, 'value6', '£500'],
                        [1000, true, 'value7', '£1,000'],
                        [5000, true, 'value8', '£5,000'],
                        [10000, true, 'value9', '£10,000']];
    }



    

    display(display) {
        for(let i = 0; i < this.values.length; i++) {
            if(this.values[i][1] === true){
                display.renderValue(this.values[i][3],this.values[i][2]);
            } else {
                display.renderValue(null,this.values[i][2]);
            }
        }

    }

    reset() {
        for (let i=0; i < this.values.length; i++) {
            this.values[i][1] = true;
        }

    }

    updateValuesInPlay(box) {
        this.values[box.value][1] = false;
    }

    leftInPlay() {
        let count =0;
        let total = 0;
        for(let i = 0; i< this.values.length; i++) {
            if(this.values[i][1] === true) {
                count ++;
                total += this.values[i][0];
            }
        }
        return(total/count);
    }
}