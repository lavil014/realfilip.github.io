const showBtn = document.getElementById('show-btn');
const productSection = document.getElementById('product-section')

const showProductSection = ()=>{
  if( productSection.style.display === 'none'){
    productSection.style.display = 'grid';
    showBtn.innerText = 'Less products'
  }else {
    productSection.style.display = 'none';
    showBtn.innerText = 'More products'
  }
};


showBtn.addEventListener('click', showProductSection);