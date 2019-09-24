const result = [1,2,3,4,5,6,7,8, " "];
let arr = [1,2,3,4,5,6,7,8," "];
var plus = 0;
var minus = 0;
var cc = 0;
var cc1 = 0;
var cc2 = 0;
let was = [];
let counter = 0;

let treel0 = [];
let treell = [];
let treelu = [];
let treeld = [];
let treeu0 = [];
let treeul = [];
let treeuu = [];
let treeur = [];
let treed0 = [];
let treedl = [];
let treedd = [];
let treedr = [];
let treer0 = [];
let treeru = [];
let treerd = [];
let treerr = [];

function printTree(arr1) {

    let tree = [];
    tree.push(treel0, treeu0, treed0, treer0, treell, treelu, treeld, treeul, treeuu, treeur, treedl, treedd, treedr, treeru, treerd, treerr);

    for (let i = 1; i <= 16; i++) {
        for (let j = 0; j < 9; j++) {
            document.getElementById(`sgrid${i}${j}`).style.borderColor = "#b8b8b8";
            document.getElementById(`sgrid${i}${j}`).innerHTML = " ";
        }
        if(i < 10){
            document.getElementById(`sgrid${i}`).style.borderColor = "#b8b8b8";
            document.getElementById(`sgrid${i}`).style.backgroundColor = "white";      
        }else{
            document.getElementById(`sgrid0${i}`).style.borderColor = "#b8b8b8";
            document.getElementById(`sgrid0${i}`).style.backgroundColor = "white"; 
        }     
    }

    for (let i = 0; i < tree.length; i++) {
        if (tree[i].length > 0) {
            for (let j = 0; j < 9; j++) {
                document.getElementById(`sgrid${i+1}${j}`).innerHTML = tree[i][j];
                document.getElementById(`sgrid${i+1}${j}`).style.borderColor = "black";
            }
            if (i < 9) {
                document.getElementById(`sgrid${i+1}`).style.borderColor = "black";
            } else document.getElementById(`sgrid0${i+1}`).style.borderColor = "black";
        }

    }

    for (let i = 0; i < tree.length; i++) {
        if((JSON.stringify(tree[i])==JSON.stringify(arr1)) && i < 9){
            document.getElementById(`sgrid${i+1}`).style.backgroundColor = "#6dff7a";
        }else if((JSON.stringify(tree[i])==JSON.stringify(arr1)) && i >= 9){
            document.getElementById(`sgrid0${i+1}`).style.backgroundColor = "#6dff7a"; 
        }
    }

}

function moveUp(arr1) {
    let pos = arr1.indexOf(" ");
    switch(pos){
        case 0:
        case 1:
        case 2:
        break;
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        arr1[pos] = arr1[pos - 3];
        arr1[pos - 3] = " ";
        break;
    }
    printGrid(arr1);
}

function moveDown(arr1) {
    let pos = arr1.indexOf(" ");
    switch(pos){
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        arr1[pos] = arr1[pos + 3];
        arr1[pos + 3] = " ";       
        break;
        case 6:
        case 7:
        case 8:
        break;
    }
    printGrid(arr1);
}

function moveLeft(arr1) {
    let pos = arr1.indexOf(" ");
    switch(pos){
        case 0:
        case 3:
        case 6:
        break;
        case 1:
        case 2:
        case 4:
        case 5:
        case 7:
        case 8:
        arr1[pos] = arr1[pos - 1];
        arr1[pos - 1] = " ";       
        break;
    }
    printGrid(arr1);
}

function moveRight(arr1) {
    let pos = arr1.indexOf(" ");
    switch(pos){
        case 2:
        case 5:
        case 8:
        break;
        case 0:
        case 1:
        case 3:
        case 4:
        case 6:        
        case 7:
        arr1[pos] = arr1[pos + 1];
        arr1[pos + 1] = " ";      
        break;
    }
    printGrid(arr1);
}

