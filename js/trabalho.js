function getRandom(max) {
    return Math.floor(Math.random() * max + 1)
}

var taman, escalar;
taman = parseInt(prompt('Informe o tamanho da matriz:'));

var matriz1 = []; var matriz2 = [];

for (k = 0; k < taman; k++) {
    matriz1.push([]);
}

for (k = 0; k < taman; k++) {
    for (j = 0; j < taman; j++) {
        matriz1[k][j]=getRandom(taman);
    }
}

document.write("<table border = 1>");
for (i = 0; i < matriz1.length; i++) {
    var linha = "<tr>";
    for (m = 0; m < matriz1[i].length; m++) {
        linha = linha + "<td>" + matriz1[i][m] + "</td>";
    }
    linha = linha + "</tr>";
    document.write(linha);
}
document.write("</table>");
document.write("</br>");

escalar = parseInt(prompt('Selecione os números escalar'));

for (k = 0; k < taman; k++) {
    matriz2.push([]);
}

for (k = 0; k < taman; k++) {
    for (j = 0; j < taman; j++) {
        matriz2[k][j] = matriz1[k][j] * escalar;

    }
}

document.write("<table border = 1>");
for (i = 0; i < matriz2.length; i++) {
    var linha = "<tr>";
    for (m = 0; m < matriz2[i].length; m++) {
        linha = linha + "<td>" + matriz2[i][m] + "</td>";
    }
    linha = linha + "</tr>";
    document.write(linha);
}
document.write("</table>");
document.write("</br>");



