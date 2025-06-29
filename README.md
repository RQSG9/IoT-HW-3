# 사물인터넷 Homwork 3
사물인터넷 과제 3: chapter 6 ~ chapter 7의 모든 예제 github에 push하기

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
 - 받은 인자들을 this의 인덱스 프로퍼티로 할당하고 length 프로퍼티를 설정하여, 유사 배열 객체를 생성
 - Grade의 prototype을 []로 설정하여 배열의 prototype을 참조할 수 있게 만듦
 - Grade의 인스턴스인 g에서 배열의 메서드 사용 가능

## Chapter 7

### EX 7-1
 - 클래스(생성자 함수) 자체에 메서드를 정의하는 스태틱 메서드 예제
 - isRectangle은 Rectangle 생성자 함수에 직접 할당된 스태틱 메서드이므로, 인스턴스에서 직접 호출할 수 없고 생성자 함수를 통해 호출해야 함

### EX 7-2
 - Grade 생성자를 통해 유사 배열 객체를 생성하고, prototype을 빈 배열 []로 지정
 - 이를 통해 Grade의 인스턴스는 배열 메서드를 상속받아 사용할 수 있게 됨

### EX 7-3
 - 인스턴스 g의 length 프로퍼티를 삭제한 후 push 메서드를 호출하는 예제
 - push는 this.length를 찾는데, g에 length가 없으므로 프로토타입 체인을 따라 Grade.prototype의 length인 0을 사용
 - 결과적으로 this[0] = 70이 실행되어 기존의 값을 덮어쓰고 length는 1이 됨

### EX 7-4
 - EX 7-3과 달리 Grade.prototype이 ['a', 'b', 'c', 'd']로, length가 4인 배열인 경우
 - 인스턴스 g의 length를 삭제하고 push를 호출하면, 프로토타입의 length인 4를 기준으로 동작
 - this[4] = 70이 실행되고 length는 5가 되어 예상과 다른 결과가 나타남

### EX 7-5
 - 상속의 필요성을 보여주는 예제
 - Rectangle과 Square는 width, height, getArea 등에서 유사한 로직을 가지지만, 독립적으로 구현되어 있어 코드 중복이 발생

### EX 7-6
 - Square 생성자에서 Rectangle의 로직을 재사용하려는 시도
 - Square 생성 시 height 프로퍼티에 width를 할당하여 getArea 메서드의 로직을 Rectangle과 동일하게 맞춤
 - 여전히 getArea 메서드는 Square.prototype에 중복 정의되어 있어 비효율적

### EX 7-7
 - 클래식 상속의 기본적인 두 가지 요소를 보여주는 예제
 - 자식 클래스(Square)의 인스턴스에서 부모 생성자(Rectangle)를 호출하여 프로퍼티를 상속
 - prototype을 부모의 인스턴스로 지정하여 프로토타입 체인 연결

### EX 7-8
 - new SuperClass()를 이용한 상속 구현 도우미 함수 extendClass1
 - 불필요한 Subclass prototype의 프로퍼티를 지우고 freeze

### EX 7-8+
 - 브릿지(Bridge) 생성자 함수를 활용해 상속을 직접 구현하는 예제
 - 내용이 없는 Bridge 함수를 중간에 두어 프로토타입 체인을 연결
 - 부모 생성자를 직접 호출하지 않고 프로토타입을 상속

### EX 7-9
 - 브릿지 패턴을 이용해 상속을 구현하는 개선된 도우미 함수 extendClass2
 - 빈 생성자 함수인 Bridge를 중간에 두어 SuperClass의 생성자 호출 없이 prototype만을 연결
 - 불필요한 프로퍼티 상속을 방지하고 SuperClass 생성자 호출의 부작용을 막음

### EX 7-10
 - Object.create()를 이용한 효율적인 프로토타입 상속 방법
 - Square.prototype = Object.create(Rectangle.prototype) 코드를 통해 new 키워드나 브릿지 패턴 없이 Rectangle의 프로토타입을 직접 상속받음

### EX 7-11
 - SubClass.prototype을 다른 객체로 교체하면 constructor 프로퍼티가 부모 클래스의 것을 가리키게 됨
 - SubClass.prototype.constructor = SubClass 코드를 통해 constructor가 자기 자신을 올바르게 가리키도록 복원
 - 예제 7-8에서 constructor 복구기능 추가

### EX 7-12
 - 예제 7-9에서 constructor 복구기능 추가

### EX 7-13
 - 예제 7-10에서 constructor 복구기능 추가

### EX 7-14
 - 자식 클래스에서 부모 클래스의 메서드를 호출할 수 있는 super 메서드를 수동으로 구현하는 예제
 - this.super()는 부모 생성자를, this.super('propName')은 부모의 프로토타입 메서드를 호출할 수 있게 함

### EX 7-15
 - ES5의 생성자 함수 방식과 ES6의 class 키워드 방식을 비교하는 예제
 - static 키워드는 생성자 함수 자체에 할당되는 스태틱 메서드를, 일반 메서드는 prototype에 추가되는 메서드를 간결하게 정의할 수 있음

### EX 7-16
 - ES6의 class 문법을 사용한 상속 예제
 - extends로 상속 관계를 명시하고, super 키워드를 사용해 부모 클래스의 생성자와 메서드에 쉽게 접근 가능
 - 기존의 프로토타입 기반 상속을 더 명료하고 편리한 문법으로 제공