export enum PlayerDir {
    left = -1,
    right = 1,
    up = 2,
    down = -2,
    stop = 0,
}
export enum GameStatus {
    STOP = 1,
    RUNNING = 2,
    ATTACKING = 3,
    DEFENSING = 4,
    NOTHING = 5,
    DAZING = 6,
}