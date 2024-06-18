const grid= document.querySelector('.grid')
const handleHover=(e)=>{
    e.target.classList.add('hover')
}
for(let i=0;i<256;i++){
  let Element=document.createElement('div');
  Element.classList.add('gridElement')
  Element.addEventListener('mouseover',handleHover);
   grid.appendChild(Element);

}


