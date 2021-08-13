$(document).ready(function(){
  window.setTimeout('fadeout();');
});
function fadeout(){
  $('#preloader').delay(2500).fadeOut( function() {
  });
}




function myFunction(x) {
  if (x.matches) {
    new fullpage('#fullpage', {
    	autoScrolling:false,
      scrollingSpeed: 370,
      navigation: false,
      controlArrows: false,
      loopHorizontal: false,
      slidesNavigation: true,
	    slidesNavPosition: 'bottom',
      touchSensitivity: 25,
      normalScrollElements: '#volume1, #volume2, #volume3, #volume4, #volume5, #volume6, #volume7, #volume8, #volume9'
    });
  }
  else{
    new fullpage('#fullpage', {
    	autoScrolling:true,
      scrollingSpeed: 370,
      controlArrows: true,
      loopHorizontal: false,
      slidesNavigation: true,
	    slidesNavPosition: 'bottom'
    });
  }
}
var x = window.matchMedia("(max-width: 700px)")
myFunction(x)
x.addListener(myFunction)


// cricket
const cricket = document.getElementById("cricket");
const cricketicon = document.getElementById("imageborder-cricket");
const togcricket = document.querySelector(".volume1");
const togcricketText = document.querySelector(".h3cricket");
document.getElementById("cricket").loop = true;
let recent_volume1= document.querySelector('#volume1');

cricketicon.addEventListener('click', () => {
  togcricket.classList.toggle("volume1-active");
  togcricketText.classList.toggle("h3cricket-active");
  cricketicon.classList.toggle("imageborder-active");
  if (cricket.paused) {
    cricket.play();
  } else {
    cricket.pause();
  }
});
function volume1_change(){
	cricket.volume = recent_volume1.value / 100;
}


// rain
const rain = document.getElementById("rain");
const rainicon = document.getElementById("imageborder-rain");
const tograin = document.querySelector(".volume2");
const tograinText = document.querySelector(".h3rain");
document.getElementById("rain").loop = true;
let recent_volume2= document.querySelector('#volume2');

rainicon.addEventListener('click', () => {
  tograin.classList.toggle("volume2-active");
  tograinText.classList.toggle("h3rain-active");
  rainicon.classList.toggle("imageborder-active");
  if (rain.paused) {
    rain.play();
  } else {
    rain.pause();
  }
});
function volume2_change(){
	rain.volume = recent_volume2.value / 100;
}


// birds
const birds = document.getElementById("birds");
const birdsicon = document.getElementById("imageborder-birds");
const togbirds = document.querySelector(".volume3");
const togbirdsText = document.querySelector(".h3birds");
document.getElementById("birds").loop = true;
let recent_volume3= document.querySelector('#volume3');

birdsicon.addEventListener('click', () => {
  togbirds.classList.toggle("volume3-active");
  togbirdsText.classList.toggle("h3birds-active");
  birdsicon.classList.toggle("imageborder-active");
  if (birds.paused) {
    birds.play();
  } else {
    birds.pause();
  }
});
function volume3_change(){
	birds.volume = recent_volume3.value / 100;
}


// wind
const wind = document.getElementById("wind");
const windicon = document.getElementById("imageborder-wind");
const togwind = document.querySelector(".volume4");
const togwindText = document.querySelector(".h3wind");
document.getElementById("wind").loop = true;
let recent_volume4= document.querySelector('#volume4');

windicon.addEventListener('click', () => {
  togwind.classList.toggle("volume4-active");
  togwindText.classList.toggle("h3wind-active");
  windicon.classList.toggle("imageborder-active");
  if (wind.paused) {
    wind.play();
  } else {
    wind.pause();
  }
});
function volume4_change(){
	wind.volume = recent_volume4.value / 100;
}


// river
const river = document.getElementById("river");
const rivericon = document.getElementById("imageborder-river");
const togriver = document.querySelector(".volume5");
const togriverText = document.querySelector(".h3river");
document.getElementById("river").loop = true;
let recent_volume5= document.querySelector('#volume5');

