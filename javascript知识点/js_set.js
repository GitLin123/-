 //集合set 

 let b = new Set()
 console.log(b)
 b.add([5,6,7,8])
 console.log(b)
 b.add([5,6,7,8])
 for (const value of b) {
    if(JSON.stringify(value)==JSON.stringify([5,6,7,8])){console.log('yes')}
}

