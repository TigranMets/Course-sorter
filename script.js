const courses = [
    { name: 'React Js course', price: 3, },
    { name: 'Angular Js course', price: 7, },
    { name: 'Vue Js course', price: 2, },
    { name: 'Node Js course', price: 5, },
    { name: 'jQuery course', price: 1, },
];

const generateLIST = () => {
    const ul = document.querySelector('.list-group');
    ul.replaceChildren();
    courses.forEach(course => {
        const li = document.createElement('li');
        li.classList.add('list-group-item');
        li.appendChild(document.createTextNode(course.name));

        const span = document.createElement('span');
        span.classList.add('float-right');
        span.appendChild(document.createTextNode('$' + course.price));

        li.appendChild(span);
        ul.appendChild(li);
    });
}

generateLIST();

document.querySelector('.sort-btn-from-small-to-big').addEventListener('click', () => {
    courses.sort((a, b) => a.price - b.price);
    generateLIST();
});

document.querySelector('.sort-btn-from-big-to-small').addEventListener('click', () => {
    courses.sort((a, b) => b.price - a.price);
    generateLIST();
});