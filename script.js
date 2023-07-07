const word = document.getElementById('word');
const text = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endgameEl = document.getElementById('end-game');
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


function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}
function addWordToDOM() {
    randomWord= getRandomWord();
    word.innerHTML = randomWord;
}

function updateScore() {
   score++;
   scoreEl.innerHTML =score;


}
addWordToDOM();

text.addEventListener('input', e=> {
   const insertedText = e.target.value;

   if(insertedText === randomWord) {
      addWordToDOM();
      updateScore();


e.target.value = '';
}
})