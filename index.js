const grid= document.querySelector('.grid')
let numOfCellsPerSide=50;

const handleHover=(e)=>{
    e.target.classList.add('hover')
    let opacity =parseInt(e.target.getAttribute('data-opacity'));
    e.target.style.backgroundColor=generateRandomColor(); 

    e.target.setAttribute('data-opacity', opacity+1)
    e.target.style.opacity=opacity*.2;
    e.target.style.border='none'
}
const createGrid=(numOfCellsPerSide)=>{
  size=482/numOfCellsPerSide;
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
    let inputNumberOfCells=parseInt(prompt('input the number of cells per side: ','64'));
    if(inputNumberOfCells>100 || inputNumberOfCells<=0 || !inputNumberOfCells){
      alert ("Please input values between: 1-100")
      setGridSize();
    }
    let gridElements=document.querySelectorAll('.gridElement');
    for(let el of gridElements){
        el.remove();
      }
     createGrid(inputNumberOfCells);
}
//Randomize color 
const generateRandomColor=()=>{
  let red = Math.floor(Math.random()*253);
  let blue = Math.floor(Math.random()*253);
  let green = Math.floor(Math.random()*253);
  let color =`rgb(${red},${green},${blue})`
  console.log(color);
  return color;

}

createGrid(numOfCellsPerSide);
document.getElementById('btnSize').addEventListener('click',setGridSize)

