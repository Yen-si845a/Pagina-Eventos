fetch('/api/usuario')
  .then(response => {
    if (!response.ok) {
      window.location.href = 'login.html';
    }
  })
  .catch(error => {
    console.error('Error al verificar la sesión:', error);
    window.location.href = 'login.html'; 
  });
