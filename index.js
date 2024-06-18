const grid= document.querySelector('.grid')
const handleHover=(e)=>{
    e.target.classList.add('hover')
    let opacity =parseInt(e.target.getAttribute('data-opacity'));
    e.target.setAttribute('data-opacity', opacity+1)
    e.target.style.opacity=opacity*0.1;
    e.target.style.border='none'
}
for(let i=0;i<256;i++){
  let Element=document.createElement('div');
  Element.classList.add('gridElement')
  Element.addEventListener('mouseover',handleHover);
  Element.setAttribute('data-opacity',0)
  grid.appendChild(Element);


}

const setGridSize=(e)=>{
    // alert(e.target)
    let size=prompt('input the number of cells per side: ','64');
}

document.getElementById('btnSize').addEventListener('click',setGridSize)

