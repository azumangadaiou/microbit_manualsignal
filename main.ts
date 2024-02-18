input.onButtonPressed(Button.A, function () {
    c = (c + 1) % 3
})
input.onButtonPressed(Button.B, function () {
    c = (c + 2) % 3
})
let c = 0
c = 0
basic.forever(function () {
    if (c == 0) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        led.plot(0, 0)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
        led.unplot(0, 0)
    }
    if (c == 1) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        led.plot(1, 0)
    } else {
        pins.digitalWritePin(DigitalPin.P1, 0)
        led.unplot(1, 0)
    }
    if (c == 2) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        led.plot(2, 0)
    } else {
        pins.digitalWritePin(DigitalPin.P2, 0)
        led.unplot(2, 0)
    }
})
