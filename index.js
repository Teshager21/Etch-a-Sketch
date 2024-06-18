const grid= document.querySelector('.grid')
const handleHover=(e)=>{
    e.target.classList.add('hover')
}
// const size = Input("Input the number of squares per side");
for(let i=0;i<256;i++){
  let Element=document.createElement('div');
  Element.classList.add('gridElement')
  Element.addEventListener('mouseover',handleHover);
  grid.appendChild(Element);

}


