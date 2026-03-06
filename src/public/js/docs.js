async function testarNome(){
    const nome = document.querySelector("input#nome").value;
    const response = await fetch(`/nome/${nome}`);
    const text = await response.text();
    const li = document.querySelector("li#rota-1");

    let textArea = null;

    if(!document.querySelector("li#rota-1 > textarea")){
        textArea = document.createElement("textarea");
    }else{
        textArea = document.querySelector("li#rota-1 > textarea");
    }

    textArea.innerText = text;
    li.appendChild(textArea);
}

async function hello(){
    const response = await fetch("/hello");
    const text = await response.text();
    const li = document.querySelector("li#rota-0");

    let textArea = null;

    if(!document.querySelector("li#rota-0 > textarea")){
        textArea = document.createElement("textarea");
    }else{
        textArea = document.querySelector("li#rota-0 > textarea");
    }

    textArea.innerText = text;
    li.appendChild(textArea);
}