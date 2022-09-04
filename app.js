
let clickUpgrades = [

  { name: 'pickaxe', price: 10, quantity: 0, multiplier: 5 },
  { name: 'megapickaxe', price: 10, quantity: 0, multiplier: 5 },
  { name: 'ultrapickaxe', price: 1000, quantity: 0, multiplier: 20 },
  { name: 'makeADeal', price: 10, quantity: 0, multiplier: 1000 },
];

let automaticUpgrades = [
  { name: 'laser', price: 1, quantity: 0, multiplier: 25 },
  { name: 'megalaser', price: 500, quantity: 0, multiplier: 75 },
  { name: 'ultralaser', price: 1000, quantity: 0, multiplier: 100 },
  { name: 'specialGun', price: 10, quantity: 0, multiplier: 1000 },
  { name: 'callForHelp', price: 10, quantity: 0, multiplier: 500 },
];
// -----------ToolTip-----------------------------------------------
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


// GLOBAL VARIABLES]
// TOTAL RESOURCES
let totalOrbsOverTime=0
let orbs = 0;
let laserCountBonus = 0;
let clickCountBonus = 1;
// --------------------------

// ----------------
let orbDOM = document.getElementById('orb-amount');
let totalOrbsDOM = document.getElementById('totalOrb-amount');
let atomOrbDOM = document.getElementById('atomOrb');
let clickCountBonusDOM = document.getElementById('clickCount-bonus');
let laserCountBonusDOM = document.getElementById('autoClickCount-bonus');
// -----------------------------------

let pickaxeCountDOM = document.getElementById('pickaxe-count');
let pickaxeCostDOM = document.getElementById('pickaxe-cost');
let pickAxeMultiplierDOM = document.getElementById('pickAxeMultiplier')
let megaPickaxeCountDOM = document.getElementById('megapickaxe-count');
let MegaPickAxeCostDOM = document.getElementById('megapickaxe-cost');
let megaPickMultiplierDOM = document.getElementById('megaPickAxe-Multiplier')
let ultraPickaxeCountDOM = document.getElementById('ultraPickaxe-count');
let ultraPickAxeCostDOM = document.getElementById('ultrapickaxe-cost');
let ultraPickAxeMultiplierDOM = document.getElementById('ultraPickAxe-Multiplier');
// -----------------------------------------------------
let laserCountDOM = document.getElementById('laser-count');
let laserCostDOM = document.getElementById('laser-cost')
let laserMultiplierDOM = document.getElementById('laser-Multiplier')
let megaLaserMultiplierDOM = document.getElementById('megaLaser-Multiplier')
let ultraLaserMultiplierDOM = document.getElementById('ultraLaser-Multiplier')
let megaLaserCountDOM = document.getElementById('megalaser-count');
let megaLaserCostDOM = document.getElementById('megalaser-cost')
let ultraLaserCountDOM = document.getElementById('ultralaser-count');
let ultraLaserCostDOM = document.getElementById('ultralaser-cost')
// -----------------------------
let pickaxe = clickUpgrades.find((pickle) => pickle.name == 'pickaxe');
let megaPickAxe = clickUpgrades.find((pickle) => pickle.name == 'megapickaxe');
let ultraPickAxe = clickUpgrades.find((pickle) => pickle.name == 'ultrapickaxe');
// ------------------------------------------------
let laser = automaticUpgrades.find((pickle) => pickle.name == 'laser');
let megaLaser = automaticUpgrades.find((pickle) => pickle.name == 'megalaser');
let ultraLaser = automaticUpgrades.find((pickle) => pickle.name == 'ultralaser');
// ----------------------------------------------------------------
let callForHelpz = automaticUpgrades.find(bananaWord => bananaWord.name == 'callForHelp')

// let specialGunz = automaticUpgrades.find(pickle => pickle.name == 'specialGun')
// STUB FOR TIMER
let timerSeconds = 3;
const audio = new Audio()
audio.src = "./resources/ClickSound.wav"








loadProfile()




function mine() {
  orbs += clickCountBonus;
  totalOrbsOverTime+= clickCountBonus
audio.play()
  
  // addLaser();
  // addAlien();
  colorchange();
  
  drawCounts();
  changeImage();

}


function save(){
  window.localStorage.setItem('Orbs', orbs)
  window.localStorage.setItem('totalOrbsOverTime', totalOrbsOverTime)
  window.localStorage.setItem('ClickUpgrades', JSON.stringify(clickUpgrades))
  window.localStorage.setItem('AutomaticUpgrades', JSON.stringify(automaticUpgrades))
  window.localStorage.setItem('ClickCountBonus', clickCountBonus)
  window.localStorage.setItem('LaserCountBonus', laserCountBonus)

}

