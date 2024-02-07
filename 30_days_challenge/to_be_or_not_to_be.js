// https://leetcode.com/problems/to-be-or-not-to-be/?envType=study-plan-v2&envId=30-days-of-javascript

var expect = function(val) {
    return {
    toBe: function(val1) {
        if(val === val1) {
            return true
        } else {
            throw new Error('Not Equal')
        } 
    },
    notToBe: function(val1) {
               if(val !== val1) {
            return true
        } else {
            throw new Error('Equal')
        } 
    }
    }

};