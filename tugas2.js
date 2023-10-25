const mtk = 80;
const bahasaIndonesia = 90;
const bahasaInggris = 89;
const ipa = 69;


if (typeof mtk === 'number' && typeof bahasaIndonesia === 'number' && typeof bahasaInggris === 'number' && typeof ipa ==='number'){
    const rataRata = (mtk + bahasaIndonesia + bahasaInggris + ipa) / 4;
    console.log(rataRata)
    if (rataRata >= 90 && rataRata <=100){
        return console.log("Rata-rata = " + rataRata + "\n" + "Grade = A")
    } else if (rataRata >= 80 && rataRata <= 89){
        return console.log("Rata-rata = " + rataRata + "\n" + "Grade = B")
    } else if (rataRata >= 70 && rataRata <= 79){
        return console.log("Rata-rata = " + rataRata + "\n" + "Grade = C")
    } else if (rataRata >= 60 && rataRata <= 69){
        return console.log("Rata-rata = " + rataRata + "\n" + "Grade = D")
    } else if (rataRata >= 0 && rataRata <= 59){
        return console.log("Rata-rata = " + rataRata + "\n" + "Grade = E")
    } else {
        return console.log("Data di luar batas")
    }
    
} else {
    return console.log('isi semua data dengan benar')
}