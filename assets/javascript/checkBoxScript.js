
// has the generate button been clicked? 

// Event Listener
var button = document.getElementById("generate");
button.addEventListener("click",inputPass);
button.addEventListener("click",arrayCreator);

// Puts the password into the html

function inputPass() {
  console.log("button has been clicked");
  var passActual = genPassLength();
  var input = document.getElementById("password");
  input.innerHTML = passActual;
}

// look for the number input
var passlen = "";
function genPassLength () {   
  while (true){
    var plength = document.querySelector("#passlength");
    console.log("log1-" + plength.value);

    if (plength.value < 8) {
      alert("Your password must be at least 8 characters");
      plength.value = 8;
      console.log("log2-" + plength.value)
      
    }else{

      if (plength.value > 128) {
        alert("Your password must be less than 128 characters");
       plength.value = 128;
        console.log("log3-" + plength.value) 
      
      } else {
        passlen += plength.value;
        console.log("log4-" + passlen);
      }
    return passlen;
    }
  }
}; 


// Which checkboxes are ticked? 
var qtyChecked = [];
  // look for: 
  
  // the Lowercase checkbox 
  // var lowChoice = confirm("Do you want to use lowercase letters in your password?");
  var lowcase = document.getElementById("lowcase");
  lowcase.addEventListener("click", lowFunction);
  
  function lowFunction() {
    if (lowcase.checked == true){
      qtyChecked.push("low");
      console.log("log5-" + qtyChecked);
    } else {
      if (lowcase.checked == false){
        var a = qtyChecked.indexOf("low");
        qtyChecked.splice(a , 1);
        console.log("log6-" + qtyChecked);
      }
    }
  };
  
  // the uppercase check box 
  // var capsChoice = confirm("Do you want to use capital letters in your password?");
  var capscase = document.getElementById("capscase");
  capscase.addEventListener("click", capsFunction);
  
  function capsFunction() {
    if (capscase.checked == true){
      qtyChecked.push("caps");
      console.log("log7-" + qtyChecked);
    } else {
      if (capscase.checked == false){
        var b = qtyChecked.indexOf("caps");
        qtyChecked.splice(b , 1);
        console.log("log8-" + qtyChecked);
      }
    }
  };
  
  // the number checkbox
  // var numbChoice = confirm("do you want to use numbers in your password?");
  var numbcase = document.getElementById("numbcase");
  numbcase.addEventListener("click", numbFunction);
  
  function numbFunction() {
    if (numbcase.checked == true){
      qtyChecked.push("numb");
      console.log("log9-" + qtyChecked);
    } else {
      if (numbcase.checked == false){
        var c = qtyChecked.indexOf("numb");
        qtyChecked.splice(c , 1);
        console.log("log10-" + qtyChecked);
      }
    }
  };
  
  // the symbols check box 
  // var symbChoice = confirm("Do you want to use special characters in your password?");
  var symbcase = document.getElementById("symbcase");
  symbcase.addEventListener("click", symbFunction);
  
  function symbFunction() {
    if (symbcase.checked == true){
      qtyChecked.push("symb");
      console.log("log11-" + qtyChecked);
    } else {
      if (symbcase.checked == false){
        var d = qtyChecked.indexOf("symb");
        qtyChecked.splice(d , 1);
        console.log("log12-" + qtyChecked);
      }
    }
  };
  
  
  var options = {
    low:"abcdefghijklmnopqrstuvwxyz",
    caps:"ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numb:"0123456789",
    symb:"£$%^&*()@#?!"
  }
  
  /*Conditional operator*/
  function arrayCreator() {
    var lowYes = (lowcase.checked == true)? options.low:[];
    var capsYes = (capscase.checked == true)? options.caps:[];
    var numbYes = (numbcase.checked == true)? options.numb:[];
    var symbYes = (symbcase.checked == true)? options.symb:[];
    console.log("log13-" + lowYes);
    console.log(lowYes.length);
    console.log(capsYes);
    console.log(capsYes.length);
    console.log(numbYes);
    console.log(numbYes.length);
    console.log(symbYes);
    console.log(symbYes.length);
  
    // random sort strings - pass length divided by the number of charater types
    console.log("log14-" + (Math.round(passlen/qtyChecked.length)));
    var divide = (Math.floor(passlen/qtyChecked.length));
    console.log("log15-" + divide);

    // even split of each type of character
    var charlow = "";
    for (var i = 0; i<divide; i++){
      var lowindex = Math.floor(Math.random()*lowYes.length);
      console.log("log16-" + lowYes[lowindex]);
      charlow += lowYes[lowindex];
    }
    console.log("log16a-" + charlow);

    var charcaps = "";
    for (var i = 0; i<divide; i++){
      var capsindex = Math.floor(Math.random()*capsYes.length);
      console.log("log17-" + capsYes[capsindex]);
      charcaps += capsYes[capsindex];
    }
    console.log("log18-" + charcaps);

    var charnumb = "";
    for (var i = 0; i<divide; i++){
      var numbindex = Math.floor(Math.random()*numbYes.length);
      console.log("log19-" + numbYes[numbindex]);
      charnumb += numbYes[numbindex];
    }
    console.log("log20-" + charnumb);

    var charsymb = "";
    for (var i = 0; i<divide; i++){
      var symbindex = Math.floor(Math.random()*symbYes.length);
      console.log("log21-" + symbYes[symbindex]);
      charsymb += symbYes[symbindex];
    }
    console.log("log21a-" + charsymb);
    

    // Creating the final string. 
    var string = charlow + charcaps + charnumb + charsymb;
    console.log ("log22-" + passlen);
    console.log(qtyChecked.length);
    console.log(string);
    console.log(shuffle(string));

    // rethink this part, it randomly picks from the small collection gathered. 

    // var myPass1 = "";
    // for (var i =0; i<passlen; i++){
    //   var passindex = Math.floor(Math.random()*string.length);
    //   console.log("log23-" + string[passindex]);
    //   myPass1 += string[passindex];
    // }
    // console.log("log24-" + myPass1);
    // return (myPass1);

    /* Shuffle the given string
       ref: Keshav, J.(2020). How to shuffle characters of a string in JavaScript. {}CodeSpeedy. https://www.codespeedy.com/shuffle-characters-of-a-string-in-javascript/ */
    
      function getRandomInt(n) {
        return Math.floor(Math.random() * n);
      };
      function shuffle(string) {
        var arr = string.split('');           // Convert String to array
        var n = arr.length;              // Length of the array
        
        for(var i=0 ; i<n-1 ; ++i) {
          var j = getRandomInt(n);       // Get random of [0, n-1]
          
          var temp = arr[i];             // Swap arr[i] and arr[j]
          arr[i] = arr[j];
          arr[j] = temp;
        }
        
        string = arr.join('');                // Convert Array to string
        return string;                        // Return shuffled string
      };
      
      string = shuffle(string);
      
      console.log("hopefully shuffled - " + string);
      console.log("Log23 - " + string.length);
      

      if(string.length<passlen){
        var remainder = (passlen - string.length);
        console.log("Log24 - " + remainder);

        var myPass1 =string + "";
        var addToString = lowYes + capsYes + numbYes + symbYes;
          console.log("Log24a - " + addToString);
        for (var i = 0; i<remainder; i++){
          var remindex = Math.floor(Math.random()*addToString.length);
            console.log("log24b - " + addToString[remindex]);
          myPass1 += addToString[remindex];
            console.log("myPass1 - " + myPass1);
        }
      } 
      return (myPass1);
  };
  




    
    // return (charlow);
   
  // merge strings
  
  // output password. 
  
  
  
  
  
  
  /*asking for password length */
  
  /* construction options */


  /*option arrays*/
   
  // var low = ["a", "b","c","d", "e","f","g","h", "i", "j", "k", "l", "m" ,"n", "o", "p", "q", "r", "s" ,"t", "u", "v", "w", "x", "y", "z" ];
  // var caps = low.map(toUpCase);
  // var numb =["0","1", "2", "3","4","5","6","7","8","9"];
  // var symb =["£","$","%","&","@","#"];
  
  // function toUpCase(low) {
  // return(low.toUpperCase());
  // }
  

/*merging chosen array*/

// var passArray = lowYes.concat(capsYes,numbYes,symbYes);

// var myPass3 = [];
// for (var i = 0; i<passlen; i++){
//     var passindex = Math.floor(Math.random()*passArray.length);
//     console.log(passArray[passindex]);
//   myPass3.push(passArray[passindex]);
// }

// return (myPass3.join(""));
// };
