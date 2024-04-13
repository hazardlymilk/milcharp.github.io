function checkPassword() {
  const password = document.getElementById('passwordInput').value;
  if (password === 'ciel') {
      window.location.pathname = ('step2.html');
  } 
  else if (password === '0112358') {
      window.location.pathname = ('final.html');
  } 
  else {
      document.getElementById('content').innerHTML = 'Mot de passe incorrect';
  }
}