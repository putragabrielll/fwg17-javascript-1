const printSegitiga = 5
console.log(typeof printSegitiga)

if (typeof printSegitiga === 'number') {
    for (let i = printSegitiga; i >= 1; i--) {
        let segitiga = ''
        for (let j = 1; j <= i; j++) {
            segitiga+=i
        }
        console.log(segitiga)
    }
} else {
    console.log("Data harus Number");
}