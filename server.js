function register(event){
    event.preventDefault();
    var userName=document.getElementById("userName").value;
    var userEmail=document.getElementById("userEmail").value;
    var userPassword=document.getElementById("userPassword").value;
    var userData = {name:userName,email:userEmail,password:userPassword}

    // storing data from js to ls
    var dataFromLS=JSON.parse(localStorage.getItem("userData")) || [];
    console.log(dataFromLS, "dataFromLS")
    var flag=false;
    for (var i=0;i<dataFromLS.length;i++){
        if(dataFromLS[i].Email===userEmail){
            flag=true;
        } 
    }
    if (flag===true){
        alert('email alredy present, use another email')
    }else if(userPassword.length<1 && userName.length<1 && userEmail<1){
        alert('must fill all fields!')
    }else if(userPassword.length<8){
        alert('Password must be more than 8 digit!')
    }else{dataFromLS.push(userData);
        localStorage.setItem('userData',JSON.stringify(dataFromLS));
        // input fields ko empty kiya
        document.getElementById("userName").value='';
        document.getElementById("userEmail").value='';
        document.getElementById("userPassword").value='';
        window.location.href='./login.html';
        alert('Registration Done.');


    }

}