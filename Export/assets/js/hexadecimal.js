denary = 0
binary = ""
hexadecimal = ""
place1 = 0
place16 = 0
place256 = 0
place4096 = 0
slider4096 = document.getElementById("slider4096");
slider256 = document.getElementById("slider256");
let hexadecimalNumber = document.getElementById("hexadecimalNumber").textContent;
let hexLength = hexadecimalNumber.length
if(hexLength==4){
  slider4096.addEventListener("change", update4096);
  slider256.addEventListener("change", update256);
}
slider16 = document.getElementById("slider16");
slider1 = document.getElementById("slider1");
slider16.addEventListener("change", update16);
slider1.addEventListener("change", update1);

function resetHexadecimal(){
    let hexadecimalNumber = document.getElementById("hexadecimalNumber").textContent;
    let hexLength = hexadecimalNumber.length;
    if(hexLength==4){
        resetPlace4096();
        resetPlace256();
    }
    resetPlace16();
    resetPlace1();
}
function resetPlace4096(){
    place4096 = 0;
    document.getElementById("slider4096").value=0;
    var light4096 = (100/15 * place4096) / 100;
    document.getElementById("blb4").style.opacity = light4096;
    updateNumbers();
}
function resetPlace256(){
    place256 = 0;
    document.getElementById("slider256").value=0;
    var light256 = (100/15 * place256) / 100;
    document.getElementById("blb3").style.opacity = light256;
    updateNumbers();
}
function resetPlace16(){
    place16 = 0;
    document.getElementById("slider16").value=0;
    var light16 = (100/15 * place16) / 100;
    document.getElementById("blb2").style.opacity = light16;
    updateNumbers();
}
function resetPlace1(){
    place1 = 0;
    document.getElementById("slider1").value=0;
    var light1 = (100/15 * place1) / 100;
    document.getElementById("blb1").style.opacity = light1;
    updateNumbers();
}
function update4096(){
  place4096 = document.getElementById("slider4096").value;
  var light4096 = (100/15 * place4096) / 100;
  document.getElementById("blb4").style.opacity = light4096;
  updateNumbers();
}
function update256(){
          place256 = document.getElementById("slider256").value;
          var light256 = (100/15 * place256) / 100;
          document.getElementById("blb3").style.opacity = light256;
          updateNumbers();
}
function update16(){
          place16 = document.getElementById("slider16").value;
          var light16 = (100/15 * place16) / 100;
          document.getElementById("blb2").style.opacity = light16;
          updateNumbers();
}
function update1(){
  place1 = document.getElementById("slider1").value;
  var light1 = (100/15 * place1) / 100;
  document.getElementById("blb1").style.opacity = light1;
  updateNumbers();
}
function updateNumbers(){
    binary = "";
    hexadecimal = "";
    let hexadecimalNumber = document.getElementById("hexadecimalNumber").textContent;
    let hexLength = hexadecimalNumber.length;
    if(hexLength==4){
        denary = (place4096*4096)+(place256*256)+(place16*16)+(place1);
        hexadecimal = convertToHex(place4096) + convertToHex(place256) + convertToHex(place16) + convertToHex(place1);
        binary = convertToBinary(place4096) + convertToBinary(place256) + convertToBinary(place16) + convertToBinary(place1);
    }else if(hexLength==2){
        denary = (place16*16)+(place1);
        hexadecimal = convertToHex(place16) + convertToHex(place1);
        binary = convertToBinary(place16) + convertToBinary(place1);
    }
    document.getElementById("denaryNumber").innerHTML = denary;
    document.getElementById("hexadecimalNumber").innerHTML = hexadecimal;
    document.getElementById("binaryNumber").innerHTML = binary;
}
function convertToHex(num){
    var remainder = num - 9;
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
    var result = "";
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

function updateHexNumber(){
  let hexadecimalNumber = document.getElementById("hexadecimalNumber").textContent;
  let hexLength = hexadecimalNumber.length
  if(hexLength==4){
      update4096();
      update256();
  }
  update16();
  update1();
}