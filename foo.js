function foo(iteration) {
    if (iteration === 5) {
        return;
    }
    for (let i = 0; i < 5; i++) {
        console.log(i);
        foo(iteration + 1);
    }
}

foo(0);