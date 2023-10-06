function makeLine(size) {
    let line = "";
    for (i = 0; i < size; i++) {
        line += "# ";
    }
    return line;
}

function makeSquare(size) {
    let square = "";
    for (row = 0; row < size; row++) {
        square += "\n"+makeLine(size);
    }
    return square;
}

function makeRect(width, height) {
    let rect = "";
    for (row= 0 ; row < height; row++) {
        rect += "\n"+makeLine(width);
    }
    return rect;
}

function makeDownStairs(height) {
    let downStairs = "";
    for (row = 0; row < height; row++) {
        downStairs += "\n"+makeLine(row+1);
    }
    return downStairs;
}

function makeSpaceLine(numSpaces, numChars) {
    let spaceLine = "";
    for (type = 0; type < 3; type++) {
        if (type % 2 === 0) {
            for (space = 0; space < numSpaces; space++) {
                spaceLine += "  ";
            }
        } else {
            for (char = 0; char < numChars; char++) {
                spaceLine += "# ";
            }
        }
    }
    return spaceLine;
}

function makeIsoTri(height) {
    let isoTriangle = "";
    for (row = 0; row < height; row++) {
        isoTriangle += "\n"+makeSpaceLine(height-(row+1),(2*row)+1);
    }
    return isoTriangle;
}

function makeDiamond(height) {
    let top = makeIsoTri(height);
    let bottom = top.split("\n").reverse().join("\n");
    return top+"\n"+bottom;
}

console.log(makeDiamond(5));