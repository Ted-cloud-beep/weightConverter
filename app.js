const first=document.getElementById('first');
const second=document.getElementById('second');
const third=document.getElementById('third');

const body=document.querySelector('BODY');
document.querySelector('INPUT').addEventListener('input',function(e){
  let kiloGram=e.target.value*0.453592;
  let gram=e.target.value*0.453592*1000;
  let ounces=e.target.value*16;
  first.innerHTML=`Kilograms:${kiloGram.toFixed(3)}`;
  first.style.visibility='visible';
  second.innerHTML=`Gram:${gram.toFixed(3)}`;
  second.style.visibility='visible';
  third.innerHTML=`Ounces:${ounces.toFixed(3)}`;
  third.style.visibility='visible';
  })
body.addEventListener('click',()=>{
  first.style.visibility='hidden';
  second.style.visibility='hidden';
  third.style.visibility='hidden';

})
