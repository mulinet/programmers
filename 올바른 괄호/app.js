'use strict'
function solution(s){
    var answer = true;
    let array = s.split("");
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        let char = array[i];
        count += char === "(" ? +1 : -1;
        if (count < 0){
            return false;
        }
    }
    if (count !== 0 ){
        answer = false;
    }

    return answer;
}

console.log(solution("()()"));
console.log(solution("(())()"));
console.log(solution(")()("));
console.log(solution("(()("));