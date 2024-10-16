
//PARSE - paring knife, parcel

// body of text = corpus

let corpus = "Now is the time..."
console.log("LENGTH", corpus.length)

// console.log(corpus[0])
// console.log(corpus[1])
// console.log(corpus[2])
// console.log(corpus[3])
// console.log(corpus[4])
// console.log(corpus[5])

// i=0
// console.log(corpus[i++])
//i is for index
// i++ is shorthand for i = i + i


// for(i=0; i < corpus.length; i++ ){ //for(start;stop;go)
//     console.log("INDEX:"+i, "LETTER:" + corpus[i], "CODE:" + corpus[i].charCodeAt(0)) //REPEAT
//  }


 for(let i=0; i < corpus.length; i++){
    console.log(corpus[1])
}
console.log("DONE")

words = corpus.split(" ")
console.log(words)
console.log("FIRST WORD:", words[0])
console.log("LAST WORD;", words[words.length - 1])

ip = "127.128.128.255"
parts = ip.split(".")
console.log(parts)
console.log(parts[3])
