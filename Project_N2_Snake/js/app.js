const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const apple = new Image();
apple.src = 'resources/apple.png';

function rand(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

class Point {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    sum(p) {
        return new Point(this.x + p.x, this.y + p.y);
    }

    isEqual(p) {
        if(this.x === p.x && this.y === p.y){return true;}
    }
}

const Move = {
    Up: new Point(0, -1),
    Down: new Point(0, 1),
    Left: new Point(-1, 0),
    Right: new Point(1, 0)
}

class Snake {
    constructor(parts = []) {
        this.parts = parts;
    }
}

class Board {
    constructor(settings = {}) {
        this.foods = settings.foods || [];
        this.direction = settings.direction || 'Right';
        this.orders = [];
        this.speed = settings.speed || 150;
        // this.startSpeed = settings.speed || this.speed; 
        this.lastActionTime = 0;
        this.columnsCount = settings.columnsCount || 30;
        this.rowsCount = settings.rowsCount || 20;
        let randomSnake = this.randomPoint();
        let parts = [];
        let partsCount = settings.partsCount;
        for(let i = 0 ;  i < partsCount; i++){
            parts.push(randomSnake);
        }
        this.snake =  new Snake(parts);
        this.cellSize = canvas.width / this.columnsCount; 
        this.foodsCount = settings.foodsCount || 1;
        this.winScore =  500;
        this.foodScore = settings.foodScore || 10;
        this.curScore = 0;
        canvas.height = this.rowsCount * this.cellSize;

        this.paused = true;
        this.gameOver = true;
    }

    requestAnimationFrameCallBack(timestamp) {
        if (this.gameOver) {
            return;
        }

        if (timestamp - this.lastActionTime > this.speed) {
            this.lastActionTime = timestamp;

            if (this.orders.length) {
                let order;

                do order = this.orders.shift() 
                while (this.orders.length && !this.goodOrder(order));

                if (this.goodOrder(order)) {
                    this.direction = order;
                }
            }

            let snakeHead = this.snake.parts[0];
            let snakeHeadNextPossition = snakeHead.sum(this.directionPoint());

            this.snake.parts.unshift(snakeHeadNextPossition); 

            let eaten = false;
            for (let i = 0; i < this.foods.length; i++) {
                if (this.foods[i].isEqual(snakeHeadNextPossition)) {
                    this.foods.splice(i, 1);
                    eaten = true;

                    this.curScore += this.foodScore;

                    if(this.curScore > highScore) {
                        highScore = this.curScore;
                        window.localStorage.setItem('highScore', highScore);
                    }

                    // if(this.curScore % 50 === 0) {
                    //     let n = this.winScore / 50;
                    //     this.speed -= (this.startSpeed - this.maxSpeed) / n;
                    // }
                    
                }
            }

            if (!eaten) {
                this.snake.parts.pop();
            }

            this.drawFoods();

            if (!this.isCrushed()) {
                this.draw();
                if (this.curScore === this.winScore) {
                    this.gameOver = true;
                    this.drawWin();
                }
            } else {
                this.gameOver = true;
                this.drawFail();
            }
        }

        if (!this.paused) {
            window.requestAnimationFrame(this.requestAnimationFrameCallBack.bind(this));
        }
    }
    
    pause() {
        this.paused = true;
    }

    unpause() {
        this.paused = false;
        window.requestAnimationFrame(this.requestAnimationFrameCallBack.bind(this));
    }

    randomPoint(forFood = false) {
        if (!forFood) {
            return new Point(rand(0, this.columnsCount), rand(0, this.rowsCount));
        }else{
            let randomPlace;
            do randomPlace = this.randomPoint();
            while (this.snake.parts.some(p => p.isEqual(randomPlace)) || this.foods.some(f => f.isEqual(randomPlace)));

            return randomPlace;
        }
    }

    draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for(let i = 0; i < this.snake.parts.length; i++){
            if(i == 0){
                ctx.fillStyle = 'blue';
                ctx.fillRect(this.snake.parts[i].x * this.cellSize,this.snake.parts[i].y * this.cellSize, this.cellSize, this.cellSize);
            }else{
                ctx.fillStyle = 'black';
                ctx.fillRect(this.snake.parts[i].x * this.cellSize,this.snake.parts[i].y * this.cellSize, this.cellSize, this.cellSize);
            }
            
        }

        for (let food of this.foods) {
            ctx.drawImage(apple, food.x * this.cellSize, food.y * this.cellSize, this.cellSize, this.cellSize);
        }

        //Output CurScore
        ctx.fillStyle = 'rgba(0,90,90,180.6)';
        ctx.textAlign = "center";
        ctx.font = "24px Comic Sans MS";
        ctx.fillText(this.curScore, canvas.width / 2, canvas.height - 12);


        // OutPut HighScore && CurrentSpeed
        document.querySelector('.high-score').innerHTML = highScore;
        document.querySelector('.speed').innerHTML = this.speed;
    }

    drawFail() {
        ctx.font = "30px Comic Sans MS";
        ctx.fillStyle = "red";
        ctx.textAlign = "center";
        ctx.fillText('Game Over', canvas.width / 2, canvas.height / 2);
        this.pause();
    }

    drawWin() {
        ctx.font = "30px Comic Sans MS";
        ctx.fillStyle = "red";
        ctx.textAlign = "center";
        ctx.fillText('Win', canvas.width / 2, canvas.height / 2);
        this.pause();
    }
    
    drawPause(){
        ctx.font = "30px Comic Sans MS";
        ctx.fillStyle = "red";
        ctx.textAlign = "center";
        ctx.fillText('Game Paused', canvas.width / 2, canvas.height / 2);
        this.pause();
    }

    directionPoint() {
        return Move[this.direction];
    }

    goodOrder(order) {
        const hor = ['Left', 'Right'];
        const ver = ['Up', 'Down'];

        if (hor.includes(this.direction)) {
            return ver.includes(order);
        }

        return hor.includes(order);
    }

    isCrushed() {
        let head = this.snake.parts[0];

        for (let i = 1; i < this.snake.parts.length; i++) {
            if (this.snake.parts[i].isEqual(head)) {
                return true;
            }
        }

        if (head.x < 0 || head.y < 0 || head.x >= this.columnsCount || head.y >= this.rowsCount) {
            return true;
        }

        return false;
    }

    drawFoods() {
        while (this.foods.length < this.foodsCount) {
            this.foods.push(this.randomPoint(true));
        }
    }
}

