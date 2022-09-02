function solution(progresses, speeds) {
    var answer = [];
    var days = [];      //소요일수

    // 1. 소요일수 구하기
    for (let i = 0; i < progresses.length; i++) {
        let cnt = 0;
        let progrees = progresses[i];
        while (progrees < 100) {
            progrees += speeds[i];
            cnt++;
        }
        days.push(cnt);
    }
    // 2. 소요일수에 따른 배포 건수 구하기
    // 2.1. 첫 배포 소요일수 보다 작은 소유일 수가 몇건인지 구해서 answer 배열에 담기
    let maxDeploy = days[0];

    // 2.2. answer 배포 건수의 배열의 위치
    let j = 0;
    answer[j] = 1;
    for (let i = 1; i < days.length; i++) {
        if (days[i] <= maxDeploy){
            answer[j] += 1;
        }else{
            maxDeploy = days[i];
            j += 1;
            answer[j] = 1;
        }
    }

    //console.log(answer);

    return answer;
}


solution([93, 30, 55], [1, 30, 5]);                         // 7, 3, 9
solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]);     // 5, 10, 1, 1, 20, 1    
