
// GLOBAL VARIABLES

const raceLine  = document.getElementById('race-line')
const car1 = document.getElementById('car1')
const car2 = document.getElementById('car2')

const winnerText = document.getElementById('winner-car')

// POSITION PROPERTIES

let raceLineLeft = parseInt(getComputedStyle(raceLine).getPropertyValue('left'))

let car1Left = parseInt(getComputedStyle(car1).getPropertyValue('left'))
let car2Left = parseInt(getComputedStyle(car2).getPropertyValue('left'))

const carInitialLeft = parseInt(getComputedStyle(car1).getPropertyValue('left'))

// BUTTONS



// FUNCTIONS




let winnerCar

let finish = 1350

function move(){
    let car1Speed = Math.floor(Math.random() * 10 * 20)
    let car2Speed = Math.floor(Math.random() * 10 * 20)

    car1Left += car1Speed
    car2Left += car2Speed

    car1.style.left = car1Left + "px"
    car2.style.left = car2Left + "px"


    if (car1Left >= finish || car2Left >= finish) {
        console.log('stop')
        
    document.getElementById('winnerIs').style.display = "block"
        clearInterval(moving)
        winner(car1Left, car2Left)
    } 
}

function winner(car1, car2){
    let car1Pos = finish - car1
    let car2Pos = finish - car2

    if (car1Pos < car2Pos) {
        winnerCar = "Car1"
        winnerText.textContent = winnerCar
        car1Points++
    } else{
        winnerCar = "Car2"
        winnerText.textContent = winnerCar
        car2Points++
    }
    document.getElementById('winner').style.zIndex = "10"
    winnerText.style.display = 'flex'
    pointsCounter()
    myPointsCounter()
}


let carpoint

let car1PointsText = document.getElementById('car-1-points')
let car2PointsText = document.getElementById('car-2-points')

let car1Points = 0
let car2Points = 0



let counting

function pointsCounter(){
    car1PointsText.textContent = car1Points
    car2PointsText.textContent = car2Points
}

let moving

function start(){
    car1Left = carInitialLeft
    car2Left = carInitialLeft
    document.getElementById('winner').style.zIndex = "-10"
    moving = setInterval(move, 500)
    winnerIs.style.display = 'none'
    winnerText.style.display = 'none'
}



function reset(){
    car1Left = carInitialLeft
    car2Left = carInitialLeft
    start()
}

let myPointsText = document.getElementById('mypoints')

let mypoints = 0

function myPointsCounter(){
    
    if (winnerCar === pickedCar) {
        mypoints++
        myPointsText.textContent = mypoints
    }
    myPointsText.textContent = mypoints
}


let pickedCar

const pickCar1 = document.getElementById('pick-car-1')
const pickCar2 = document.getElementById('pick-car-2')

pickCar1.addEventListener('click', () => {
    pickedCar = pickCar1.textContent
    start()
})

pickCar2.addEventListener('click', () => {
    pickedCar = pickCar2.textContent
    start()
})
