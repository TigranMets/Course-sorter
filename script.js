const courses = [
    { name: 'React Js course', price: 3, },
    { name: 'Angular Js course', price: 7, },
    { name: 'Vue Js course', price: 2, },
    { name: 'Node Js course', price: 5, },
    { name: 'jQuery course', price: 1, },
];

function generateLIST() {
    const ul = document.querySelector('.list-group');
    ul.innerHTML = '';
    courses.forEach((course) => {
        const li = document.createElement('li');
        li.classList.add('list-group-item');

        const name = document.createTextNode(course.name);
        li.appendChild(name);

        const span = document.createElement('span');
        span.classList.add('float-right');

        const price = document.createTextNode('$' + course.price);
        span.appendChild(price);

        li.appendChild(span);
        ul.appendChild(li);
    });
}

generateLIST();

const buttonFromSmallToBig = document.querySelector('.sort-btn-from-small-to-big');

buttonFromSmallToBig.addEventListener('click', () => {
    courses.sort((a, b) => a.price - b.price);
    generateLIST();
});

const buttonFromBigToSmall = document.querySelector('.sort-btn-from-big-to-small');

buttonFromBigToSmall.addEventListener('click', () => {
    courses.sort((a, b) => b.price - a.price);
    generateLIST();
});