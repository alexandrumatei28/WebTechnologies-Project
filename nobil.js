
window.onload = function () {

    // Modificarea stilului unui element 
    // Manipularea DOM-ului - selectare după id
    var inst = document.getElementById("instructorText");
    if (inst != null) {
        inst.style.fontFamily = "cursive";
    }



    // Selectare după tag
    var h1 = document.getElementsByTagName("form");

    for (var i = 0; i < h1.length; i++) {
        h1[i].style.backgroundColor = "rgb(240, 248, 255)";
    }


    // Selectare dupa clasa
    var social = document.getElementsByClassName("tabel");

    for (var i = 0; i < social.length; i++) {
        social[i].style.backgroundColor = "rgb(0, 139, 139)";
    }


    // Selectare folosind selectori CSS
    var instructor = document.querySelector("#instructorText");
    if (instructor != null) {
        instructor.style.backgroundColor = "rgb(255, 127, 80)";
    }


    //crearea și stergerea de elemente HTML
    var div = document.createElement("div");
    div.innerHTML = "Atentie! In curand vom introduce abonamente.";

    //Creare
    var container = document.getElementById("pret");
    if (container != null) {
        container.appendChild(div);
    }


    // Metoda 1: Utilizând metoda remove() - div.remove();

    //Metoda 2 + folosirea și modificarea evenimentelor generate de mouse si tastatură

    //keydown
    var parent = div.parentNode;
    document.addEventListener("keydown", function (event) {
        if (parent != null) {
            if (event.key === "Enter") {

                parent.removeChild(div);
            }
        }
    });


    // click
    var button = document.getElementById("anim-button");

    if (button != null) {
        button.addEventListener("click", function (event) {
            alert("Ai apăsat butonul!");
        })
    };


    //setInterval
    var image = document.getElementById("insta");
    var rotation = 0;


    function rotateImage() {
        if (image != null) {
            rotation += 2;
            image.style.transform = "rotate(" + rotation + "deg)";
        }
    }

    setInterval(rotateImage, 50);


    //seTimeout
    function sayHello() {
        var messageElement = document.getElementById("mesaj");
        if (messageElement != null) {
            messageElement.textContent = "Pentru mai multe detalii nu ezitati sa ne contactati!";
        }
    }

    setTimeout(sayHello, 3000);


    // Metoda string
    const numeCal = "Zeus";
    const numeCalMajuscule = numeCal.toUpperCase();
    console.log("Numele calului în majuscule: " + numeCalMajuscule);



    // Schimbarea aleatoare a valorilor unor proprietăți (de exemplu: culoare, dimensiuni, poziție)
    function generareCuloareAleatoare() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }


    if (button != null) {
        button.style.backgroundColor = generareCuloareAleatoare();
    }




    //folosirea localStorage (să se pastreze în localStorage o colecție de elemente)
    const nameInput = document.getElementById('nume');
    const numberInput = document.getElementById('inaltime');
    const genInput = document.getElementById('gen');
    const activitatiInput = document.getElementById('ex');
    const calInput = document.getElementById('cal');
    const textareaInput = document.getElementById('msj');
  
    const form = document.getElementById('form');


    let nameInputValue = '';
    let numberInputValue = '';
    let genInputValue = '';
    let activitatiInputValue = '';
    let calInputValue = '';
    let textareaInputValue = '';
   

    function formHandler(event){
        event.preventDefault();
        localStorage.setItem('nume', nameInputValue);
        localStorage.setItem('inaltime', numberInputValue);
        //localStorage.setItem('gen', genInputValue);
       // localStorage.setItem('activitati', activitatiInputValue);
        localStorage.setItem('cal', calInputValue);
        //localStorage.setItem('text', textareaInputValue);

        console.log(nameInput.value);
        
    }

    if (form != null) {
  form.addEventListener('submit',formHandler);
  nameInput.addEventListener('change', (e)=>{nameInputValue=e.target.value; console.log(e.target.value);})
  numberInput.addEventListener('change', (e)=>{numberInputValue=e.target.value})
  //activitatiInput.addEventListener('change', (e)=>{activitatiInputValue=e.target.value})
  calInput.addEventListener('change', (e)=>{calInputValue=e.target.value})
  //genInput.addEventListener('change', (e)=>{genInputValue=e.target.value})
  //textareaInput.addEventListener('change', (e)=>{textareaInputValue=e.target.value}) 
}


//folosirea proprietăților classList, target 

  button.addEventListener('click', function(event) {
    this.classList.add('selected');
    console.log('Butonul a fost apăsat:', event.target);
    event.stopPropagation();
  });



//folosirea metodelor getComputedStyle și stopPropagation
const computedStyles = getComputedStyle(inst);

const color = computedStyles.getPropertyValue('color');
const fontSize = computedStyles.getPropertyValue('font-size');

console.log('Culoarea elementului este:', color);
console.log('Dimensiunea fontului este:', fontSize);


}




