
let pet='🐱';
let rooms=['🏠 Sala','🍳 Cocina','🛏 Dormitorio','🛁 Baño','🌳 Jardín'];
let classes=['living','kitchen','bedroom','bathroom','garden'];
let room=0,coins=100,level=1;

function selectPet(p){pet=p;chosen.textContent=p;}
function startGame(){
 if(chosen.textContent==='Ninguna'){alert('Selecciona una mascota');return;}
 startScreen.classList.add('hidden');
 game.classList.remove('hidden');
 document.getElementById('pet').textContent=pet;
}
function feed(){
 hunger.value=Math.min(100,hunger.value+15);
 coins+=5; coinsEl();
 msg.textContent='Tu mascota comió.';
}
function sleepPet(){
 energy.value=100;
 msg.textContent='Tu mascota descansó.';
}
function play(){
 happy.value=Math.min(100,happy.value+15);
 coins+=10; coinsEl();
 msg.textContent='Tu mascota jugó.';
}
function changeRoom(){
 room=(room+1)%rooms.length;
 roomTitle.textContent=rooms[room];
 let r=document.getElementById('room');
 r.className='room '+classes[room];
 msg.textContent='Entraste en '+rooms[room];
}
function coinsEl(){
 document.getElementById('coins').textContent=coins;
}
setInterval(()=>{
 hunger.value=Math.max(0,hunger.value-1);
 energy.value=Math.max(0,energy.value-1);
 happy.value=Math.max(0,happy.value-1);
},4000);
