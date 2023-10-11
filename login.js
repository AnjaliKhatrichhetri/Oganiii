let a='';
 function Name(a){
// alert ("fired"+a)
 }
 function Password(a){
// alert("fired"+a)
 }
 let error=[];

 function signin(){
    let nm=document.getElementById('nm').value;
    let nmerror=document.getElementById('nmerror')
   
     console.log(nm.length)
     if(nm.length===0){
        error.push('not working')
       nmerror.innerHTML="enter your username"
     }
   //   } else if(nm.match(pattern)===0){
   //      nmerror.innerHTML="invalid username"
   //   }
   
     let pw=document.getElementById('pw').value;
     let pwerror=document.getElementById("pwerror")
     let patter=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

     console.log(pw.length)
     if(pw.length===0){
        error.push('not working')
       pwerror.innerHTML="enter your password"
     }else if(pw.match(patter)===0){
        pwerror.innerHTML="invalid password"
     }



     let msg=document.getElementById('msg');
     console.log(error)
     if(error.length===0){
        msg.style.transform="scale(1.04)"
        msg.style.display='flex';
        msg.style.position="absolute"
        msg.style.transition="10s";
        
        console.log(msg.style.transform)
     }

     let bar=document.getElementById('bar');
     if(error.length===0){
        bar.style.width="280px";
     }
    }

    function Cancel(){
        let msg = document.getElementById('msg');
        
         if(msg.style.transform=="scale(1.04)"){
            msg.style.transform="scale(0)";
            msg.style.transition='0s';
         }
        }
        