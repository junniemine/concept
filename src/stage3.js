let savedIdentity = localStorage.getItem('playerIdentity');
let currentIdentity = savedIdentity ? parseInt(savedIdentity) : 100;
const identityGauge = document.getElementById('identity-gauge'); 
const status = document.getElementById('status3'); 
const steal = document.getElementById('steal'); 
const boy = document.getElementById('boy');
const girl = document.getElementById('girl');  
const gameartlayer3= document.getElementById('gameartlayer3');
const choicePopup = document.getElementById('choice-popup')
let savedStage1Choice = localStorage.getItem('stage1Choice');

let stealMode = false;

if(steal){
steal.addEventListener('click', () => {
    stealMode = !stealMode
    document.body.classList.add('steal');
    if(stealMode){
        nextText('훔칠 개념을 선택하세요')
        document.body.classList.remove('steal');
    }
    else{
         nextText('ㅤ')
    }
})}

function nextText(newtext){
    status.innerHTML = newtext;
}

if (identityGauge) { 
    identityGauge.style.width = currentIdentity + '%';
}



    girl.addEventListener('click', () => {
        nextText('당신은 그녀애게 어떤 선택을 했나요?')
    })

boy.addEventListener('click',()=>{
    nextText('<i>아직 나이도 어린 놈이 왜 이렇게 기운이 없어! 얼른 일어나지 못해?/i>')
    setTimeout(()=>{
                nextText('소년은 내가 사라진 후 하염없이 돌덩이에 가만히 앉아있다.')
            },2300)
     setTimeout(()=>{
                nextText('마을 사람들이 기운을 차렸으니 그걸로 될걸까? 앞으로 이 소년은 어떻게 되는 걸까...')
            },5300)
})
identityGauge.addEventListener('click',()=>{
    if(stealMode){
        choicePopup.classList.add('show')
    }
})
choicePopup.addEventListener('click',()=>{
    if(identityGauge = 20){
        nextText('효율만 따지는 이 시스템 속에서 따뜻한 마음을 잊지 않으셨군요. 다시 한 번 뒤를 돌아보는 세심함까지 당신은 계속 그 힘을 가질 자격이 있어요')
        setTimeout(()=>{
            window.location.href = '히든엔딩.html'
    })
} else {
    nextText('게이지가 모자랍니다. 선택시 게임오버 됩니다.')
    choicePopup.addEventListener('click',()=>{
         window.location.href = 'gameover.html'
    })
}
})