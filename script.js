function redirectToWebsite() {
    window.location.href = "product.html";
    }

 


//FORM START
function register() {
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Perform form validation
    if (name === '' || email === '' || password === '') {
      alert('Please fill in all fields');
      return;
    }

    // Display success message
    const successMessage = document.getElementById('success-message');
    successMessage.textContent = 'Thank you for registering!';
    window['alert']('Registered successfully');
    // Reset form fields

     document.getElementById('registration-form').reset();

    
  }