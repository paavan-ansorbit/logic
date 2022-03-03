//Question
const input = 124;
const hash = 'abcdefghij';
const output1= "02:04"
const output2 = "02:_4ab_def_hij"

//answer
const MinToHour = (input:number) => { 
    let hour = Math.floor(input / 60);
    let min = input % 60;
    return `${(hour.toString().padStart(2, '0'))}:${min.toString().padStart(2, '0')}`;
}
const hash1 = MinToHour(input) + hash;

let hasharr = hash1.split('');
for (let i = 3; i < hasharr.length; i+=4) {
        hasharr[i] = '_';
    
}
console.log('output2', hasharr.join(''));