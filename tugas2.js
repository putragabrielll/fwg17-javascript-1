const mtk = 80;
const bahasaIndonesia = 90;
const bahasaInggris = 89;
const ipa = 69;

const rataRata = (mtk + bahasaIndonesia + bahasaInggris + ipa) / 4;
console.log(rataRata);

const hasil = (rataRata) => {
    if (rataRata <= 59){
        return 'E'
    } else if (rataRata <= 69) {
        return 'D'
    } else if (rataRata <= 79) {
        return 'C'
    } else if (rataRata <= 89){
        return 'B'
    } else {
        return 'A'
    }
}

console.log('Rata-rata = ' + rataRata + '\n' + 'Grade = ' + hasil(rataRata))