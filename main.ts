let dic = 0
input.onGesture(Gesture.Shake, function () {
    if (randint(1, 10) == 1) {
        basic.showNumber(8)
    } else {
        dic = randint(1, 6)
        while (dic == 1 || (dic == 3 || dic == 5)) {
            dic = randint(1, 6)
        }
        basic.showNumber(dic)
    }
})
