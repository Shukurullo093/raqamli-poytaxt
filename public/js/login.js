let baseUrl = 'http://localhost:3000'

document.getElementById('loginForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const login = document.getElementById('username').value;
    const telefon = document.getElementById('password').value;
    // console.log(dataForm);

    const res = await fetch(baseUrl + '/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ login, telefon })
    });

    const data = await res.json();
    if(res.ok){
        console.log(data.token);
        console.log(data.token.token)
        localStorage.setItem('Authorization', 'Bearer' + data.token.token);
        window.location.href = 'index.html'
    } else{
        console.log(data.error);
    }    
})