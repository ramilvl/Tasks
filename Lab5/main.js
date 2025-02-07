let box = document.querySelectorAll('.box');

const image1 = './upper_arrow.png';
const image2 = './down_arrow.png';

box.forEach(e =>{
    let headText = e.querySelector('.head');
    let desc = e.querySelector('.desc');
    let image = e.querySelector('.image');
    
    image.src = image2;

    headText.addEventListener('click', ()=>{
        desc.classList.toggle('descToggle'); 
        image.src = image.src.includes('down_arrow') ? image1 : image2;
    });  
})