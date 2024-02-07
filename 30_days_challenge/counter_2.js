// https://leetcode.com/problems/counter-ii/description/?envType=study-plan-v2&envId=30-days-of-javascript

var createCounter = function(init) {
    let counter = init

    function increment(){
        return counter += 1
    }

    function decrement() {
        return counter -= 1
    }

    function reset() {
        return counter = init
    }

    return {
        increment: increment,
        decrement: decrement,
        reset: reset
    }
};