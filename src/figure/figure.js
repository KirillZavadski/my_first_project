function foo(a,b) {
    let result = {}
    if (a==b) {
        result.figure = "Квадрат"
    } else {
        result.figure = "прямоугольник"
    }
    result.s = a*b
    return result
}
figure(5,10)