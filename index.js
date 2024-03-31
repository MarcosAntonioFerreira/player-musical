const media = [
  { name: 'Tiesto - The Bussines', link: './midia/TiestoTheBusinessOfficial.mp3' },
  { name: 'Tiesto - The Bussines 2', link: './midia/TiestoTheBusinessOfficial.mp3' }
];

let audioPlaying;
let statusPlay = false;
let titleSongPlaying = document.querySelectorAll('.title-song-playing');
let bannerSong = document.querySelectorAll('.wrapper img');
console.log(bannerSong);

function playStopSong() {
  if (statusPlay) {
    statusPlay = false;
    audioPlaying = stopSong(audioPlaying);
  } else {
    statusPlay = true;
    audioPlaying = playSong(0); // Altere o índice conforme necessário
  }
}

function playSong(index) {
  const audio = new Audio(media[index].link);
  audio.play();
  
  if (titleSongPlaying) {
    titleSongPlaying.forEach(titleSong => {
      titleSong.innerHTML = `${media[index].name}`;
    });
    
  }
  if (bannerSong) {
    bannerSong.forEach(banner => {
      banner.src= './assets/bussinescapa.jpeg';
    });
  }
  
  audio.addEventListener('ended', () => {
    statusPlay = false; // Define o status de reprodução como falso quando a música terminar
    stopSong(audioPlaying);
    // Adicione aqui o código para mudar para a próxima música, se necessário
  });
  
  return audio;
}

function stopSong(audio) {
  audio.pause();
  return audio;
}
