var 바디 = document.body;

var 숫자후보;
var 숫자배열;

function 숫자뽑기 () {
    숫자후보 = [1,2,3,4,5,6,7,8,9];
    숫자배열 = [];
    for (var i = 0; i < 4; i += 1){
        var 뽑은것 = 숫자후보.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        숫자배열.push(뽑은것);
    }
}

숫자뽑기();
console.log(숫자배열);

var 결과 = document.createElement('h1');
바디.append(결과);
var 폼 = document.createElement('form');
document.body.append(폼);
var 입력창 = document.createElement('input');
폼.append(입력창);
입력창.type = 'text';
입력창.maxLength = 4;
var 버튼 = document.createElement('button');
버튼.textContent = '결과!';
폼.append(버튼);

var 틀린횟수 = 0;
폼.addEventListener('submit', function 비동기(이벤트){ //엔터를 쳣을때
    이벤트.preventDefault();
    var 답 = 입력창.value;
    console.log('답');
    if (답 === 숫자배열.join('')) { //답이 맞으면
        결과.textContent = '홈런';
        입력창.value = '';
        입력창.focus();
        숫자뽑기();
        틀린횟수 = 0;
    } else { //답이 틀리면
       var 답배열 = 답.split('');
       var 스트라이크 = 0;
       var 볼 = 0;
       틀린횟수 += 1;
       if(틀린횟수 > 4) { // 4번 넘게 틀린경우
           결과.textContent = '4번 넘게 틀려서 실패입니다! 답은' + 숫자배열.join(',') + '입니다!';
           입력창.value = '';
           입력창.focus();
           숫자뽑기();
           틀린횟수 = 0;
       } else { // 4번 미만으로 틀린경우
        for(var i = 0; i < 3; i += 1){
            if(Number(답배열[i]) === 숫자배열[i]) {
                스트라이크 += 1;
            } else if(숫자배열.indexOf(Number(답배열[i])) > -1) {
                 볼 += 1;
            }
        }
        결과.textContent = 스트라이크 + '스트라이크' + 볼 + '볼입니다.' ;
        입력창.value = '';
        입력창.focus();    
       }
       
    }
});
