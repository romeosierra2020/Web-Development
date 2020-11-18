window.onload = function(){
let indexComparison = 0;
let referenceArray = [  ['visionPeripheral','no'],
                        ['visionCentral','no'],
                        ['techLevel','none'],
                        ['locationHome',''],
                        ['publicSeating',''],
                        ['publicMobile',''],
                        ['awayHotel',''],
                        ['controlTactile',''],
                        ['controlTouchscreen',''],
                        ['controlVoice',''],
                        ['controlMouse',''],
                        ['outputAudio',''],
                        ['outputVisual',''],
                        ['internetNone',''],
                        ['internetPrivate',''],
                        ['internetPublic',''],
                        ['internetHotspot',''],
                        ['internetDongle',''],
                        ['deviceSmartphone',''],
                        ['deviceTablet',''],
                        ['deviceDesktop',''],
                        ['deviceLaptop',''],
                        ['osGoogle',''],
                        ['osWindows',''],
                        ['osMac',''],
                        ['osIOS',''],
                        ['osAndroid',''],
                        ['osFire',''],
                        ['correspondence',''],
                        ['booksMainstream',''],
                        ['booksSpecialist',''],
                        ['sellByDates',''],
                        ['handsFreeReading',''],
                        ['locatingItems',''],
                        ['calendar',''],
                        ['notesReminders',''],
                        ['weather',''],
                        ['news',''],
                        ['generalInformation',''],
                        ['routePlanning',''],
                        ['publicTransport',''],
                        ['audioCalls',''],
                        ['videoCalls',''],
                        ['sendSMS',''],
                        ['readSMS',''],
                        ['productIdentification',''],
                        ['indoorNavigation',''],
                        ['colourIdentification',''],
                        ['internetAccess','']      
                    ];
let solutions = {solutionName: '', 
                visionPeripheral:'',
                visionCentral:'',
                techLevel:'',
                locationHome:'',
                publicSeating:'',
                publicMobile:'',
                awayHotel:'',
                controlTactile:'',
                controlTouchscreen:'',
                controlVoice:'',
                controlMouse:'',
                outputAudio:'',
                outputVisual:'',
                internetNone:'',
                internetPrivate:'',
                internetPublic:'',
                internetHotspot:'',
                internetDongle:'',
                deviceSmartphone:'',
                deviceTablet:'',
                deviceDesktop:'',
                deviceLaptop:'',
                osGoogle:'',
                osWindows:'',
                osMac:'',
                osIOS:'',
                osAndroid:'',
                osFire:'',
                correspondence:'',
                booksMainstream:'',
                booksSpecialist:'',
                sellByDates:'',
                handsFreeReading:'',
                locatingItems:'',
                calendar:'',
                notesReminders:'',
                weather:'',
                news:'',
                generalInformation:'',
                routePlanning:'',
                publicTransport:'',
                audioCalls:'',
                videoCalls:'',
                sendSMS:'',
                readSMS:'',
                productIdentification:'',
                indoorNavigation:'',
                colourIdentification:'',
                internetAccess:'',
                link:''};
let solutionsArray=[];
solutionsArray.push([solutionName= 'Compact HD+', 
visionPeripheral='yes',
visionCentral='yes',
techLevel='None',
locationHome='',
publicSeating='',
publicMobile='',
awayHotel='',
controlTactile='',
controlTouchscreen='',
controlVoice='',
controlMouse='',
outputAudio='',
outputVisual='',
internetNone='',
internetPrivate='',
internetPublic='',
internetHotspot='',
internetDongle='',
deviceSmartphone='',
deviceTablet='',
deviceDesktop='',
deviceLaptop='',
osGoogle='',
osWindows='',
osMac='',
osIOS='',
osAndroid='',
osFire='',
correspondence='',
booksMainstream='',
booksSpecialist='',
sellByDates='',
handsFreeReading='',
locatingItems='',
calendar='',
notesReminders='',
weather='',
news='',
generalInformation='',
routePlanning='',
publicTransport='',
audioCalls='',
videoCalls='',
sendSMS='',
readSMS='',
productIdentification='',
indoorNavigation='',
colourIdentification='',
internetAccess='',
link='Page2.html']);

solutionsArray.push([solutionName= 'Compact HD+1', 
visionPeripheral='yes',
visionCentral='yes',
techLevel='None',
locationHome='',
publicSeating='',
publicMobile='',
awayHotel='',
controlTactile='',
controlTouchscreen='',
controlVoice='',
controlMouse='',
outputAudio='',
outputVisual='',
internetNone='',
internetPrivate='',
internetPublic='',
internetHotspot='',
internetDongle='',
deviceSmartphone='',
deviceTablet='',
deviceDesktop='',
deviceLaptop='',
osGoogle='',
osWindows='',
osMac='',
osIOS='',
osAndroid='',
osFire='',
correspondence='',
booksMainstream='',
booksSpecialist='',
sellByDates='',
handsFreeReading='',
locatingItems='',
calendar='',
notesReminders='',
weather='',
news='',
generalInformation='',
routePlanning='',
publicTransport='',
audioCalls='',
videoCalls='',
sendSMS='',
readSMS='',
productIdentification='',
indoorNavigation='',
colourIdentification='',
internetAccess='',
link='Page3.html']);

solutionsArray.push([solutionName= 'Compact HD+2', 
visionPeripheral='yes',
visionCentral='yes',
techLevel='None',
locationHome='',
publicSeating='',
publicMobile='',
awayHotel='',
controlTactile='',
controlTouchscreen='',
controlVoice='',
controlMouse='',
outputAudio='',
outputVisual='',
internetNone='',
internetPrivate='',
internetPublic='',
internetHotspot='',
internetDongle='',
deviceSmartphone='',
deviceTablet='',
deviceDesktop='',
deviceLaptop='',
osGoogle='',
osWindows='',
osMac='',
osIOS='',
osAndroid='',
osFire='',
correspondence='',
booksMainstream='',
booksSpecialist='',
sellByDates='',
handsFreeReading='',
locatingItems='',
calendar='',
notesReminders='',
weather='',
news='',
generalInformation='',
routePlanning='',
publicTransport='',
audioCalls='',
videoCalls='',
sendSMS='',
readSMS='',
productIdentification='',
indoorNavigation='',
colourIdentification='',
internetAccess='',
link='Page4.html']);


solutionsArray.push([solutionName= 'Compact HD+3', 
visionPeripheral='yes',
visionCentral='yes',
techLevel='None',
locationHome='',
publicSeating='',
publicMobile='',
awayHotel='',
controlTactile='',
controlTouchscreen='',
controlVoice='',
controlMouse='',
outputAudio='',
outputVisual='',
internetNone='',
internetPrivate='',
internetPublic='',
internetHotspot='',
internetDongle='',
deviceSmartphone='',
deviceTablet='',
deviceDesktop='',
deviceLaptop='',
osGoogle='',
osWindows='',
osMac='',
osIOS='',
osAndroid='',
osFire='',
correspondence='',
booksMainstream='',
booksSpecialist='',
sellByDates='',
handsFreeReading='',
locatingItems='',
calendar='',
notesReminders='',
weather='',
news='',
generalInformation='',
routePlanning='',
publicTransport='',
audioCalls='',
videoCalls='',
sendSMS='',
readSMS='',
productIdentification='',
indoorNavigation='',
colourIdentification='',
internetAccess='',
link='Page5.html']);

solutionsArray.push([solutionName= '', 
visionPeripheral='',
visionCentral='',
techLevel='',
locationHome='',
publicSeating='',
publicMobile='',
awayHotel='',
controlTactile='',
controlTouchscreen='',
controlVoice='',
controlMouse='',
outputAudio='',
outputVisual='',
internetNone='',
internetPrivate='',
internetPublic='',
internetHotspot='',
internetDongle='',
deviceSmartphone='',
deviceTablet='',
deviceDesktop='',
deviceLaptop='',
osGoogle='',
osWindows='',
osMac='',
osIOS='',
osAndroid='',
osFire='',
correspondence='',
booksMainstream='',
booksSpecialist='',
sellByDates='',
handsFreeReading='',
locatingItems='',
calendar='',
notesReminders='',
weather='',
news='',
generalInformation='',
routePlanning='',
publicTransport='',
audioCalls='',
videoCalls='',
sendSMS='',
readSMS='',
productIdentification='',
indoorNavigation='',
colourIdentification='',
internetAccess='']);            
    
alert('hi');
let parsedArray= [];


function ParseURL(){
    var fullURL = window.location.href;
    var parameterArray = fullURL.split('&');
    for (var i = 0; i<parameterArray.length; i++){
        var currentParameter = parameterArray[i].split('=');
        parsedArray.push(currentParameter);
        }
    
}

function BuildUser(){
    for(var i = 0; i<referenceArray.length; i++) {
        for(var i1 = 0; i1 < parsedArray.length; i1++){
            if(referenceArray[i][0] == parsedArray[i1][0]) {
                referenceArray[i][1]= parsedArray[i1][1];
                break;
            } 
        }
    }
}

function IdentiifySolutions(){
    let keep = true;
    for(var i = 0; i< solutionsArray.length; i++){
        // Check Vision
        if ((referenceArray[0][1]=='yes' && solutionsArray[i][1] == 'yes')||(referenceArray[1][1]=='yes' && solutionsArray[i][2] == 'yes')){
            break;
        } else {
            keep = false;
        }
        // check Tech Abiility
        if((referenceArray[2][1] == "None" && solutionsArray[i][3] != "None")||
            ((referenceArray[2][1] == "Basic") && (solutionsArray[i][3] =="Intermediate" || solutionsArray[i][3] =="Advanced"))||
            (referenceArray[2][1] == "Intermediate" && solutionsArray[i][3] =="Advanced")){
                keep = false;
            }
        // check Location
        if((referenceArray[3][1] == solutionsArray[i][4])||
        (referenceArray[4][1] == solutionsArray[i][5])||
        (referenceArray[5][1] == solutionsArray[i][6])||
        (referenceArray[6][1] == solutionsArray[i][7])){
            break;
        } else {
            keep = false;
        }
        // check Input Method
        if((referenceArray[7][1] == solutionsArray[i][8])||
        (referenceArray[8][1] == solutionsArray[i][9])||
        (referenceArray[9][1] == solutionsArray[i][10])||
        (referenceArray[10][1] == solutionsArray[i][11])){
            break;
        } else {
            keep = false;
        }
        // check Output Method
        if((referenceArray[11][1] == solutionsArray[i][12])||
        (referenceArray[12][1] == solutionsArray[i][13])){
            break;
        } else {
            keep = false;
        }
        // check Internet
        if((referenceArray[13][1] == solutionsArray[i][14])||
        (referenceArray[14][1] == solutionsArray[i][15])||
        (referenceArray[15][1] == solutionsArray[i][16])||
        (referenceArray[16][1] == solutionsArray[i][17])){
            break;
        } else {
            keep = false;
        }
        // check Device
        if((referenceArray[17][1] == solutionsArray[i][18])||
        (referenceArray[18][1] == solutionsArray[i][19])||
        (referenceArray[19][1] == solutionsArray[i][20])||
        (referenceArray[20][1] == solutionsArray[i][21])){
            break;
        } else {
            keep = false;
        }
        // check Operating System
        if((referenceArray[21][1] == solutionsArray[i][22])||
        (referenceArray[22][1] == solutionsArray[i][23])||
        (referenceArray[23][1] == solutionsArray[i][24])||
        (referenceArray[24][1] == solutionsArray[i][25])||
        (referenceArray[25][1] == solutionsArray[i][26])||
        (referenceArray[26][1] == solutionsArray[i][27])){
            break;
        } else {
            keep = false;
        }
        // check Tasks
        if((referenceArray[27][1] == solutionsArray[i][28])||
        (referenceArray[28][1] == solutionsArray[i][29])||
        (referenceArray[29][1] == solutionsArray[i][30])||
        (referenceArray[30][1] == solutionsArray[i][31])||
        (referenceArray[31][1] == solutionsArray[i][32])||
        (referenceArray[32][1] == solutionsArray[i][33])||
        (referenceArray[33][1] == solutionsArray[i][34])||
        (referenceArray[34][1] == solutionsArray[i][35])||
        (referenceArray[35][1] == solutionsArray[i][36])||
        (referenceArray[36][1] == solutionsArray[i][37])||
        (referenceArray[37][1] == solutionsArray[i][38])||
        (referenceArray[38][1] == solutionsArray[i][39])||
        (referenceArray[39][1] == solutionsArray[i][40])||
        (referenceArray[40][1] == solutionsArray[i][41])||
        (referenceArray[41][1] == solutionsArray[i][42])||
        (referenceArray[42][1] == solutionsArray[i][43])||
        (referenceArray[43][1] == solutionsArray[i][44])||
        (referenceArray[44][1] == solutionsArray[i][45])||
        (referenceArray[45][1] == solutionsArray[i][46])||
        (referenceArray[46][1] == solutionsArray[i][47])||
        (referenceArray[47][1] == solutionsArray[i][48])||
        (referenceArray[48][1] == solutionsArray[i][49])){
            break;
        } else {
            keep = false;
        }    
        if(keep == false){
            solutionsArray.splice(i,1);
        }
    }
    alert(keep);
}

ParseURL();
BuildUser();
IdentiifySolutions();
//display solutions
for (var i = 0; i<solutionsArray.length; i++){
    var element = document.createElement('div');
    var elementLink = document.createElement('a');
    element.innerHTML=solutionsArray[i][0];
    elementLink.href=solutionsArray[i][50];
    elementLink.innerHTML=solutionsArray[i][50];
    document.body.appendChild(element);
    document.body.appendChild(elementLink);
}


 //   document.getElementById("solution1").innerHTML = solutionsArray[0][0];



alert (referenceArray[48][0]);
alert(solutionsArray[0][49]);
}

