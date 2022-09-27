let buttons = document.getElementsByClassName('button');

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', function (){
        val = input(buttons[i].innerHTML)
        document.getElementById('screen').value = val
    })
}