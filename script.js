const showBtn = document.getElementById('show-btn')
const hideBtn = document.getElementById('hide-btn');
const productSection = document.getElementById('product-section')

const showProductSection = ()=>{
  productSection.style.display = 'grid';
  hideBtn.style.visibility = 'visible';
}

const hideProductSection = ()=>{
  productSection.style.display = 'none';
  hideBtn.style.visibility = 'hidden';
}

showBtn.addEventListener('click',showProductSection);

hideBtn.addEventListener('click', hideProductSection);