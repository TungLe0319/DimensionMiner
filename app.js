let clickUpgrades = [

  { name: 'pickaxe', price: 10, quantity: 0, multiplier: 5 },
  { name: 'megapickaxe', price: 100, quantity: 0, multiplier: 5 },
  { name: 'ultrapickaxe', price: 1000, quantity: 0, multiplier: 20 },
];

let automaticUpgrades = [
  { name: 'laser', price: 250, quantity: 0, multiplier: 25 },
  { name: 'megalaser', price: 500, quantity: 0, multiplier: 75 },
  { name: 'ultralaser', price: 1000, quantity: 0, multiplier: 100 },
];




// GLOBAL VARIABLES]
// TOTAL RESOURCES
let orbs = 0;
let laserCountBonus = 0;
let clickCountBonus = 1;
// --------------------------
let pickAxeMultiplier = 0
// ----------------
let orbDOM = document.getElementById('orb-amount');
let atomOrbDOM = document.getElementById('atomOrb');
let clickCountBonusDOM = document.getElementById('clickCount-bonus');
let laserCountBonusDOM = document.getElementById('autoClickCount-bonus');
// -----------------------------------
let pickaxeCountDOM = document.getElementById('pickaxe-count');
let pickaxeCostDOM = document.getElementById('pickaxe-cost');
let megaPickaxeCountDOM = document.getElementById('megapickaxe-count');
let MegaPickAxeCostDOM = document.getElementById('megapickaxe-cost');
let ultraPickaxeCountDOM = document.getElementById('ultraPickaxe-count');
let ultraPickAxeCostDOM = document.getElementById('ultrapickaxe-cost');
let megaPickMultiplierDOM = document.getElementById('megaPick-Multiplier')
// -----------------------------------------------------
let laserCountDOM = document.getElementById('laser-count');
let laserCostDOM = document.getElementById('laser-cost')
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
// STUB FOR TIMER
let timerSeconds = 3;

function mine() {
  orbs += clickCountBonus;
  addLaser();
  addAlien();
  colorchange();
  drawCounts();
  changeImage();
  console.log(clickUpgrades);
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
}

// ----Click Upgrade
function upgrade(name) {
  let picks = clickUpgrades.find((upgrade) => upgrade.name == name);

  if (orbs >= picks.price) {
    orbs -= picks.price;
    picks.quantity++;
    clickCountBonus += picks.multiplier;
    picks.price += picks.quantity * 2;
    console.log(picks.price);
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
function pickMultiplier(){
  
}



// -----------------
function collectAutoUpgrades() {
  orbs += laserCountBonus;
  // console.log(autoUpgrades, orbs);
  drawCounts();
}
// -----------------------------------------
function timer() {
  let timerDOM = document.getElementById('timer');
  timerSeconds--;
  if (timerSeconds < 0) {
    timerSeconds = 3;
  }
  timerDOM.innerText = timerSeconds;
}
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

function colorchange() {
  let orbElem = document.getElementById('atomOrb');
  let rNum = Math.floor(Math.random() * 360);
  orbElem.style.filter = 'hue-rotate(' + rNum + 'deg)';
}

function addAlien() {
  let alienMarquee = document.getElementById('alienmarquee');

  let template = `<img src="./resources/Alien.png" alt="" srcset="" style="width: 2rem;">`;

  alienMarquee.innerHTML += template;
}
function addLaser() {
  let laserMarquee = document.getElementById('lasermarquee');
  let template = ` <img src="https://media2.giphy.com/media/1rOy1l3mulySaqilto/giphy.gif?cid=ecf05e47oc9d0htfhowppmrlwdqgkhipbq2wuokomsbcvi6f&rid=giphy.gif&ct=s" alt="" srcset="" style="width: 2rem;">`;
  laserMarquee.innerHTML += template;
}


let possibleBosses= ['https://media1.giphy.com/media/dkPXar0zpixmA1Pqw0/giphy.gif?cid=ecf05e47k15dvss3xmpuj6gftxjj4i9peyuhmidcpvhldp4p&rid=giphy.gif&ct=g',
'https://media2.giphy.com/media/5Rg9bh6LyLKuY/giphy.gif?cid=ecf05e47snlxpgkpnyqzzetx78hx1ljx472ox5d2x2epjp12&rid=giphy.gif&ct=g',
'https://media1.giphy.com/media/l1KVbbEBi4keD6jlu/giphy.gif?cid=ecf05e47murua58yw20e67n8axnunobbbro5giwymznom9xk&rid=giphy.gif&ct=g',
'https://media0.giphy.com/media/l41m5M6KnkGywFyXS/giphy.gif?cid=ecf05e479ue6rlb6iek04tiz66kb7w8i8i2xqipwxbbtsozp&rid=giphy.gif&ct=g',
'https://i.giphy.com/media/GRmgmqEbC3oMRL2uQq/giphy.webp', 'https://i.giphy.com/media/vCIKY5e444uNi5VFT2/giphy.webp', 'https://media4.giphy.com/media/QVUgDYLg7ezR5mBtv0/giphy.gif?cid=ecf05e47adqrbr4mkib6tghaxyclcjaqpcvtwqk45dxu8qqi&rid=giphy.gif&ct=g' ]
function changeImage() {
 let i = Math.floor(Math.random() * possibleBosses.length)
 atomOrbDOM.src = possibleBosses[i]
  // switch (orbs) {
   
  //   case 10:
  //     atomOrbDOM.src = 'https://media1.giphy.com/media/dkPXar0zpixmA1Pqw0/giphy.gif?cid=ecf05e47k15dvss3xmpuj6gftxjj4i9peyuhmidcpvhldp4p&rid=giphy.gif&ct=g'
  //     break;
  //     case 15:
  //       atomOrbDOM.src = 'https://media2.giphy.com/media/5Rg9bh6LyLKuY/giphy.gif?cid=ecf05e47snlxpgkpnyqzzetx78hx1ljx472ox5d2x2epjp12&rid=giphy.gif&ct=g'
  //       break;
  //     case 20:
  //       // CHANGE THIS ONE
  //       atomOrbDOM.src = 'https://media1.giphy.com/media/l1KVbbEBi4keD6jlu/giphy.gif?cid=ecf05e47murua58yw20e67n8axnunobbbro5giwymznom9xk&rid=giphy.gif&ct=g'
  //       break;
  //     case 25:
  //       atomOrbDOM.src = 'https://media0.giphy.com/media/l41m5M6KnkGywFyXS/giphy.gif?cid=ecf05e479ue6rlb6iek04tiz66kb7w8i8i2xqipwxbbtsozp&rid=giphy.gif&ct=g'
  //  break;
  //     case 30:
  //       atomOrbDOM.src = 'https://i.giphy.com/media/GRmgmqEbC3oMRL2uQq/giphy.webp'
  //  break;
  //     case 35:
  //       atomOrbDOM.src = 'https://i.giphy.com/media/vCIKY5e444uNi5VFT2/giphy.webp'
  //  break;
  //     case 40:
  //       atomOrbDOM.src = 'https://media4.giphy.com/media/QVUgDYLg7ezR5mBtv0/giphy.gif?cid=ecf05e47adqrbr4mkib6tghaxyclcjaqpcvtwqk45dxu8qqi&rid=giphy.gif&ct=g'
  //  break;
  // }
}
setInterval(collectAutoUpgrades, 3000);
setInterval(timer, 1000);
drawCounts();