function printGrid(arr1){
    for (let i = 0; i < arr1.length; i++) {
        document.getElementById(`grid${i}`).style.borderColor = "rgb(218, 218, 218)";
        document.getElementById(`grid${i}`).style.backgroundColor = "rgb(238, 238, 238)";
        if(arr1[i] == i + 1){
            document.getElementById(`grid${i}`).style.color = "black";
        }else {document.getElementById(`grid${i}`).style.color = "red";}
    }
    for (let i = 0; i < arr1.length; i++) {
        document.getElementById(`grid${i}`).innerHTML = arr1[i];
    }
    document.getElementById(`grid${arr1.indexOf(" ")}`).style.backgroundColor = "rgb(179, 102, 1)";
    document.getElementById(`grid${arr1.indexOf(" ")}`).style.borderColor = "rgba(218, 218, 218, 0)";
}
 
function shuffle(arr1) {
    
    for(let i = 0; i < 1000; i++){
        let x = Math.floor(Math.random() * 4);
        switch(x){
            case 0:
            moveUp1(arr1);
            break;
            case 1:
            moveDown1(arr1);
            break;
            case 2:
            moveLeft1(arr1);
            break;
            case 3:
            moveRight1(arr1);
            break;
        }
    }
    cc = 0;
    cc1 = 0;
    cc2 = 0;
    counter = 0;
    was = [];
    printGrid(arr1);
    document.getElementById("counter").innerHTML = counter;
    document.getElementById("pluser").innerHTML = 0;
    document.getElementById("pluser2").innerHTML = 0;
}

function solver(arr1) {
    var counter = 0;
    while(arr1[0] != result[0] || arr1[1] != result[1] || arr1[2] != result[2] || arr1[3] != result[3] || arr1[4] != result[4] || arr1[5] != result[5]){
        let x = Math.floor(Math.random() * 4);
        switch(x){
            case 0:
            moveUp1(arr1);
            break;
            case 1:
            moveDown1(arr1);
            break;
            case 2:
            moveLeft1(arr1);
            break;
            case 3:
            moveRight1(arr1);
            break;
        }
        counter++;
    }
    if(arr1[6] == 7 && arr1[7] == 8){
        plus++;
    }if(arr1[7] == 7 && arr1[8] == 8){
        moveRight1(arr1);
        moveRight1(arr1);
        plus++;
    }if(arr1[6] == 7 && arr1[8] == 8){
        moveRight1(arr1);
        plus++;
    }
    if(!(arr1[6] == 7 && arr1[7] == 8) && !(arr1[7] == 7 && arr1[8] == 8) && !(arr1[6] == 7 && arr1[8] == 8)){
        console.log("Z");
        minus++;
    }
    printGrid(arr1);
    document.getElementById("counter").innerHTML = counter;
}


