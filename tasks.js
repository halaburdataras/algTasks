// #204

let marks = [5,4,5,6,7,8,2,3,10,10,10]
// let marks = [1, 2, 3, 4]
let mark

const task204 = (marks) => {
    marks.sort(function(a, b){return a - b});
    marks.shift()
    marks.pop()
    let aveMark = 0
    for(let i = 0; i < marks.length; i++){
        aveMark += marks[i]
    }
    return aveMark / marks.length
}

console.log(task204(marks));

// 117 Б

let number = 5

const task117b = (n) => {
    let result = 1;
    for (let i = 0; i < n; i++) {
        result *= (i * 2 + 1) / (i + 1);
    }
    return result;
}
 
console.log(task117b(number));

// #207 

let n = 5901550910521

const task207 = (numb) => {
    let res = String(numb).split('')
    let newRes = []
    res.map(d => {
        if(d != 5 && d != 0){
            newRes.push(d)
        }
        return null
    })
    return newRes.join('');
}

console.log(task207(n));