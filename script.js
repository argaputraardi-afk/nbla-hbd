const openBtn=document.getElementById("openBtn");
const surpriseBtn=document.getElementById("surpriseBtn");
const message=document.getElementById("message");
const surprise=document.getElementById("surprise");
const music=document.getElementById("bgMusic");
const musicBtn=document.getElementById("musicBtn");
const musicText=document.getElementById("musicText");

function playMusic(){
  music.play().then(()=>{
    musicBtn.textContent="Ⅱ";
    musicText.textContent="Playing";
  }).catch(()=>{
    musicText.textContent="Tap ♫";
  });
}

openBtn.addEventListener("click",()=>{
  message.classList.remove("hidden");
  message.scrollIntoView({behavior:"smooth"});
  playMusic();
});

surpriseBtn.addEventListener("click",()=>{
  surprise.classList.remove("hidden");
  surprise.scrollIntoView({behavior:"smooth"});
});

musicBtn.addEventListener("click",()=>{
  if(music.paused) playMusic();
  else{
    music.pause();
    musicBtn.textContent="♫";
    musicText.textContent="Paused";
  }
});