var Person = function(name) {
    this.name = name;
};
Person.prototype.getName = function() {
    return this.name;
};

var iu = new Person('지금');
iu.getName = function() {
    return '바로 ' + this.name;
};
console.log(iu.getName());
console.log(iu.__proto__.getName());
Person.prototype.name = '이지금';
console.log(iu.__proto__.getName());
console.log(iu.__proto__.getName.call(iu));