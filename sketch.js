function drawFood() {
    const coords = [];

    for (let i = 0; i < 100; i++) {
        let x = Math.round((Math.random() * (1885 - 0) + 0) / 5) * 5;
        let y = Math.round((Math.random() * (945 - 0) + 0) / 5) * 5;
        coords.push([x, y]);
    }

    console.log(coords);
}

const moveDirections = {
    1: 'LEFT',
    2: 'UP',
    3: 'RIGHT',
    4: 'DOWN'
};
const moveDirectionKey = {
    LEFT: 65,
    UP: 87,
    RIGHT: 68,
    DOWN: 83
};

const initFruitCoords = [
    [ 735, 710 ],
    [ 1580, 470 ],
    [ 1220, 585 ],
    [ 1625, 505 ],
    [ 1085, 100 ],
    [ 1195, 215 ],
    [ 1165, 615 ],
    [ 1390, 10 ],
    [ 455, 860 ],
    [ 430, 865 ],
    [ 120, 380 ],
    [ 950, 610 ],
    [ 1885, 750 ],
    [ 1315, 910 ],
    [ 465, 430 ],
    [ 155, 690 ],
    [ 420, 260 ],
    [ 135, 60 ],
    [ 920, 155 ],
    [ 770, 715 ],
    [ 0, 460 ],
    [ 1215, 675 ],
    [ 200, 645 ],
    [ 1340, 600 ],
    [ 565, 50 ],
    [ 955, 240 ],
    [ 700, 100 ],
    [ 1400, 905 ],
    [ 905, 305 ],
    [ 1535, 705 ],
    [ 780, 395 ],
    [ 1745, 170 ],
    [ 1630, 615 ],
    [ 705, 730 ],
    [ 270, 700 ],
    [ 1145, 600 ],
    [ 40, 690 ],
    [ 1840, 500 ],
    [ 1265, 400 ],
    [ 495, 80 ],
    [ 1370, 145 ],
    [ 90, 500 ],
    [ 130, 320 ],
    [ 1805, 335 ],
    [ 1510, 810 ],
    [ 565, 35 ],
    [ 1730, 305 ],
    [ 620, 615 ],
    [ 1810, 570 ],
    [ 1585, 640 ],
    [ 1520, 420 ],
    [ 800, 295 ],
    [ 1635, 915 ],
    [ 1075, 485 ],
    [ 1405, 245 ],
    [ 665, 530 ],
    [ 200, 405 ],
    [ 390, 375 ],
    [ 1460, 855 ],
    [ 810, 655 ],
    [ 1725, 940 ],
    [ 1510, 430 ],
    [ 1570, 395 ],
    [ 345, 825 ],
    [ 435, 100 ],
    [ 1730, 730 ],
    [ 330, 515 ],
    [ 1365, 275 ],
    [ 1240, 65 ],
    [ 855, 935 ],
    [ 825, 290 ],
    [ 220, 465 ],
    [ 870, 495 ],
    [ 1495, 240 ],
    [ 855, 205 ],
    [ 825, 440 ],
    [ 170, 405 ],
    [ 965, 25 ],
    [ 1435, 330 ],
    [ 1255, 735 ],
    [ 885, 320 ],
    [ 1285, 260 ],
    [ 1155, 515 ],
    [ 1625, 380 ],
    [ 1095, 360 ],
    [ 5, 755 ],
    [ 1415, 170 ],
    [ 1635, 120 ],
    [ 1300, 595 ],
    [ 1020, 510 ],
    [ 1615, 80 ],
    [ 1060, 640 ],
    [ 70, 295 ],
    [ 1465, 300 ],
    [ 465, 265 ],
    [ 1525, 275 ],
    [ 1720, 350 ],
    [ 1530, 910 ],
    [ 1875, 90 ],
    [ 40, 455 ]
];
const initPoisonCoords = [
    [ 1305, 875 ],
    [ 1215, 180 ],
    [ 1070, 390 ],
    [ 650, 725 ],
    [ 1695, 230 ],
    [ 1320, 55 ],
    [ 1445, 840 ],
    [ 10, 680 ],
    [ 330, 885 ],
    [ 1715, 470 ],
    [ 1445, 515 ],
    [ 595, 840 ],
    [ 145, 270 ],
    [ 1135, 315 ],
    [ 1585, 605 ],
    [ 190, 200 ],
    [ 785, 165 ],
    [ 1260, 260 ],
    [ 825, 720 ],
    [ 270, 475 ],
    [ 930, 645 ],
    [ 250, 220 ],
    [ 695, 450 ],
    [ 1505, 710 ],
    [ 920, 850 ],
    [ 285, 180 ],
    [ 1040, 210 ],
    [ 1445, 900 ],
    [ 960, 805 ],
    [ 545, 770 ],
    [ 510, 640 ],
    [ 145, 140 ],
    [ 1280, 820 ],
    [ 1005, 55 ],
    [ 1780, 75 ],
    [ 1475, 675 ],
    [ 1170, 135 ],
    [ 1130, 5 ],
    [ 430, 195 ],
    [ 505, 900 ],
    [ 305, 350 ],
    [ 945, 700 ],
    [ 1555, 605 ],
    [ 70, 830 ],
    [ 845, 55 ],
    [ 365, 280 ],
    [ 1020, 145 ],
    [ 405, 525 ],
    [ 15, 550 ],
    [ 1455, 505 ],
    [ 775, 635 ],
    [ 1455, 15 ],
    [ 1610, 910 ],
    [ 1455, 920 ],
    [ 1590, 610 ],
    [ 995, 355 ],
    [ 1305, 115 ],
    [ 1315, 930 ],
    [ 380, 610 ],
    [ 545, 330 ],
    [ 410, 940 ],
    [ 1695, 370 ],
    [ 1695, 345 ],
    [ 445, 220 ],
    [ 705, 75 ],
    [ 890, 285 ],
    [ 1240, 825 ],
    [ 0, 665 ],
    [ 1545, 135 ],
    [ 1695, 800 ],
    [ 995, 240 ],
    [ 855, 840 ],
    [ 635, 785 ],
    [ 1085, 500 ],
    [ 1360, 160 ],
    [ 850, 80 ],
    [ 1630, 600 ],
    [ 70, 75 ],
    [ 810, 605 ],
    [ 1290, 920 ],
    [ 20, 470 ],
    [ 640, 565 ],
    [ 1645, 40 ],
    [ 1020, 785 ],
    [ 135, 395 ],
    [ 450, 225 ],
    [ 1205, 915 ],
    [ 1710, 175 ],
    [ 850, 285 ],
    [ 1825, 10 ],
    [ 205, 70 ],
    [ 1380, 50 ],
    [ 1270, 345 ],
    [ 95, 640 ],
    [ 675, 520 ],
    [ 1835, 285 ],
    [ 1085, 705 ],
    [ 25, 645 ],
    [ 1390, 870 ],
    [ 50, 660 ],
];
const shoResultOnly = true;
let lastFitness = 0;
let fruitCoords = Array.from(initFruitCoords), poisonCoords = Array.from(initPoisonCoords);
let playerSize = 15;
let escapeX = 1835;
let escapeY = 845;
let escapeSize = 50;
let consumableSize = 5;
let started = false;
let currentTime = 5;
let initialTime = 5;
let playerMoveAmount = 25;
let lifecycleTime = 400; //in frames
const mutation = 0.05;
let maxPopulations = 100;
let populationsGone = 0;
let population = [];
let candidates = [];
let frame = 1;

