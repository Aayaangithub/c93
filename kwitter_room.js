const firebaseConfig = {
      apiKey: "AIzaSyDNWAOLaUz-oytvPlW3SDTYW03kzhH4t08",
      authDomain: "kwitter-63f03.firebaseapp.com",
      projectId: "kwitter-63f03",
      storageBucket: "kwitter-63f03.appspot.com",
      messagingSenderId: "742355329227",
      appId: "1:742355329227:web:53c80d35953d3a3386fb4e"
    };
   firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
