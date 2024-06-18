const grid= document.querySelector('.grid')
for(let i=0;i<256;i++){
  let Element=document.createElement('div');
  Element.classList.add('gridElement')
   grid.appendChild(Element);

}