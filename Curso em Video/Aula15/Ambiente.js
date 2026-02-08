let num = [1,2,3,4,5,6,7,8,9,10];
for(let i = 0;i < 10;i++)
{
    console.log(num[i]);
}
num[3] = 56;
console.log(num);
num.push(8);
num.push(7855425);
console.log(num);
console.log(`tamanho do array: ${num.length}`);
num = num.sort();
console.log(`vetor ordenado ${num}`);
for(let i in num){
    console.log(num[i]);
}
console.log(num.indexOf(56));