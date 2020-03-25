const button = document.getElementById('wyslij');
const textarea = document.getElementById('todo');
let licznik = 0;

button.addEventListener("click", function(){
    console.log(textarea.value);
    
    licznik++;

    const element = document.createElement("div");
    const lista = document.getElementById("lista").appendChild(element);
    lista.classList.add('element');
    lista.id = licznik;

    const n_element = document.createElement("div");
    let items = document.getElementsByClassName("element");
    items[licznik-1].appendChild(n_element);

    n_element.classList.add('nr');
    n_element.innerText = licznik;





    const nn_element = document.createElement("div");
    let n_items = document.getElementsByClassName("element");
    n_items[licznik-1].appendChild(nn_element);

    nn_element.classList.add("text");
    nn_element.textContent = textarea.value;


  





    //element.textContent = textarea.value;

});