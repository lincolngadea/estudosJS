let ul = document.createElement('ul');

function insertLi(link,listText){
    let list = document.querySelector('.list');
    let li = document.createElement('li');
    let listAdd = document.createTextNode(listText);

    let linkElement = document.createElement('a');
    linkElement.setAttribute('href',link);    
    let listLinked = document.createTextNode(listText);
    linkElement.appendChild(listLinked);

    li.appendChild(linkElement);
    ul.appendChild(li);
    list.appendChild(ul);
}


insertLi("https://lincolngadea.com.br",'texto');
insertLi("https://lincolngadea.com.br",'texto2');

