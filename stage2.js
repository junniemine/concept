let savedIdentity = localStorage.getItem('playerIdentity');
const boy = document.getElementById('boy');
const talk = document.getElementById('talk');
const skill = document.getElementById('skill');
const steal = document.getElementById('steal');
const tower = document.getElementById('tower');
const status = document.getElementById('status2');
const choicePopup = document.getElementById('choice-popup');
const choicePopup1 = document.getElementById('choice-popup1');
const choicePopup2 = document.getElementById('choice-popup2');
const identityGauge = document.getElementById('identity-gauge2'); 
const gaugeContainer = document.getElementById('gauge-container2'); 
const gameartlayer2 = document.getElementById('gameartlayer2')


let currentIdentity = savedIdentity 

function checkGameOver() {
    if (currentIdentity <= 0) {
        nextText("정체성을 모두 잃었습니다... 게임 오버!");
        setTimeout(() => {
            window.location.href = 'gameover.html';
        }, 2500);
    }
}

let stealMode = false;

if(identityGauge) { 
    identityGauge.style.width = currentIdentity + '%';
}

function nextText(newtext){
    status.innerHTML = newtext;
}
if (steal) {
    steal.addEventListener('click', () => {
        stealMode = !stealMode
        document.body.classList.toggle('steal');
        if(stealMode){
            nextText('훔칠 개념을 선택하세요')
            talk.classList.remove('show')
            choicePopup.classList.remove('show')
        }
        else{
            nextText('ㅤ')
            choicePopup1.classList.remove('show')
            choicePopup2.classList.remove('show')
        }
            
    })
}

let hasStolenFailure = false;
let hasStolenvigor = false;
let solve = false;

boy.addEventListener('click',()=>{
    if (!stealMode){
    nextText('활기가 넘치는 소년이예요! 한 명이라도 활기가 넘쳐서 다행이예요.')
    talk.classList.add('show')
}
    else if(stealMode){
        choicePopup2.classList.add('show')
        hasStolenvigor = true;
        choicePopup1.classList.remove('show');
    }
})


let boyHasBeenClicked = false;
const boytalk = [
    "<i>얼른 어른들이 기운을 차렸으면 좋겠어!</i>",
    "<i>너라도 기운 차서 다행이다 야옹아!</i>",
    "<i>이대로면 마을의 생계가 위험해...</i>",
    "<i>저 탑이 무너진게 문제였을까...</i>",
    "<i>엄마 아빠가 얼른 기운을 차려야 할텐데</i>",
    "<i>예전처럼 마을 사람들과 놀고 싶어</i>",
    "<i>야옹아, 너의 주인은 어디갔니</i>",
    "<i>그래도 나라도 기운 차려야지!</i>"
];

talk.addEventListener('click', (e) => {
    if (e.target.id === 'talk' && boyHasBeenClicked === false) {
        nextText('무엇을 물어볼까요?');
        boyHasBeenClicked = true; 
        choicePopup.classList.add('show')
    } 
    else if (parenthasbeenclicked == true && towerhasbeenclicked == true) {
        const randomIndex = Math.floor(Math.random() * boytalk.length);
        const randomQuote = boytalk[randomIndex];
        nextText(randomQuote);
    }
});

let towerhasbeenclicked = false;
let parenthasbeenclicked = false;


choicePopup.addEventListener('click',(e)=>{
    if (e.target.id == 'choice-tower'){
        nextText('<i>저 마을 중앙의 있는 탑은 저희 마을에 자랑이예요! 지금은 엉망이 됐지만... 사람들이 마을의 부흥을 위해 모두 힘을 합쳐 지은 탑이예요.</i>')
        towerhasbeenclicked = true;
    }
    else if(e.target.id == 'choice-parent'){
        nextText('<i>저희 부모님이요? 음..아마 집에 계실거예요. 탑이 무너진 후에 집 밖으로 나오신 적이 없거든요.</i>')
        parenthasbeenclicked = true;
    }
    if(towerhasbeenclicked == true && parenthasbeenclicked == true){
        choicePopup.classList.remove('show');
    }
})

