const toptobottom= document.querySelector(".top-to-bottom");

window.addEventListener("scroll",() =>{
  if(window.pageYOffset>100){
    toptobottom.classList.add("body");
  } else{
    toptobottom.classList.remove("body");
  }
});








window.onscroll = function() {
    const navbar = document.querySelector('.navbar');
    const sticky = navbar.offsetTop; // Get the initial position of the navbar
    
    if (window.pageYOffset > sticky) {
        navbar.classList.add('fixed');
    } else {
        navbar.classList.remove('fixed');
    }
};

let btnm = document.querySelector('.btnm');
let clip = document.querySelector('.clip');
let close = document.querySelector('.close');
let video = document.querySelector('video');

btnm.onclick = function() {
    clip.classList.add('active'); // Add active class to clip
    video.play(); // Play the video
}

close.onclick = function() {
    clip.classList.remove('active'); // Remove active class from clip
    video.pause(); // Pause the video
    video.currentTime = 0; // Reset the video to the start
}



let btnms = document.querySelector('.btnms');
let clips = document.querySelector('.clips');
let closes = document.querySelector('.closes');
let videos= document.querySelector('videos');

btnms.onclick = function() {
    clips.classList.add('active'); // Add active class to clip
    video.play(); // Play the video
}

closes.onclick = function() {
    clips.classList.remove('active'); // Remove active class from clip
    video.pause(); // Pause the video
    video.currentTime = 0; // Reset the video to the start
}



let btnmq = document.querySelector('.btnmq');
let clipq = document.querySelector('.clipq');
let closeq = document.querySelector('.closeq');
let videoq= document.querySelector('videoq');

btnmq.onclick = function() {
    clipq.classList.add('active'); // Add active class to clip
    video.play(); // Play the video
}

closeq.onclick = function() {
    clipq.classList.remove('active'); // Remove active class from clip
    video.pause(); // Pause the video
    video.currentTime = 0; // Reset the video to the start
}


function join() {
    let texting = document.getElementById('texting');
    texting.innerHTML = 'The Best Template You Got to Have it!';
    
    let staring = document.getElementById('staring');
    staring.innerHTML = '<i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i>';
    
    let header = document.getElementById('header');
    header.innerHTML = 'Joe Richard';
    
    let spaner = document.getElementById('spaner');
    spaner.innerHTML = 'Visual Designer';
    
    let images = document.getElementsByClassName('imags');
    images[0].src = 'https://quiety-wp.themetags.com/wp-content/uploads/2022/07/testimonial_tab_1.jpg';  
    
}


  function rupas(){
    let texting =document.getElementById('texting')
   texting.innerHTML='Embarrassed by the First Version.!';
   let staring =document.getElementById('staring')
   staring.innerHTML='<i class="bi bi-star-fill"></i>  <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star"></i>'
   let header =document.getElementById('header')
   header.innerHTML='Rupan Oberoi';
   let spaner =document.getElementById('spaner')
   spaner.innerHTML='Web Designer';
   let images2 =document.getElementsByClassName('imags');
   images2[0].src ='https://quiety-wp.themetags.com/wp-content/uploads/2022/07/t-2.jpeg';
  }


  function doin(){
    let texting =document.getElementById('texting')
   texting.innerHTML='Amazing Quiety template!';
    let staring =document.getElementById('staring')
   staring.innerHTML='<i class="bi bi-star-fill"></i>  <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i>  <i class="bi bi-star"></i> <i class="bi bi-star"></i>'
   let header =document.getElementById('header')
   header.innerHTML='Jon Doe';
   let spaner =document.getElementById('spaner')
   spaner.innerHTML='Software Engineer';
   let images3 =document.getElementsByClassName('imags');
   images3[0].src ='https://quiety-wp.themetags.com/wp-content/uploads/2022/07/testimonial_feature_3.jpeg';
  
  }


  function hangry(){
    let texting =document.getElementById('texting')
   texting.innerHTML='Best Template for SAAS Company!';
   let staring =document.getElementById('staring')
   staring.innerHTML='<i class="bi bi-star-fill"></i>  <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i>  <i class="bi bi-star-fill"></i> '
   let header =document.getElementById('header')
   header.innerHTML='Hanry Luice';
   let spaner =document.getElementById('spaner')
   spaner.innerHTML='App Developer';
   let images4 =document.getElementsByClassName('imags');
   images4[0].src ='https://quiety-wp.themetags.com/wp-content/uploads/2021/10/t-4.jpeg';
  
  }


  document.querySelector('.burger').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
});








