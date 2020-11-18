const xhttp = new XMLHttpRequest();  
const results = document.getElementById("solutionElements");
let userInput = document.URL;
let solutionsArray;
let solutionsText;
let userIndex = 0;

let userProfile = [
            "visionPeripheral",
            "visionCentral",
            "techLevel",
            "locationHome",
            "publicSeating",
            "publicMobile",
            "awayHotel",
            "controlTactile",
            "controlTouchscreen",
            "controlVoice",
            "controlMouse",
            "outputAudio",
            "outputVisual",
            "internetNone",
            "internetPrivate",
            "internetPublic",
            "internetHotspot",
            "internetDongle",
            "deviceSmartphone",
            "deviceTablet",
            "deviceDesktop",
            "deviceLaptop",
            "osGoogle",
            "osWindows",
            "osMac",
            "osIOS",
            "osAndroid",
            "osFire",
            "productLabels",
            "correspondence",
            "booksMainstream",
            "booksSpecialist",
            "sellByDates",
            "handsfreeReading",
            "locatingItems",
            "calendar",
            "notesReminders",
            "weather",
            "news",
            "generalInformation",
            "eMails",
            "routePlanning",
            "publicTransport",
            "audioCalls",
            "videoCalls",
            "sendSMS",
            "readSMS",
            "productIdentification",
            "indoorNavigation",
            "colourIdentificattion",
            "internetAccess"
];



function loadDoc() {
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      solutionsText = this.responseText;
    } else {
        //Notify Error
    }
  };
  xhttp.open("GET", "solutions.json", true);
  xhttp.send();
}

function parseInput() {
    userInput = userInput.split("?");
    userInput = userInput[1].split('&');
    for(let i = 0; i<userInput.length; i++) {
        userInput[i] = userInput[i].split("=");
    }

}

function buildUser() {

    for(let i = 0; i<userProfile.length; i++) {
        if(userProfile[i] === userInput [userIndex] [0]){
            userProfile[i] = userInput[userIndex][1];
            userIndex +=1; 
            if(userIndex == userInput.length) {
                break;
            }
        }
    }
}

function parseDoc() {
    solutionsArray = JSON.parse(solutionsText);
}

