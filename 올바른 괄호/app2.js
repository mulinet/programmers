'use strict'
function solution(s){
    var answer = true;
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) === "("){
            stack.push(s.charAt(i));
        }else{
            if (stack.length === 0){
                answer = false;        
            }else{
                stack.shift();
            }
        }
    }
    
    if (stack.length > 0){
        answer = false;
    }
    return answer;
}

console.log(solution("()()"));
console.log(solution("(())()"));
console.log(solution(")()("));
console.log(solution("(()("));

// 시간초과
