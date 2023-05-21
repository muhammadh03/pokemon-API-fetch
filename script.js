let h1 = document.createElement('h1');
h1.innerHTML = 'Pokemons';
h1.style.textAlign = 'center';
h1.style.fontFamily = 'Luckiest Guy', 'cursive';

/////////////// Head Section Start ///////////////////
let container = document.createElement('div');
container.setAttribute('class','container');

let table = document.createElement('table');
table.setAttribute('class','table');

let thead = document.createElement('thead');

let tr1 = document.createElement('tr');


let th2 = document.createElement('th');
th2.setAttribute('scope', 'col');
th2.innerHTML = 'Names';

let th3 = document.createElement('th');
th3.setAttribute('scope', 'col');
th3.innerHTML = 'Ability';

let th4 = document.createElement('th');
th4.setAttribute('scope', 'col');
th4.innerHTML = 'Moves';

let th5 = document.createElement('th');
th5.setAttribute('scope', 'col');
th5.innerHTML = 'Weight';
/////////////// Head Section End ///////////////////

/////////////// Body Section Start ///////////////////
let tbody = document.createElement('tbody');
tbody.setAttribute('id','table-body-1');
// tbody.setAttribute('id','table-body-2');

let tr2 = document.createElement('tr');


let td1 = document.createElement('td');
td1.innerHTML = `gloom`;
// td1.setAttribute('id','table-body-1');

let td2 = document.createElement('td');
td2.innerHTML = `gloom`;
// td2.setAttribute('id','table-body-2');

let td3 = document.createElement('td');
td3.innerHTML = `gloom`

let td4 = document.createElement('td');
td4.innerHTML = `gloom`
/////////////// Body Section End ///////////////////

let outPut = document.createElement('div');

document.body.append(h1,outPut);
container.append(table)
table.append(thead,tbody)
thead.append(tr1,tr2)
tr1.append(th2,th3,th4,th5)
tr2.append(td1,td2,td3,td4)
document.body.append(container)

async function pokeName(){
    let res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
    let res1 = await res.json();
    // console.log(res1.results);
    try {
        let nameData = '';
        res1.results.map((values) => {
            nameData += `<tr>
            <td>${values.name}</td>
            <td>gloom</td>
            <td>gloom</td>
            <td>gloom</td>
          </tr>`
        });
        document.getElementById('table-body-1').innerHTML = nameData;
    } catch (error) {
        console.log(error)
    }
}
pokeName()

// async function pokeAbility(){
//     let res = await fetch('https://pokeapi.co/api/v2/ability/?limit=20&offset=20');
//     let res1 = await res.json();
//     // console.log(res1)
//     try {
//         let abilityData = '';
//         res1.results.map((values) => {
//             abilityData += `<tr>
//             <td>${values.name}</td>
//             <td></td>
//             <td></td>
//             <td></td>
//           </tr>`
//         });
//         document.getElementById('table-body-2').innerHTML = abilityData;
//     } catch (error) {
//         console.log(error)
//     }
// }
// pokeAbility()

////////////////////////// Pagination ///////////////////////////
let footerDiv = document.createElement('div');

let nav = document.createElement('nav');
nav.classList.add('aria-label','Page', 'navigation', 'example');

let ul = document.createElement('ul');
ul.classList.add('class', 'pagination', 'justify-content-center');

let li1 = document.createElement('li');
li1.setAttribute('class', 'page-item');

let aTag1 = document.createElement('a');
aTag1.setAttribute('class', 'page-link');
aTag1.setAttribute('href', '#')
aTag1.innerHTML = 'Previous';

let li2 = document.createElement('li');
li2.setAttribute('class', 'page-item');

let aTag2 = document.createElement('a');
aTag2.setAttribute('class', 'page-link');
aTag2.setAttribute('href', '#')
// aTag2.addEventListener('click', )
aTag2.innerHTML = '1';

let li3 = document.createElement('li');
li3.setAttribute('class', 'page-item');

let aTag3 = document.createElement('a');
aTag3.setAttribute('class', 'page-link');
aTag3.setAttribute('href', '#')
aTag3.innerHTML = '2';

let li4 = document.createElement('li');
li4.setAttribute('class', 'page-item');

let aTag4 = document.createElement('a');
aTag4.setAttribute('class', 'page-link');
aTag4.setAttribute('href', '#')
aTag4.innerHTML = '3';

let li5 = document.createElement('li');
li5.setAttribute('class', 'page-item');

let aTag5 = document.createElement('a');
aTag5.setAttribute('class', 'page-link');
aTag5.setAttribute('href', '#')
aTag5.innerHTML = '4';

let li6 = document.createElement('li');
li6.setAttribute('class', 'page-item');

let aTag6 = document.createElement('a');
aTag6.setAttribute('class', 'page-link');
aTag6.setAttribute('href', '#')
aTag6.innerHTML = '5';

let li7 = document.createElement('li');
li7.setAttribute('class', 'page-item');

let aTag7 = document.createElement('a');
aTag7.setAttribute('class', 'page-link');
aTag7.setAttribute('href', '#')
aTag7.innerHTML = 'Next';

nav.append(ul);
ul.append(li1,li2,li3,li4,li5,li6,li7);
li1.append(aTag1);
li2.append(aTag2);
li3.append(aTag3);
li4.append(aTag4);
li5.append(aTag5);
li6.append(aTag6);
li7.append(aTag7);
footerDiv.append(nav)
container.append(footerDiv)
document.body.append(container)
