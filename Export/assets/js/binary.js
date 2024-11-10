denary = 0
binary = ""
customBinary = ""
bit1 = false
bit2 = false
bit4 = false
bit8 = false
bit16 = false
bit32 = false
bit64 = false
bit128 = false
bit256 = false
function resetBinarySimulator(){
        document.getElementById("blb256").classList.remove('poweredOn');
        document.getElementById("blb256").classList.add('poweredOff');
        document.getElementById("swt256").classList.remove('btnActive');
        bit256 = false;
        document.getElementById("blb128").classList.add('poweredOff');
        document.getElementById("blb128").classList.remove('poweredOn');
        document.getElementById("swt128").classList.remove('btnActive');
        bit128 = false;
        document.getElementById("blb64").classList.add('poweredOff');
        document.getElementById("blb64").classList.remove('poweredOn');
        document.getElementById("swt64").classList.remove('btnActive');
        bit64 = false;
        document.getElementById("blb32").classList.add('poweredOff');
        document.getElementById("blb32").classList.remove('poweredOn');
        document.getElementById("swt32").classList.remove('btnActive');
        bit32 = false;
        document.getElementById("blb16").classList.add('poweredOff');
        document.getElementById("blb16").classList.remove('poweredOn');
        document.getElementById("swt16").classList.remove('btnActive');
        bit16 = false;
        document.getElementById("blb8").classList.add('poweredOff');
        document.getElementById("blb8").classList.remove('poweredOn');
        document.getElementById("swt8").classList.remove('btnActive');
        bit8 = false;
        document.getElementById("blb4").classList.add('poweredOff');
        document.getElementById("blb4").classList.remove('poweredOn');
        document.getElementById("swt4").classList.remove('btnActive');
        bit4 = false;
        document.getElementById("blb2").classList.add('poweredOff');
        document.getElementById("blb2").classList.remove('poweredOn');
        document.getElementById("swt2").classList.remove('btnActive');
        bit2 = false;
        document.getElementById("blb1").classList.add('poweredOff');
        document.getElementById("blb1").classList.remove('poweredOn');
        document.getElementById("swt1").classList.remove('btnActive');
        bit1 = false;
        denary = 0;
        updateBinary();
}
function changeClass256(){
    if (bit256){
        document.getElementById("blb256").classList.add('poweredOff');
        document.getElementById("blb256").classList.remove('poweredOn');
        document.getElementById("swt256").classList.remove('btnActive');
        bit256 = false;
        denary = denary - 256;
        updateBinary();
    }else{
        document.getElementById("blb256").classList.add('poweredOn');
        document.getElementById("blb256").classList.remove('poweredOff');
        document.getElementById("swt256").classList.add('btnActive');
        bit256 = true;
        denary = denary + 256;
        updateBinary();
    }
}
function changeClass128(){
    if (bit128){
        document.getElementById("blb128").classList.add('poweredOff');
        document.getElementById("blb128").classList.remove('poweredOn');
        document.getElementById("swt128").classList.remove('btnActive');
        bit128 = false;
        denary = denary - 128;
        updateBinary();
    }else{
        document.getElementById("blb128").classList.add('poweredOn');
        document.getElementById("blb128").classList.remove('poweredOff');
        document.getElementById("swt128").classList.add('btnActive');
        bit128 = true;
        denary = denary + 128;
        updateBinary();
    }
}
function changeClass64(){
    if (bit64){
        document.getElementById("blb64").classList.add('poweredOff');
        document.getElementById("blb64").classList.remove('poweredOn');
        document.getElementById("swt64").classList.remove('btnActive');
        bit64 = false;
        denary = denary - 64;
        updateBinary();
    }else{
        document.getElementById("blb64").classList.add('poweredOn');
        document.getElementById("blb64").classList.remove('poweredOff');
        document.getElementById("swt64").classList.add('btnActive');
        bit64 = true;
        denary = denary + 64;
        updateBinary();
    }
}
function changeClass32(){
    if (bit32){
        document.getElementById("blb32").classList.add('poweredOff');
        document.getElementById("blb32").classList.remove('poweredOn');
        document.getElementById("swt32").classList.remove('btnActive');
        bit32 = false;
        denary = denary - 32;
        updateBinary();
    }else{
        document.getElementById("blb32").classList.add('poweredOn');
        document.getElementById("blb32").classList.remove('poweredOff');
        document.getElementById("swt32").classList.add('btnActive');
        bit32 = true;
        denary = denary + 32;
        updateBinary();
    }
}
function changeClass16(){
    if (bit16){
        document.getElementById("blb16").classList.add('poweredOff');
        document.getElementById("blb16").classList.remove('poweredOn');
        document.getElementById("swt16").classList.remove('btnActive');
        bit16 = false;
        denary = denary - 16;
        updateBinary();
    }else{
        document.getElementById("blb16").classList.add('poweredOn');
        document.getElementById("blb16").classList.remove('poweredOff');
        document.getElementById("swt16").classList.add('btnActive');
        bit16 = true;
        denary = denary + 16;
        updateBinary();
    }
}
function changeClass8(){
    if (bit8){
        document.getElementById("blb8").classList.add('poweredOff');
        document.getElementById("blb8").classList.remove('poweredOn');
        document.getElementById("swt8").classList.remove('btnActive');
        bit8 = false;
        denary = denary - 8;
        updateBinary();
    }else{
        document.getElementById("blb8").classList.add('poweredOn');
        document.getElementById("blb8").classList.remove('poweredOff');
        document.getElementById("swt8").classList.add('btnActive');
        bit8 = true;
        denary = denary + 8;
        updateBinary();
    }
}
function changeClass4(){
    if (bit4){
        document.getElementById("blb4").classList.add('poweredOff');
        document.getElementById("blb4").classList.remove('poweredOn');
        document.getElementById("swt4").classList.remove('btnActive');
        bit4 = false;
        denary = denary - 4;
        updateBinary();
    }else{
        document.getElementById("blb4").classList.add('poweredOn');
        document.getElementById("blb4").classList.remove('poweredOff');
        document.getElementById("swt4").classList.add('btnActive');
        bit4 = true;
        denary = denary + 4;
        updateBinary();
    }
}
function changeClass2(){
    if (bit2){
        document.getElementById("blb2").classList.add('poweredOff');
        document.getElementById("blb2").classList.remove('poweredOn');
        document.getElementById("swt2").classList.remove('btnActive');
        bit2 = false;
        denary = denary - 2;
        updateBinary();
    }else{
        document.getElementById("blb2").classList.add('poweredOn');
        document.getElementById("blb2").classList.remove('poweredOff');
        document.getElementById("swt2").classList.add('btnActive');
        bit2 = true;
        denary = denary + 2;
        updateBinary();
    }
}
function changeClass1(){
    if (bit1){
        document.getElementById("blb1").classList.add('poweredOff');
        document.getElementById("blb1").classList.remove('poweredOn');
        document.getElementById("swt1").classList.remove('btnActive');
        bit1 = false;
        denary = denary - 1;
        updateBinary();
    }else{
        document.getElementById("blb1").classList.add('poweredOn');
        document.getElementById("blb1").classList.remove('poweredOff');
        document.getElementById("swt1").classList.add('btnActive');
        bit1 = true;
        denary = denary + 1;
        updateBinary();
    }
}

