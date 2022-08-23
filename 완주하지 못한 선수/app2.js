function solution(participant, completion) {
    let hashed = [];
    participant.forEach(element => {
        console.log(hashed[element]);

        hashed[element] = hashed[element] ? hashed[element] + 1 : 1
        
        console.log(element);
        console.log(hashed[element]);
    });

    console.log(hashed);
}

solution(["leo", "kiki", "eden"], ["eden", "kiki"]);
// solution(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"]);
// solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]);

