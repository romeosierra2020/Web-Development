


const btn = document.querySelector('#visionButton');

let usefulPeripheral = false;
let usefulCentral = false;
// handle click button
visionButton.onclick = function () {
    const rbsPeripheral = document.querySelectorAll('input[name="visionPeripheral"]');
    const rbsCentral = document.querySelectorAll('input[name="visionCentral"]');
    
    for (const rb of rbsPeripheral) {
        if (rb.checked) {
            if (rb.value === "yes"){
                usefulPeripheral = true;
            }
            else {
                usefulPeripheral= false;
            }
            break;
        }
    }
    for (const rb1 of rbsCentral) {
        if (rb1.checked) {
            if (rb1.value === "yes"){
                usefulCentral = true;
            }
            else {
                usefulCentral= false;
            }

            break;
        }
    }
    alert(usefulPeripheral);
    alert(usefulCentral);
};