function updateBinary(){
    binary = ""
    if(bit256){
        binary = binary + "1"
    }else{
        binary = binary + "0"
    }
    if(bit128){
        binary = binary + "1"
    }else{
        binary = binary + "0"
    }
    if(bit64){
        binary = binary + "1"
    }else{
        binary = binary + "0"
    }
    if(bit32){
        binary = binary + "1"
    }else{
        binary = binary + "0"
    }
    if(bit16){
        binary = binary + "1"
    }else{
        binary = binary + "0"
    }
    if(bit8){
        binary = binary + "1"
    }else{
        binary = binary + "0"
    }
    if(bit4){
        binary = binary + "1"
    }else{
        binary = binary + "0"
    }
    if(bit2){
        binary = binary + "1"
    }else{
        binary = binary + "0"
    }
    if(bit1){
        binary = binary + "1"
    }else{
        binary = binary + "0"
    }
    document.getElementById("denaryNumber").innerHTML = denary;
    document.getElementById("binaryNumber").innerHTML = binary;
}

function convertToBinary(num){
    var result = ""
    if(num-8>=0){
        num = num-8;
        result = result + "1";
    }else{
        result = result + "0";
    }
    if(num-4>=0){
        num = num-4;
        result = result + "1";
    }else{
        result = result + "0";
    }
    if(num-2>=0){
        num = num-2;
        result = result + "1";
    }else{
        result = result + "0";
    }
    if(num-1>=0){
        num = num-1;
        result = result + "1";
    }else{
        result = result + "0";
    }
    return result
}