function solver2(arr1, q = 99) {
    while((arr1[0] != result[0] || arr1[1] != result[1] || arr1[2] != result[2] || arr1[3] != result[3] || arr1[4] != result[4] || arr1[5] != result[5] || ((arr1[6] != result[6]) && (arr1[6] != result[7])) || ((arr1[7] != result[7]) && (arr1[7] != result[6]))) && q < 100){
    let pos = arr1.indexOf(" ");
    treel0 = [];
    treell = [];
    treelu = [];
    treeld = [];
    treeu0 = [];
    treeul = [];
    treeuu = [];
    treeur = [];
    treed0 = [];
    treedl = [];
    treedd = [];
    treedr = [];
    treer0 = [];
    treeru = [];
    treerd = [];
    treerr = [];
    counter++;
    q++;
    for (let i = 0; i < arr1.length; i++) {
        document.getElementById(`sgrid0${i}`).innerHTML = arr1[i];
    }
    switch(pos){
        case 0:
            switch(smaller([d(arr1), r(arr1), dd(arr1)+1, dr(arr1)+1, rd(arr1)+1, rr(arr1)+1])){
                case 0: moveDown1(arr1); cc2++; break;
                case 1: moveRight1(arr1); cc2++; break;
                case 2: moveDown1(arr1); moveDown1(arr1); cc2 += 2; break;
                case 3: moveDown1(arr1); moveRight1(arr1); cc2 += 2; break;
                case 4: moveRight1(arr1); moveDown1(arr1); cc2 += 2; break;
                case 5: moveRight1(arr1); moveRight1(arr1); cc2 += 2; break;
            }
            break;
        case 1:
            switch(smaller([l(arr1), d(arr1), r(arr1), ld(arr1)+1, dl(arr1)+1, dd(arr1)+1, dr(arr1)+1, rd(arr1)+1])){
                case 0: moveLeft1(arr1); cc2++; break;
                case 1: moveDown1(arr1); cc2++; break;
                case 2: moveRight1(arr1); cc2++; break;
                case 3: moveLeft1(arr1); moveDown1(arr1); cc2 += 2; break;
                case 4: moveDown1(arr1); moveLeft1(arr1); cc2 += 2; break;
                case 5: moveDown1(arr1); moveDown1(arr1); cc2 += 2; break;
                case 6: moveDown1(arr1); moveRight1(arr1); cc2 += 2; break;
                case 7: moveRight1(arr1); moveDown1(arr1); cc2 += 2; break;
            }
            break;
        case 2:
            switch(smaller([l(arr1), d(arr1), ll(arr1), ld(arr1), dl(arr1), dd(arr1)])){
                case 0: moveLeft1(arr1); cc2++; break;
                case 1: moveDown1(arr1); cc2++; break;
                case 2: moveLeft1(arr1); moveLeft1(arr1); cc2 += 2; break;
                case 3: moveLeft1(arr1); moveDown1(arr1); cc2 += 2; break;
                case 4: moveDown1(arr1); moveLeft1(arr1); cc2 += 2; break;
                case 5: moveDown1(arr1); moveDown1(arr1); cc2 += 2; break;
            }
            break;
        case 3:
            switch(smaller([u(arr1), d(arr1), r(arr1), ur(arr1), dr(arr1), ru(arr1), rd(arr1), rr(arr1)])){
                case 0: moveUp1(arr1); cc2++; break;
                case 1: moveDown1(arr1); cc2++; break;
                case 2: moveRight1(arr1); cc2++; break;
                case 3: moveUp1(arr1); moveRight1(arr1); cc2 += 2; break;
                case 4: moveDown1(arr1); moveRight1(arr1); cc2 += 2; break;
                case 5: moveRight1(arr1); moveUp1(arr1); cc2 += 2; break;
                case 6: moveRight1(arr1); moveDown1(arr1); cc2 += 2; break;
                case 7: moveRight1(arr1); moveRight1(arr1); cc2 += 2; break;
            }  
            break; 
        case 4:
            switch(smaller([l(arr1), u(arr1), d(arr1), r(arr1), lu(arr1), ld(arr1), ul(arr1), ur(arr1), dl(arr1), dr(arr1), ru(arr1), rd(arr1)])){
                case 0: moveLeft1(arr1); cc2++; break;
                case 1: moveUp1(arr1); cc2++; break;
                case 2: moveDown1(arr1); cc2++; break;
                case 3: moveRight1(arr1); cc2++; break;
                case 4: moveLeft1(arr1); moveUp1(arr1); cc2 += 2; break;
                case 5: moveLeft1(arr1); moveDown1(arr1); cc2 += 2; break;
                case 6: moveUp1(arr1); moveLeft1(arr1); cc2 += 2; break;
                case 7: moveUp1(arr1); moveRight1(arr1); cc2 += 2; break;
                case 8: moveDown1(arr1); moveLeft1(arr1); cc2 += 2; break;
                case 9: moveDown1(arr1); moveRight1(arr1); cc2 += 2; break;
                case 10: moveRight1(arr1); moveUp1(arr1); cc2 += 2; break;
                case 11: moveRight1(arr1); moveDown1(arr1); cc2 += 2; break; 
            } 
            break;
        case 5:
            switch(smaller([l(arr1), u(arr1), d(arr1), ll(arr1), lu(arr1), ld(arr1), ul(arr1), dl(arr1)])){
                case 0: moveLeft1(arr1); cc2++; break;
                case 1: moveUp1(arr1); cc2++; break;
                case 2: moveDown1(arr1); cc2++; break;
                case 3: moveLeft1(arr1); moveLeft1(arr1); cc2 += 2; break;
                case 4: moveLeft1(arr1); moveUp1(arr1); cc2 += 2; break;
                case 5: moveLeft1(arr1); moveDown1(arr1); cc2 += 2; break;
                case 6: moveUp1(arr1); moveLeft1(arr1); cc2 += 2; break;
                case 7: moveDown1(arr1); moveLeft1(arr1); cc2 += 2; break;
            } 
            break;
        case 6:
            switch(smaller([u(arr1), r(arr1), uu(arr1), ur(arr1), ru(arr1), rr(arr1)])){
                case 0: moveUp1(arr1); cc2++; break;
                case 1: moveRight1(arr1); cc2++; break;
                case 2: moveUp1(arr1); moveUp1(arr1); cc2 += 2; break;
                case 3: moveUp1(arr1); moveRight1(arr1); cc2 += 2; break;
                case 4: moveRight1(arr1); moveUp1(arr1); cc2 += 2; break;
                case 5: moveRight1(arr1); moveRight1(arr1); cc2 += 2; break;
            }
            break;
        case 7:
            switch(smaller([l(arr1), u(arr1), r(arr1), lu(arr1), uu(arr1), ul(arr1), ur(arr1), ru(arr1)])){
                case 0: moveLeft1(arr1); cc2++; break;
                case 1: moveUp1(arr1); cc2++; break;
                case 2: moveRight1(arr1); cc2++; break;
                case 3: moveLeft1(arr1); moveUp1(arr1); cc2 += 2; break;
                case 4: moveUp1(arr1); moveLeft1(arr1); cc2 += 2; break;
                case 5: moveUp1(arr1); moveUp1(arr1); cc2 += 2; break;
                case 6: moveUp1(arr1); moveRight1(arr1); cc2 += 2; break;
                case 7: moveRight1(arr1); moveUp1(arr1); cc2 += 2; break;
            }
            break;
        case 8:
            switch(smaller([l(arr1), u(arr1), ll(arr1), lu(arr1), ul(arr1), uu(arr1)])){
                case 0: moveLeft1(arr1); cc2++; break;
                case 1: moveUp1(arr1); cc2++; break;
                case 2: moveLeft1(arr1); moveLeft1(arr1); cc2 += 2; break;
                case 3: moveLeft1(arr1); moveUp1(arr1); cc2 += 2; break;
                case 4: moveUp1(arr1); moveLeft1(arr1); cc2 += 2; break;
                case 5: moveUp1(arr1); moveUp1(arr1);cc2 += 2;  break;
            }
            break;
    }

    // let moves = [l(arr1), ll(arr1), lu(arr1), ld(arr1), u(arr1), ul(arr1), uu(arr1), ur(arr1), d(arr1), dl(arr1), dd(arr1), dr(arr1), r(arr1), ru(arr1), rd(arr1), rr(arr1)];
    let kkk = [];
    for (let i = 0; i < arr1.length; i++) {
        kkk.push(arr1[i]);
    }
    document.getElementById("counter").innerHTML = counter;
    document.getElementById("pluser").innerHTML = cc1;
    document.getElementById("pluser2").innerHTML = cc2;
    was.push(kkk);
    printTree(arr1);
    printGrid(arr1);
    }
    if(JSON.stringify(result)==JSON.stringify(arr1)){
        cc = 0;
        cc1 = 0;
        counter = 0;
        was = [];
    }
}

