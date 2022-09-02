let clickUpgrades = [
  { name: 'pickaxe', price: 5, quantity: 0, multiplier: 1 },
  { name: 'megapickaxe', price: 100, quantity: 0, multiplier: 5 },
  { name: 'ultrapickaxe', price: 10, quantity: 0, multiplier: 20 },
];

let automaticUpgrades = [
  { name: 'laser', price: 50, quantity: 0, multiplier: 20 },
];




// GLOBAL VARIABLES
let orbs = 0;
let pickaxeCount = 0;
let megaPickaxeCount = 0
let ultraPickaxeCount = 0
let laserCount = 0
let megaLaserCount = 0
let clickCountBonus = 0
let laserCountBonus = 0
// ----------------
let orbDOM = document.getElementById('orb-amount');
let megaPickaxeCountDOM= document.getElementById('megapickaxe-count')
let ultraPickaxeCountDOM= document.getElementById('ultraPickaxe-count')
let pickaxeCountDOM = document.getElementById('pickaxe-count');
let laserCountDOM = document.getElementById('laser-count')
let MegaLaserCountDOM = document.getElementById('megalaser-count')
let clickCountBonusDOM = document.getElementById('clickCount-bonus')
let laserCountBonusDOM=document.getElementById('autoClickCount-bonus')
// -----------------------------
let pickaxe = clickUpgrades.find((upgrade) => upgrade.name == 'pickaxe');
let megaPickaxe = clickUpgrades.find(
  (upgrade) => upgrade.name == 'megapickaxe'
);
// upgrade ARRAYS
const upgrades = [
  {
    name: 'startingClick',
    price: 0,
    quantity: 0,
    multiplier: 1,
  },
];

const autoUpgrades = [
  {
    name: ' starting auto',
    price: 0,
    quantity: 0,
    multiplier : 0
  }
]
function mine() {
  upgrades.forEach(upgrade =>{
   orbs += upgrade.multiplier
  })
  addLaser()
 addAlien()
colorchange()
  console.log(orbs);
  drawCounts();
}


function drawCounts() {
  clickCountBonusDOM.innerText=clickCountBonus
  orbDOM.innerText = orbs;
  pickaxeCountDOM.innerText = pickaxeCount
  megaPickaxeCountDOM.innerText = megaPickaxeCount
  laserCountDOM.innerText = laserCount
  megaPickaxeCountDOM.innerText = megaLaserCount
  ultraPickaxeCountDOM.innerText = ultraPickaxeCount
}

// SECTION CLICK UPGRADES
function upgradeOne() {
  if (orbs >= 5) {
    orbs -= 5;
    upgrades.push(clickUpgrades[0]);
    pickaxeCount++;
    clickCountBonus++
  }
  console.log(upgrades);
  drawCounts();
  
}
function upgradeTwo() {
  if (orbs >= 100) {
   
    orbs -= 100;
    upgrades.push(clickUpgrades[1]);
    megaPickaxeCount++;
    clickCountBonus+= 5
  }
  console.log(upgrades);
  drawCounts();
  
}
// change back to 500 later, using 10 for testing
// change -= back to 500
function upgradeThree() {
  if (orbs >= 10) {
    
    orbs -= 10;
    upgrades.push(clickUpgrades[2]);
    ultraPickaxeCount++;
    clickCountBonus+=20
  }
  console.log(upgrades);
  drawCounts();
  
}



// NOTE AUTO UPGRADES
function autoUpgradeOne(){
  if (orbs >= 5) {
    orbs -= 5
    autoUpgrades.push(automaticUpgrades[0])
    laserCount ++
    clickCountBonus+= 20
  }
  console.log(autoUpgrades);
  drawCounts()
}

// TODO laser count DOM to change, interval making it change itself and not accurrate
function collectAutoUpgrades(){
  autoUpgrades.forEach(laser => {
    orbs += laser.multiplier
   
  })
  // console.log(autoUpgrades, orbs);
 drawCounts()
}


setInterval( collectAutoUpgrades, 3000)




// SECTION TESTS

function click(event) {
  const template = document.getElementByID('#floating-text-template').content.cloneNode(true);
  const element = template.querySelector('cookie') //replace class with yours
  element.style.left = `${event.clientX}px`
  element.style.top = `${event.clientY}px`
  document.appendChild(element);
}

function colorchange(){
  let orbElem =document.getElementById('atomOrb')
  let rNum = Math.floor(Math.random() *360)
orbElem.style.filter ='hue-rotate('+rNum +'deg)'
console.log(rNum);
}

function addAlien(){
  let alienMarquee = document.getElementById("alienmarquee")
 
   let template = `<img src="./resources/Alien.png" alt="" srcset="" style="width: 2rem;">`
  
  alienMarquee.innerHTML += template
}
function addLaser(){
  let laserMarquee = document.getElementById('lasermarquee')
  let template = ` <img src="https://media2.giphy.com/media/1rOy1l3mulySaqilto/giphy.gif?cid=ecf05e47oc9d0htfhowppmrlwdqgkhipbq2wuokomsbcvi6f&rid=giphy.gif&ct=s" alt="" srcset="" style="width: 2rem;">`
laserMarquee.innerHTML += template
}



// var x = 0;
// $("#cookie").click(function(e) {
//   x++;
//   $("#cookie").append('<div id="x' + x + '" hidden>+1.0</div>');
//   $("#x" + x).css("top", e.clientY);
//   $("#x" + x).css("left", e.clientX - 10);
//   $("#x" + x).css("position", "absolute");
//   $("#x" + x).css("width", "25px");
//   $("#x" + x).css("height", "25px");
//   $("#x" + x).css("color", "white");
//   $("#x" + x).css("font-weight", "bold");
//   $("#x" + x).css("animation", "GoUp 2s forwards linear");
//   $("#x" + x).show();
// });


function clickEffect(e) {
  var d = document.createElement('div');
  d.className = 'clickEffect';
  d.style.top = e.clientY + 'px';
  d.style.left = e.clientX + 'px';
  document.body.appendChild(d);
  d.addEventListener(
    'animationend',
    function () {
      d.parentElement.removeChild(d);
    }.bind(this)
  );
}
document.addEventListener('click', clickEffect);