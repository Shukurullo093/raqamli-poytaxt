let baseUrl = 'http://localhost:3000'

document.getElementById('loginForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const login = document.getElementById('username').value;
    const telefon = document.getElementById('password').value.replace(' ', '');

    const res = await fetch(baseUrl + '/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ login, telefon })
    });

    const data = await res.json();
    if(res.ok) {
        // console.log(data.token.admin.id);
        // console.log(data.token.token)
        localStorage.setItem('adminId', data.token.admin.id);
        localStorage.setItem('token', 'Bearer ' + data.token.token);
        window.location.href = data.token.admin.vazifa == 'Admin' ? 'index.html' : 'm24-admin/index.html'
    } else {
        const error = document.getElementById('error');
        error.style.display = 'block';
        error.innerHTML = `<i class="bi bi-exclamation-circle text-danger"></i> ${data.error}`;
        setTimeout(()=>{
            error.style.display = 'none';
        }, 5000);
    }    
})