function solver3(arr1, q = 99) {
    while((arr1[0] != result[0] || arr1[1] != result[1] || arr1[2] != result[2] || arr1[3] != result[3] || arr1[4] != result[4] || arr1[5] != result[5] || ((arr1[6] != result[6]) && (arr1[6] != result[7])) || ((arr1[7] != result[7]) && (arr1[7] != result[6]))) && q < 100){
    let pos = arr1.indexOf(" ");
    treel0 = [];
    treell = [];
    treelu = [];
    treeld = [];
    treeu0 = [];
    treeul = [];
    treeuu = [];
    treeur = [];
    treed0 = [];
    treedl = [];
    treedd = [];
    treedr = [];
    treer0 = [];
    treeru = [];
    treerd = [];
    treerr = [];
    counter++;
    q++;
    for (let i = 0; i < arr1.length; i++) {
        document.getElementById(`sgrid0${i}`).innerHTML = arr1[i];
    }
    switch(pos){
        case 0:
            switch(smaller([d(arr1), dd(arr1)+1, dr(arr1)+1, r(arr1), rd(arr1)+1, rr(arr1)+1])){
                case 0: moveDown1(arr1); cc2++; break;
                case 1: moveDown1(arr1); moveDown1(arr1); cc2 += 2; break;
                case 2: moveDown1(arr1); moveRight1(arr1); cc2 += 2; break;
                case 3: moveRight1(arr1); cc2++; break;
                case 4: moveRight1(arr1); moveDown1(arr1); cc2 += 2; break;
                case 5: moveRight1(arr1); moveRight1(arr1); cc2 += 2; break;
            }
            break;
        case 1:
            switch(smaller([l(arr1), ld(arr1)+1, d(arr1), dl(arr1)+1, dd(arr1)+1, dr(arr1)+1, r(arr1), rd(arr1)+1])){
                case 0: moveLeft1(arr1); cc2++; break;
                case 1: moveLeft1(arr1); moveDown1(arr1); cc2 += 2; break;
                case 2: moveDown1(arr1); cc2++; break;
                case 3: moveDown1(arr1); moveLeft1(arr1); cc2 += 2; break;
                case 4: moveDown1(arr1); moveDown1(arr1); cc2 += 2; break;
                case 5: moveDown1(arr1); moveRight1(arr1); cc2 += 2; break;
                case 6: moveRight1(arr1); cc2++; break;
                case 7: moveRight1(arr1); moveDown1(arr1); cc2 += 2; break;
            }
            break;
        case 2:
            switch(smaller([l(arr1), ll(arr1), ld(arr1), d(arr1), dl(arr1), dd(arr1)])){
                case 0: moveLeft1(arr1); cc2++; break;
                case 1: moveLeft1(arr1); moveLeft1(arr1); cc2 += 2; break;
                case 2: moveLeft1(arr1); moveDown1(arr1); cc2 += 2; break;
                case 3: moveDown1(arr1); cc2++; break;
                case 4: moveDown1(arr1); moveLeft1(arr1); cc2 += 2; break;
                case 5: moveDown1(arr1); moveDown1(arr1); cc2 += 2; break;
            }
            break;
        case 3:
            switch(smaller([u(arr1), ur(arr1), d(arr1), dr(arr1), r(arr1), ru(arr1), rd(arr1), rr(arr1)])){
                case 0: moveUp1(arr1); cc2++; break;
                case 1: moveUp1(arr1); moveRight1(arr1); cc2 += 2; break;
                case 2: moveDown1(arr1); cc2++; break;
                case 3: moveDown1(arr1); moveRight1(arr1); cc2 += 2; break;
                case 4: moveRight1(arr1); cc2++; break;
                case 5: moveRight1(arr1); moveUp1(arr1); cc2 += 2; break;
                case 6: moveRight1(arr1); moveDown1(arr1); cc2 += 2; break;
                case 7: moveRight1(arr1); moveRight1(arr1); cc2 += 2; break;
            }  
            break; 
        case 4:
            switch(smaller([l(arr1), lu(arr1), ld(arr1), u(arr1), ul(arr1), ur(arr1), d(arr1), dl(arr1), dr(arr1), r(arr1), ru(arr1), rd(arr1)])){
                case 0: moveLeft1(arr1); cc2++; break;
                case 1: moveLeft1(arr1); moveUp1(arr1); cc2 += 2; break;
                case 2: moveLeft1(arr1); moveDown1(arr1); cc2 += 2; break;
                case 3: moveUp1(arr1); cc2++; break;
                case 4: moveUp1(arr1); moveLeft1(arr1); cc2 += 2; break;
                case 5: moveUp1(arr1); moveRight1(arr1); cc2 += 2; break;
                case 6: moveDown1(arr1); cc2++; break;
                case 7: moveDown1(arr1); moveLeft1(arr1); cc2 += 2; break;
                case 8: moveDown1(arr1); moveRight1(arr1); cc2 += 2; break;
                case 9: moveRight1(arr1); cc2++; break;
                case 10: moveRight1(arr1); moveUp1(arr1); cc2 += 2; break;
                case 11: moveRight1(arr1); moveDown1(arr1); cc2 += 2; break; 
            } 
            break;
        case 5:
            switch(smaller([l(arr1), ll(arr1), lu(arr1), ld(arr1), u(arr1), ul(arr1), d(arr1), dl(arr1)])){
                case 0: moveLeft1(arr1); cc2++; break;
                case 1: moveLeft1(arr1); moveLeft1(arr1); cc2 += 2; break;
                case 2: moveLeft1(arr1); moveUp1(arr1); cc2 += 2; break;
                case 3: moveLeft1(arr1); moveDown1(arr1); cc2 += 2; break;
                case 4: moveUp1(arr1); cc2++; break;
                case 5: moveUp1(arr1); moveLeft1(arr1); cc2 += 2; break;
                case 6: moveDown1(arr1); cc2++; break;
                case 7: moveDown1(arr1); moveLeft1(arr1); cc2 += 2; break;
            } 
            break;
        case 6:
            switch(smaller([u(arr1), uu(arr1), ur(arr1), r(arr1), ru(arr1), rr(arr1)])){
                case 0: moveUp1(arr1); cc2++; break;
                case 1: moveUp1(arr1); moveUp1(arr1); cc2 += 2; break;
                case 2: moveUp1(arr1); moveRight1(arr1); cc2 += 2; break;
                case 3: moveRight1(arr1); cc2++; break;
                case 4: moveRight1(arr1); moveUp1(arr1); cc2 += 2; break;
                case 5: moveRight1(arr1); moveRight1(arr1); cc2 += 2; break;
            }
            break;
        case 7:
            switch(smaller([l(arr1), lu(arr1), u(arr1), uu(arr1), ul(arr1), ur(arr1), r(arr1), ru(arr1)])){
                case 0: moveLeft1(arr1); cc2++; break;
                case 1: moveLeft1(arr1); moveUp1(arr1); cc2 += 2; break;
                case 2: moveUp1(arr1); cc2++; break;
                case 3: moveUp1(arr1); moveLeft1(arr1); cc2 += 2; break;
                case 4: moveUp1(arr1); moveUp1(arr1); cc2 += 2; break;
                case 5: moveUp1(arr1); moveRight1(arr1); cc2 += 2; break;
                case 6: moveRight1(arr1); cc2++; break;
                case 7: moveRight1(arr1); moveUp1(arr1); cc2 += 2; break;
            }
            break;
        case 8:
            switch(smaller([l(arr1), ll(arr1), lu(arr1), u(arr1), ul(arr1), uu(arr1)])){
                case 0: moveLeft1(arr1); cc2++; break;
                case 1: moveLeft1(arr1); moveLeft1(arr1); cc2 += 2; break;
                case 2: moveLeft1(arr1); moveUp1(arr1); cc2 += 2; break;
                case 3: moveUp1(arr1); cc2++; break;
                case 4: moveUp1(arr1); moveLeft1(arr1); cc2 += 2; break;
                case 5: moveUp1(arr1); moveUp1(arr1); cc2 += 2; break;
            }
            break;
    }

    // let moves = [l(arr1), ll(arr1), lu(arr1), ld(arr1), u(arr1), ul(arr1), uu(arr1), ur(arr1), d(arr1), dl(arr1), dd(arr1), dr(arr1), r(arr1), ru(arr1), rd(arr1), rr(arr1)];
    let kkk = [];
    for (let i = 0; i < arr1.length; i++) {
        kkk.push(arr1[i]);
    }
    document.getElementById("counter").innerHTML = counter;
    document.getElementById("pluser").innerHTML = cc1;
    document.getElementById("pluser2").innerHTML = cc2;
    was.push(kkk);
    printTree(arr1);
    printGrid(arr1);
    }

    if(JSON.stringify(result)==JSON.stringify(arr1)){
        cc = 0;
        cc1 = 0;
        counter = 0;
        was = [];
    }
    
}

