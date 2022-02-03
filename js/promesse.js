const promesseRembourssement = new Promise(
    (resolve, reject) => {
        setTimeout(
            () => {
                resolve(5);
            },
            3000
        )
    }
);
async function handlePromesse() {
    await promesseRembourssement.then(
        (flouss) => {
            console.log('cc');
        }
    ).catch(
        (error) => {
            console.log('Rabi iehdik');
        }
    )
     console.log('cc 2');
}
handlePromesse();
