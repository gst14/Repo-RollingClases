let formLoginDOM = document.getElementById('form_login')
let userEmailDOM = document.getElementById('user_email')
let userPasswordDOM = document.getElementById('user_password')
let userList = []

const storageUserLogIn = localStorage.getItem('userLogIn')
let userLogIn = undefined;
if(storageUserLogIn){
    userLogIn = JSON.parse(storageUserLogIn)
}

if(userLogIn.type=='user'){
    window.location = '/'
}else{
    window.location = 'admin.html'
}


formLoginDOM.onsubmit = (e)=>{
    e.preventDefault()
    const storageUserList = localStorage.getItem('users')
    if(storageUserList){
        userList = JSON.parse(storageUserList)
    }
    const userFind = userList.find( user => user.mail === userEmailDOM.value.trim() && user.password == userPasswordDOM.value.trim())
    if(userFind){ // Preg   untamos si userFind tiene algo (es decir no es undefined)  
        const user = {
            mail: userFind.mail,
            name: userFind.name,
            type: userFind.type
        }
        localStorage.setItem('userLogIn',JSON.stringify(user))

        if(userFind.type == 'user'){
            window.location = 'index.html'
        }else{
            window.location = 'admin.html'
        }
    }
}