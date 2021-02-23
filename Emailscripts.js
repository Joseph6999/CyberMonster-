var show = 1;
var epages= new Array();
        epages[0] = "Email1.html";
        epages[1] = "Email2.html";
        epages[2] = "Email3.html";
        epages[3] = "Email4.html";
        epages[4] = "Email5.html";
        epages[5] = "Email6.html";
        epages[6] = "Email7.html";
        epages[7] = "Email8.html";
        epages[8] = "Email9.html";
        epages[9] = "Email10.html";
        epages[10] = "Email11.html";
        epages[11] = "Email12.html";
        epages[12] = "Email13.html";
        epages[13] = "Email14.html";
        epages[14] = "Email15.html";
        epages[15] = "Email16.html";
        epages[16] = "Email17.html";
        epages[17] = "Email18.html";
        epages[18] = "Email19.html";
        epages[19] = "Email20.html";
        epages[20] = "Email21.html";
        epages[21] = "Email22.html";
        epages[22] = "Email23.html";
        epages[23] = "Email24.html";
        epages[24] = "Email25.html";
        epages[25] = "Email26.html";
        epages[26] = "Email27.html";
        epages[27] = "Email28.html";
        epages[28] = "Email29.html";
        epages[29] = "Email30.html";


function switchToEmail3() {
          
    document.getElementById("module3").innerHTML =`

        <iframe src="Email3.html"
            style="position:fixed;
            margin:0px;
            border:none;
            width:100%; height:100%;
            ">
        </iframe>
                    
    `;
}

function switchToEmail10() {
          
    document.getElementById("bye").innerHTML =`
    

        <iframe src="Email10.html"
            style="position:fixed;
            margin:0px;
            border:none;
            width:100%; height:100%;
            ">
        </iframe>
                    
    `;
}

var emailCounter =1;
function nextEamil(){
    switch(emailCounter){
        case 1:
            document.getElementById("module3").innerHTML =email3;
            break;
        case 2:
            document.getElementById("module3").innerHTML =email10;
            break;
        case 3:
            document.getElementById("module3").innerHTML =email13;
            break;
        case 4:
            document.getElementById("module3").innerHTML =email9;
            break;
        case 5:
            document.getElementById("module3").innerHTML =email23;
            break;
        case 6:
            level++;
            levelPassed = true;
            switchBack();
        

    }

    emailCounter++
    
}
//var inspectMode = false;

var ty=0;
var txtW = 'HACK DETECTED! HACK DETECTED!';
var speed = 50;

var prompt = document.getElementById("successPrompt");
var spanClose = document.getElementsByClassName("close")[0];
var audioS = document.getElementById("audioSuccess");
var audioF = document.getElementById("audioFailure");


function typeAnim() {

    //Animation for typing
    
    if (ty < txtW.length) {
        document.getElementById("hack").innerHTML += txtW.charAt(ty);
        ty++;
        setTimeout(typeAnim,speed);
    }
}


//Display Prompts for Success

function success() {
    
    //Default Layout
    
    successPrompt.style.display = "block";
    audioS.play();
}

function successF() {
    
    //From
    
    successFrom.style.display = "block";
    audioS.play();
}

function successT() {
    
    //To
    
    successTo.style.display = "block";
    audioS.play();
}

function successS() {
    
    //Subject
    
    successSubject.style.display = "block";
    audioS.play();
}

function successD() {
    
    //Dear
    
    successDear.style.display = "block";
    audioS.play();
}

function successB() {
    
    //Body
    
    successBody.style.display = "block";
    audioS.play();
}

function successL() {
    
    //Links
    
    successLink.style.display = "block";
    audioS.play();
}

function successA() {
    
    //Attachments
    
    successAttach.style.display = "block";
    atConfirm.style.display = "none";
    audioS.play();
}




function successN() {
    
    //Button for no part of the email is wrong.
    
    successNothing.style.display = "block";
    audioS.play();
}

function successExBu() {
    
    //Button Prompt for certain email
    
    successExtraButton.style.display = "block";
    buConfirm.style.display = "none";
    audioS.play();
}


function closeSPrompt() {
    
    //Closing any prompt
    
    successFrom.style.display = "none";
    successTo.style.display = "none";
    successSubject.style.display = "none";
    successDear.style.display = "none";
    successBody.style.display = "none";
    successLink.style.display = "none";
    successAttach.style.display = "none";
    successNothing.style.display = "none";
    successExtraButton.style.display = "none";
}

function failure() {
    
    //Default Layout
    
    failurePrompt.style.display= "block";
    audioF.play();
}

function failureF() {
    
    //From
    
    failureFrom.style.display= "block";
    audioF.play();
}

function failureT() {
    
    //To
    
    failureTo.style.display= "block";
    audioF.play();
    
}


function failureS() {
    
    //Subject
    
    failureSubject.style.display= "block";
    audioF.play();
}

function failureD() {
    
    //Dear
    
    failureDear.style.display= "block";
    audioF.play();
}

function failureB() {
    
    //Body
    
    failureBody.style.display= "block";
    audioF.play();
}

function failureL() {
    
    //Link
    
    failureLink.style.display= "block";
    audioF.play();
}

function failureA() {
    
    //Attachment
    
    failureAttach.style.display= "block";
    atConfirm.style.display = "none";
    audioF.play();
}

function failureN() {
    
    //Button for no part of the email is wrong.
    
    failureNothing.style.display= "block";
    audioF.play();
}

function failureExBu() {
    
    //Button Prompt for certain email
    
    failureExtraButton.style.display = "block";
    buConfirm.style.display = "none";
    audioF.play();
}


function closeFPrompt() {
    
    failureFrom.style.display = "none";
    failureTo.style.display = "none";
    failureSubject.style.display = "none";
    failureDear.style.display = "none";
    failureBody.style.display = "none";
    failureLink.style.display = "none";
    failureAttach.style.display = "none";
    failureNothing.style.display = "none";
    failureExtraButton.style.display = "none";
    
}

function attachConfirm() {
    
    //Open attachment prompt
    
    atConfirm.style.display = "block";

    
}

function buttonConfirm() {
    
    //Open attachment prompt
    
    buConfirm.style.display = "block";

    
}

function closePrompt() {
    atConfirm.style.display = "none";
}

function audioSuccess() {
    audioS.play();
}



let counter = 0;

function switchBack2(){
                switchBack();
                document.getElementById("module3").style.display = "none";
                document.getElementById("gameContainer").style.display = "block"; 
            }