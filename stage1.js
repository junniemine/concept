const craken = document.getElementById('craken')
const girl = document.getElementById('girl')
const girl1 = document.getElementById('girl1')
const girl2 = document.getElementById('girl2')
const status1 = document.getElementById('status1')
const steal = document.getElementById('steal')
const talk = document.getElementById('talk')
const identityGauge1 = document.getElementById('identity-gauge1')
const gaugeContainer1 = document.getElementById('gauge-container1');
const abyss = document.getElementById('abyss')
const ground = document.getElementById('ground')
const choicePopup1 = document.getElementById('choice-popup1');
const choicePopup2 = document.getElementById('choice-popup2');
const gameartlayer1 = document.getElementById('gameartlayer1')

let stealMode = false;
let currentIdentity = 100;

if(steal){
steal.addEventListener('click', () => {
    stealMode = !stealMode
    document.body.classList.add('steal');
    if(stealMode){
        nextText('훔칠 개념을 선택하세요')
    }
    else{
         nextText('ㅤ')
         choicePopup1.classList.remove('show');
         choicePopup2.classList.remove('show');
    }
})}

function nextText(newtext){
    status1.innerHTML = newtext;
}

craken.addEventListener('click',()=>{
     if(!stealMode){
    nextText('심연 사이에 크라켄이 살고 있어요. 이 틈을 안전하게 건널 방법이 없을까요?')
     }
})
girl.addEventListener('click',()=>{
    if(!stealMode){
    nextText('소녀가 빵을 들고 있어요. 무엇을 하려는 걸까요?')
    talk.classList.add('show')}   
})
let girlHasBeenClicked = false;
const girltalk = [
    "<i>켄, 오늘 기분은 어떄?</i>",
    "<i>오늘 밥은 적어서 미안해...</i>",
    "<i>켄, 거기에 계속 있어서 답답하지?</i>",
    "<i>내가 앞으로도 매일 찾아올게!</i>",
    "<i>다들 널 무서워하지만, 넌 착한 아이인 거 아는데...</i>",
    "<i>내가 없으면 넌 누가 챙겨주겠어.</i>",
    "<i>이 빵이라도 먹고 기운 내, 켄.</i>",
    "<i>저 사람들이 널 다시 받아줄 날이 올까...</i>"
];

talk.addEventListener('click', (e) => {
    if (e.target.id === 'talk' && girlHasBeenClicked === false) {
        
        nextText('<i>여기 살고 있는 크라켄은 사람을 해치지 않아요. 제가 어릴 때부터 돌본 착한 아이예요!</i>');
        girlHasBeenClicked = true; 
    } 
    else if (e.target.id === 'talk' && girlHasBeenClicked === true) {
        const randomIndex = Math.floor(Math.random() * girltalk.length);
        const randomQuote = girltalk[randomIndex];
        nextText(randomQuote);
    }
});

abyss.addEventListener('click',()=>{
    if(stealMode){
         choicePopup1.classList.add('show');
         choicePopup2.classList.remove('show');
    }
    else{
        nextText('돌아갈 수도, 지나갈 수도 없을 만큼 깊고 긴 틈이에요.')
    }
})
ground.addEventListener('click',()=>{
    if(stealMode){
         choicePopup2.classList.add('show');
         choicePopup1.classList.remove('show');
    }
    else{}
})

choicePopup1.addEventListener('click', (e) => {
    if (e.target.id === 'choice-distance') {
        currentIdentity = currentIdentity - 25;
        identityGauge1.style.width = currentIdentity + '%';
        localStorage.setItem('playerIdentity', currentIdentity);
        localStorage.setItem('stage1Choice', 'distance');
        gameartlayer1.classList.add('distance')
        stealMode = !stealMode
        document.body.classList.remove('steal');
        choicePopup1.classList.remove('show');
        nextText('두 절벽이 하나로 합쳐집니다. 크라켄은 온데간데 없이 사라졌습니다.');
        setTimeout(() => {
        nextText('<i>아..안돼..</i>');
    }, 5000);
        setTimeout(() => {
        nextText('다음 스테이지로 넘어가볼까요?');
    }, 7500);
    girl.style.pointerEvents = 'none'
    girl1.classList.add('show')
    girl1.addEventListener('click',()=>{
            nextText('안돼, 안돼, 안돼, 켄... 거기 있는거지? 켄... 안돼...')
        })
    }})

choicePopup2.addEventListener('click', (e) => {
    if (e.target.id === 'choice-gravity') {
        currentIdentity = currentIdentity - 30;
        identityGauge1.style.width = currentIdentity + '%';
        localStorage.setItem('playerIdentity', currentIdentity);
        localStorage.setItem('stage1Choice', 'gravity');
        gameartlayer1.classList.add('gravity')
        stealMode = !stealMode
        document.body.classList.remove('steal');

        nextText('몸이 가벼워집니다. 당신은 심연을 가로질러 건너편으로 날아갑니다.');
        choicePopup2.classList.remove('show');
        
        setTimeout(() => {
        nextText('<i>고마워요 용사님..</i>');
    }, 2000);
     setTimeout(() => {
        nextText('분명 더 좋은 선택지가 있었을 텐데...');
    }, 4000);
    girl2.classList.add('show')
    setTimeout(() => {
        nextText('다음 스테이지로 넘어가볼까요?');
    }, 6500);
    girl2.addEventListener('click',()=>{
    nextText('소녀와 켄이 손을 흔들고 있다. 소녀는 무척 행복해 보인다. 소녀가 용사에게 빵을 건냈다')
    currentIdentity = currentIdentity + 10;
    identityGauge1.style.width = currentIdentity + '%';
    localStorage.setItem('playerIdentity', currentIdentity);
},{ once: true })
    }
    choicePopup1.classList.remove('show');
    stealMode = false; 
});



gameartlayer1.addEventListener('click',()=>{
    if (currentIdentity != 100) { 
        
         setTimeout(() => {
            window.location.href = 'stage2.html';
        }, 1000);
    }
})