function binaryParser(binaryPattern){
    for (let i = 0; i < binaryPattern.length; i++) {
        if ((binaryPattern[i] == 0) || (binaryPattern[i] == 1)){
            validInput = true;
        }else{
            validInput = false;
            alert("Invalid pattern! Digit\n"+ i+" is not a 0 or a 1.\nIt is a "+ binaryPattern[i]);
            return validInput
        };
    };
    return validInput;
}

function customBinaryParser(binaryPattern){
    resetBinarySimulator();
    missingDigits = 9 - binaryPattern.length
    for (let j = 0; j < missingDigits; j++){
        binaryPattern = 0 + binaryPattern;
    };
    for (let i = 0; i < binaryPattern.length; i++) {
        if (binaryPattern[i] == 1){
            if (i == 0){
                changeClass256();
            }else if (i == 1){
                changeClass128();
            }else if (i == 2){
                changeClass64();
            }else if (i == 3){
                changeClass32();
            }else if (i == 4){
                changeClass16();
            }else if (i == 5){
                changeClass8();
            }else if (i == 6){
                changeClass4();
            }else if (i == 7){
                changeClass2();
            }else if (i == 8){
                changeClass1();
            }
        }
    }
}

function requestBinary(){
    do{
    customBinary = prompt("Please enter your 9-bit Binary Value");
        if (customBinary){
            var binaryLength = customBinary.length;
        }else{
            var binaryLength = 0;
        };        
    do{
        if (binaryLength>9){
            customBinary = prompt("Too many digits.\n\nPlease enter your 9-bit Binary Value");
            if (customBinary){
                binaryLength = customBinary.length;
            }else{
                binaryLength = 0;
            };
        };
    } while (binaryLength > 9);
    let validInput = binaryParser(customBinary);
    } while (!validInput);
    customBinaryParser(customBinary);
}

function customDenaryParser(customDenary){
    resetBinarySimulator();
    let columnValues = [256,128,64,32,16,8,4,2,1]
    for (let i = 0; i < 10; i++) {
        if (!(customDenary-columnValues[i] < 0)){
            customDenary = customDenary - columnValues[i];
            if (i == 0){
                changeClass256();
            }else if (i == 1){
                changeClass128();
            }else if (i == 2){
                changeClass64();
            }else if (i == 3){
                changeClass32();
            }else if (i == 4){
                changeClass16();
            }else if (i == 5){
                changeClass8();
            }else if (i == 6){
                changeClass4();
            }else if (i == 7){
                changeClass2();
            }else if (i == 8){
                changeClass1();
            }
            if (customDenary == 0){
                break;
            }
        }
    }
}

function requestDenary(){
    customDenary = prompt("Please enter your Denary Value\nMax value is 511");
    do{
        if (customDenary > 511){
            customDenary = prompt("Number too large.\n\nPlease enter your Denary Value.\nMax value is 511");
        };
    } while (customDenary > 511);
    customDenaryParser(customDenary);
}