
//variables

let name = 'george';
name = 'isa'
console.log(name);


const high = 170;
console.log(high);

lastName = 'Fernández';
name = 'George';
//console.log(name);

let concat = name + ' ' + lastName + ' ' + high;
console.log(concat);

let datos = document.querySelector('#datos');
    datos.innerHTML = ` 
    <h1>Caja de datos</h1>
    <h2> I am  ${name} ${lastName} and I am ${high} cm tall.<h2>`
    ;
/* let datos2 = document.querySelector('#datos');
    datos2.innerHTML = ` 
    <h1>Caja de datos</h1>
    <h2> I am ${concat} cm tall<h2>`
    ; */
/* document.write(`mido ${high} <br>`)
document.write(`me llamo ${name}<br>`)
document.write(`mido ${high}<br>`) */


//conditionals

if (high >= 180) {
    datos.innerHTML += '<h1>you are tall</h1>';
} else {
    datos.innerHTML += '<h1>you are not a human being</h1>';
};

/* for(let year = 2000; year <= 2023; year++){
    datos.innerHTML += '<h1>estamos en el año ${year}</h1>';
} */


//arrays

const names = [
    'vic' , 'fran', 'wow'
];

let divNames = document.querySelector('#names');

divNames.innerHTML = `the name is as follows : ${names[2]}`;

divNames.innerHTML = "<h2>Listado de nombres</h2><ul>"

//it goes through all the names and adds them to the divNames array, also adding a li.

names.forEach(name => {
    divNames.innerHTML += "<li>"+name+"</li>"
})

divNames.innerHTML += "</ul>";

//it does the same thing as above.
for(let name of names) {
    divNames.innerHTML += "<li>"+name+"</li>"
}

divNames.innerHTML += "</ul>";


//functions 

const miInfo = (name , high) => {
    let misDatos = `<h1> caja de datos</h1>
                    <h2> I am ${name}</h2>
                    <h3> mido ${high}</h3>
                    `;
        return misDatos;
}

console.log(miInfo('george', 2023));







