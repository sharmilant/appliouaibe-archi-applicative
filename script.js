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
         li.className = "messageContent";
         li.textContent = `Pseudo: ${messages[i].pseudo} | Message: ${messages[i].msg} | Date: ${messages[i].date}`;
         ul.appendChild(li);
      }
   }
}



/*
document.addEventListener('DOMContentLoaded', function() {
   update(msgs);
});*/

// Function to add a new message
function addMessagev1() {
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

function deleteMessagesV1() {
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
      modeButton.textContent = "🌙";
   } else {
      swithToLightMode();
      modeButton.textContent = "☀️";
   }
}

/***************************** 
 * Communiquer avec le serveur
*******************************/

baseUrl = "https://64dc4e13-1de1-4ba6-8be3-5701b3359d19-00-mhwa819etueu.riker.replit.dev"

/***************************** 
 * 3.1 - Prise en main
*******************************/
/*
fetch(baseUrl + "/msg/getAll")
   .then(function(response) {
      return response.json();
   })
   .then(function(data) {
      alert(data.datas[0].msg);
      console.log("Messages récupérés :", data.datas);
   })
   .catch(function(error) {
      console.error('Error:', error);
   });



/***************************** 
 * 3.2 - Remplissage des messages
*******************************/

// Fetch messages from server on page load

function fetchMessages() {
   fetch(baseUrl + "/msg/getAll")
      .then(response => response.json())
      .then(data => {
         let formattedMessages = data.datas.map(data => ({
            msg: data.msg,
            pseudo: data.pseudo,
            date: data.date
         }));
         update(formattedMessages);
         console.log("Messages récupérés :", formattedMessages);
      })
      .catch(error => console.error('Error fetching messages:', error));
}

document.addEventListener('DOMContentLoaded', function() {
   fetchMessages();
});



/*****************************
 * Ajouter un message
 *****************************/
function addMessage() {
   const textarea = document.getElementById('messageInput');
   const textareaPseudo = document.getElementById('pseudoInput');

   const newMessage = textarea.value.trim();
   const pseudo = textareaPseudo.value.trim();

   if (newMessage && pseudo) {
      let encodedMessage = encodeURIComponent(newMessage);
      let encodedPseudo = encodeURIComponent(pseudo);


      fetch(baseUrl + `/msg/post?msg=${encodedMessage}&pseudo=${encodedPseudo}`)
         .then(response => response.json())
         .then(data => {
            console.log("Message ajouté avec succès :", data);
            fetchMessages();
         })
         .catch(error => console.error('Erreur lors de l\'ajout du message:', error));

      textarea.value = "";
   }
}

function deleteMessages() {
   fetch(baseUrl + "/msg/delete")
      .then(response => response.json())
      .then(data => {
         console.log("Message supprimé avec succès :", data);
         fetchMessages();
         alert("Message supprimé avec succès");
      })
      .catch(error => console.error('Error fetching messages:', error));

}