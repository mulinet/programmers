'use strict'
function solution(participant, completion) {
    let hashObj = [];
    // 1. 참가자 선수를 hash key: 선수명, value: 1로 설정
    // 1.1 동명이인이 있을 수 있으므로, value 값은 증가 될 수 있다.
    participant.forEach(element => {
        hashObj[element] = hashObj[element] ? hashObj[element] + 1 : 1
    });

    // 2. 완주자한 선수인 경우 value 을 차감한다.
    // 2.1 동명 이인이 있을 수 있으므로, 기존 value에서 값을 가져와 차감한다.
    completion.forEach(element => {
        if (hashObj[element]){
            hashObj[element] = hashObj[element] - 1;
        }
    });

    //3. objects value 값이 1 이상인 선수는 완주하지 못한 선수
    for (const key in hashObj) {
        if (hashObj[key] >= 1){
            return key;
        }
    }
}

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]));
console.log(solution(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"]));
console.log(solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]));