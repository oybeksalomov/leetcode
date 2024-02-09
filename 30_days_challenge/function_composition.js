// https://leetcode.com/problems/function-composition/submissions/1170393576/?envType=study-plan-v2&envId=30-days-of-javascript

var compose = function(functions) {
    
    return function(x) {
        if(functions.length > 0) {
            for(let i = functions.length - 1; i >= 0; i--) {
                const f = functions[i]
                x = f(x)
            }
            return x
        } else {
            return x
        }    
    }
    
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */