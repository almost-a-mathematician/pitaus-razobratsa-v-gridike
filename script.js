document.getElementById('btn').onclick = function(){
    alert('message');
}

let button = document.getElementById('btn1') 
let body = document.body 
button.textContent = 'Темная' 
 
let button_state = false; 
 
button.onclick = ( ) => { 
    button_state = !button_state 
    button.style = button_state ? "color: white" : "color: black" 
    button.textContent = button_state ? "black" : "white" 
 
    body.style = button_state ? "background: white" : "background: black" 
}

