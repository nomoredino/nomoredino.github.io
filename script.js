let cactusBunch_1 = document.getElementById('cactusBunch-1');
let cactusBunch_2 = document.getElementById('cactusBunch-2');
let cactusBunch_3 = document.getElementById('cactusBunch-3');
let cactusBunch_4 = document.getElementById('cactusBunch-4');
let cactusBunch_5 = document.getElementById('cactusBunch-5');
let cactusBunch_6 = document.getElementById('cactusBunch-6');
let cactusBunch_7 = document.getElementById('cactusBunch-7');
let cactusBunch_8 = document.getElementById('cactusBunch-8');
let cactusBunch_9 = document.getElementById('cactusBunch-9');
let cactiContBody = document.getElementById('cactiContBody');
let pi = '31415926535897932384626433832795028851320005681271452635608456691368672287489405601015033086344017127494704205622305389945613140711270004875262888963995879475729174642635745525407909145135711136941091193932519107602082520261879853188770584297259167781314969900901921169717372784768472686084900337702424291651300500516832336435038951702989392233451722013812806965011784408745196012122859937162313017114448464090389064495444006198690754851602632750529834918740786680881833851022833450850486082503930213321971551843063545500766828294930413776552793975175461395398468339363830474611996653858153842056853386218672523340283087112328278921250771262946322956398989893582116745627010218356462201349671518819097303811980049734072396103685406643193950979019069963955245300545058068550195673022921913933918568034490398205955100226353536192041994745538593810234395544959778377902374216172711172364343543947822181852862408514006660443325888569867054315470696574745855033232334210730154594051655379068'
let i = 0;
let anim_0 = document.getElementById('pterodactyl');
let anim_1 = document.getElementById('pterodactylBox');
let anim_2 = document.getElementById('cactusRunRoll');
let anim_3 = document.getElementById('cloudRunRoll');
let anim_4 = document.getElementById('groundRunRoll');
let anim_5 = document.getElementsByClassName('jump');
let anim_6 = document.getElementsByClassName('dinoRun');
let gameStarted= false;
let colDetected = false;
let score = 0;
let highscore = 0;
let pterBox = document.getElementById('pterodactylBox');

// at page load
anim_0.classList.add('pause');
anim_1.classList.add('pause');
anim_2.classList.add('pause');
anim_3.classList.add('pause');
anim_4.classList.add('pause');
for (let i=0; i<anim_5.length; i++){
    anim_5[i].classList.add('pause');
}
for (let i=0; i<anim_6.length; i++){
    anim_6[i].classList.add('pause');
}
highscore= Number(localStorage.getItem('highscore'));
document.getElementById('scoreIng').innerHTML= `Highest Score: ${highscore}`;
//i think i switched id names of score and highscore lol ... element with score id is actually highscore
//end at page load

function randomCactus() { 

    let rand = pi.slice(i, i+10);

    if(i<200){
        i++
    }else{
        i=0
    } 

   let cacPos1 = cactusBunch_1.getBoundingClientRect();
   let cacPos2 = cactusBunch_2.getBoundingClientRect();
   let cacPos3 = cactusBunch_3.getBoundingClientRect();
   let cacPos4 = cactusBunch_4.getBoundingClientRect();
   let cacPos5 = cactusBunch_5.getBoundingClientRect();
   let cacPos6 = cactusBunch_6.getBoundingClientRect();
   let cacPos7 = cactusBunch_7.getBoundingClientRect();
   let cacPos8 = cactusBunch_8.getBoundingClientRect();
   let cacPos9 = cactusBunch_9.getBoundingClientRect();
   
   let contPos = cactiContBody.getBoundingClientRect();

   function changeCactus (nCac) {
        let cactusBunch_n = document.getElementById(`cactusBunch-${nCac}`);
        let cactus_n = document.getElementById(`cactus-${nCac}`);
        cactusBunchClass = 'inlineAndMargin large2';
        cactusClass = 'objectFitNone large2 large';

        if (rand[nCac] == 1) {
            cactusBunchClass = 'inlineAndMargin large2Marg large2';
            cactusClass = 'objectFitNone large2 large';        
        }
        if (rand[nCac] == 2) {
            cactusBunchClass = 'inlineAndMargin large1Marg large1';
            cactusClass = 'objectFitNone large1 large';
        }
        if (rand[nCac] == 3) {
            cactusBunchClass = 'inlineAndMargin small2Marg small2';
            cactusClass = 'objectFitNone small2 small';
        }
        if (rand[nCac] == 4) {
            cactusBunchClass = 'inlineAndMargin small1Marg small1';
            cactusClass = 'objectFitNone small1 small';
        }
        if (rand[nCac] == 5) {
            cactusBunchClass = 'inlineAndMargin small4Marg small4';
            cactusClass = 'objectFitNone small4 small';
        }
        if (rand[nCac] == 6) {
            cactusBunchClass = 'inlineAndMargin small3Marg small3';
            cactusClass = 'objectFitNone small3 small';
        }
        if (rand[nCac] == 7) {
            cactusBunchClass = 'inlineAndMargin mixednMarg mixedn';
            cactusClass = 'objectFitNone mixedn mixed';
        }
        if (rand[nCac] == 8) {
            cactusBunchClass = 'inlineAndMargin large1Marg large1';
            cactusClass = 'objectFitNone large1 large';
        }
        if (rand[nCac] == 9) {
            cactusBunchClass = 'inlineAndMargin small2Marg small2';
            cactusClass = 'objectFitNone small2 small';
        }
        if (rand[nCac] == 0) {
            cactusBunchClass = 'inlineAndMargin dinoMarg dino jump';
            cactusClass = 'objectFitNone dino dinoPos dinoRun';
        }

        cactusBunch_n.className = cactusBunchClass;
        cactus_n.className = cactusClass;
    }

    if (cacPos1.x > contPos.x +1100){
    changeCactus(1)}
    if (cacPos2.x > contPos.x +1100){
    changeCactus(2)}
    if (cacPos3.x > contPos.x +1100){
    changeCactus(3)}
    if (cacPos4.x > contPos.x +1100){
    changeCactus(4)}
    if (cacPos5.x > contPos.x +1100){
    changeCactus(5)}
    if (cacPos6.x > contPos.x +1100){
    changeCactus(6)}
    if (cacPos7.x > contPos.x +1100){
    changeCactus(7)}
    if (cacPos8.x > contPos.x +1100){
    changeCactus(8)}
    if (cacPos9.x > contPos.x +1100){
    changeCactus(9)}

    requestAnimationFrame(randomCactus);    
}

