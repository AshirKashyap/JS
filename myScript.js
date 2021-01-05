myDiv = document.getElementById("myDiv");

function myClick () {
  var fname = document.getElementById('fname').value;
  var lname = document.getElementById('lname').value;
  var likeDog = document.getElementById('likeDog').value;
  var haveDog = document.getElementById('haveDog').value;
  var dogLover = document.getElementById('dogLover').value;
  console.log(likeDog)
  console.log(haveDog)
  console.log(dogLover)

  if ((likeDog) || (dogLover)) {
    myDiv.innerHTML = "\n";

    myDiv.innerHTML += "\t\t<h1>Here is a picture of a cute dog for " + fname + " " + lname + "!</h1>\n";

    myDiv.innerHTML += "\t\t<img src='Doggo.png' />\n";

  } else {
    myDiv.innerHTML = "\n";

    myDiv.innerHTML += "\t\t<h1>Here is a picture of a cat for " + fname + " " + lname + "!</h1>\n";

    myDiv.innerHTML += "\t\t<img src='cat.png' />\n";
  }
}
