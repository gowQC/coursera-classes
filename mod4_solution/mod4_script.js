(function () {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  for (var i = 0; i < names.length; i++){
    if(names[i].charAt(0) != 'J' && names[i].charAt(0) != 'j') { 
      //if name starts with neither J nor j, say hello + name
      helloSpeaker.speak(names[i]);
    } 
    else {
      //else say goodbye + name
      byeSpeaker.speak(names[i])
    }
  }
})();
