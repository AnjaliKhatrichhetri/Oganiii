
let a='';


function name(a){
alert("firing"+a)
}
function password(a){
    alert("firing"+a)
}

function login(){
    let user=document.getElementById('user').value;
    let usererror=document.getElementById('usererror');
    let pattern=/[1-4]/g;
 let patter='^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]).{8,32}$';
    console.log(user.length)
    if(user.length===0){
        alert('fired')
usererror.innerHTML='please enter your username'
    }else if(user.match(pattern)===null){
        usererror.innerHTML='enter username'

    }

let password=document.getElementById('password').value;
let passerror=document.getElementById('passerror');
console.log(password.length)
if(password.length===0){
    alert("fired")
    passerror.innerHTML="please enter your password"
} else if(password.length<6 || password.length>9){
    passerror.innerHTML="password must be of 8 characters"
} else if(password.match(patter)===null){
    passerror.innerHTML='invalid password';
}
console.log(password.match(pattern))
// user.match(pattern);
console.log(user.match(pattern))

}