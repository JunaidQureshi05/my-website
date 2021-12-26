var i = 0;
var txt = 'Jhon Doe.';
var speed = 100;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById('name').innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();