function changeTime(direction, amount) {
    if (direction === '+') {
        currentTime += 1;
    } else if (direction === '-') {
        currentTime -= 1;
    } else {
        currentTime = amount;
    }

    $('#timer').text(currentTime);
}

function placeConsumables(coords) {
    for (const i of coords) {
        square(i[0], i[1], consumableSize);
    }
}

function isPlayerInBounds(x, y) {
    if (x < 0 || x > 1890 - playerSize) {
        return false;
    }

    if (y < 0 || y > 900 - playerSize) {
        return false;
    }

    return true;
}

function canConsume(x, y) {
    for (let index in fruitCoords) {
        let fruitX = fruitCoords[index][0];
        let fruitY = fruitCoords[index][1];

        if (
                x + playerSize >= fruitX + consumableSize &&
                y + playerSize >= fruitY + consumableSize &&
                x <= fruitX &&
                y <= fruitY
        ) {
            fruitCoords.splice(index, 1);
            changeTime('+', 1);
        }
    }

    for (let index in poisonCoords) {
        let poisonX = poisonCoords[index][0];
        let poisonY = poisonCoords[index][1];

        if (
                x + playerSize >= poisonX + consumableSize &&
                y + playerSize >= poisonY + consumableSize &&
                x <= poisonX &&
                y <= poisonY
        ) {
            poisonCoords.splice(index, 1);
            changeTime('-', 1);
        }
    }
}

function isPlayerInEscape(x, y) {
    if (x >= escapeX && y >= escapeY && x + playerSize <= escapeX + escapeSize && y + playerSize <= escapeY + escapeSize) {
        fruitCoords = Array.from(initFruitCoords);
        poisonCoords = Array.from(initPoisonCoords);

        return true;
    }

    return false;
}

