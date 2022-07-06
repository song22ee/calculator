const screen = document.querySelector(".screen span"); // 계산기 결과 스크린
let selectNum=[]; //눌린 숫자
let selectOp=[]; //눌린 연산기호
const sevenBtn = document.querySelector("#seven"); //7버튼
const seven=sevenBtn.innerHTML; //"7"

console.log("screenNum: "+screen.innerHTML);

//if 버튼 클릭했을때 
    // span 값 가져오기
    // screen 값에 넣어주기
    // if 연산기호일 경우엔
        //연산기능을 수행하는 함수 실행하기
function s(){
    let number = ""; //눌린숫자들을 이어붙임
    console.log("버튼이 눌림 : " + seven);
    selectNum.push(seven);
    console.log(selectNum);
    for(let i=0;i<selectNum.length;i++){
        number = number + selectNum[i];
    }
    let final =  Number(number) ; //눌린숫자를 실제 숫자로 변환
    console.log("final:"+final);

    screen.innerHTML=final;
}

sevenBtn.addEventListener("click",s);