tower.addEventListener('click',()=>{
    if(!stealMode){
    nextText('마을의 상징과도 같던 탑. 이 탑으로 많은 관광객들이 이 마을을 찾았지만, 탑이 붕괴되자 관광객들의 발은 뚝 끊켰다.')
     setTimeout(() => {
        nextText('탑이 붕괴되던 날의 기억은 주민들에게 악몽같은 존재이다. 이 붕괴된 탑이 고쳐지기 전까지 사람들이 행복해지는 것은 힘들어 보인다.');
    }, 5500);
   }
    if(stealMode){
        choicePopup1.classList.add('show')
        hasStolenFailure = true;
         choicePopup2.classList.remove('show');
    }
})

choicePopup1.addEventListener('click',()=>{
    choicePopup2.classList.remove('show');
    gameartlayer2.classList.add('memory')
    currentIdentity = currentIdentity - 30;
    checkGameOver();
    identityGauge.style.width = currentIdentity + '%';
    choicePopup1.classList.remove('show')
})
choicePopup2.addEventListener('click',()=>{
    skill.classList.add('show')
    currentIdentity = currentIdentity - 30;
    checkGameOver();
    identityGauge.style.width = currentIdentity + '%';
    choicePopup1.classList.remove('show')
    choicePopup2.classList.remove('show')
    gameartlayer2.classList.add('no')
},{once:true})

skill.ontouchstart = (e) => {
    nextText('이건 [주입하기] 기능이예요. 몇몇의 훔친 개념들은 이렇게 토큰이 되어 저장되기도 해요. 드래그하여 사용해보세요!')
     e.preventDefault();
    skill.style.transform = 'scale(1.2)'
    skill.style.zIndex = 1000;
}
skill.ontouchmove = (e) => {
     e.preventDefault();
    const touch = e.touches[0];
    skill.style.zIndex = 1000;


    skill.style.left = `${touch.clientX - 25}px`
    skill.style.top = `${touch.clientY - 25}px`
}

skill.ontouchend = (e) => {
     e.preventDefault();
    skill.style.transform = 'scale(1)'
    skill.style.zIndex = 0;

const touch = e.changedTouches[0];
const dropX = touch.clientX;
const dropY = touch.clientY;


const targetRect = gameartlayer2.getBoundingClientRect();
const isDroppedOnTarget = (
    dropX > targetRect.left &&
    dropX < targetRect.right &&
    dropY > targetRect.top &&
    dropY < targetRect.bottom )

if (isDroppedOnTarget) {
        
        if (hasStolenFailure === true) {
            nextText("마을의 [실패]가 사라진 자리에, [활기]가 주입됩니다! 마을이 변하기 시작합니다!");
                        setTimeout(() => {
        nextText('수고하셨어요 용사님! 마을이 활력을 되찾았어요!');
    }, 2500);
    setTimeout(() => {
        nextText('<i>.........</i>');
    }, 4500);
        setTimeout(() => {
        nextText('다음 스테이지로 넘어가볼까요? 이제 마지막이예요!');
    }, 5550);
    localStorage.setItem('playerIdentity', currentIdentity);
    solve = true;
            gameartlayer2.classList.add('solve'); 
            gameartlayer2.classList.add('vigor'); 
            skill.classList.remove('show'); 
            hasStolenVitality = false; 
            choicePopup1.classList.remove('show')
            stealMode = !stealMode
        document.body.classList.remove('steal')

            
        } else {

            nextText("[활기]를 주입하려 했지만, 마을을 짓누르는 '악몽'이 [활기]를 밀어냅니다. 스테이지를 다시 시도해주세요.");
            skill.classList.remove('show');
        }
    }}
    gameartlayer2.addEventListener('click',()=>{
    if (solve == true) { 
        
         setTimeout(() => {
            window.location.href = '스테이지3.html';
        }, 1000);
    }
})