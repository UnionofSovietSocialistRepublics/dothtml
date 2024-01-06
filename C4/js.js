
localStorage.clear()
document.getElementById('button-sup').onclick = () =>{

const uE = document.getElementById('email').value 
const uP = document.getElementById('password').value

if (!uE.length || !uP.length) alert('Type something.')
else (uE.length && userPassword.length);
{
    currentUserEmail = localStorage.getItem('email')

    if (uE === currentUserEmail) {
        alert('Sus')
    }
localStorage.setItem('email', uE)
localStorage.setItem('password', uP)
}};


//login
document.getElementById('button-sin').onclick = () =>{

    const uE = document.getElementById('login-email').value 
    const uP = document.getElementById('login-password').value
    
    if (!uE.length || !uP.length) alert('Type something.')
    else 
    {
        for (i in users){
            if (i.uE === uE && i.uP === uP){
                alert('Login susscessfully')
            } else {
                alert('loggin failed')
            }
        }
        const localEmail = localStorage.getItem('email')
        const localPassword = localStorage.getItem('email')
        if (uE == localEmail && uP == localPassword) {
            console.log('check login')
            alert('login suscessfully')
        } else {
            alert('loggin failed')
        }
    }
};

