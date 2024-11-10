    denary = 0
    redDenary = 0
    greenDenary = 0
    blueDenary = 0
    redBinary = ""
    greenBinary = ""
    blueBinary = ""
    hexadecimal = ""
    placeR1 = 0
    placeR16 = 0
    placeG1 = 0
    placeG16 = 0
    placeB1 = 0
    placeB16 = 0
    function resetColours(){
        resetPlaceR16();
        resetPlaceR1();
        resetPlaceG16();
        resetPlaceG1();
        resetPlaceB16();
        resetPlaceB1();
    }
    function resetPlaceR16(){
        placeR16 = 0
        var lightR16 = (100/15 * placeR16) / 100
        document.getElementById("blbR2").style.opacity = lightR16;
        updateColours();
    }
    function resetPlaceR1(){
        placeR1 = 0
        var lightR1 = (100/15 * placeR1) / 100
        document.getElementById("blbR1").style.opacity = lightR1;
        updateColours();
    }
    function resetPlaceG16(){
        placeG16 = 0
        var lightG16 = (100/15 * placeG16) / 100
        document.getElementById("blbG2").style.opacity = lightG16;
        updateColours();
    }
    function resetPlaceG1(){
        placeG1 = 0
        var lightG1 = (100/15 * placeG1) / 100
        document.getElementById("blbG1").style.opacity = lightG1;
        updateColours();
    }
    function resetPlaceB16(){
        placeB16 = 0
        var lightB16 = (100/15 * placeB16) / 100
        document.getElementById("blbB2").style.opacity = lightB16;
        updateColours();
    }
    function resetPlaceB1(){
        placeB1 = 0
        var lightB1 = (100/15 * placeB1) / 100
        document.getElementById("blbB1").style.opacity = lightB1;
        updateColours();
    }
    function toggleUpR16(){
        if (placeR16 >= 0){
            if (placeR16 < 15){
                placeR16 = placeR16 + 1;
                var lightR16 = (100/15 * placeR16) / 100
                document.getElementById("blbR2").style.opacity = lightR16;
                updateColours();
            }
        }
    }
    function toggleDownR16(){
        if (placeR16 > 0){
            placeR16 = placeR16 - 1;
            var lightR16 = (100/15 * placeR16) / 100
            document.getElementById("blbR2").style.opacity = lightR16;
            updateColours();
            }
        }
    function toggleUpR1(){
        if (place1 >= 0){
            if (placeR1 < 15){
                placeR1 = placeR1 + 1;
                var lightR1 = (100/15 * placeR1) / 100
                document.getElementById("blbR1").style.opacity = lightR1;
                updateColours();
            }
        }
    }
    function toggleDownR1(){
        if (placeR1 > 0){
            placeR1 = placeR1 - 1;
            var lightR1 = (100/15 * placeR1) / 100
            document.getElementById("blbR1").style.opacity = lightR1;
            updateColours();
            }
        }
        function toggleUpG16(){
            if (placeG16 >= 0){
                if (placeG16 < 15){
                    placeG16 = placeG16 + 1;
                    var lightG16 = (100/15 * placeG16) / 100
                    document.getElementById("blbG2").style.opacity = lightG16;
                    updateColours();
                }
            }
        }
        function toggleDownG16(){
            if (placeG16 > 0){
                placeG16 = placeG16 - 1;
                var lightG16 = (100/15 * placeG16) / 100
                document.getElementById("blbG2").style.opacity = lightG16;
                updateColours();
                }
            }
        function toggleUpG1(){
            if (placeG1 >= 0){
                if (placeG1 < 15){
                    placeG1 = placeG1 + 1;
                    var lightG1 = (100/15 * placeG1) / 100
                    document.getElementById("blbG1").style.opacity = lightG1;
                    updateColours();
                }
            }
        }
        function toggleDownG1(){
            if (placeG1 > 0){
                placeG1 = placeG1 - 1;
                var lightG1 = (100/15 * placeG1) / 100
                document.getElementById("blbG1").style.opacity = lightG1;
                updateColours();
                }
            }
            function toggleUpB16(){
                if (placeB16 >= 0){
                    if (placeB16 < 15){
                        placeB16 = placeB16 + 1;
                        var lightB16 = (100/15 * placeB16) / 100
                        document.getElementById("blbB2").style.opacity = lightB16;
                        updateColours();
                    }
                }
            }
            function toggleDownB16(){
                if (placeB16 > 0){
                    placeB16 = placeB16 - 1;
                    var lightB16 = (100/15 * placeB16) / 100
                    document.getElementById("blbB2").style.opacity = lightB16;
                    updateColours();
                    }
                }
            function toggleUpB1(){
                if (placeB1 >= 0){
                    if (placeB1 < 15){
                        placeB1 = placeB1 + 1;
                        var lightB1 = (100/15 * placeB1) / 100
                        document.getElementById("blbB1").style.opacity = lightB1;
                        updateColours();
                    }
                }
            }
            function toggleDownB1(){
                if (placeB1 > 0){
                    placeB1 = placeB1 - 1;
                    var lightB1 = (100/15 * placeB1) / 100
                    document.getElementById("blbB1").style.opacity = lightB1;
                    updateColours();
                    }
                }
    function updateColours(){
        hexadecimal = "";
        redDenary = 0
        greenDenary = 0
        blueDenary = 0
        redBinary = ""
        greenBinary = ""
        blueBinary = ""
        denary = ((placeR16*16)+(placeR1))+", "+((placeG16*16)+(placeG1))+", "+((placeB16*16)+(placeB1));
        hexadecimal = "#" + convertToHex(placeR16) + convertToHex(placeR1) + convertToHex(placeG16) + convertToHex(placeG1) + convertToHex(placeB16) + convertToHex(placeB1);
        redBinary = convertToBinary(placeR16) + convertToBinary(placeR1);
        greenBinary = convertToBinary(placeG16) + convertToBinary(placeG1);
        blueBinary = convertToBinary(placeB16) + convertToBinary(placeB1);
        document.getElementById("denaryNumber").innerHTML = denary;
        document.getElementById("hexadecimalNumber").innerHTML = hexadecimal;
        document.getElementById("colouredHex").style.backgroundColor = hexadecimal;
        document.getElementById("invertedHex").style.backgroundColor = invertedHex();
        document.getElementById("redBinaryNumber").innerHTML = redBinary;
        document.getElementById("blueBinaryNumber").innerHTML = blueBinary;
        document.getElementById("greenBinaryNumber").innerHTML = greenBinary;
    }
    function invertedHex(){
        hexadecimal = "#" + convertToHex((15-placeR16)) + convertToHex((15-placeR1)) + convertToHex((15-placeG16)) + convertToHex((15-placeG1)) + convertToHex((15-placeB16)) + convertToHex((15-placeB1));
        return hexadecimal;
    }
    function convertToHex(num){
        var remainder = num - 9
        if(remainder<=0){
            return num.toString();
        }else{
            if(remainder==1){
                return "A";
            }else if(remainder == 2){
                return "B";
            }else if(remainder == 3){
                return "C";
            }else if(remainder == 4){
                return "D";
            }else if(remainder == 5){
                return "E";
            }else if(remainder == 6){
                return "F";
            }
        }
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

    function updateHex(customHex){    
        if (customHex == null){
            resetColours();
        }else{
            let char = customHex.charAt(0);
            if(char == "#"){
                customHex = customHex.substring(1);
            }
            if (isHex(customHex)){
                let hexArray = customHex.split('');
                
                placeR1 = parseInt(hexArray[1], 16);
                var lightR1 = (100/15 * placeR1) / 100;
                document.getElementById("blbR1").style.opacity = lightR1;

                placeR16 = parseInt(hexArray[0], 16);
                var lightR16 = (100/15 * placeR16) / 100;
                document.getElementById("blbR2").style.opacity = lightR16;

                placeG1 = parseInt(hexArray[3], 16);
                var lightG1 = (100/15 * placeG1) / 100;
                document.getElementById("blbG1").style.opacity = lightG1;
                
                placeG16 = parseInt(hexArray[2], 16);
                var lightG16 = (100/15 * placeG16) / 100;
                document.getElementById("blbG2").style.opacity = lightG16;
                
                placeB1 = parseInt(hexArray[5], 16);
                var lightB1 = (100/15 * placeB1) / 100;
                document.getElementById("blbB1").style.opacity = lightB1;
                
                placeB16 = parseInt(hexArray[4], 16);
                var lightB16 = (100/15 * placeB16) / 100;
                document.getElementById("blbB2").style.opacity = lightB16;
                updateColours();
            }else{
                window.alert("Invalid Entry");
                resetColours();
            }
        }
    }
    
    function isHex(str) {
        regexp = /^[0-9a-fA-F]+$/;
        if (regexp.test(str)){
            return true;
        }else{
            return false;
        }
    }

    function requestHex(){
        let customHex = prompt("Please enter your Hex Value");
        updateHex(customHex);
    }
    
    function invertHex(){
        customHex = invertedHex();
        updateHex(customHex);
    }