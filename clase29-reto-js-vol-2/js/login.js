let formLoginDOM = document.getElementById('form_login')
let userEmailDOM = document.getElementById('user_email')
let userPasswordDOM = document.getElementById('user_password')
let userList = []
formLoginDOM.onsubmit = (e)=>{
    e.preventDefault()
    const storageUserList = localStorage.getItem('users')
    if(storageUserList){
        userList = JSON.parse(storageUserList)
    }
    const userFind = userList.find( user => user.mail === userEmailDOM.value.trim() && user.password == userPasswordDOM.value.trim())
    if(userFind){ // Preguntamos si userFind tiene algo (es decir no es undefined)
        window.location = 'index.html'
    }
}