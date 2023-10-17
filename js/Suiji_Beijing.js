var gradients = [
    'linear-gradient(to right, #005c97, #363795)',
    'linear-gradient(to right, #6441a5, #2a0845)',
    'linear-gradient(to right, #4b6cb7, #182848)',
    'linear-gradient(to right, #7474bf, #348ac7)',
    'linear-gradient(to right, #2b5876, #4e4376)',
    'linear-gradient(to right, #0052d4, #4364f7, #6fb1fc)',
    'linear-gradient(205deg, #eb0e99, #c962b8, #9689d9, #00a8fb)',
    'linear-gradient(124deg, #1e2e6b, #2c398f, #3b43b4, #4a4edb)',
    'linear-gradient(137deg, #003b8a, #3264b0, #5390d7, #71beff)',
    'linear-gradient(102deg, #212683, #26429f, #275dbc, #227ad9)',
    'linear-gradient(55deg, #1e00b8, #6f32d0, #a85ce7, #dc86ff)',
    'linear-gradient(25deg, #7d40eb, #706def, #5891f3, #12b3f6)',
    'linear-gradient(25deg, #162d9c, #2f44b3, #435bca, #5573e2)',
    'linear-gradient(25deg, #6015ff, #7373f7, #6eb4ed, #3df3e1)',
    'linear-gradient(38deg, #001c86, #1c3d9c, #295eb2, #307fc9)',
    'linear-gradient(to left top, #398fff, #378bfe, #3587fd, #3483fc, #347ffb, #2d78fc, #2970fd, #2968fd, #2c5afe, #3849fe, #4734fc, #5809f8)',
    'linear-gradient(25deg, #3d27c5, #3e49d0, #3965db, #2981e6)',
    'linear-gradient(to top, #00c6fb 0%, #005bea 100%)'
  ];
  
  var random_gradient = gradients[Math.floor(Math.random() * gradients.length)];
  
  document.documentElement.style.setProperty('--bg-gradient', random_gradient);