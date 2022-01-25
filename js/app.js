const counterText = document.querySelector('.counter');
const startBtn = document.querySelector('#start');
const resetBtn = document.querySelector('#reset');
const checkBtn = document.querySelector('#check');
const checkContainer = document.querySelector('.checked');

let counterInterval;
let counter = 0;

//functions
function countUp(){
  counter++;
  counterText.innerHTML = convertTime(counter);
}
function startCounter(){
  counterInterval = setInterval(countUp, 10);
  startBtn.innerHTML = '<i class="bi bi-pause"></i>';
}
function stopCounter(){
  clearInterval(counterInterval);
  startBtn.innerHTML = '<i class="bi bi-play"></i>';
}
function convertTime(time){
  let mins, secs, mSecs;
  mins = Math.floor(time / 6000);
  secs = Math.floor(time / 100);
  if(secs > 59) secs = Math.floor(secs % 60);
  if(secs < 10) secs = '0' + secs;
  mSecs = Math.floor(time % 100);
  if(mSecs < 10) mSecs = '0' + mSecs;
  return mins + ':' + secs + ':' + mSecs;
}
function addCheck(){
  if(counter == 0) return;
  let node = document.createElement('h4');
  let textNode = document.createTextNode(convertTime(counter));
  node.appendChild(textNode);
  checkContainer.insertBefore(node, checkContainer.firstChild);
}
function resetCounter(){
  counter = 0;
  clearInterval(counterInterval);
  counterText.innerHTML = '00:00:00';
  checkContainer.innerHTML = '';
  startBtn.innerHTML = '<i class="bi bi-play"></i>';
}

//Event Listeners
startBtn.addEventListener('click', () => {
  if(startBtn.innerHTML == '<i class="bi bi-play"></i>'){
    startCounter();
  }else{
    stopCounter();
  }
});
resetBtn.addEventListener('click', resetCounter);
checkBtn.addEventListener('click', addCheck);