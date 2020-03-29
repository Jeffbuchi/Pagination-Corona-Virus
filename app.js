let imgData = [{
    'img1' : "https://web.aflia.net/wp-content/uploads/2020/02/corona-12-1200x480.jpg",
    'desc' : "Be Prayerful",
},
{
    'img2' : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTuPZfL9_eGMfOLe56Sbvl5apAi9y_zhmVXxPy-fPAhe5h53HXZ",
    'desc' : "Do not touch your face",
},
{
    'img2' : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRvMneBc-nh8tiesUbQwhy9W3jNzJoZvN1iDVWMHTbtFmM-3h8J",
    'desc' : "Use Hand Sanitizer",
},
{
    'img2' : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTuPZfL9_eGMfOLe56Sbvl5apAi9y_zhmVXxPy-fPAhe5h53HXZ",
    'desc' : "Do not touch your face",
},
{
    'img2' : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTuPZfL9_eGMfOLe56Sbvl5apAi9y_zhmVXxPy-fPAhe5h53HXZ",
    'desc' : "Do not touch your face",
},
{
    'img2' : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTuPZfL9_eGMfOLe56Sbvl5apAi9y_zhmVXxPy-fPAhe5h53HXZ",
    'desc' : "Do not touch your face",
},
{
    'img2' : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTuPZfL9_eGMfOLe56Sbvl5apAi9y_zhmVXxPy-fPAhe5h53HXZ",
    'desc' : "Do not touch your face",
},
{
    'img2' : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTuPZfL9_eGMfOLe56Sbvl5apAi9y_zhmVXxPy-fPAhe5h53HXZ",
    'desc' : "Do not touch your face",
},
{
    'img2' : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTuPZfL9_eGMfOLe56Sbvl5apAi9y_zhmVXxPy-fPAhe5h53HXZ",
    'desc' : "Do not touch your face",
},
{
    'img2' : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTuPZfL9_eGMfOLe56Sbvl5apAi9y_zhmVXxPy-fPAhe5h53HXZ",
    'desc' : "Do not touch your face",
}

];

let state = {
    'querySet' : imgData,
    'page' : 1,
    'gap'   : 5
}

buildImages();

function pagination(querySet, page, gap){
    let trimStart = (page - 1) * gap;
    let trimEnd = trimStart + gap;

    let trimmedData = querySet.slice(trimStart, trimEnd);

    let pages = Math.ceil(querySet.length/gap);

    return {
'querySet' : trimmedData,
'pages' : pages
    }
}

function pageButtons(pages) {
    let hub = document.getElementById('pagehub1');
    hub.innerHTML = '';

    for (let page = 1; page <= pages; page++) {
        hub.innerHTML += `<button value =${page} class="pagehub btn btn-sm btn-info">${page}</button>`
    }

    $('.page').on('click', function(){
        $('.images').empty()

        state.page = $('.this').val()
        buildImages()
    })
}

function buildImages() {
totalPage = document.getElementById('images');

let pageData = pagination(state.querySet, state.page, state.gap);
console.log('PageData :', pageData);


}

pageButtons(pageData.pages);