function playerMovement(playerX, playerY, direction) {
    let newPlayerX = playerX;
    let newPlayerY = playerY;

    if (moveDirectionKey.LEFT === direction) { //left
        newPlayerX -= playerMoveAmount;
    } else if (moveDirectionKey.UP === direction) { //up
        newPlayerY -= playerMoveAmount;
    } else if (moveDirectionKey.RIGHT === direction) { //right
        newPlayerX += playerMoveAmount;
    } else if (moveDirectionKey.DOWN === direction) { //down
        newPlayerY += playerMoveAmount;
    }

    if (newPlayerX !== playerX || newPlayerY !== playerX) {
        started = true;
    }

    if (isPlayerInBounds(newPlayerX, newPlayerY)) {
        playerX = newPlayerX;
        playerY = newPlayerY;
    }

    canConsume(newPlayerX, newPlayerY)

    // if (isPlayerInEscape(newPlayerX, newPlayerY)) {
    //     reset();
    // }

    return [playerX, playerY];
}

function reset() {
    playerX = 5;
    playerY = 5;
    fruitCoords = Array.from(initFruitCoords);
    poisonCoords = Array.from(initPoisonCoords);
    started = false;
    changeTime('=', initialTime);
}

function populate(amount = 5) {
    for (let i = 0; i < amount; i++) {
        let member = {
            fitness: 0,
            moves: [],
        }
        let step = 0;
        let playerX = 5;
        let playerY = 5;

        for (let t = 0; t < lifecycleTime; t++) {
            step = moveDirections[Math.round((Math.random() * (4 - 1) + 1))];

            let newPlayerCoords = playerMovement(playerX, playerY, moveDirectionKey[step]);
            newPlayerCoords.push(step);
            playerX = newPlayerCoords[0];
            playerY = newPlayerCoords[1];

            member.moves.push(newPlayerCoords);
        }

        population.push(member);
    }

    populationsGone++;
}

function crossover(mom, dad) {
    let separatePoint = parseInt(random(mom.length));
    let momMoves = [...mom];
    let dadMoves = [...dad];
    let childMoves = [...momMoves.splice(0, separatePoint)];

    let recalculatedMoves = [];
    let recalculateStartX;
    let recalculateStartY;

    if (childMoves.length === 0) {
        recalculateStartX = 5;
        recalculateStartY = 5;
    } else {
        recalculateStartX = childMoves[childMoves.length - 1][0];
        recalculateStartY = childMoves[childMoves.length - 1][1];
    }

    for (let moveToRecalculate of dadMoves.splice(separatePoint)) {
        let newPlayerCoords = playerMovement(recalculateStartX, recalculateStartY, moveDirectionKey[moveToRecalculate[2]]);
        recalculateStartX = newPlayerCoords[0];
        recalculateStartY = newPlayerCoords[1];
        newPlayerCoords.push(moveToRecalculate[2]);
        recalculatedMoves.push(newPlayerCoords);
    }

    childMoves.push(...recalculatedMoves);

    return childMoves;
}

function mutate(moves) {
    let firstMutatedMoveIndex;
    let mutatedMoves = [...moves];

    for (let i = 0; i < mutatedMoves.length; i++) {
        if (random(1) < mutation) {
            let move = mutatedMoves[i];

            if (!firstMutatedMoveIndex) {
                firstMutatedMoveIndex = i;
            }

            let availableSteps = Object.assign({}, moveDirectionKey);
            delete availableSteps[move[2]];
            let availableStepsNames = Object.keys(availableSteps);
            availableSteps = Object.values(availableSteps);
            let randomStepIndex = Math.round((Math.random() * (2 - 0) + 0));
            mutatedMoves[i][2] = availableStepsNames[randomStepIndex];
        }
    }

    if (firstMutatedMoveIndex) {
        let prevMove;

        if (mutatedMoves[firstMutatedMoveIndex - 1]) {
            prevMove = mutatedMoves[firstMutatedMoveIndex - 1];
        } else {
            prevMove = mutatedMoves[firstMutatedMoveIndex];
        }

        let recalculateStartX = prevMove[0];
        let recalculateStartY = prevMove[1];
        let movesToRecalculate = mutatedMoves.splice(firstMutatedMoveIndex);
        let recalculatedMoves = [];

        for (let index in movesToRecalculate) {
            let moveToRecalculate = movesToRecalculate[index]
            let newPlayerCoords = playerMovement(recalculateStartX, recalculateStartY, moveDirectionKey[moveToRecalculate[2]]);
            recalculateStartX = newPlayerCoords[0];
            recalculateStartY = newPlayerCoords[1];
            newPlayerCoords.push(moveToRecalculate[2]);
            recalculatedMoves.push(newPlayerCoords);
        }

        mutatedMoves.push(...recalculatedMoves);
    }

    return mutatedMoves;
}

