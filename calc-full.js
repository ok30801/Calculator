let display = document.querySelector('.display'),
    cancelBtn = document.querySelector('.cancel'),
    clearBtn = document.querySelector('.clear'),
    buttons = document.querySelectorAll('.btn'),
    equalBtn = document.querySelector('.equal'),
    openBtn = document.querySelector('.open'),
    closeBtn = document.querySelector('.close'),
    modalWindow = document.querySelector('.modal-section'),
    link = document.querySelector('.link');

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', function () {
        display.innerHTML += buttons[i].value
    })
}

equalBtn.addEventListener('click', function() {
    display.innerHTML = eval(display.innerHTML)
})

cancelBtn.addEventListener('click', function () {
    display.innerHTML = ''
})

clearBtn.addEventListener('click', function () {
    display.innerHTML = display.innerHTML.substring(0, display.innerHTML.length - 1)
})

closeBtn.addEventListener('click', function () {
    modalWindow.style.display = 'none';
    openBtn.style.display = 'block';
})

openBtn.addEventListener('click', function () {
    modalWindow.style.display = 'block';
    openBtn.style.display = 'none';
})


link.addEventListener('click', (e) => {
    if (e.target) {
        e.preventDefault();
        alert('Test')
    }
})





