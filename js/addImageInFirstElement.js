function createImage(
    src = '',
    alt = 'Alternative',
    title = ''
) {
    const image = document.createElement('img');
    image.src = src;
    image.alt = alt;
    image.title = title;
    image.width = '50';
    image.height = '50';
    return image;
}

setTimeout(
    () => {
        const body = document.querySelector('body');
        body.insertBefore(
            createImage('assets/images/techwall.png', 'techwall', 'Techwall'),
            body.firstChild
        )
    },
    2000
);