function smaller (moves){
    // console.log(moves);
    let p = moves[0];
    let e = Math.floor(Math.random() * moves.length);
    for(let i = 1; i < moves.length; i++){
        if(moves[i] < p){
            p = moves[i];
        }
    }
    return moves.indexOf(p);
}

function l(arr1){
    moveLeft1(arr1);
    treel0 = [...arr1];
    let h = check(arr1) + check2(arr1);
    moveRight1(arr1);
    return h;
}

function u(arr1){
    moveUp1(arr1);
    treeu0 = [...arr1];
    let h = check(arr1) + check2(arr1);
    moveDown1(arr1);
    return h;
}

function d(arr1){
    moveDown1(arr1);
    treed0 = [...arr1];
    let h = check(arr1) + check2(arr1);
    moveUp1(arr1);
    return h;
}


function r(arr1){
    moveRight1(arr1);
    treer0 = [...arr1];
    let h = check(arr1) + check2(arr1);
    moveLeft1(arr1);
    return h;
}


function ll(arr1){
    moveLeft1(arr1);
    moveLeft1(arr1);
    treell = [...arr1];
    let h = check(arr1) + check2(arr1);
    moveRight1(arr1);
    moveRight1(arr1);
    return h;
}
function lu(arr1){
    moveLeft1(arr1);
    moveUp1(arr1);
    treelu = [...arr1];
    let h = check(arr1) + check2(arr1);
    moveDown1(arr1);
    moveRight1(arr1);
    return h;
}
function ld(arr1){
    moveLeft1(arr1);
    moveDown1(arr1);
    treeld = [...arr1];
    let h = check(arr1) + check2(arr1);
    moveUp1(arr1);
    moveRight1(arr1);
    return h;
}

