document.getElementById('registerForm').addEventListener('submit', function(event) {
    // Impede o envio do formulário
    event.preventDefault(); 
  
    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;
    const passwordConfirmation = document.getElementById('passwordConfirmation').value;
  
    document.getElementById('passwordError').textContent = '';
    document.getElementById('passwordConfirmationError').textContent = '';
  
    let valid = true;
  
    if (password !== passwordConfirmation) {
      document.getElementById('passwordConfirmationError').textContent = 'As senhas não correspondem.';
      valid = false; 
    }
  
    if (valid) {
      window.location.href = "../adoptionForm.html";
    } else {
      console.log("O formulário não foi enviado devido a senhas não correspondentes.");
    }
  });
  