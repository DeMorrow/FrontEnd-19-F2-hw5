let in1 = document.getElementById('in1')
let in2 = document.getElementById('in2')
let box = document.getElementById('box')
let inC = document.getElementById('painter')
let btnC = document.getElementById('bridge')

document.getElementById('btn').onclick = () =>{
    let value1 = in1.value;
    let value2 = in2.value;

    in1.value = value2;
    in2.value = value1;
}


btnC.onclick = () =>{
    box.style.background = inC.value
    btnC.style.backgroundColor = inC.value
}