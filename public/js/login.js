const loginFormHandler = async (event) => {
  event.preventDefault();


   // Collect values from the login form
   const email = document.querySelector('#email-login').value.trim();
   const password = document.querySelector('#password-login').value.trim();

   if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/dashboard/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const first_name = document.querySelector('#firstname-signup').value.trim();
  const last_name = document.querySelector('#lastname-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const contact_info = document.querySelector('#contact_info').value.trim();
  const password = document.querySelector('#password-signup').value.trim();


  if (first_name && last_name && email && password) {

    const response = await fetch('/api/dashboard/signup', {
      method: 'POST',
      body: JSON.stringify({ first_name, last_name, contact_info, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
