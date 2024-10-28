const filterBox = document.querySelectorAll('.box');
const divBox = document.querySelectorAll('div ul li');

const filterGoods = filterClass => {

divBox.forEach(item => item.classList.remove('active'));
const active = document.querySelector(`[data-f="${filterClass}"]`);
if (active) active.classList.add('active');

    filterBox.forEach(item => {
        item.classList.remove('hide');
        if (!item.classList.contains(filterClass) && filterClass !== 'all') {
            item.classList.add('hide');
        }
    })
}

document.querySelector('div').addEventListener('click', event => {
    if (event.target.tagName !== 'LI') return;

    let filterClass = event.target.dataset['f'];
    filterGoods(filterClass);

    window.location.hash = event.target.dataset['f'];
});

if (window.location.hash) {
    console.log(window.location.hash);
    filterGoods(window.location.hash.slice(1));
}