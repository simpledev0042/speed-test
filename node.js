let sum = 0;
const st = new Date();
for (let i = 0; i < 100; i++) {
    for (let i = 0; i < 100; i++) {
        for (let i = 0; i < 100; i++) {
            for (let i = 0; i < 100; i++) {
                sum = sum + 1;
            }
        }
    }
}
const en = new Date();
console.log(en - st);