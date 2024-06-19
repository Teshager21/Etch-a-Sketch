const grid= document.querySelector('.grid')
let numOfCellsPerSide=50;

const handleHover=(e)=>{
    e.target.classList.add('hover')
    let opacity =parseInt(e.target.getAttribute('data-opacity'));
    e.target.setAttribute('data-opacity', opacity+1)
    e.target.style.opacity=opacity*.2;
    e.target.style.border='none'
}
const createGrid=(numOfCellsPerSide)=>{
  size=482/numOfCellsPerSide-1;
  console.log(`size of cell is: ${size}px`);
  for(let i=0;i<numOfCellsPerSide*numOfCellsPerSide;i++){
    let Element=document.createElement('div');
    Element.classList.add('gridElement')
    Element.style.width= `${size}px`;
    Element.style.height= `${size}px`; 
    Element.className='gridElement'
    Element.addEventListener('mouseover',handleHover);
    Element.setAttribute('data-opacity',1)
    grid.appendChild(Element);
  } 
}

const setGridSize=(e)=>{
    // alert(e.target)
    let inputNumberOfCells=parseInt(prompt('input the number of cells per side: ','64'));
    let gridElements=document.querySelectorAll('.gridElement');
    for(let el of gridElements){
        el.remove();
      }
     createGrid(inputNumberOfCells);
    
    // console.log('heeeey',document.querySelector('.gridElement').style.width);
}
createGrid(numOfCellsPerSide);
document.getElementById('btnSize').addEventListener('click',setGridSize)

