const status = document.getElementById('status4'); 

function nextText(newtext){
    status.innerHTML = newtext;
}
setTimeout(()=>{
    nextText('소년이 [활기]를 되찾을 날이 얼마 안 남은 거 같네요!')
},3000)