rivericon.addEventListener('click', () => {
  togriver.classList.toggle("volume5-active");
  togriverText.classList.toggle("h3river-active");
  rivericon.classList.toggle("imageborder-active");
  if (river.paused) {
    river.play();
  } else {
    river.pause();
  }
});
function volume5_change(){
	river.volume = recent_volume5.value / 100;
}


// storm
const storm = document.getElementById("storm");
const stormicon = document.getElementById("imageborder-storm");
const togstorm = document.querySelector(".volume6");
const togstormText = document.querySelector(".h3storm");
document.getElementById("storm").loop = true;
let recent_volume6= document.querySelector('#volume6');

stormicon.addEventListener('click', () => {
  togstorm.classList.toggle("volume6-active");
  togstormText.classList.toggle("h3storm-active");
  stormicon.classList.toggle("imageborder-active");
  if (storm.paused) {
    storm.play();
  } else {
    storm.pause();
  }
});
function volume6_change(){
	storm.volume = recent_volume6.value / 100;
}


// wolf
const wolf = document.getElementById("wolf");
const wolficon = document.getElementById("imageborder-wolf");
const togwolf = document.querySelector(".volume7");
const togwolfText = document.querySelector(".h3wolf");
document.getElementById("wolf").loop = true;
let recent_volume7= document.querySelector('#volume7');

wolficon.addEventListener('click', () => {
  togwolf.classList.toggle("volume7-active");
  togwolfText.classList.toggle("h3wolf-active");
  wolficon.classList.toggle("imageborder-active");
  if (wolf.paused) {
    wolf.play();
  } else {
    wolf.pause();
  }
});
function volume7_change(){
	wolf.volume = recent_volume7.value / 100;
}


// owl
const owl = document.getElementById("owl");
const owlicon = document.getElementById("imageborder-owl");
const togowl = document.querySelector(".volume8");
const togowlText = document.querySelector(".h3owl");
document.getElementById("owl").loop = true;
let recent_volume8= document.querySelector('#volume8');

owlicon.addEventListener('click', () => {
  togowl.classList.toggle("volume8-active");
  togowlText.classList.toggle("h3owl-active");
  owlicon.classList.toggle("imageborder-active");
  if (owl.paused) {
    owl.play();
  } else {
    owl.pause();
  }
});
function volume8_change(){
	owl.volume = recent_volume8.value / 100;
}


// campfire
const campfire = document.getElementById("campfire");
const campfireicon = document.getElementById("imageborder-campfire");
const togcampfire = document.querySelector(".volume9");
const togcampfireText = document.querySelector(".h3campfire");
document.getElementById("campfire").loop = true;
let recent_volume9= document.querySelector('#volume9');

campfireicon.addEventListener('click', () => {
  togcampfire.classList.toggle("volume9-active");
  togcampfireText.classList.toggle("h3campfire-active");
  campfireicon.classList.toggle("imageborder-active");
  if (campfire.paused) {
    campfire.play();
  } else {
    campfire.pause();
  }
});
function volume9_change(){
	campfire.volume = recent_volume9.value / 100;
}


// traffic
const traffic = document.getElementById("traffic");
const trafficicon = document.getElementById("imageborder-traffic");
const togtraffic = document.querySelector(".volume10");
const togtrafficText = document.querySelector(".h3traffic");
document.getElementById("traffic").loop = true;
let recent_volume10= document.querySelector('#volume10');

trafficicon.addEventListener('click', () => {
  togtraffic.classList.toggle("volume10-active");
  togtrafficText.classList.toggle("h3traffic-active");
  trafficicon.classList.toggle("imageborder-active");
  if (traffic.paused) {
    traffic.play();
  } else {
    traffic.pause();
  }
});
function volume10_change(){
	traffic.volume = recent_volume10.value / 100;
}
