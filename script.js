function analizar() {
    let res = Number(document.querySelector('.texto').value)
    let resNome = " "
    switch (res) {
        case 1:
            resNome = "Segunda Feira";
            break;
        case 2:
            resNome = "Terça Feira";
            break;
        case 3:
            resNome = "Quarta Feira";
            break;
        case 4:
            resNome = "Quinta Feira";
            break;
        case 5:
            resNome = "Sexta Feira";
            break;
        case 6:
            resNome = "Sabado";
            break;
        case 7:
            resNome = "Domingo";
            break;
        default:
            resNome = 'Escolha um Dia Valido'
    }
    document.querySelector('.resposta').innerHTML = resNome
}
