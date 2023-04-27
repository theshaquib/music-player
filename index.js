// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName("songItem"))
let songs = [
    {songName: "Pasoori", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    {songName: "Phir Bhi", filePath: "songs/2.mp3", coverPath: "covers/1.jpg" },
    {songName: "Malang", filePath: "songs/3.mp3", coverPath: "covers/1.jpg" },
    {songName: "Hui Malang", filePath: "songs/4.mp3", coverPath: "covers/1.jpg" },
    {songName: "Galiyaan", filePath: "songs/5.mp3", coverPath: "covers/1.jpg" },
    {songName: "Aafreen-Aafreen", filePath: "songs/6.mp3", coverPath: "covers/1.jpg" },
    {songName: "Arijit Singh", filePath: "songs/7.mp3", coverPath: "covers/1.jpg" },
    {songName: "Kaun Tujhe", filePath: "songs/8.mp3", coverPath: "covers/1.jpg" },
    {songName: "Pasoori", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
]
 
songItems.forEach((element , i) =>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName ;
    console.log(element, i)
})


//  audioElement.play();

//  Handle play/pause clicks
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle")
        masterPlay.classList.add("fa-pause-circle")
        gif.style.opacity = 1;
        
    }else{
        audioElement.pause();
        masterPlay.classList.remove("fa-pause-circle")
        masterPlay.classList.remove("fa-play-circle")
        gif.style.opacity = 0;
    }

})


// Listen to Events
audioElement.addEventListener("timeupdate",  () =>{
     // Update Seekbar
     progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
     myProgressBar.value = progress;

})

myProgressBar.addEventListener("change", ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})


const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) =>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}



Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`
        audioElement.play();
        audioElement.currentTime = 0;
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
    })
})



document.getElementById('next').addEventListener('click', ()=>{

    console.log(songIndex)
    if(songIndex > 8){
        songIndex = 0;
    }else{
        songIndex += 1;
    }

    audioElement.src = `songs/${songIndex+1}.mp3`;
    audioElement.play();
    audioElement.currentTime = 0;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');


})

document.getElementById('previous').addEventListener('click', ()=>{
    console.log(songIndex)
    if(songIndex < 0){
        songIndex = 0;
    }else{
        songIndex -= 1        ;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    
})
