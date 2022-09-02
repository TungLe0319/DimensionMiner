let clickUpgrades = [
  { name: 'pickaxe', price: 5, quantity: 0, multiplier: 1 },
  { name: 'megapickaxe', price: 100, quantity: 0, multiplier: 5 },
];

let automaticUpgrades = [
  { name: 'laser', price: 50, quantity: 0, multiplier: 20 },
];




// GLOBAL VARIABLES
let orbs = 0;
let pickaxeCount = 0;
let megaPickaxeCount = 0
let laserCount = 0
let megaLaserCount = 0
let clickCountBonus = 0
let laserCountBonus = 0
// ----------------
let orbDOM = document.getElementById('orb-amount');
let megaPickaxeCountDOM= document.getElementById('megapickaxe-count')
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

  console.log(orbs);
  drawCounts();
}

function drawCounts() {
  orbDOM.innerText = orbs;
  pickaxeCountDOM.innerText = pickaxeCount
  megaPickaxeCountDOM.innerText = megaPickaxeCount
  laserCountDOM.innerText = laserCount
  megaPickaxeCountDOM.innerText = megaLaserCount
}

// SECTION CLICK UPGRADES
function upgradeOne() {
  if (orbs >= 5) {
    orbs -= 5;
    upgrades.push(clickUpgrades[0]);
    pickaxeCount++;
  }
  console.log(upgrades);
  drawCounts();
  
}
function upgradeTwo() {
  if (orbs >= 100) {
    orbs -= 100;
    upgrades.push(clickUpgrades[1]);
    megaPickaxeCount++;
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
  }
  console.log(autoUpgrades);
  drawCounts()
}

// TODO laser count DOM to change, interval making it change itself and not accurrate
function collectAutoUpgrades(){
  autoUpgrades.forEach(laser => {
    orbs += laser.multiplier
   
  })
  console.log(autoUpgrades, orbs);
  drawCounts()
}


setInterval( collectAutoUpgrades, 3000)


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
