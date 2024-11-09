def on_forever():
    if joystickbit.get_rocker_value(joystickbit.rockerType.X) <= 200:
        catcher.move(-1)
        music.play_tone(262, music.beat(BeatFraction.HALF))
    if joystickbit.get_rocker_value(joystickbit.rockerType.X) >= 800:
        catcher.move(1)
        music.play_tone(294, music.beat(BeatFraction.HALF))
    if joystickbit.get_rocker_value(joystickbit.rockerType.Y) >= 800:
        catcher.change(LedSpriteProperty.Y, 1)
        music.play_tone(494, music.beat(BeatFraction.HALF))
    if joystickbit.get_rocker_value(joystickbit.rockerType.Y) <= 200:
        catcher.change(LedSpriteProperty.Y, -1)
        music.play_tone(440, music.beat(BeatFraction.HALF))
basic.forever(on_forever)

catcher = game.create_sprite(2, 2)