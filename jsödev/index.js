//ebob
const ebob = (a, b) => {
    while (a !== 0 && b !== 0) {
        if (a > b) a %= b;
        else b %= a;
    }
    return a + b;
};

//ekok
const ekok = (a, b) => a * b / ebob(a, b);

const sayıAralıgı = n => {
    if (n < 3) return n;
    let acc = 2;
    for (let i = 3; i <= n; i++) {
        acc = ekok(acc, i);
    }
    return acc;
};


console.log(sayıAralıgı(20));

//sonuç: 232792560