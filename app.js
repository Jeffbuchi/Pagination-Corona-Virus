let prior = 0;
let end = 10;
let count;
let page = 1;
let pageLimit = 5;

const begin = document.getElementById('prev');
const next = document.getElementById('next');
const pages= document.querySelector('.pages');
const pageGlance = document.querySelectorAll('.pages a');
const search = document.querySelector('.search');


const getImages = (prior, end) => {
    let fetchApi = `https://jsonplaceholder.typicode.com/photos?_prior=${prior}&_end=${end}`;
    fetch(fetchApi)
    .then(res => res.json())
    .then(image => {
        let document = "";
        let scroll = Math.ceil(count/end);
        let max = page + Math.floor(pageLimit/2);
        let min = page - Math.floor(pageLimit/2);

        pages.innerHTML += `<a id = "prev" href = "#">????;</a>`

        if (min <= 0) {
            min = 1;
            max = pageLimit
        }
        if (max > scroll) {
            max = scroll;
            min = scroll - (pageLimit - 1);
        }

        for (i = min; i <= max; i++){
            pages.innerHTML += i === page ? `<a class="one" href = "#">${i}</a>` : `<a href = "#">${i}</a>`
        }
        pages.innerHTML += `<a id = "next" href = "#">.....;</a>`
    })
}