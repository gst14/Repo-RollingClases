let formRegisterUserDOM = document.getElementById('register-user-form') 
let usernameDOM = document.getElementById('username')
let userMailDOM = document.getElementById('user_mail')
let userPasswordDOM = document.getElementById('user_password')
let userTypeSelectionDOM = document.getElementById('user_type')
let btnRegisterDOM = document.getElementById('btnRegister')
let usersList = []

formRegisterUserDOM.onsubmit = (e)=>{
    e.preventDefault()
    const storageUserlist = localStorage.getItem('users')
    if(usernameDOM.value.trim()!= "" && userMailDOM.value.trim()!= "" && userPasswordDOM.value.trim()!= "" && userTypeSelectionDOM.value.trim()!= ""){
        if(storageUserlist){
            usersList = JSON.parse(storageUserlist)
        }
        const newUser = {
            name: usernameDOM.value,
            mail: userMailDOM.value,
            password: userPasswordDOM.value,
            type: userTypeSelectionDOM.value
        }

        usersList.push(newUser)
        localStorage.setItem('users',JSON.stringify(usersList))
        formRegisterUserDOM.reset()
    }   

    // alert('He enviado el formulario')
}