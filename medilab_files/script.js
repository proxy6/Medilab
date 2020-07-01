
let open = false
const navToggle = document.querySelector('.navbar-toggler');
const nav = document.querySelector('.navbar');
navToggle.addEventListener('click', () => {
  if(!open) {
    nav.classList.add('nav-sticky');
  } 
});

function setNewImage(){
  let imageOne = document.querySelector('#hovered-image').getElementsByTagName('img')[0].src = "./medilab_files/icon2.png";

}

function setOldImage(){
  let imageOne = document.querySelector('#hovered-image').getElementsByTagName('img')[0].src = "./medilab_files/brain.png";
}

function setNewImage1(){
  let imageOne = document.querySelector('#hovered-image1').getElementsByTagName('img')[0].src = "./medilab_files/icons8_test_tube_240px_1 1.png";
}

function setOldImage1(){
  let imageOne = document.querySelector('#hovered-image1').getElementsByTagName('img')[0].src = "./medilab_files/test_tube2.png";
}
function setNewImage2(){
  let imageOne = document.querySelector('#hovered-image2').getElementsByTagName('img')[0].src = "./medilab_files/icons8_tooth_100px_2 1.png";
}

function setOldImage2(){
  let imageOne = document.querySelector('#hovered-image2').getElementsByTagName('img')[0].src = "./medilab_files/tooth2.png";
}
function setNewImage3(){
  let imageOne = document.querySelector('#hovered-image3').getElementsByTagName('img')[0].src = "./medilab_files/icons8_heart_with_pulse_100px_2 1.png";
}

function setOldImage3(){
  let imageOne = document.querySelector('#hovered-image3').getElementsByTagName('img')[0].src = "./medilab_files/heart_with_pulse2.png";
}
function setNewImage4(){
  let imageOne = document.querySelector('#hovered-image4').getElementsByTagName('img')[0].src = "./medilab_files/icons8_vagina_100px_2 1.png";
}

function setOldImage4(){
  let imageOne = document.querySelector('#hovered-image4').getElementsByTagName('img')[0].src = "./medilab_files/vagina2.png";
}
function setNewImage5(){
  let imageOne = document.querySelector('#hovered-image5').getElementsByTagName('img')[0].src = "./medilab_files/icons8_caduceus_100px_2 1.png";
}

function setOldImage5(){
  let imageOne = document.querySelector('#hovered-image5').getElementsByTagName('img')[0].src = "./medilab_files/caduceus2.png";
}
function setNewImage6(){
  let imageOne = document.querySelector('#hovered-image6').getElementsByTagName('img')[0].src = "./medilab_files/icons8_Car_Accident_100px_2 1.png";
}

function setOldImage6(){
  let imageOne = document.querySelector('#hovered-image6').getElementsByTagName('img')[0].src = "./medilab_files/Car_Accident2.png";
}
function setNewImage7(){
  let imageOne = document.querySelector('#hovered-image7').getElementsByTagName('img')[0].src = "./medilab_files/icons8_Child_with_Pacifier_200px_2 1.png";
}

function setOldImage7(){
  let imageOne = document.querySelector('#hovered-image7').getElementsByTagName('img')[0].src = "./medilab_files/Child with Pacifier2.png";
}

function changeCard(){
  let serviceCard = document.querySelector(".service-card").getElementsByTagName('img')[0].src = "./medilab_files/icons8_nurse_240px_2 1.png"
}
function removeCard(){
  let serviceCard = document.querySelector(".service-card").getElementsByTagName('img')[0].src = "./medilab_files/nurse2.png"
}
function changeCard1(){
  let serviceCard = document.querySelector(".service-card1").getElementsByTagName('img')[0].src = "./medilab_files/icons8_vegan_food_128px_1 1.png"
}
function removeCard1(){
  let serviceCard = document.querySelector(".service-card1").getElementsByTagName('img')[0].src = "./medilab_files/vegan_food2.png"
}
function changeCard2(){
  let serviceCard = document.querySelector(".service-card2").getElementsByTagName('img')[0].src = "./medilab_files/icons8_Coronavirus_200px 2.png"
}
function removeCard2(){
  let serviceCard = document.querySelector(".service-card2").getElementsByTagName('img')[0].src = "./medilab_files/Coronavirus1.png"
}