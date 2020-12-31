const buttons = document.querySelectorAll('button');
const turbulence = document.querySelector('feTurbulence');
let verticalFrequency = 0.00001;
turbulence.setAttribute('baseFrequency', verticalFrequency + ' 0.00001');
const steps = 30;
const interval = 10;
console.log(buttons);

buttons.forEach(function(button) {
    button.addEventListener('mouseover', function() {
        let veticalFrequency = 0.00001;
        for(i=0; i<steps; i++) {
            setTimeout(function() {
                verticalFrequency += 0.009;
                turbulence.setAttribute('baseFrequency', verticalFrequency + ' 0.00001');
            }, i*interval);
        }
        setTimeout(function() {
            verticalFrequency = 0.00001;
            turbulence.setAttribute('baseFrequency', verticalFrequency + ' 0.00001');
        }, steps * interval);
    });
});