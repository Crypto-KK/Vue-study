var arr = [1,2,3,4];

console.log(arr)
arr.unshift(0)
arr.filter(function (value) {
    if(value % 2 === 0) {
        arr.shift(value)
    }
})
console.log(arr);
