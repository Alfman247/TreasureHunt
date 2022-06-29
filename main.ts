input.onPinPressed(TouchPin.P0, function () {
    No_Double_Play = 1
    Animation()
    Prize = randint(0, 1)
})
function Animation () {
    basic.showLeds(`
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # # .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # . . . .
        # . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # . . . .
        # . . . .
        # . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        `)
    basic.showLeds(`
        # # # # #
        # . . . .
        # . . . .
        # . . . .
        # # . . .
        `)
    basic.showLeds(`
        # # # # #
        # . . . .
        # . . . .
        # . . . .
        # # # . .
        `)
    basic.showLeds(`
        # # # # #
        # . . . .
        # . . . .
        # . . . .
        # # # # .
        `)
    basic.showLeds(`
        # # # # #
        # . . . .
        # . . . .
        # . . . .
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # . . . .
        # . . . .
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # . . . .
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
}
input.onButtonPressed(Button.A, function () {
    basic.showNumber(Score)
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onPinPressed(TouchPin.P2, function () {
    No_Double_Play = 1
    Animation()
    Prize = randint(-1, 0)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    No_Double_Play = 0
    if (Prize == -1) {
        Score = 0
        basic.showString("Game Over")
    } else if (Prize == 0) {
        Score += 1
        basic.showString("+1")
    } else if (Prize == 1) {
        Score += 5
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . # # # .
            . . # . .
            `)
    }
})
input.onPinPressed(TouchPin.P1, function () {
    No_Double_Play = 1
    Animation()
    Prize = randint(-1, 1)
})
let Score = 0
let Prize = 0
let No_Double_Play = 0
No_Double_Play = 0