function loadProfile(){
let orbData=JSON.parse(window.localStorage.getItem('Orbs'))
let totalOrbData=JSON.parse(window.localStorage.getItem('totalOrbsOverTime'))
let cUpgradesData=JSON.parse(window.localStorage.getItem('ClickUpgrades'))
let aUpgradesData=JSON.parse(window.localStorage.getItem('AutomaticUpgrades'))
let clickCountBonusData=JSON.parse(window.localStorage.getItem('ClickCountBonus'))
let laserCountBonusData=JSON.parse(window.localStorage.getItem('LaserCountBonus'))
if (orbData) {
  orbs=orbData
}
 if (totalOrbData) {
  totalOrbsOverTime = totalOrbData
}
if (clickCountBonusData) {
  clickCountBonus=clickCountBonusData
}
if (laserCountBonusData) {
  laserCountBonus=laserCountBonusData
}
// if (cUpgradesData) {
//   clickUpgrades=cUpgradesData
// }

// if (aUpgradesData) {
//   automaticUpgrades=aUpgradesData
// }
}

function drawCounts() {
  // ---- PickAxes
  pickaxeCountDOM.innerText = pickaxe.quantity;
  megaPickaxeCountDOM.innerText = megaPickAxe.quantity;
  ultraPickaxeCountDOM.innerText = ultraPickAxe.quantity;
  pickaxeCostDOM.innerText = pickaxe.price;
  MegaPickAxeCostDOM.innerText = megaPickAxe.price;
  ultraPickAxeCostDOM.innerText = ultraPickAxe.price;
  clickCountBonusDOM.innerText = clickCountBonus;
  // -------------multiplies
  pickAxeMultiplierDOM.innerText = pickaxe.multiplier*pickaxe.quantity
  megaPickMultiplierDOM.innerText = megaPickAxe.multiplier*megaPickAxe.quantity
  ultraPickAxeMultiplierDOM.innerText = ultraPickAxe.multiplier*ultraPickAxe.quantity
  laserMultiplierDOM.innerText=laser.multiplier*laser.quantity
  megaLaserMultiplierDOM.innerText= megaLaser.multiplier*megaLaser.quantity
  ultraLaserMultiplierDOM.innerText= ultraLaser.multiplier*ultraLaser.quantity
  // ----LASERS
  laserCountDOM.innerText = laser.quantity;
  megaLaserCountDOM.innerText = megaLaser.quantity;
  ultraLaserCountDOM.innerText = ultraLaser.quantity;
  laserCountBonusDOM.innerText = laserCountBonus;
laserCostDOM.innerText = laser.price
megaLaserCostDOM.innerText = megaLaser.price
ultraLaserCostDOM.innerText = ultraLaser.price

  // ------TOTAL ORBS----
  orbDOM.innerText = orbs;
  totalOrbsDOM.innerText= totalOrbsOverTime
  badgeReveal()
  save()
  

 
}

// ----Click Upgrade
function upgrade(name) {
  let picks = clickUpgrades.find((upgrade) => upgrade.name == name);

  if (orbs >= picks.price) {
    orbs -= picks.price;
    picks.quantity++;
    clickCountBonus += picks.multiplier;
    picks.price += picks.quantity * 2;
   
  }
 
  drawCounts();
}

//----Auto Upgrade
function autoUpgradesLaser(name) {
  let laser = automaticUpgrades.find((laser) => laser.name == name);
  if (orbs >= laser.price) {
    orbs -= laser.price;

    laser.quantity++;

    laserCountBonus += laser.multiplier;
  }
  console.log('hi', laserCountBonus);

  drawCounts();
}
//-------------------

// -----------------------------
function specialGun(name){
let specialGun = automaticUpgrades.find(gun => gun.name == name)
let specialGunBadge = document.getElementById('specialGunBadge')
let greyOut = document.getElementById('special1')
clearInterval(collectAutoUpgrades)
if (specialGun.quantity >=1) {
  greyOut.className += 'grey-out'
  specialGun.price= 0
  specialGun.multiplier=0
}
if (orbs > specialGun.price) {

  orbs -= specialGun.price
  specialGun.quantity++
  laserCountBonus += specialGun.multiplier
specialGunBadge.className -= 'visually-hidden'
}

drawCounts()
}
// ----------------------
// -----------------------------
// TODO FIX ONLY 2 aliens coming out
function callForHelp(name){
let callForHelp= automaticUpgrades.find(help => help.name == name)
let callForHelpBadge = document.getElementById('callForHelpBadge')
let greyOut = document.getElementById('special2')
if (callForHelp.quantity >=5) {
  greyOut.className += 'grey-out'
  callForHelp.multiplier=0
  callForHelp.price=0
}
if (orbs > callForHelp.price) {
  orbs -= callForHelp.price
  callForHelp.quantity++
  laserCountBonus += callForHelp.multiplier
  callForHelpBadge.className -= 'visually-hidden'
 
}
addAlien()
addLaser()

drawCounts()
}
// ----------------------
function makeADeal(name){
  let makeADeal= clickUpgrades.find(deal=> deal.name == name)
  let makeADealBadge = document.getElementById('makeADealBadge')
  let greyOut = document.getElementById('special3')
  if (makeADeal.quantity >=1) {
    greyOut.className += 'grey-out'
    makeADeal.multiplier = 0
    makeADeal.price= 0
  }
  if (orbs > makeADeal.price) {
    orbs -= makeADeal.price
    makeADeal.quantity++
    clickCountBonus+= makeADeal.multiplier
    makeADealBadge.className -= 'visually-hidden'
  
  
  }
  
  drawCounts()
  }




