export default class BoxValues {
    constructor() {
        this.values = [  [0.01, true, 'value0', '1p'],
                        [1, true, 'value1', '£1.00'],
                        [5, true, 'value2', '£5.00'],
                        [10, true, 'value3', '£10.00'],
                        [50, false, 'value4', '£50.00'],
                        [100, true, 'value5', '£100'],
                        [500, true, 'value6', '£500'],
                        [1000, true, 'value7', '£1,000'],
                        [5000, true, 'value8', '£5,000'],
                        [10000, true, 'value9', '£10,000']];
    }
    initialise() {
        for (let i=0; i < this.values.length; i++) {
            this.values[i][1] = true;
        }
    }
    draw() {
        for(let i = 0; i < this.values.length; i++) {
            if(this.values[i][1]) {
                document.getElementById(this.values[i][2]).innerHTML = this.values[i][3];
            } else {
                document.getElementById(this.values[i][2]).innerHTML = '';
            }
        }

    }
}