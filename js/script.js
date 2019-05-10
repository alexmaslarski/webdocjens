$(document).ready(function () {
    var scrollLink = $('.scroll');
    scrollLink.click(function (event) {
        event.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
    });

})

document.getElementById("next-story").addEventListener("click", nextStory);

var circles = document.getElementsByTagName("li");
var active = 0;
var quotes = ['"I was playing the piano with one finger."','"Me and my school band were very popular in school"','"I looked at the bass and the bass looked at me, we fell in love"','"Performing with better musicians makes you grow"'];

var text = ['Jens started his interest in music when he was only 4 years old. He started playing the piano during his time in kindergarden.','When he was 10 years old, Jens started playing the guitar. He also created a school band and they were doing small shows in small bars on saturdays.','At the age of 17, Jens started playing the upright bass. He thought that it was perfect, because it was simillar to the guitar. He has been playing the bass since then.','Jens has been performing on the bass his whole life since then. He has performed with some of the best jazz musicians in the world and this has helped him to become better.'];


var images = ["images/piano.jpg","images/guitarpict.jpg", "images/basspict.jpg", "images/training.jpg"]
console.log(circles[0].children);

function nextStory() {
    if (active < circles.length-1) {
        circles[active].children[0].classList.toggle("fas");
        active++;
        circles[active].children[0].classList.toggle("fas");
        document.getElementById("quote").textContent = quotes[active];
        document.getElementById("story-text").textContent = text[active];
        document.getElementById("story-image").src = images[active];
    } else {
        circles[active].children[0].classList.toggle("fas");
        active = 0;
        circles[0].children[0].classList.toggle("fas");
        document.getElementById("quote").textContent = quotes[active];
        document.getElementById("story-text").textContent = text[active];
        document.getElementById("story-image").src = images[active];
    }

}
function showPlayer(link) {
    var links = link.getAttribute("data-link");
    document.getElementById("player").src = links;

}
function show(){
    document.getElementById("video").classList.toggle("hide");
    document.getElementById("video1").play();
}
function hide(){
    document.getElementById("video").classList.toggle("hide");
    document.getElementById("video1").pause();
}

var sectionScroll = document.getElementById("story-in-pictures");
var audio = document.getElementById("audio");
document.addEventListener("scroll", (e) => {
  var scrolled = document.scrollingElement.scrollTop;
  var position = sectionScroll.offsetTop;
  var positionBottom = position + sectionScroll.clientHeight;
console.log(scrolled + "scrolled");
    console.log(position + "position");
    console.log(positionBottom + "positionbottom");
  if(scrolled >= position && position < positionBottom){
    audio.play();
    }
    if(scrolled < position){
      audio.pause();  
    }
    if(scrolled >= positionBottom){
        audio.pause();
    }
});



var sectionVideo = document.getElementById("inspiration");
var video = document.getElementById("videoinsp");
document.addEventListener("scroll", (e) => {
  var scrolled = document.scrollingElement.scrollTop;
  var position = sectionVideo.offsetTop;
  var positionBottom = position + sectionScroll.clientHeight;
console.log(scrolled + "scrolled");
    console.log(position + "position");
    console.log(positionBottom + "positionbottom");
  if(scrolled >= position && position < positionBottom){
    video.play();
    }
    if(scrolled < position){
      video.pause();  
    }
    if(scrolled >= positionBottom){
        video.pause();
    }
});

