
// when the button is clicked

// start the Code

// input function value 


// Event Listener
var button = document.getElementById("generate");
button.addEventListener("click",inputPass);

// Puts the password into the html

function inputPass() {
  var passActual = genPass();
  var input = document.getElementById("password");
  input.innerHTML = passActual;
}


/*asking for password length */
function genPass () {   
  while (true){
    var passlen = prompt("How many charatcers are in your password?");  

    if (passlen < 8) {
      alert("Your password must be at least 8 characters");

    } else {
        if (passlen > 128) {
      alert("Your password must be less than 128 characters");

      } else {
        alert("your password will have " + passlen + " characters.");
        break;
      } 
    }
  }

  /* construction options */

  var lowChoice = confirm("Do you want to use lowercase letters in your password?");
  var capsChoice = confirm("Do you want to use capital letters in your password?");
  var numbChoice = confirm("do you want to use numbers in your password?");
  var symbChoice = confirm("Do you want to use special characters in your password?");

  /*option arrays*/
   
  var low = ["a", "b","c","d", "e","f","g","h", "i", "j", "k", "l", "m" ,"n", "o", "p", "q", "r", "s" ,"t", "u", "v", "w", "x", "y", "z" ];
  var caps = low.map(toUpCase);
  var numb =["0","1", "2", "3","4","5","6","7","8","9"];
  var symb =["£","$","%","&","@","#"];
  
  function toUpCase(low) {
  return(low.toUpperCase());
  }
  
  /*Conditional operator*/

  var lowYes = (lowChoice == true)? low:[];
  var capsYes = (capsChoice== true)? caps:[];
  var numbYes = (numbChoice== true)? numb:[];
  var symbYes = (symbChoice== true)? symb:[];
  console.log(lowYes);
  console.log(capsYes);
  console.log(numbYes);
  console.log(symbYes);

  /*merging chosen array*/

  var passArray = lowYes.concat(capsYes,numbYes,symbYes);

  var myPass3 = [];
  for (var i = 0; i<passlen; i++){
    var passindex = Math.floor(Math.random()*passArray.length);
    console.log(passArray[passindex]);
    myPass3.push(passArray[passindex]);
  }

  return (myPass3.join(""));
};



