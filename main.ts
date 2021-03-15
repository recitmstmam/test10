radio.setGroup(0)
basic.forever(function () {
    radio.sendString("")
    serial.writeValue("t", input.temperature())
})