function ul(arr1){
    moveUp1(arr1);
    moveLeft1(arr1);
    treeul = [...arr1];
    let h = check(arr1) + check2(arr1);
    moveRight1(arr1);
    moveDown1(arr1);
    return h;
}

function uu(arr1){
    moveUp1(arr1);
    moveUp1(arr1);
    treeuu = [...arr1];
    let h = check(arr1) + check2(arr1);
    moveDown1(arr1);
    moveDown1(arr1);
    return h;
}

function ur(arr1){
    moveUp1(arr1);
    moveRight1(arr1);
    treeur = [...arr1];
    let h = check(arr1) + check2(arr1);
    moveLeft1(arr1);
    moveDown1(arr1);
    return h;
}

function dl(arr1){
    moveDown1(arr1);
    moveLeft1(arr1);
    treedl = [...arr1];
    let h = check(arr1) + check2(arr1);
    moveRight1(arr1);
    moveUp1(arr1);
    return h;
}

function dd(arr1){
    moveDown1(arr1);
    moveDown1(arr1);
    treedd = [...arr1];
    let h = check(arr1) + check2(arr1);
    moveUp1(arr1);
    moveUp1(arr1);
    return h;
}

function dr(arr1){
    moveDown1(arr1);
    moveRight1(arr1);
    treedr = [...arr1];
    let h = check(arr1) + check2(arr1);
    moveLeft1(arr1);
    moveUp1(arr1);
    return h;
}

