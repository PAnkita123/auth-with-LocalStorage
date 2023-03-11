function register(event) {
    event.preventDefault();
    var userName = document.getElementById("userName").value;
    var userEmail = document.getElementById("userEmail").value;
    var userPassword = document.getElementById("userPassword").value;
    var userData = { name: userName, email: userEmail, password: userPassword }

    // storing data from js to ls
    var dataFromLS = JSON.parse(localStorage.getItem("userData")) || [];
    console.log(dataFromLS, "dataFromLS")
    var flag = false;
    for (var i = 0; i < dataFromLS.length; i++) {
        if (dataFromLS[i].Email === userEmail) {
            flag = true;
        }
    }
    if (flag === true) {
        alert('email alredy present, use another email')
    } else if (userPassword.length < 1 && userName.length < 1 && userEmail < 1) {
        alert('must fill all fields!')
    } else if (userPassword.length < 8) {
        alert('Password must be more than 8 digit!')
    } else {
        dataFromLS.push(userData);
        localStorage.setItem('userData', JSON.stringify(dataFromLS));
        // input fields ko empty kiya
        document.getElementById("userName").value = '';
        document.getElementById("userEmail").value = '';
        document.getElementById("userPassword").value = '';
        window.location.href = './login.html';
        alert('Registration Done.');


    }

}

function login(event) {
    event.preventDefault();
    var userEmail = document.getElementById("email").value;
    var userPassword = document.getElementById("password").value;

    var dataFromLS = JSON.parse(localStorage.getItem("userData"));


    var flag = false;
    for (var i = 0; i < dataFromLS.length; i++) {
        if (dataFromLS[i].email === userEmail && dataFromLS[i].password === userPassword)
            flag = true;
    }


    if (flag === true) {
        document.getElementById("email").value = '';
        document.getElementById("password").value = '';
        alert("You are are logged in succesfully");
        var currentUser={};
        currentUser["curent-user-email"] = userEmail;
        localStorage.setItem("currentUser", JSON.stringify(currentUser))
        window.location.href = './home.html';
    } else {
        alert("Wrong credentials entered!Please use correct email and password!");
    }
}

var gettingEmail;
function forgetPassword(){
    // alert("worked!")
    var dataFromLS=JSON.parse(localStorage.getItem("userData"));
    var userEmail=document.getElementById("email").value;
    gettingEmail=userEmail;

    var flag=false;
    for(var i=0; i<dataFromLS.length; i++){
        if (dataFromLS[i].email===userEmail){
            flag=true;
        }

    }
    if(flag===true){
        var newCode=`<input type="password" id="password"/><br/><button onclick="newPassword()">set new password</button>`
        var divFromHtml= document.getElementById("change")
        divFromHtml.innerHTML=newCode;
        // window.location.href="./new-pass.html";
        alert("Now set new password")
    }else{
        alert("please check your email, its not in our database!")
    }
}


function newPassword(){
    // alert("worked!")
    var userPassword=document.getElementById("password").value;
    var dataFromLS=JSON.parse(localStorage.getItem("userData"));

    for(var i=0; i<dataFromLS.length;i++){
        if(dataFromLS[i].email===gettingEmail){
            dataFromLS[i].password=userPassword
        }
    }
    localStorage.setItem('userData', JSON.stringify(dataFromLS));
    gettingEmail="";
    window.location.href='./login.html';
    alert("password changed, now login.")

}