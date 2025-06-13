# 지능시스템 Homwork 3
지능시스템 과제 3: chapter 6 ~ chapter 7의 모든 예제 github에 push하기

## Chapter 6

### EX 6-1
 - Person 생성자 함수를 정의하고, prototype 프로퍼티를 통해 getName 메서드를 추가
 - 인스턴스의 __proto__가 생성자 함수의 prototype을 참조
 - __proto__는 생략 가능한 프로퍼티

### EX 6-2
 - console.dir를 통해 생성자 함수, prototype, 인스턴스 사이의 관계를 보여주는 예제
 - 배열 리터럴을 통해 생성된 instance의 __proto__가 Array.prototype을 참조하기 때문에, push, pop, forEach 등의 메서들를 호출하여 사용가능
 - from과 isArray 같이 prototype 프로퍼티 내부에 있지 않은 메서드들은 인스턴스가 호출 불가능

### EX 6-3
 - 생성자 함수의 prototype 프로퍼티 내에 있는 constructor라는 프로퍼티는 생성자 함수 자신을 참조함
 - 배열 인스턴스의 constructor 프로퍼티는 원본 Array 생성자 함수를 가리킴
 - new arr.constructor(3, 4)와 같이 constructor를 통해서도 새로운 배열을 생성할 수 있음

### EX 6-4
 - 다양한 데이터 타입의 constructor 프로퍼티를 NewConstructor로 변경하는 예제
 - number, string, boolean은 constructor 변경이 적용되지 않음
 - constructor 프로퍼티는 변경되지만, 데이터 타입이 변하는 것은 아니므로, instanceof 연산자는 여전히 false를 반환

### EX 6-5
 - 인스턴스를 통해 생성자 함수에 접근하는 다양한 방법을 보여주는 예제
 - Object.getPrototypeOf(), __proto__와 constructor 프로퍼티 등을 이용해 원본 생성자 함수에 접근하고, 새로운 인스턴스를 생성할 수 있음
 - 모든 방식으로 생성된 객체는 Person의 인스턴스임이 확인됨

### EX 6-6
 - 메서드 오버라이드(Method Override)를 보여주는 예제
 - Person.prototype.getName에 메서드가 정의되어 있지만, iu 인스턴스에 동일한 이름의 getName 메서드를 직접 할당
 - 해당 객체가 직접 소유한 프로퍼티를 먼저 찾기 때문에 iu 인스턴스에 정의된 메서드가 호출

### EX 6-7
 - Array.prototype에 정의된 push 메서드를 호출
 - Array.prototype역시 객체이므로 prototype 프로퍼티를 가지며 이는 Object.prototype을 참조
 - hasOwnProperty 메서드는 프로토타입 체인을 따라 Object.prototype에서 호출

### EX 6-8
 - 처음 arr.toString() 호출 시에는 Array.prototype.toString이 호출
 - arr 인스턴스에 toString 메서드를 직접 재정의하고 arr.toString() 호출 시에는 재정의된 메서드가 실행

### EX 6-9
 - Object.prototype에 getEntries라는 커스텀 메서드를 추가
 - 객체를 대상으로만 사용할 의도로 만든 메서드 getEntries가 객체가 아닌 다른 데이터에서도 오류 없이 작동
 - 프로토타입 체이닝을 통해 getEntries에 접근하게 된 것

### EX 6-10
 - Grade 생성자 함수는 arguments 객체를 활용하여 가변적인 수의 인자를 받아 처리
 - 받은 인자들을 this의 인덱스 프로퍼티로 할당하고 length 프로퍼티를 설정하여, 유사 배열 객체(Array-like Object)를 생성
 - Grade의 prototype을 []로 설정하여 배열의 prototype을 참조할 수 있게 만듦
 - Grade의 인스턴스인 g에서 배열의 메서드 사용 가능