function ru(arr1){
    moveRight1(arr1);
    moveUp1(arr1);
    treeru = [...arr1];
    let h = check(arr1) + check2(arr1);
    moveDown1(arr1);
    moveLeft1(arr1);
    return h;
}
function rd(arr1){
    moveRight1(arr1);
    moveDown1(arr1);
    treerd = [...arr1];
    let h = check(arr1) + check2(arr1);
    moveUp1(arr1);
    moveLeft1(arr1);
    return h;
}
function rr(arr1){
    moveRight1(arr1);
    moveRight1(arr1);
    treerr = [...arr1];
    let h = check(arr1) + check2(arr1);
    moveLeft1(arr1);
    moveLeft1(arr1);
    return h;
}

function check(arr1){
    cc1++;
    for(let i = 0; i < was.length; i++){
        if(JSON.stringify(was[i])==JSON.stringify(arr1)){
            return 99;
        }
    }
    // if(was.length > 100){
    //     was.shift();
    // }
    
    // console.log(was);
    let a = 8;
    for(let i = 0; i < arr1.length; i++){
        if(arr1[i] == i + 1){
            a--;
        }
    }
    check2 (arr1);
    // console.log(arr1, a, check2(arr1));
    return a;
}

function check2 (arr1){
    let f = 0
    for (let i = 0; i < arr1.length; i++) {
        f += check2count(i, arr[i]);
    }
    return f;
}

