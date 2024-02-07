// https://leetcode.com/problems/counter/?envType=study-plan-v2&envId=30-days-of-javascript

var createCounter = function(n) {
    return function() {
        m = n++

        return m
    };
};