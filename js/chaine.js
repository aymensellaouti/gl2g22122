position = 0;
chaine = "Bonjour GL2";
inS = 'o';
while ((pos = chaine.indexOf(inS, position)) != -1) {
    console.log(pos);
    position = pos + inS.length;
}