function check2count(pos, item){
    switch(pos){
        case 0:
            switch(item){
                case 1: return 0;
                case 2: return 1;
                case 3: return 2;
                case 4: return 1;
                case 5: return 2;
                case 6: return 3;
                case 7: return 2;
                case 8: return 3;
                default: return 0;
            }
        case 1:
            switch(item){
                case 1: return 1;
                case 2: return 0;
                case 3: return 1;
                case 4: return 2;
                case 5: return 1;
                case 6: return 2;
                case 7: return 3;
                case 8: return 3;
                default: return 0;
            }
        case 2:
            switch(item){
                case 1: return 2;
                case 2: return 1;
                case 3: return 0;
                case 4: return 3;
                case 5: return 2;
                case 6: return 1;
                case 7: return 4;
                case 8: return 3;
                default: return 0;
            }
        case 3:
            switch(item){
                case 1: return 1;
                case 2: return 2;
                case 3: return 3;
                case 4: return 0;
                case 5: return 1;
                case 6: return 2;
                case 7: return 1;
                case 8: return 2;
                default: return 0;
            }
        case 4:
            switch(item){
                case 1: return 2;
                case 2: return 1;
                case 3: return 2;
                case 4: return 1;
                case 5: return 0;
                case 6: return 1;
                case 7: return 2;
                case 8: return 1;
                default: return 0;
            }
        case 5:
            switch(item){
                case 1: return 3;
                case 2: return 2;
                case 3: return 1;
                case 4: return 2;
                case 5: return 1;
                case 6: return 0;
                case 7: return 3;
                case 8: return 2;
                default: return 0;
            }
        case 6:
            switch(item){
                case 1: return 2;
                case 2: return 3;
                case 3: return 4;
                case 4: return 1;
                case 5: return 2;
                case 6: return 3;
                case 7: return 0;
                case 8: return 1;
                default: return 0;
            }
        case 7:
            switch(item){
                case 1: return 3;
                case 2: return 2;
                case 3: return 3;
                case 4: return 2;
                case 5: return 1;
                case 6: return 2;
                case 7: return 1;
                case 8: return 0;
                default: return 0;
            }
        case 8:
            switch(item){
                case 1: return 4;
                case 2: return 3;
                case 3: return 2;
                case 4: return 3;
                case 5: return 2;
                case 6: return 1;
                case 7: return 2;
                case 8: return 1;
                default: return 0;
            }
    }
}

function moveUp1(arr1) {
    let pos = arr1.indexOf(" ");
    switch(pos){
        case 0:
        case 1:
        case 2:
        break;
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        arr1[pos] = arr1[pos - 3];
        arr1[pos - 3] = " ";
        break;
    }
    cc++;    
}

function moveDown1(arr1) {
    let pos = arr1.indexOf(" ");
    switch(pos){
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        arr1[pos] = arr1[pos + 3];
        arr1[pos + 3] = " ";       
        break;
        case 6:
        case 7:
        case 8:
        break;
    }
    cc++;
}

function moveLeft1(arr1) {
    let pos = arr1.indexOf(" ");
    switch(pos){
        case 0:
        case 3:
        case 6:
        break;
        case 1:
        case 2:
        case 4:
        case 5:
        case 7:
        case 8:
        arr1[pos] = arr1[pos - 1];
        arr1[pos - 1] = " ";       
        break;
    }
    cc++;
}

function moveRight1(arr1) {
    let pos = arr1.indexOf(" ");
    switch(pos){
        case 2:
        case 5:
        case 8:
        break;
        case 0:
        case 1:
        case 3:
        case 4:
        case 6:        
        case 7:
        arr1[pos] = arr1[pos + 1];
        arr1[pos + 1] = " ";      
        break;
    }
    cc++;
}

function inputer(){
    reset();
    document.getElementById("counter").innerHTML = counter;
    document.getElementById("pluser").innerHTML = cc1;
    document.getElementById("pluser2").innerHTML = cc2;
    let a = document.getElementById("inner").value;
    arr = a.split('').map(function(item) {
        if(item != " "){
            return parseInt(item, 10);
        }else return item;
    });
    printGrid(arr);
}

function reset(){
    arr = [1,2,3,4,5,6,7,8," "];
    was = [];
    cc = 0;
    cc1 = 0;
    cc2 = 0;
    counter = 0;
    printGrid(arr);
}


