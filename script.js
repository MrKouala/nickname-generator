document.getElementById("randNames").addEventListener("click", nickname);
document.getElementById("allNames").addEventListener("click", all);

var names = [
  "The Crusher",
  "The Scientist",
  "The Hawk",
  "The Chief",
  "The Sloth",
  "The Jester",
];
function nickname() {
  var first = document.getElementById("first").value;
  var last = document.getElementById("last").value;
  var random = Math.floor(Math.random() * 6);
  var output = `${first} "${names[random]}" ${last}`;
  document.getElementById("names").innerHTML += `${output}<br>`;
}
function all() {
  var output = "";
  var first = document.getElementById("first").value;
  var last = document.getElementById("last").value;
  for (var i = 0; i < names.length; i++) {
    output += `${first} "${names[i]}" ${last}<br>`;
  }
  document.getElementById("names").innerHTML = output;
}
