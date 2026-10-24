function simularCompra() {
    let qtdMemoriaRAM = Number(prompt("Quantidade de memória RAM que deseja comprar?"));
    let qtdPlacaVideo = Number(prompt("Quantidade de placas de vídeo que deseja comprar?"));
    let qtdTeclado = Number(prompt("Quantidade de teclados que deseja comprar?"));
    let qtdMouse = Number(prompt("Quantidade de mouses que deseja comprar?"));
    let qtdSSD = Number(prompt("Quantidade de SSDs que deseja comprar?"));
    let totalRam = qtdMemoriaRAM * 1100;
    let totalPlaca = qtdPlacaVideo * 1700;
    let totalTeclado = qtdTeclado * 250;
    let totalMouse = qtdMouse * 100;
    let totalSsd = qtdSSD * 460;
    let totalCompra = totalRam + totalPlaca + totalTeclado + totalMouse + totalSsd;
    if (qtdMemoriaRAM == 0 && qtdPlacaVideo == 0 && qtdTeclado == 0 && qtdMouse == 0 && qtdSSD == 0) {
        alert("Nenhum produto foi selecionado!");
    } else {
        alert("Memória RAM\nQuantidade: " + qtdMemoriaRAM + "\nValor: R$ " + totalRam);
        alert("Placa de vídeo\nQuantidade: " + qtdPlacaVideo + "\nValor: R$ " + totalPlaca);
        alert("Teclado gamer\nQuantidade: " + qtdTeclado + "\nValor: R$ " + totalTeclado);
        alert("Mouse gamer\nQuantidade: " + qtdMouse + "\nValor: R$ " + totalMouse);
        alert("SSD\nQuantidade: " + qtdSSD + "\nValor: R$ " + totalSsd);
        alert("Total da compra: R$ " + totalCompra);
    }
}