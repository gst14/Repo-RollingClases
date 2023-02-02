let formSongHTML = document.getElementById('formSong')
let inputSessionNro = document.getElementById('sesionNro')
let inputArtist = document.getElementById('artist')
let inputYoutubeVideo = document.getElementById('youtube')
let listItemsHTML = document.getElementById('playlist_items')

let playlist = []

formSongHTML.onsubmit = (e)=>{
    e.preventDefault()
    let song = {
        vol: inputSessionNro.value,
        artista: inputArtist.value,
        youtube: inputYoutubeVideo.value
    }
    playlist.push(song)

    listItemsHTML.innerHTML += `<li class="list-group-item">Sesion nro: ${inputSessionNro.value} - Artista: ${inputArtist.value} - Youtube link: ${inputYoutubeVideo.value}</li>`
    formSongHTML.reset()
}


const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
}