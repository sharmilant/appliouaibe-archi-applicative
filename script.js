/***************************** 
 * Exercises
*******************************/
function fact(n) {

   if (n == 0) {
      return 1;
   }
   else {
      return n * fact(n - 1);
   }

}

console.log("The value of factorial 6 is : " + fact(6));


function applique(f, tab) {

   return tab.map(f);

}

let tab = [1, 2, 3, 4, 5, 6];

console.log("The value of the factorial of the table  : ", tab, " is : ", applique(fact, tab));

console.log("The applique function for an unamed function", applique(function(n) { return (n + 1); }, [1, 2, 3, 4, 5, 6]));



/*****************************
 * Main page elements
 * **************************/


let msgs = [
   { "msg": "Hello World", "pseudo": "user 1", "date": "01/01/1970" },
   { "msg": "Blah Blah", "pseudo": "user 1", "date": "01/01/1970" },
   { "msg": "I love cats", "pseudo": "user 1", "date": "01/01/1970" }
];


// This function update messages by deleting all existing messages and replacing by the one from the argument
function update(messages) {
   let ul = document.getElementById("messages");
   if (ul) {
      ul.innerHTML = "";
      for (let i = 0; i < messages.length; i++) {
         let li = document.createElement("li");
         li.textContent = messages[i].msg;
         li.className = "messageContent"; // Adding the class here
         ul.appendChild(li);
      }

   }
};

// Initialize messages when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
   update(msgs);
});

// Function to add a new message from the text area
function addMessage() {
   const textarea = document.getElementById('.messageInput');

   const textareaPseudo = document.getElementById('.pseudoInput');

   const newMessage = textarea.value;
   const pseudo = textareaPseudo.value;
   if (newMessage.trim() && pseudo.trim()) {
      msgs.push({ "msg": newMessage, "date": Date, "pseudo": pseudo }); // Add new message to the msgs array
      update(msgs); // Update the displayed messages
      textarea.value = ""; // Clear the text area
      console.log("Updated the list with new messages !");
   }

}



function deleteMessages() {
   msgs = []; // Reset the msgs array to empty
   update(msgs);
   console.log("Deleted all messages !");
}


