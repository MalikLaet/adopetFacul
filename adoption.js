document.getElementById('adoptionForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const animalName = document.getElementById('animalName').value.trim();
    const message = document.getElementById('message').value.trim();
  
    document.getElementById('nameError').textContent = '';
    document.getElementById('phoneError').textContent = '';
    document.getElementById('animalNameError').textContent = '';
    document.getElementById('messageError').textContent = '';
  
    let valid = true;
  
    if (name === '') {
      document.getElementById('nameError').textContent = 'Nome é obrigatório.';
      valid = false;
    }
  
    if (phone === '') {
      document.getElementById('phoneError').textContent = 'Telefone é obrigatório.';
      valid = false;
    } else if (!/^\d{10,15}$/.test(phone)) {
      document.getElementById('phoneError').textContent = 'Telefone deve ter entre 10 e 15 dígitos.';
      valid = false;
    }
  
    if (animalName === '') {
      document.getElementById('animalNameError').textContent = 'Nome do animal é obrigatório.';
      valid = false;
    }
  
    if (message === '') {
      document.getElementById('messageError').textContent = 'Mensagem é obrigatória.';
      valid = false;
    }
  
    if (valid) {
      alert("Mensagem enviada com sucesso!");
      console.log({ name, phone, animalName, message });
    } else {
      console.log("O formulário não foi enviado devido a erros de validação.");
    }
  });
  