function compare() {
    let keepFlag = true;
    console.log(solutionsArray[0].solutionProperties[0].visionPeripheral, userProfile[1]);
    for(let i = solutionsArray.length-1; i>0; i--) {

        keepFlag = true;
        if(solutionsArray[i].solutionProperties[0].visionPeripheral != userProfile[0] &&
            solutionsArray[i].solutionProperties[0].visionCentral != userProfile[1]) {
                keepFlag = false;
            }

        if((solutionsArray[i].solutionProperties[0].techLevel == "Advanced" && userProfile[2] != "Advanced") ||
            (solutionsArray[i].solutionProperties[0].techLevel == "Intermediate" && (userProfile[2] != "Advanced" || userProfile[2] != "Intermediate")) ||
            (solutionsArray[i].solutionProperties[0].techLevel == "Basic" &&(userProfile[2] != "Basic" || userProfile[2] != "Intermediate"  ||userProfile[2] != "Advanced"))) {
                keepFlag = false;
            } 


        if((solutionsArray[i].solutionProperties[0].locationHome != userProfile[3]) &&
            (solutionsArray[i].solutionProperties[0].publicSeating != userProfile[4]) &&
            (solutionsArray[i].solutionProperties[0].publicMobile != userProfile[5]) &&
            (solutionsArray[i].solutionProperties[0].awayHotel != userProfile[6])) {
                keepFlag = false;
            } 

        if(solutionsArray[i].solutionProperties[0].controlTactile != userProfile[7] &&
            solutionsArray[i].solutionProperties[0].controlTouchscreen != userProfile[8] &&
            solutionsArray[i].solutionProperties[0].controlVoice != userProfile[9] &&
            solutionsArray[i].solutionProperties[0].controlMouse != userProfile[10]) {
                keepFlag = false;
            }  

        if(solutionsArray[i].solutionProperties[0].outputAudio != userProfile[11] &&
            solutionsArray[i].solutionProperties[0].outputVisual != userProfile[12]) {
                keepFlag = false;
            }

        if(solutionsArray[i].solutionProperties[0].internetNone != userProfile[13] &&
            solutionsArray[i].solutionProperties[0].internetPrivate != userProfile[14] &&
            solutionsArray[i].solutionProperties[0].internetPublic != userProfile[15] &&
            solutionsArray[i].solutionProperties[0].internetHotspot != userProfile[16] &&
            solutionsArray[i].solutionProperties[0].internetDongle != userProfile[17]) {
                keepFlag = false;
            }

        if(solutionsArray[i].solutionProperties[0].deviceSmartphone != userProfile[18] &&
            solutionsArray[i].solutionProperties[0].deviceTablet != userProfile[19] &&
            solutionsArray[i].solutionProperties[0].deviceDesktop != userProfile[20] &&
            solutionsArray[i].solutionProperties[0].deviceLaptop != userProfile[21] &&
            (userProfile[18] == "on" || userProfile[19] == "on" || userProfile[20] == "on" || userProfile[21] == "on")) {
                keepFlag = false;
            }

        if(solutionsArray[i].solutionProperties[0].osGoogle != userProfile[22] &&
            solutionsArray[i].solutionProperties[0].osWindows != userProfile[23] &&
            solutionsArray[i].solutionProperties[0].osMac != userProfile[24] &&
            solutionsArray[i].solutionProperties[0].osIOS != userProfile[25] &&
            solutionsArray[i].solutionProperties[0].osAndroid != userProfile[26] &&            
            solutionsArray[i].solutionProperties[0].osFire != userProfile[27] &&
            (userProfile[22] == "on" || userProfile[23] == "on" || userProfile[24] == "on" || userProfile[25] == "on" || userProfile[26] == "on")) {
                keepFlag = false;
            }
         console.log(keepFlag); 
        if(solutionsArray[i].solutionProperties[0].productLabels != userProfile[28] &&
            solutionsArray[i].solutionProperties[0].correspondence != userProfile[29] &&
            solutionsArray[i].solutionProperties[0].booksMainstream != userProfile[30] &&
            solutionsArray[i].solutionProperties[0].booksSpecialist != userProfile[31] &&
            solutionsArray[i].solutionProperties[0].sellByDates != userProfile[32] &&  
            solutionsArray[i].solutionProperties[0].handsfreeReading != userProfile[33] &&
            solutionsArray[i].solutionProperties[0].locatingItems != userProfile[34] &&
            solutionsArray[i].solutionProperties[0].calendar != userProfile[35] &&
            solutionsArray[i].solutionProperties[0].notesReminders != userProfile[36] && 
            solutionsArray[i].solutionProperties[0].weather != userProfile[37] &&
            solutionsArray[i].solutionProperties[0].news != userProfile[38] &&
            solutionsArray[i].solutionProperties[0].generalInformation != userProfile[39] &&
            solutionsArray[i].solutionProperties[0].eMails != userProfile[40] && 
            solutionsArray[i].solutionProperties[0].routePlanning != userProfile[41] &&
            solutionsArray[i].solutionProperties[0].publicTransport != userProfile[42] &&
            solutionsArray[i].solutionProperties[0].audioCalls != userProfile[43] &&
            solutionsArray[i].solutionProperties[0].videoCalls != userProfile[44] && 
            solutionsArray[i].solutionProperties[0].sendSMS != userProfile[45] &&
            solutionsArray[i].solutionProperties[0].readSMS != userProfile[46] &&
            solutionsArray[i].solutionProperties[0].productIdentification != userProfile[47] &&
            solutionsArray[i].solutionProperties[0].indoorNavigation != userProfile[48] &&
            solutionsArray[i].solutionProperties[0].colourIdentificattion != userProfile[49] &&                                                            
            solutionsArray[i].solutionProperties[0].internetAccess != userProfile[50]) {
                keepFlag = false;
            }

        if(keepFlag == false){
            solutionsArray.splice(i,1);
        }
        
    }
    console.log(solutionsArray);
}

function displayResults() {
    let element;
    for(i=0; i<solutionsArray.length; i++) {
        element = document.createElement("p");
        element.innerHTML = solutionsArray[i].solutionName;
        document.body.appendChild(element);
        element = document.createElement("p");
        element.innerHTML = solutionsArray[i].solutionOneLiner;
        document.body.appendChild(element);
        element = document.createElement("BUTTON");
        element.innerHTML = "More";
        element.setAttribute("onclick", "location.href='" + solutionsArray[i].solutionURL + "'");
        element.setAttribute("id", "solution");
        element.setAttribute("target", "_blank");
        document.body.appendChild(element);
    }

        
}

loadDoc();
parseInput();
buildUser();
xhttp.onload = function() {
    parseDoc();
    compare();
    displayResults();
}