// -------------------------------------------------------------



// ------------------------------------------------
function timing(){
timerSeconds--
}

// -----------------------------------------

function collectAutoUpgrades() {
  let timerDOM = document.getElementById('timer');
 totalOrbsOverTime+= laserCountBonus
  orbs += laserCountBonus;
  setTimeout(timing,0)
  if (timerSeconds <0) {
    timerSeconds=3
  }
  timerDOM.innerText = timerSeconds;
  
  drawCounts();
}
setInterval(collectAutoUpgrades,3000)
// -----------------------------------------------------------
// function timer() {
//   let timerDOM = document.getElementById('timer');
//   timerSeconds--;
//   if (timerSeconds < 0) {
//     timerSeconds = 3;
//   }
//   timerDOM.innerText = timerSeconds;
// }
// ----------------------------------------------------


// ------------------------------------------------
function click(event) {
  const template = document
    .getElementByID('#floating-text-template')
    .content.cloneNode(true);
  const element = template.querySelector('cookie'); //replace class with yours
  element.style.left = `${event.clientX}px`;
  element.style.top = `${event.clientY}px`;
  document.appendChild(element);
}

// -----------------------------------------------------
function colorchange() {
  let orbElem = document.getElementById('atomOrb');
  let rNum = Math.floor(Math.random() * 360);
  orbElem.style.filter = 'hue-rotate(' + rNum + 'deg)';
}

// ------------------------------------------------
function addAlien() {
  let thing = automaticUpgrades.find(item1 => item1.name == 'callForHelp')
  let alienMarquee = document.getElementById('alienmarquee');

  let template = `<img src="./resources/Alien1.png" alt="" srcset="" style="width: 2rem;">`;


  if (thing.quantity > 5) {
    return
  }
  alienMarquee.innerHTML += template;
}
// --------------------------------------------------------
function addLaser() {
  let laserMarquee = document.getElementById('lasermarquee');
  let template = ` <img src="https://media2.giphy.com/media/1rOy1l3mulySaqilto/giphy.gif?cid=ecf05e47oc9d0htfhowppmrlwdqgkhipbq2wuokomsbcvi6f&rid=giphy.gif&ct=s" alt="" srcset="" style="width: 2rem;">`;
  if (callForHelpz.quantity > 5) {
    return
  }
  laserMarquee.innerHTML += template;
}

// --------------------------------------------------------------------------------

