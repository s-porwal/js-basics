const obj = {
    a: 5,
    foo: function () {
        console.log(this);
    }
}

obj.foo();
const foo = obj.foo;
foo();