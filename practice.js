/* 1. prime number or not
const isPrime=(num)=>{
    let a=[]
    for(let i=1;i<=num;i++){
        if(num%i==0)
            a.push(i)
    }
    if(a.length>2)
        return 'composite'
    else return 'prime'
}
console.log(isPrime(1121))

// 2. number a palindrome or not
const isPalindrome=(num)=>{
    let l=0;
   let num1=num.toString().split('')
   
    let r=num1.length-1;
    while(l<r){
        if(num1[l]!=num1[r])
            return 'not a palindrome'
        else {
        l++
    r-- }
    }
    return 'palindrome'
}
console.log(isPalindrome(123211))

// 3.perfect numbers
const isPerfect=(num)=>{
    let a=0;
for(let i=1; i<num;i++){
    if(num%i==0)
        a=a+i;
}
if(a===num)
    return 'perfect'
else return 'not perfect'
}
console.log(isPerfect(28))

// 4. happy number
const isHappy=(num,num2)=>{
    if(num2>0){
        if(num===1)
            console.log('happy')
        else {
        let num1=num.toString().split('').reduce((p,c)=>Number(p)+Number(c)*Number(c),0)
        //console.log(num1, typeof num1)
        isHappy(num1,num2--)
        }
    }
    
}
isHappy(100,10)

// 5. fibonocci number
const isFib=(num)=>{
    let fib=[0,1]
    while(fib[fib.length-1]<=num){
        let num2 = fib[fib.length-1]+fib[fib.length-2]
        fib.push(num2)
    }
    if(fib.includes(num))
        return 'fibonocci number'
    else return 'no'
}
console.log(isFib(13))
console.log(isFib(21))
console.log(isFib(33))
console.log(isFib(34))
console.log(isFib(4))

// 6. Armstrong number
const isArmstrong=(num)=>{
let num1 =num.toString().split('')
num1=num1.reduce((p,c)=>p+Math.pow(c,num1.length),0)
if(num1==num)
return 'Armstrong'
else return 'no'
}
console.log(isArmstrong(25))
console.log(isArmstrong(5))
console.log(isArmstrong(7))
console.log(isArmstrong(9))
console.log(isArmstrong(153))
console.log(isArmstrong(351))

// 7.greatest common divisor
const commonDivisor=(num1,num2)=>{
    let div1=[]
    let common =0
    for(let i=1;i<=num1;i++)
        if(num1%i==0)
            div1.push(i)

    for(let j=1;j<=num2;j++)
        if(num2%j==0)
        if(div1.includes(j))
            common=j

    return common
}
console.log(commonDivisor(25,30))

// 8.LCM
const lcm=(num1,num2)=>{
    let small=0;
    let large=0;
    if(num1<num2){
        small=num1;
        large=num2;
    } else {
        small=num2;
        large=num1;
    }
let i=large;
while (i % num1 !== 0 || i % num2 !== 0) {
    i += large;
}

    return i
}

console.log(lcm(2,3))

// 9.factorial of a number
const factorial=(num)=>{
    let fact=[]
    for(let i=num;i>0;i--){
        fact.push(i)
    }
    return fact.reduce((p,c)=>p*c)
}
console.log(factorial(6))

// 10. sum of digits
const sum=(num)=>{
    return num.toString().split('').reduce((p,c)=>Number(p)+Number(c),0)
}
console.log(sum(256))

// 11.reverse of number
const rev=(num)=>{
    return num.toString().split('').reverse().join('')
}
console.log(rev(123))

// 12.number of digits of number
const numb=(num)=>{
    return num.toString().split('').length
}
console.log(numb(12344))

// 13.reverse of number
const primeFactors=(num)=>{
    let factors=[]
    let prime=[]
    for(let i=1;i<=num;i++){
        if(num%i==0)
            factors.push(i)
    }

    for(let factor of factors){
        let fact=[]
        for(let i=1;i<=factor;i++){
            if(factor%i==0)
                fact.push(i)
        }
        if(fact.length<=2)
            prime.push(factor)
    }

    return prime
}
console.log(primeFactors(5))

//14. nth prime number
const prime=(num)=>{
    let pri=[]
    let n=1
    while(pri.length<num){
        let fact=[]
        for(let i=1;i<=n;i++){
            if(n%i==0)
                fact.push(i)
        }
        if(fact.length<=2)
            pri.push(n)
        n++;
    }
    return pri[pri.length-1]
}
console.log(prime(6))*/

//15. nth fibonocci number
const fibonocci=(num)=>{
    let fib=[0,1]
    let n=1
    while(fib.length<num){
       let num1=fib[fib.length-1]+fib[fib.length-2]
       fib.push(num1)
    }
    return fib[num-1]
}
console.log(fibonocci(10))