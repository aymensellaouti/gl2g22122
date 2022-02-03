function showObject(objet) {
    for (cle in objet) {
        console.log(objet[cle]);
    }
}

const user = {
    username: 'aymen',
    email: 'aymen.sellaouti@gmail'
}

const book = {
    "main title": "JavaScript",
    'sub-title': "The Guide",
    "for": "all audiences",
    author: {
        firstname: "David",
        surname: "Flanagan"
    }
};
showObject(user);
showObject(book);

book.showMe = function () {
    console.log(`My author is ${this.author} and my price is ${this?.price}`);
}
