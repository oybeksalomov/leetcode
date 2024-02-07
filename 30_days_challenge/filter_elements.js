// https://leetcode.com/problems/filter-elements-from-array/description/?envType=study-plan-v2&envId=30-days-of-javascript

var filter = function(arr, fn) {
    const filteredArr = []

    arr.forEach((el, idx) => {
        if(fn(el, idx)) {
            filteredArr.push(el)
        }
    })
    return filteredArr
};