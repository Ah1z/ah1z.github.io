var gradients = [
    'linear-gradient(to right, #0f0c29, #302b63, #24243e)',
    'linear-gradient(to right, #000000, #434343)',
    'linear-gradient(to right, #005c97, #363795)',
    'linear-gradient(to right, #6441a5, #2a0845)',
    'linear-gradient(to right, #606c88, #3f4c6b)',
    'linear-gradient(to right, #4b6cb7, #182848)',
    'linear-gradient(to right, #7474bf, #348ac7)',
    'linear-gradient(to right, #1f1c2c, #928dab)',
    'linear-gradient(to right, #2b5876, #4e4376)',
    'linear-gradient(to right, #0052d4, #4364f7, #6fb1fc)',
    'linear-gradient(to top, #00c6fb 0%, #005bea 100%)'
  ];
  
  var random_gradient = gradients[Math.floor(Math.random() * gradients.length)];
  
  document.documentElement.style.setProperty('--bg-gradient', random_gradient);