function GameOver () {

    anim_0.classList.add('pause');
    anim_1.classList.add('pause');
    anim_2.classList.add('pause');
    anim_3.classList.add('pause');
    anim_4.classList.add('pause');
    for (let i=0; i<anim_5.length; i++){
        anim_5[i].classList.add('pause');
    }
    for (let i=0; i<anim_6.length; i++){
        anim_6[i].classList.add('pause');
    }

    document.getElementById('gameOverInfo').style.display = 'flex';

    gameStarted= false;

    localStorage.setItem('highscore', highscore);

    document.removeEventListener('keydown', handleClick);
}

const addListnerBack = (e)=> {
        console.log('hi')
        if (e.code == 'Space' ||e.code == 'ArrowUp' ) {
        document.addEventListener('keydown', handleClick);    
    }
}
document.addEventListener('keyup', addListnerBack);


function collisionDetect () {
    
    for (let i=1; i<10; i++){
        //i=1 cuz the incrementation happen after each loop
        let obstacle = document.getElementById(`cactusBunch-${i}`).getBoundingClientRect();
        let pterColBox = document.getElementById('pterodactylBox').getBoundingClientRect();
        if (obstacle.right > (pterColBox.left+20) && 
            obstacle.left < (pterColBox.right-20) && 
            obstacle.top < (pterColBox.bottom-7) && 
            obstacle.bottom>(pterColBox.top+7)) {
            console.log('col')
            GameOver();
            colDetected = true;
        }  
    }

    if (colDetected==false){
        requestAnimationFrame(collisionDetect);
    }
    
}

function startGame() {

    document.getElementById('gameInfo').style.display = 'none';
    document.getElementById('gameOverInfo').style.display = 'none';

    anim_0.classList.remove('pause');
    anim_1.classList.remove('pause','fly','boost');
    anim_2.classList.remove('pause',);
    anim_2.style.animation = 'none'
    anim_2.offsetWidth
    anim_2.style.animation = 'slide_cactus 10000ms infinite linear'
    anim_3.classList.remove('pause');
    anim_4.classList.remove('pause');

    for (let i=0; i<anim_5.length; i++){
        anim_5[i].classList.remove('pause');
    }
    for (let i=0; i<anim_6.length; i++){
        anim_6[i].classList.remove('pause');
    }

    gameStarted= true;
    colDetected= false;
    collisionDetect();
    randomCactus();
}

const handleClick = (e)=> {
    if (e.code == 'Space' ||e.code == 'ArrowUp' ) {
        e.preventDefault();
        if (gameStarted==true){
            pterBox.classList.add('fly');
        } else {
            startGame();
        }
    } else if (!pterBox.classList.contains('fly') && e.code == 'ArrowLeft') {
            e.preventDefault();
            pterBox.classList.add('boost');
    }
}

document.addEventListener('keydown', handleClick);

pterBox.addEventListener('animationend', ()=> {
    pterBox.classList.remove('fly');
    pterBox.classList.remove('boost');
});

document.querySelector('button').addEventListener('click', ()=> {
    startGame();
});

function keepScore() {
    if (gameStarted==true){
        score++;
        if(score>highscore){
        highscore++;
        }
        document.getElementById('score').innerHTML= `Highest Score: ${highscore}`;
        document.getElementById('highScore').innerHTML=`Your Score: ${score}`;
        document.getElementById('scoreIng').innerHTML= `Highest Score: ${highscore}`;
        document.getElementById('highScoreIng').innerHTML=`Your Score: ${score}`;
        //i think i switched id names of score and highscore lol ... element with score id is actually highscore
    } else {
        score=0;
    }
}

setInterval(keepScore, 50);
