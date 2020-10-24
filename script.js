let inputElement = document.querySelector('input[name=nome]');
let btn = document.querySelector('button.botao');

btn.onclick = ()=>{

    let text = inputElement.value;
    alert(text);
};