// let possibleBosses= ['https://media1.giphy.com/media/dkPXar0zpixmA1Pqw0/giphy.gif?cid=ecf05e47k15dvss3xmpuj6gftxjj4i9peyuhmidcpvhldp4p&rid=giphy.gif&ct=g',
// 'https://media2.giphy.com/media/5Rg9bh6LyLKuY/giphy.gif?cid=ecf05e47snlxpgkpnyqzzetx78hx1ljx472ox5d2x2epjp12&rid=giphy.gif&ct=g',
// 'https://media1.giphy.com/media/l1KVbbEBi4keD6jlu/giphy.gif?cid=ecf05e47murua58yw20e67n8axnunobbbro5giwymznom9xk&rid=giphy.gif&ct=g',
// 'https://media0.giphy.com/media/l41m5M6KnkGywFyXS/giphy.gif?cid=ecf05e479ue6rlb6iek04tiz66kb7w8i8i2xqipwxbbtsozp&rid=giphy.gif&ct=g',
// 'https://i.giphy.com/media/GRmgmqEbC3oMRL2uQq/giphy.webp', 'https://i.giphy.com/media/vCIKY5e444uNi5VFT2/giphy.webp', 'https://media4.giphy.com/media/QVUgDYLg7ezR5mBtv0/giphy.gif?cid=ecf05e47adqrbr4mkib6tghaxyclcjaqpcvtwqk45dxu8qqi&rid=giphy.gif&ct=g',
// 'https://media0.giphy.com/media/s5arkl7ICEsyMsyUXA/giphy.gif?cid=ecf05e47jxg38zp7ug8oucls6ap26h4uyuv4bqlqxa0z4vf6&rid=giphy.gif&ct=g',
// 'https://media2.giphy.com/media/8UI85273lC1VzEgkyW/giphy.gif?cid=ecf05e47drca92pkxoxzmwd718zeljpc2z9ocn2fc8c9x4kt&rid=giphy.gif&ct=g' ]
function changeImage() {

  switch (orbs) {
   
    case 10:
      atomOrbDOM.src = 'https://media1.giphy.com/media/dkPXar0zpixmA1Pqw0/giphy.gif?cid=ecf05e47k15dvss3xmpuj6gftxjj4i9peyuhmidcpvhldp4p&rid=giphy.gif&ct=g'
      break;
      case 20:
        atomOrbDOM.src = 'https://media2.giphy.com/media/5Rg9bh6LyLKuY/giphy.gif?cid=ecf05e47snlxpgkpnyqzzetx78hx1ljx472ox5d2x2epjp12&rid=giphy.gif&ct=g'
        break;
      case 30:
        // CHANGE THIS ONE
        atomOrbDOM.src = 'https://i.giphy.com/media/QVUgDYLg7ezR5mBtv0/giphy.webp'
        break;
      case 33:
        // CHANGE THIS ONE
        atomOrbDOM.src = 'https://media3.giphy.com/media/otzvbOMu2qSVMOoTTX/giphy.gif?cid=ecf05e47kliopf6ieuoqymmtm40cmesy1l0i7li9tdgmspmy&rid=giphy.gif&ct=g'
        break;
      case 35:
        // CHANGE THIS ONE
        atomOrbDOM.src = 'https://i.giphy.com/media/vCIKY5e444uNi5VFT2/giphy.webp'
        break;
      case 40:
        atomOrbDOM.src = 'https://media0.giphy.com/media/l41m5M6KnkGywFyXS/giphy.gif?cid=ecf05e479ue6rlb6iek04tiz66kb7w8i8i2xqipwxbbtsozp&rid=giphy.gif&ct=g'
   break;
      case 45:
        atomOrbDOM.src = 'https://i.giphy.com/media/GRmgmqEbC3oMRL2uQq/giphy.webp'
   break;
      case 50:
        atomOrbDOM.src = 'https://media1.giphy.com/media/hq64aPc8ExJpiXgRtR/giphy.gif?cid=ecf05e475educocpy8myhtzs1my3m0gif81dc384mrbkpclr&rid=giphy.gif&ct=g'
   break;
      case 55:
        atomOrbDOM.src = 'https://media3.giphy.com/media/fjxtT75gj7LrN3AHT3/giphy.gif?cid=ecf05e47p46wyrcs2gq8uehovssnmhb084m10tej0dzsnatt&rid=giphy.gif&ct=g'
   break;
      case 60:
        atomOrbDOM.src = 'https://i.giphy.com/media/s5arkl7ICEsyMsyUXA/giphy.webp'
   break;
      case 70:
        atomOrbDOM.src = 'https://media1.giphy.com/media/kAQmvq1JXvca8fdGf4/giphy.gif?cid=ecf05e47qki7e1rkk7x2bnrtepgpl1xcruuf600v75wudg7c&rid=giphy.gif&ct=g'
   break;
  }
}

// function cannotPurchase(){

// }


// -----------------------------------------------------------------------
function badgeReveal(){
  let badge1=document.getElementById('badge1')
  let badge2=document.getElementById('badge2')
  let badge3=document.getElementById('badge3')
  let badge4=document.getElementById('badge4')
let pickBadge= document.getElementById('badge5')
let laserBadge=document.getElementById('badge6')
 switch (orbs ) {
  case 10:
    badge1.className -= 'visually-hidden'
    break;
  case 20:
    badge2.className -= 'visually-hidden'
    break;
  case 30:
    badge3.className -= 'visually-hidden'
    break;
  case 25:
    badge4.className -= 'visually-hidden'
    break;
 
  default:
    break;
 }

if (clickCountBonus > 10) {
  pickBadge.className -= 'visually-hidden'
}

if (laserCountBonus > 10) {
  laserBadge.className -= ' visually-hidden'
}
}

// --------------------------------------------------------------------------


// const cursor = document.querySelector(".cursor")
// var timeout

// document.addEventListener("mousemove", (e) =>{
//   let x = e.pageX
//   let y = e.pageY
//   cursor.style.top = y +"px"
//   cursor.style.left = x + "px"
//   cursor.style.display = "block"

// function mouseStopped(){
//   cursor.style.display = 'none'

// }

// clearTimeout(timeout)
// timeout = setTimeout(mouseStopped,1000)

// })
// document.addEventListener("mouseout", () => {
//   cursor.style.display = "none"
// })

// ----------------------------------------------------------------



// setInterval(collectAutoUpgrades, 3000);
// setInterval(timer, 1000);
drawCounts();

