/**
 * 1. 함수 선언문
 * 2. 함수 표현식
 * 3. Function 생성자 함수
 * 4. 화살표 함수 표현식
 */
function foo() {
    console.log('foo');
}
foo();
const foo1 = function () {
    console.log('foo1');
}
foo1();
const foo2 = new Function("console.log('foo2')")
foo2();
const foo3 = () => {
    console.log('foo3');
}
foo3();

/**
 * 1. IIFE(즉시 실행 함수)
 * 2. 재귀함수
 * 3. 중첩함수
 * 4. 콜백 함수
 */

(function foo4() {
    console.log('foo4')
})();

function foo5(arg) {
    if (arg > 3) return console.log('foo5');
    console.log(arg);
    foo5(arg+ 1);
}
foo5(1);

function foo6(arg){
    function bar() {
        console.log(arg);
    }
    bar();
}

foo6('foo6');

function foo7(arg){
    arg();
}

foo7(()=> {console.log('foo7')})