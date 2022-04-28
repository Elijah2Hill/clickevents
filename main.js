const button1 = document.getElementById('button1');

button1.addEventListener('click', function() { showButtonText('<h3>Foo</h3>') });

const button2 = document.getElementById('button2');

button2.addEventListener('click', function() { showButtonText('<h3>Bar</h3>') });

const button3 = document.getElementById('button3');

button3.addEventListener('click', function() { showButtonText('<h2>Foobar</h2>') });

function showButtonText(HTML) {
  const main = document.getElementById('main');
  main.innerHTML += HTML;
}
