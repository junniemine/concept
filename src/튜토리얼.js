const steal = document.getElementById('steal');
const status = document.getElementById('status');
const door = document.getElementById('door');
const gameartlayer = document.getElementById('gameartlayer');
const doorkeeper =  document.getElementById('doorkeeper');
const dooropen = document.getElementById('gameartlayer.door-open');
const choicePopup = document.getElementById('choice-popup');
const job = document.getElementById('choice-job');
const strength = document.getElementById('choice-strength');
const identityGauge = document.getElementById('identity-gauge')
const gaugeContainer = document.getElementById('gauge-container');


let stealMode = false;
let delay = null
let currentIdentity = 100;

steal.addEventListener('click', () => {
    stealMode = !stealMode
    document.body.classList.toggle('steal');
    if(stealMode){
        nextText('훔칠 개념을 선택하세요')
    }
    else{{
        nextText('ㅤ')
        document.body.classList.remove('blur')
        doorkeeper.classList.remove('selected');
        choicePopup.classList.remove('show');
    }}
        
})
delay = setTimeout(() => {
    nextText("앞에 있는 [문]을 클릭해보세요!")
},2000)

function nextText(newtext){
    status.innerHTML = newtext;
}

door.addEventListener('click', () => {
    if(stealMode === false){
        nextText('문이 단단하게 잠겨있다. 무력으론 열 수 없을 거 같다.');
        setTimeout(() => {
            nextText('밑에 있는 [훔치기] 버튼을 눌러보세요!')
        },2300)
    }

        else{
        gameartlayer.classList.add('door-open');
        door.style.pointerEvents = 'none';
        stealMode = false; 
        document.body.classList.remove('steal');
        nextText('문이 열렸어요! 용사님께서는 지금 [잠금]이라는 개념 그 자체를 없애신거예요.')
    setTimeout(()=>{
        nextText('이제 앞으로 나아가 볼까...')
    },4500)
    setTimeout(()=>{
        nextText('앗 성문에 문지기가 나타났어요! 이번에는 문지기를 클릭해볼까요?')
        doorkeeper.classList.add('visible');
    },6500)
    setTimeout(()=>{
        nextText('ㅤ')
    },8500)
}
    })

doorkeeper.addEventListener('click', () => {
    if(stealMode === false){
        nextText("멈춰라! 너는 어디서 온 사람이지?");
        
    }
    else{nextText('이제부터 선택한 개념에 따라 게이지가 감소해요. 정체성 게이지가 0이 되면...죽음 보다 더한 결말이 있을 거예요.어떤 개념을 훔치시겠어요?');
        gaugeContainer.classList.add('show');
        doorkeeper.classList.add('selected');
        document.body.classList.add('blur')
        choicePopup.classList.add('show');
        door.classList.add('blur');
    }
})
choicePopup.addEventListener('click', (e) => {
    if (e.target.id === 'choice-job') {
        nextText('<i>왜 내가 이 일을 하고 있지..? 집으로 가야겠다...</i>');
        doorkeeper.classList.add('defeated')
        currentIdentity = currentIdentity - 40;
        doorkeeper.classList.remove('visible'); 
        choicePopup.classList.remove('show');
        stealMode = !stealMode
        document.body.classList.remove('steal');
        document.body.classList.remove('blur')
        setTimeout(() => {
            nextText('용사님 수고하셨어요! 근데 더 좋은 선택이 있었을 거 같아요.')
        },2500)
         setTimeout(() => {
            nextText('이제 다음 스테이지로 넘어갈까요?')
        },4500)
    } 
    else if (e.target.id === 'choice-strength') {
        nextText('온 몸에 힘이 없어...');
        doorkeeper.classList.add('defeated')
        doorkeeper.classList.add('fallen');
        currentIdentity = currentIdentity - 25;
        stealMode = !stealMode
        document.body.classList.remove('steal');
        choicePopup.classList.remove('show');
        document.body.classList.remove('blur')
         setTimeout(() => {
            nextText('용사님 수고하셨어요!')
        },2500)
        setTimeout(() => {
            nextText('이제 다음 스테이지로 넘어갈까요?')
        },2500)
    }
    identityGauge.style.width = currentIdentity + '%';
});

gameartlayer.addEventListener('click', () => {
    const DoorOpen = gameartlayer.classList.contains('door-open');
    const KeeperDefeated = doorkeeper.classList.contains('defeated');
    if (DoorOpen && KeeperDefeated) {
        gameartlayer.classList.add('zoom-in')
        doorkeeper.classList.remove('visible')
        doorkeeper.classList.remove('fallen')
        gaugeContainer.classList.remove('show')
        setTimeout(() => {
            window.location.href = '스테이지1.html';
        }, 1000);
        currentIdentity = 100;
    identityGauge.style.width = currentIdentity + '%';
    }
    
});

   




