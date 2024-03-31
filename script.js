let no=document.querySelector('#no-btn')
let yes=document.querySelector('#yes')
console.log(no)
const moveTarget=()=>{
  const maxWidth=400;
  const maxHeight=400;
  const randomx=Math.floor(Math.random()*maxWidth)
  const randomy=Math.floor(Math.random()*maxHeight)

  no.style.left=randomx + 'px'
  no.style.top=randomy  + 'px'
}
no.addEventListener('mouseenter',()=>{
  moveTarget();  
})
yes.addEventListener('click',()=>{
  alert("Thank you so much 😍 Love you too...💕")
  
})