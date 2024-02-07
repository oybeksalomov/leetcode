// https://leetcode.com/problems/apply-transform-over-each-element-in-array/description/?envType=study-plan-v2&envId=30-days-of-javascript

var map = function(arr, fn) {
    return arr.map((item, index) => {
        return fn(item, index)
    })
};