// main

let board = new Board();
let highScore = window.localStorage.getItem('highScore') || 0;

document.querySelector('.apply-button').addEventListener('click', function () {
    let settings = {};
    let level = document.querySelector('#selectBox').value;

    switch (level) {
        case 'Easy': settings.speed = 150;  break;
        case 'Medium': settings.speed = 100;  break;
        case 'Hard': settings.speed = 60;  break;
    }

    let foodsCount = document.querySelector('#FoodCount').value;
    if (!isNaN(foodsCount)) {
            settings.foodsCount = foodsCount;
        }

    let snakeSpeed = document.querySelector('#SnakeSpeed').value;
    if(!isNaN(snakeSpeed)){
        settings.speed = snakeSpeed;
    }
    

    settings.columnsCount = document.querySelector('#Columns').value;
    settings.rowsCount = document.querySelector('#Rows').value;

    settings.partsCount = document.querySelector('#SnakeLength').value;

    board.gameOver = true;
    board = new Board(settings);
});

window.addEventListener('keydown', function (e) {
    if (board.gameOver) {
        return;
    }

    switch (e.key) {
        case 'w': case 'ArrowUp': board.orders.push('Up');  break;
        case 's': case 'ArrowDown': board.orders.push('Down'); break;
        case 'a': case 'ArrowLeft': board.orders.push('Left'); break;
        case 'd': case 'ArrowRight': board.orders.push('Right'); break;
    }

    board.unpause();
});

document.querySelector('.start-button').addEventListener('click', function () {
    if(!board.curScore) {
        board.gameOver = false;
        board.unpause();
    }
});

document.querySelector('.pause-button').addEventListener('click', function (){
    board.drawPause();
});

document.querySelector('.resume-button').addEventListener('click', function (){
    board.unpause();
});


