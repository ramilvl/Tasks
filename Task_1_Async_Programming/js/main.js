let btnClient = document.querySelector('.btnAdd');
let client = document.querySelector('.message');

btnClient.addEventListener('click', ()=>{
    let spanEl = document.createElement('span');
    spanEl.textContent = 'Adding to Cart...';
    client.appendChild(spanEl);


    btnClient.disabled=true;
    btnClient.classList.add('disabled_btn');

    setTimeout(() => {
        spanEl.textContent="Added to Cart";
        spanEl.style.color='green';
        spanEl.style.fontWeight = 700;
        spanEl.style.fontSize = '25px';
        spanEl.style.fontFamily = 'Arial'
    }, 3000);

    setTimeout(() => {
        spanEl.textContent='';
        btnClient.disbaled = false;
        btnClient.classList.remove('disabled_btn');
    }, 5000);
})