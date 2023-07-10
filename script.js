const word = document.getElementById('word');
const text = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endgameEl = document.getElementById('end-game-container');
const settingBtn = document.getElementById('settings-btn');
const settings = document.getElementById('settings');
const settingsForm = document.getElementById('settings-form');
const difficultySelect = document.getElementById('difficulty');

const words =[
  'sigh',
  'oxygen',
  'beauty',
  'dependent',
  'vamshi',
  'nithin',
  'jaisingh',
  'shiva',
  'rushi',
  'harshith',
  'animal',
  'zeebra',
  'powers',
  'coconut',
  'computer',  
  'javascript',
  'screenshot',
  'snapchat',
  'instagram',
  'friends',
  'moneyheist',
  'sheldon',
  'vocabulary',
  'ecstasy'
];

let randomWord;

let score= 0;

let time= 10;

let difficulty = localStorage.getItem('difficulty')!== null 
  ? localStorage.getItem('difficulty')
  : 'medium';


difficultySelect.value=
   localStoragetItem('difficulty') !== null
   ? localStorage.getItem('difficulty')
   : 'medium';
text.focus();

const timeInterval = setInterval(updateTime, 1000);


function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];

function addWordToDOM() {
    randomWord= getRandomWord();
    word.innerHTML = randomWord;
}

function updateScore() {
   score++;
   scoreEl.innerHTML =score;
}

function updateTime() {
   time--;
   timeEl.innerHTML =time + 's';

  if(time === 0){
    clearInterval(timeInterval);
    gameOver();
 }
}

function gameOver(){
  endgameEl.innerHTML ='
     <h1>Time out</h1>
     <p>Your final score is s{score}</p>
     <button onclick = "location.reload()">Reload</button>
';
  
 endgameEl.style.display = 'flex';
}
addWordToDOM();


text.addEventListener('input', e=> {
   const insertedText = e.target.value;

   if(insertedText === randomWord) {
      addWordToDOM();
      updateSCore();


   e.target.value = '';
   if(difficulty === 'hard'){
      time +=2;
}else if(difficulty === 'medium'){
    time += 3;
} else {
    time +=5;
}

   updateTime();

}
});


settingsBtn.addEVentListener('click', () =>
settings.classList.toggle('hide'));
 
settingsForm.addEVentListener('change',e => {
  difficulty = e.target.value;
  console.log(difficulty);
  localStorage.setItem('difficulty',difficulty);
});
