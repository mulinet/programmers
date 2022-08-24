'use strict'
function solution(participant, completion) {
    var answer = '';
    //1. 두 배열을 정렬한다.
    participant.sort();
    completion.sort();

    //2. completion 배열만큼 loop 
    let i = 0;
    for (; i < completion.length; i++) {
        if (participant[i] !== completion[i]){
            break;
        }
    }        
    //3. 찾지 못한 경우 마지막 index가 완주 하지 못한 선수
    return participant[i];
}

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]));
console.log(solution(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"]));
console.log(solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]));