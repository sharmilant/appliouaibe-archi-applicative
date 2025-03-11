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
   { "msg": "Hello World" },
   { "msg": "Blah Blah" },
   { "msg": "I love cats" }
];

function update(messages) {
   let ul = document.getElementById("messages");
   if (ul) {
      ul.innerHTML = "";
      for (let i = 0; i < messages.length; i++) {
         let li = document.createElement("li");
         li.innerHTML = messages[i].msg;
         li.className = "messageContent"; // Adding the class here
         ul.appendChild(li);
      }
      console.log("Updated the list with new messages !");
   }
};

// Initialize messages when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
   update(msgs);
});

// Function to add a new message from the text area
function addMessage() {
   const textarea = document.querySelector('.messageInput');
   const newMessage = textarea.value;
   if (newMessage.trim()) {
      msgs.push({ "msg": newMessage }); // Add new message to the msgs array
      update(msgs); // Update the displayed messages
      textarea.value = ""; // Clear the text area
   }
}



