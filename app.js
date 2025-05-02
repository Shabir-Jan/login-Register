

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.email === email,"sskhan9442@gmail.com shabirgara@gmail.com" && storedUser.password === password,"12345") {
      alert('Login successful!');

      window.location.href = 'LoingForm.html';

    } else {
      alert('Invalid email or password');
    }
  });