let catcher = game.createSprite(2, 2)
basic.forever(function () {
    basic.showNumber(joystickbit.getRockerValue(joystickbit.rockerType.X))
    basic.showNumber(joystickbit.getRockerValue(joystickbit.rockerType.Y))
    if (joystickbit.getRockerValue(joystickbit.rockerType.X) < 200) {
        catcher.move(1)
        music.playTone(262, music.beat(BeatFraction.Half))
    }
    if (joystickbit.getRockerValue(joystickbit.rockerType.X) >= 800) {
        catcher.move(-1)
        music.playTone(294, music.beat(BeatFraction.Half))
    }
    if (joystickbit.getRockerValue(joystickbit.rockerType.Y) >= 800) {
        catcher.change(LedSpriteProperty.Y, -1)
        music.playTone(494, music.beat(BeatFraction.Half))
    }
    if (joystickbit.getRockerValue(joystickbit.rockerType.Y) <= 200) {
        catcher.change(LedSpriteProperty.Y, 1)
        music.playTone(440, music.beat(BeatFraction.Half))
    }
})
