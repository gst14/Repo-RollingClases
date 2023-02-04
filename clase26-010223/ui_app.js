let formSongHTML = document.getElementById('formSong')
let inputSessionNro = document.getElementById('sesionNro')
let inputArtist = document.getElementById('artist')
let inputYoutubeVideo = document.getElementById('youtube')
let listItemsHTML = document.getElementById('playlist_items')
const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveSuccess = document.getElementById('liveToastSuccess')
const toastLiveError = document.getElementById('liveToastError')

let playlist = []

formSongHTML.onsubmit = (e)=>{
    const formOk = formIsValid();
    e.preventDefault()
    if(formOk){
        let song = {
            vol: inputSessionNro.value.trim(),
            artista: inputArtist.value.trim(),
            youtube: inputYoutubeVideo.value.trim()
        }
        if(song.youtube){ // pregunto si tiene un video de youtube cargado
            listItemsHTML.innerHTML += `<li class="list-group-item">Sesion nro: ${song.vol} - Artista: ${song.artista} - <a target="_blank" href="${song.youtube}">Ver vídeo</a></li>`
        }else{
            listItemsHTML.innerHTML += `<li class="list-group-item">Sesion nro: ${song.vol} - Artista: ${song.artista}</li>`
        }
        playlist.push(song)
        formSongHTML.reset()
    }
}

function formIsValid(){
    let isValid = true;
    if(inputSessionNro.value.trim() == "" || inputArtist.value.trim() == ""){
        isValid = false;
    }
    return isValid;
}

toastTrigger.onclick = ()=>{
    const formOk = formIsValid();
    let toast = null;
    if(formOk){
        toast = new bootstrap.Toast(toastLiveSuccess)
    }
    // else{
    //     toast = new bootstrap.Toast(toastLiveError)
    // }
    toast.show()
}