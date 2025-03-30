// 1. 자바스크립트 함수는 함수의 실제 매개변수가 될 수 있다.
// 2. 자바스크립트 함수는 함수의 반환값이 될 수 있다.
// 3. 자바스크립트 함수는 할당명령문의 대상이 될 수 있다. (변수 등에 할당 가능)
// 4. 자바스크립트 함수는 동일 비교의 대상이 될 수 있다. (값으로 표현 가능)

function foo1(arg){
    return arg();
}

function bar1() {
    console.log('bar');
}

foo1(bar1);

const foo2 = function(arg) {
    return arg;
};

console.log(foo2(1));

/**
 * 1. 기본값 매개변수 default funtion parameter
 * 2. 나머지 매개변수 Rest parameter
 * 3. arguments 객체
 */

function foo3(arg=1){
    console.log(arg);
}
foo3();

function foo4(arg, ...rest){
    console.log(rest);
}
foo4(1,2,3,4);

function foo5(arg){
    console.log(arguments);
}
foo5(1,2,3,4);