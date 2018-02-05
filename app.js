 var config = {
    apiKey: "AIzaSyC-mUg8A6Dea1XyKLsnIAZFztYpW6j6CrQ",
    authDomain: "fir-project-84353.firebaseapp.com",
    databaseURL: "https://fir-project-84353.firebaseio.com",
    projectId: "fir-project-84353",
    storageBucket: "fir-project-84353.appspot.com",
    messagingSenderId: "1023129187127"
  };
  firebase.initializeApp(config);
  var database=firebase.database();

  var connectionsRef=database.ref("/connections");
  var connectedRef=database.ref(".info/connected");
  connectedRef.on("value",function(snap){
  	if(snap.val()){
  		var con=connectionsRef.push(true);
  		con.onDisconnect().remove();
  	}
  });

  connectionsRef.on('value',function(snap){
  	$('#new').text(snap.numChildren());
  });

  $('button').on('click',function(){
  	var value=$('input').val();
  	console.log(value);
  	database.ref().push({
  		name:value
  	});
  });