let body = document.querySelector('.title');
let title = document.createElement('h2');
let descTitle = document.createTextNode('ESTRUTURA CRIADA NO JAVASCRIPT');

title.appendChild(descTitle);
body.appendChild(title)


let ul = document.createElement('ul');

function insertLi(link,listText){

    let list = document.querySelector('.list');
    let li = document.createElement('li');
    //let listAdd = document.createTextNode(listText);

    let linkElement = document.createElement('a');
    linkElement.setAttribute('href',link);    
    let listLinked = document.createTextNode(listText);
    linkElement.appendChild(listLinked);

    li.appendChild(linkElement);
    ul.appendChild(li);
    list.appendChild(ul);
}

insertLi("/desafio01.html",'Desafio 01');
insertLi("/desafio02.html",'Desafio 02');
insertLi("/desafio03.html",'Desafio 03');
insertLi("/desafio04.html",'Desafio 04');   
insertLi("/desafio05.html",'Desafio 05');
insertLi("/desafio06.html",'Desafio 06');
insertLi("/desafio07.html",'Desafio 07');
insertLi("/desafio08.html",'Desafio 08');

