
nb = 5;
const index = setInterval(
    () => {
        if (nb > 0) {
            console.log(nb--);
        } else {
            clearInterval(index);
            console.log('BOOM !!!!');
        }
    },
    1500
)
