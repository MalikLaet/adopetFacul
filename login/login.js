const submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', function() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    if (email && password) {
      window.location.href = "../adoptionForm.html";
    } else {
      alert('Por favor, preencha todos os campos antes de continuar.');
    }
  });