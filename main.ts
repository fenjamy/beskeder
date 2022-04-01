input.onGesture(Gesture.Shake, function () {
    radio.sendString(tekst)
})
input.onButtonPressed(Button.A, function () {
    bogstav += -1
    basic.showString(" ABCDEFGHIJKLMNOPQRSTUVWXYZÅ".charAt(bogstav))
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.clearScreen()
    tekst = ""
})
input.onButtonPressed(Button.AB, function () {
    tekst = "" + tekst + " ABCDEFGHIJKLMNOPQRSTUVWXYZÅ".charAt(bogstav)
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    bogstav += 1
    basic.showString(" ABCDEFGHIJKLMNOPQRSTUVWXYZÅ".charAt(bogstav))
})
let bogstav = 0
let tekst = ""
radio.setGroup(109)
tekst = ""
bogstav = 1
