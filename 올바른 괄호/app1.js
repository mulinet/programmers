'use strict'
function solution(s){
    var answer = true;
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        count += s.charAt(i) === "(" ? +1 : -1;
        if (count < 0) return false;
    }
    if (count !== 0) answer = false;
    return answer;
}

console.log(solution("()()"));
console.log(solution("(())()"));
console.log(solution(")()("));
console.log(solution("(()("));