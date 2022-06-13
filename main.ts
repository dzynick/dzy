namespace SpriteKind {
    export const boy = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.boy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    info.startCountdown(10)
    mySprite2.setPosition(randint(0, 160), randint(0, 120))
})
let mySprite2: Sprite = null
scene.setBackgroundColor(7)
info.changeScoreBy(1)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . 9 9 
    . . . . . . . . . . . . . 9 8 9 
    . . . . . 9 9 . . . . . 9 8 9 . 
    . . . . . 9 8 9 . . . 9 8 9 . . 
    . . . . . . 9 8 9 . 9 8 9 . . . 
    . . . . . . . 9 8 9 8 9 . . . . 
    . . . . . . 9 9 8 8 9 . . . . . 
    . . . . . 9 9 8 8 8 8 9 . . . . 
    . . . . 9 9 8 8 9 9 9 8 9 . . . 
    . . . 9 9 8 8 9 9 . . 9 8 9 . . 
    . . 9 9 8 8 9 9 . . . . 9 9 . . 
    . 9 9 8 8 9 9 . . . . . . . . . 
    9 9 8 8 9 9 . . . . . . . . . . 
    9 9 8 9 9 . . . . . . . . . . . 
    9 9 9 9 . . . . . . . . . . . . 
    9 9 9 . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . e e e e e e e . . . . . 
    . . . . e e e e e e e . . . . . 
    . . . . d 1 1 d 1 1 d . . . . . 
    . . . . d 1 e d 1 e d . . . . . 
    . . . . d 1 1 d 1 1 d . . . . . 
    . . . . d d d 1 d d d . . . . . 
    . . . . d d 2 2 2 d d . . . . . 
    . . . . . . d d d . . . . . . . 
    . . . . . . d d d . . . . . . . 
    . . 9 9 9 9 9 9 9 9 9 9 9 . . . 
    . . 9 . 9 9 9 9 9 9 9 . 9 . . . 
    . . 9 . 9 9 9 9 9 9 9 . 9 . . . 
    . . 9 . 9 9 9 9 9 9 9 . 9 . . . 
    . . . . . f f . f f . . . . . . 
    . . . . . f f . f f . . . . . . 
    `, SpriteKind.boy)
info.startCountdown(10)
