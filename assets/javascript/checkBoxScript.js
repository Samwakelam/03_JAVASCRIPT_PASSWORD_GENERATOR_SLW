
// has the generate button been clicked? 

// Event Listener
var button = document.getElementById("generate");
// start the function input pass... 
button.addEventListener("click",inputPass);


// Generate variables
function inputPass() {
  var passlen = genPassLength();
  console.log("password length 1 = " + passlen);
  
  var ischecked = qtyChecked.length > 0;
  console.log("are there boxes checked? = " + ischecked); 
  if (ischecked == false){
    alert("you need to check at least one option, defaults to Lowercase");
    qtyChecked.push("low");
  } else {
    if (ischecked == true){
      console.log("good to go");
      var passArray = arrayCreator();
      console.log("passArray = " + passArray);
      
      var finalPass = document.getElementById("password");
      finalPass.innerHTML = passArray;
    }  
  }
   
};


// create the variable for password length, passlen. 
var passlen = "";
function genPassLength () {   
  while (true){
    var inputlength = document.querySelector("#passlength");
    console.log("input length 1 = " + inputlength.value);

    if (inputlength.value < 8) {
      alert("Your password must be at least 8 characters");
      inputLength.value = 8;
      console.log("input length 2 = " + inputlength.value)
      
    }else{

      if (inputlength.value > 128) {
        alert("Your password must be less than 128 characters");
       inputlength.value = 128;
        console.log("input length 3 = " + inputlength.value) 
      
      } else {
        passlen += inputlength.value;
        console.log("password length 2 = " + passlen);
      }
    return passlen;
    }
  }
}; 
//end of function


// Which checkboxes are ticked? 
// look for check boxes: 

var qtyChecked = [];

  // the Lowercase checkbox 
  var lowcase = document.getElementById("lowcase");
  lowcase.addEventListener("click", lowFunction);
  
  function lowFunction() {
    if (lowcase.checked == true){
      qtyChecked.push("low");
      
    } else {
      if (lowcase.checked == false){
        var a = qtyChecked.indexOf("low");
        qtyChecked.splice(a , 1);
      }
    }
    console.log("which boxes are checked? low = " + qtyChecked);
    console.log("how many boxes are checked? low = " + qtyChecked.length);
  };
  
  // the uppercase check box 
  
  var capscase = document.getElementById("capscase");
  capscase.addEventListener("click", capsFunction);
  
  function capsFunction() {
    if (capscase.checked == true){
      qtyChecked.push("caps");
    } else {
      if (capscase.checked == false){
        var b = qtyChecked.indexOf("caps");
        qtyChecked.splice(b , 1);
      }
    }
    console.log("which boxes are checked? caps = " + qtyChecked);
    console.log("how many boxes are checked? caps = " + qtyChecked.length);
  };
  
  // the number checkbox
  // var numbChoice = confirm("do you want to use numbers in your password?");
  var numbcase = document.getElementById("numbcase");
  numbcase.addEventListener("click", numbFunction);
  
  function numbFunction() {
    if (numbcase.checked == true){
      qtyChecked.push("numb");
    } else {
      if (numbcase.checked == false){
        var c = qtyChecked.indexOf("numb");
        qtyChecked.splice(c , 1);
      }
    }
    console.log("which boxes are checked? number = " + qtyChecked);
    console.log("how many boxes are checked? number = " + qtyChecked.length);
  };
  
  // the symbols check box 
  // var symbChoice = confirm("Do you want to use special characters in your password?");
  var symbcase = document.getElementById("symbcase");
  symbcase.addEventListener("click", symbFunction);
  
  function symbFunction() {
    if (symbcase.checked == true){
      qtyChecked.push("symb");
    } else {
      if (symbcase.checked == false){
        var d = qtyChecked.indexOf("symb");
        qtyChecked.splice(d , 1);
      }
    }
    console.log("which boxes are checked? symbol = " + qtyChecked);
    console.log("how many boxes are checked? symbol = " + qtyChecked.length);
  };

// end of search 

// inputs from checkboxes
  var options = {
    low:"abcdefghijklmnopqrstuvwxyz",
    caps:"ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numb:"0123456789",
    symb:"£$%^&*()@#?!"
  }
  
  var passArray = "";
  function arrayCreator() {
    /*Conditional operator*/
    var lowYes = (lowcase.checked == true)? options.low:[];
    var capsYes = (capscase.checked == true)? options.caps:[];
    var numbYes = (numbcase.checked == true)? options.numb:[];
    var symbYes = (symbcase.checked == true)? options.symb:[];
    console.log("low array = " + lowYes);
    console.log(lowYes.length);
    console.log("caps array = " + capsYes);
    console.log(capsYes.length);
    console.log("number array = " + numbYes);
    console.log(numbYes.length);
    console.log("symbol array = " + symbYes);
    console.log(symbYes.length);
  
    // random sort strings - pass length divided by the number of charater types
    console.log("Produce this many units of each charater = " + (Math.round(passlen/qtyChecked.length)));
    var divide = (Math.floor(passlen/qtyChecked.length));
    console.log("Check the divide variable = "  + divide);

    // even split of each type of character - if checked
    var charlow = "";
    if (lowYes.length > 0) {
      for (var i = 0; i<divide; i++){
        var lowindex = Math.floor(Math.random()*lowYes.length);
        console.log("low index result = " + lowYes[lowindex]);
        charlow += lowYes[lowindex];
      }
      console.log("low string result = " + charlow);
    };

    var charcaps = "";
    if (capsYes.length > 0) {
      for (var i = 0; i<divide; i++){
        var capsindex = Math.floor(Math.random()*capsYes.length);
        console.log("caps index result = " + capsYes[capsindex]);
        charcaps += capsYes[capsindex];
      }
      console.log("caps string = " + charcaps);
    };

    var charnumb = "";
    if (numbYes.length > 0) {
      for (var i = 0; i<divide; i++){
        var numbindex = Math.floor(Math.random()*numbYes.length);
        console.log("number index result = " + numbYes[numbindex]);
        charnumb += numbYes[numbindex];
      }
      console.log("number string = " + charnumb);
    };

    var charsymb = "";
    if (symbYes.length > 0) {
      for (var i = 0; i<divide; i++){
        var symbindex = Math.floor(Math.random()*symbYes.length);
        console.log("symbol index result = " + symbYes[symbindex]);
        charsymb += symbYes[symbindex];
      }
      console.log("symbol string = " + charsymb);
    };
    // end of action 
    

    // Creating the final string. 
    var string = charlow + charcaps + charnumb + charsymb;
    console.log ("Reminder of pass length = " + passlen);
    console.log("Reminder of qty checked = " + qtyChecked.length);
    console.log("check the variable 'string' = " + string);
    console.log("Shuffel the string = " + shuffle(string));

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
      
      console.log("'string' length = " + string.length);
      

      if(string.length<passlen){
        var remainder = (passlen - string.length);
        console.log("characters needed = " + remainder);

        var myPass1 = string + "";
        var addToString = lowYes + capsYes + numbYes + symbYes;
          console.log("characters chosen from = " + addToString);

        for (var i = 0; i<remainder; i++){
          var remindex = Math.floor(Math.random()*addToString.length);
            console.log("Character chosen = " + addToString[remindex]);
          myPass1 += addToString[remindex];
            console.log("final string 1 = " + myPass1);
        } 
      } else {
        var myPass1 = string + "";
        console.log("final string 2 = " + myPass1);
      }
      return passArray += myPass1;
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
