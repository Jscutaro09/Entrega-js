let hora = parseInt(prompt("Que hora es en tu ciudad?"));

if (hora <= 12) {
    alert("Es muy temprano");
} else if ((hora > 12) && (hora <= 17)) {
    alert("Espero tengas una linda tarde");
} else if ((hora > 17) && (hora <= 19)) {
    alert("ya esta anocheciendo!");
} else if ((hora > 19) && (hora <= 00)) {
    alert("Disfruta la noche!");
} else {
    alert("Que hora es en tu ciudad?");
}
