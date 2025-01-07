/* // 1. frequency of elements in array
const frequency=(arr)=>{
    let freq={};
    for(let ar of arr){
        freq[ar]=0
    }
    for(let ar of arr){
        freq[ar]++
    }
    return freq
}
console.log(frequency([5,5,5,5,5,4,4,4,4,3,3,3,2,2,1]))

// 2. duplicates in an array
const duplicates=(arr)=>{
   let original=[]
   let dup=[]
   for(let ar of arr)
    if(original.includes(ar))
        dup.push(ar)
    else 
    original.push(ar)

    return dup.length
}
console.log(duplicates([5,5,5,5,5,4,4,4,4,3,3,3,2,2,1]))

// 3. number of unique elements in an array
const unique=(arr)=>{
    let freq={}
    for(let ar of arr){
        freq[ar]=0
    }
    for(let ar of arr){
        freq[ar]++;
    }
    return Object.entries(freq).filter(num=>num[1]==1).length
}
console.log(unique([1,2,2,3,4,4,5,6,7]))

//4. remove duplicates
const duplicates=(arr)=>{
    let original=[]
    let dup=[]
    for(let ar of arr)
     if(original.includes(ar))
         dup.push(ar)
     else 
     original.push(ar)
 
     return original
 }
 console.log(duplicates([5,5,5,5,5,4,4,4,4,3,3,3,2,2,1]))

 //5. find first non repeating element
 const nonRepeat=(arr)=>{
    let freq={}
    arr.map((ele,ind)=>{
        if(!freq[ele])
            freq[ele]=[]
        freq[ele].push(ind)
    })

let sort=    Object.entries(freq).filter(num=>num[1].length===1).sort((a,b)=>a[1][0]-b[1][0])
return sort[0][0]
 }
 console.log(nonRepeat([8,2,3,4,5,5,8]))

 // 6. find first repeating element
const repeat=(arr)=>{
    let freq={}
    arr.map((ele,ind)=>{
        if(!freq[ele])
            freq[ele]=[]
        freq[ele].push(ind)
    })
    return Object.entries(freq).filter(num=>num[1].length>1).sort((a,b)=>a[1][0]-b[1][0])[0][0]
}
 console.log(repeat([4,2,3,3,4,5,5,8]))

 // 7. second largest element
const second=(arr)=>{
    let original=[]
    for(let ar of arr){
        if(!original.includes(ar))
            original.push(ar)
    }
    return original.sort((a,b)=>b-a)[1]
}
 console.log(second([4,2,3,3,4,5,5,8,9]))

 // 8. max frequency of an element
const maxFreq=(arr)=>{
    let freq={}
    for(let ar of arr)
        freq[ar]=0
    for(let ar of arr)
        freq[ar]++
    return Object.entries(freq).sort((a,b)=>b[1]-a[1])[0][0]
}
 console.log(maxFreq([4,2,3,3,4,5,5,8,9,4])) 

 // 9. min frequency of an element
const maxFreq=(arr)=>{
    let freq={}
    for(let ar of arr)
        freq[ar]=0
    for(let ar of arr)
        freq[ar]++
    return Object.entries(freq).sort((a,b)=>a[1]-b[1])[0][0]
}
 console.log(maxFreq([4,2,3,3,4,5,5,8,9,4]))

 // 10. frequency of each character in the String
const stringFreq=(str)=>{
    let freq={}
    let a=[]
    for(let st of str)
        freq[st]=0
    for(let st of str)
        freq[st]++
     Object.entries(freq).map(x=>x.map(y=>a.push(y)))
     return a.join('')
}
 console.log(stringFreq('asaaaaabbcccdddddd'))

 //11. non repeating elements in a string
 const nonRepeat=(str)=>{
    let arr=str.split('')
    let freq={}
    arr.map((ele,ind)=>{
        if(!freq[ele])
            freq[ele]=[]
        freq[ele].push(ind)
    })

let sort=    Object.entries(freq).filter(num=>num[1].length===1).sort((a,b)=>a[1][0]-b[1][0])
return sort[0][0]
 }
 console.log(nonRepeat('fabbcccdddd'))

 // 12. first repeating element in string
const repeat=(str)=>{
    let arr = str.split('')
    let freq={}
    arr.map((ele,ind)=>{
        if(!freq[ele])
            freq[ele]=[]
        freq[ele].push(ind)
    })
    return Object.entries(freq).filter(num=>num[1].length>1).sort((a,b)=>a[1][0]-b[1][0])[0][0]
}
 console.log(repeat('avvnnyybbcccdddd'))

 // 13. common elements in 2 arrays
const common=(aa,bb)=>{
    let com=[]
for(let a of aa)
    if(bb.includes(a))
        com.push(a)
    return com .join(' ')
}
 console.log(common([1,2,3,4],[3,4,5,6,2]))

 // 14. union of 2 arrays
const union=(aa,bb)=>{
    let com=[]
    let join=[...aa,...bb]
    for(let j of join){
        if(!com.includes(j))
            com.push(j)
    }
    return com
}
 console.log(union([1,2,3,4],[3,4,5,6,2]))

 // 15. intersection of 2 arrays
 const common=(aa,bb)=>{
    let com=[]
for(let a of aa)
    if(bb.includes(a))
        com.push(a)
    return com 
}
 console.log(common([1,2,3,4],[3,4,5,6,2]))

 //16. factors of a number in the array
const factors=(arr,num)=>{
    let factor=[]
    let isFactor=[]
    for(let i=1;i<=num;i++){
        if(num%i==0)
            factor.push(i)
    }
    for(let ar of arr)
        if(factor.includes(ar))
            isFactor.push(ar)

    return isFactor
}
 console.log(factors([1,2,3,4,5,6,7,8,9],9))

 //17. merging 2 arrays
const merge=(aa,bb)=>{
    let mer=[...aa,...bb]
    return mer.sort()
}
 console.log(merge([1,2,3,4],[3,4,5,6]))*/

 // sliding method
 let a='aeiou'
 let b=[]
 for(let i=0;i<a.length;i++)
    for(let j=i;j<a.length;j++)
        b.push(a.slice(i,j+1))

 console.log(b.filter(num=>num.length==2))

//console.log(b.filter(num=>num.length<a.length).map(a=>a.reduce((p,c)=>p+c)).sort((a,b)=>b-a)[0])