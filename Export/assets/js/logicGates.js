notValue = true
andValue = false
input1 = false
input2 = false
orValue = false
function notGateToggle(){
    if (notValue){
        document.getElementById("blbNotGate").classList.remove('poweredOn');
        document.getElementById("blbNotGate").classList.add('poweredOff');
        document.getElementById("swtNotGate").classList.add('btnActive');
        notValue = false;
    }else{
        document.getElementById("blbNotGate").classList.remove('poweredOff');
        document.getElementById("blbNotGate").classList.add('poweredOn');
        document.getElementById("swtNotGate").classList.remove('btnActive');
        notValue = true;
    }
}

function input1Toggle(){
    if (input1){
        input1 = false;
        document.getElementById("swtInput1").classList.remove('btnActive');
    }else{
        input1 = true;
        document.getElementById("swtInput1").classList.add('btnActive');
    }
    let pageHeading = document.getElementById("pageHeading").textContent;
    if(pageHeading=="AND Gate"){
        andGateUpdate()
    }else if(pageHeading=="OR Gate"){
        orGateUpdate()
    }
}

function input2Toggle(){
    if (input2){
        input2 = false;
        document.getElementById("swtInput2").classList.remove('btnActive');
    }else{
        input2 = true;
        document.getElementById("swtInput2").classList.add('btnActive');
    }
    let pageHeading = document.getElementById("pageHeading").textContent;
    if(pageHeading=="AND Gate"){
        andGateUpdate()
    }else if(pageHeading=="OR Gate"){
        orGateUpdate()
    }
}

function andGateUpdate(){
    if (input1 && input2){
            document.getElementById("blbAndGate").classList.remove('poweredOff');
            document.getElementById("blbAndGate").classList.add('poweredOn');
            andValue = true;
    }else{
        if (andValue){
            document.getElementById("blbAndGate").classList.remove('poweredOn');
            document.getElementById("blbAndGate").classList.add('poweredOff');
            andValue = false;
        }
        }
    }

function orGateUpdate(){
    if (input1 || input2){
        if (!orValue){
            document.getElementById("blbOrGate").classList.remove('poweredOff');
            document.getElementById("blbOrGate").classList.add('poweredOn');
            orValue = true;
        }
    }else{
        if (orValue){
            document.getElementById("blbOrGate").classList.remove('poweredOn');
            document.getElementById("blbOrGate").classList.add('poweredOff');
            orValue = false;
        }
    }
}

function resetGate(){
    let pageHeading = document.getElementById("pageHeading").textContent;
    if(pageHeading=="AND Gate" || pageHeading=="OR Gate"){
        input1 = false;
        document.getElementById("swtInput1").classList.remove('btnActive');
        input2 = false;
        document.getElementById("swtInput2").classList.remove('btnActive');
        if(pageHeading=="AND Gate"){
            andGateUpdate()
        }else if(pageHeading=="OR Gate"){
            orGateUpdate()
        };
    }else if(pageHeading=="NOT Gate"){
        document.getElementById("blbNotGate").classList.add('poweredOn');
        document.getElementById("blbNotGate").classList.remove('poweredOff');
        document.getElementById("swtNotGate").classList.remove('btnActive');
        notValue = false;
    };
}