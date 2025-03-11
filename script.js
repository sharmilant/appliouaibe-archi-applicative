/***************************** 
 * Exercises
*******************************/
function fact(n) {
   if (n === 0) {
      return 1;
   } else {
      return n * fact(n - 1);
   }
}

console.log("The value of factorial 6 is : " + fact(6));

function applique(f, tab) {
   return tab.map(f);
}

let tab = [1, 2, 3, 4, 5, 6];

console.log("The value of the factorial of the table :", tab, "is :", applique(fact, tab));

console.log("The applique function for an unnamed function", applique(function(n) { return (n + 1); }, [1, 2, 3, 4, 5, 6]));

/*****************************
 * Main page elements
 * **************************/

let msgs = [
   { "msg": "Hello World", "pseudo": "user 1", "date": "01/01/1970" },
   { "msg": "Blah Blah", "pseudo": "user 1", "date": "01/01/1970" },
   { "msg": "I love cats", "pseudo": "user 1", "date": "01/01/1970" }
];

// Update messages function
function update(messages) {
   let ul = document.getElementById("messages");
   if (ul) {
      ul.innerHTML = "";
      for (let i = 0; i < messages.length; i++) {
         let li = document.createElement("li");
         li.className = "messageContent"; // Adding the class here
         li.textContent = `Pseudo: ${messages[i].pseudo} | Message: ${messages[i].msg} | Date: ${messages[i].date}`;
         ul.appendChild(li);
      }
   }
}

// Initialize messages when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
   update(msgs);
});

// Function to add a new message
function addMessage() {
   const textarea = document.getElementById('messageInput');
   const textareaPseudo = document.getElementById('pseudoInput');

   const newMessage = textarea.value;
   const pseudo = textareaPseudo.value;
   if (newMessage.trim() && pseudo.trim()) {
      msgs.push({ "msg": newMessage, "date": new Date().toLocaleString(), "pseudo": pseudo });
      update(msgs);
      textarea.value = "";
      console.log("Updated the list with new messages!");
   }
}

function deleteMessages() {
   msgs = [];
   update(msgs);
   console.log("Deleted all messages!");
}


let mode = 0;
function switchToDarkMode() {
   const body = document.body;
   body.setAttribute("class", "dark-mode");
   mode = 1;
}


function swithToLightMode() {
   const body = document.body;
   body.setAttribute("class", "light-mode");
   mode = 0;
}

function switchMode() {
   const modeButton = document.getElementById("modeButton");
   if (mode === 0) {
      switchToDarkMode();
      modeButton.textContent = "🌙"; // Moon icon for dark mode
   } else {
      swithToLightMode();
      modeButton.textContent = "☀️"; // Sun icon for light mode
   }
}