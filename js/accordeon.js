const contents = document.querySelectorAll('.program-line__content');

contents.forEach((elem) => {
const title = elem.querySelector('.program-line__title');

title.addEventListener('click', () => {

contents.forEach((elem1) => {
const descr = elem1.querySelector('.program-line__descr');
if (elem1 === elem) {
descr.classList.toggle('active');
} else {
descr.classList.remove('active');
}
});
});
});

/*const contents = document.querySelectorAll('.program-line__content')

contents.forEach((elem) => {
const title = elem.querySelector('.program-line__title')
const descr = elem.querySelector('.program-line__descr')

title.addEventListener('click', () =>{
    descr.classList.toggle('active')
})

//console.dir(descr.classList.remove);
})

/*
---------------------------------------
const contents = document.querySelectorAll('.program-line__content')

contents.forEach((elem) => {
const title = elem.querySelector('.program-line__title')
const descr = elem.querySelector('.program-line__descr')

title.addEventListener('click', () => {
if (descr.classList.contains('active')) {
    descr.classList.remove('active');

    contents.forEach((elem) => {
        const el = elem.querySelector('.program-line__descr')
        if (el.classList.remove('active')?elem.classList.add('active'):elem.classList.remove('active'));
    })
    return;
}
contents.forEach( descr => descr.classList.remove('active'));

    descr.classList.add('active');
});
});
*/