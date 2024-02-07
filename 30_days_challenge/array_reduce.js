// https://leetcode.com/problems/array-reduce-transformation/submissions/1168567817/?envType=study-plan-v2&envId=30-days-of-javascript

var reduce = function(nums, fn, init) {
    let res = 0
    if(nums.length > 0) {
        for(let i = 0; i < nums.length; i++) {
            res = fn(init, nums[i])
            init = res
        }
        return res
    } else {
        return init
    }
};