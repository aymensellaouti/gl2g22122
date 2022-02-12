const villes = ['Tunis', 'Nabeul', 'Bizerte', 'Sousse', 'Sfax', 'Kasserine', 'Mahdia', 'Sidi Bouzid', 'Kairouan', 'Mednine', 'Tataouin'];
const ol = document.querySelector('ol');
const div = document.querySelector('#villes');
ol.innerHTML = '';
function iterate(container, tag, iterator, timer) {
    let i = 0;
    setInterval(
        () => {
            if (i < iterator.length) {
                let newItem = `<${tag}>${iterator[i++]}</${tag}>`;
                container.innerHTML += newItem;
            } else {
                i = 0;
                container.innerHTML = '';
            }
        },
        timer
    )
}

iterate(ol, 'li', villes, 1000);
iterate(div, 'span', villes, 2000);