function fitness() {
    const initialDist = dist(5, 5, escapeX, escapeY);
    let bestFitness = 0;
    candidates = [];

    for (const member of population) {
        let lastCoords = member.moves[lifecycleTime - 1];
        let memberDist = dist(lastCoords[0], lastCoords[1], escapeX, escapeY);
        let memberFitness = pow(((initialDist - memberDist) / initialDist), 2);

        if (member.fitness >= memberFitness) {
            member.fitness = 0;
        } else {
            member.fitness = memberFitness;
        }

        if (memberFitness > bestFitness) {
            bestFitness = memberFitness;
        }
    }

    for (const member of population) {
        if (member.fitness > bestFitness / 2) {
            let fitnessNormal = map(member.fitness, 0, bestFitness, 0, 1);
            let n = parseInt(fitnessNormal * 100);  // Arbitrary multiplier

            for (let j = 0; j < n; j++) {
                candidates.push(member);
            }
        }
    }

    const fitness = Math.round(bestFitness * 100);

    $('#fitness b').text(fitness + '%');

    return fitness;
}

function fitnessForCoords(memberIndex) {
    const initialDist = dist(5, 5, escapeX, escapeY);
    const member = population[memberIndex];

    let lastCoords = member.moves[frame];
    let currentMoveDist = dist(lastCoords[0], lastCoords[1], escapeX, escapeY);
    // let currentMoveFitness = ((initialDist - currentMoveDist) / initialDist);
    let currentMoveFitness = ((initialDist - currentMoveDist) / frame) / 5.045112781954887;

    member.fitness = pow(currentMoveFitness, 2);
}

function populationToCandidates(argument) {
    candidates = [];
    let bestFitness = 0;

    for (const member of population) {
        if (member.fitness > bestFitness) {
            bestFitness = member.fitness;
        }
    }

    for (const member of population) {
        if (member.fitness > bestFitness / 3) {
            let fitnessNormal = map(member.fitness, 0, bestFitness, 0, 1);
            let n = parseInt(fitnessNormal * 100);  // Arbitrary multiplier

            for (let j = 0; j < n; j++) {
                candidates.push(member);
            }
        }
    }

    $('#fitness b').text(Math.round(bestFitness * 100) + '%');
}

function evolve() {
    population = [];
    console.clear();
    console.log(candidates.length, '');
    for (let p = 0; p < maxPopulations; p++) {
        momIndex = parseInt(random(candidates.length));
        dadIndex = parseInt(random(candidates.length));
        mom = candidates[momIndex];
        dad = candidates[dadIndex];
        let child = {
            fitness: 0,
            moves: crossover(mom.moves, dad.moves),
        };
        child.moves = mutate(child.moves);

        population.push(child);
    }
    populationsGone++;
    $('#populations b').text(populationsGone);
}

function setup() {
    // drawFood();

    const canvas = createCanvas(1890, 900);
    canvas.parent('sketch');
    setInterval(() => {
        if (started) {
            changeTime('-', 1);
        }
    }, 1000);

    populate(maxPopulations);
}

let precalc = false;

function draw() {
    background(0);
    //place escape point
    fill(255);
    strokeWeight(1);
    square(escapeX, escapeY, escapeSize);

    strokeWeight(0);
    fill(255, 51, 153);
    placeConsumables(fruitCoords);
    fill(0, 153, 0);
    placeConsumables(poisonCoords);

    // if (!precalc) {
    //     noLoop();
    //     let exTyme = Date.now();
    //     fitness();
    //     evolve();
    //     console.log(Date.now() - exTyme, 'aaaaa');
    //     for (var i = 0; i < 40000; i++) {
    //         fitness();
    //         evolve();
    //         console.log(1, 'looping');
    //     }
    //     precalc = true;
    //     loop();
    // }

    // if (!shoResultOnly && lastFitness >= 90) { sho only result
    for (let memberIndex in population) {
        // console.log(memberIndex);
        let member = population[memberIndex];
        let memberCoords = member.moves[frame];
        // fitnessForCoords(memberIndex);
        fill(255, 255, 0);
        square(memberCoords[0], memberCoords[1], playerSize);
    }

    frame++;

    if (frame >= lifecycleTime) {
        if (populationsGone === 50000) {
            noLoop();
        }
        lastFitness = fitness();
        // populationToCandidates();
        evolve();
        console.log(lastFitness, 'ls f');
        frame = 0;
    }

    if (currentTime <= 0) {
        // reset();
    }
}
