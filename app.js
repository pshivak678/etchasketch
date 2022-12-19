function generateGrid(num){
    for(let number=1;number<=num*num;number++){
        const squares = document.querySelector("#gridContainer");
        const nums = document.createElement('div')
        nums.classList.add('items');
        nums.setAttribute('id','tile');
        nums.addEventListener('mouseover',onHover);
        nums.removeEventListener('mouseout',onHoverOut);
        gridContainer.appendChild(nums);  
    }
}

const tiles = document.getElementsByClassName('items');
console.log(tiles);

function emptyLayout(num){
    let tile = document.querySelectorAll(".items");
    for(i=0;i<tile.length;i++){
    // console.log(tile);
    tile[i].parentElement.removeChild(tile[i]);
    }
    generateGrid(num);
}

function defaultLayout(){
        generateGrid(4);
}

const clearGrid = document.getElementById('clear');
clearGrid.addEventListener('click',clearGrids);

function clearGrids(){
    for(i=0;i<tiles.length;i++){
    console.log(tiles[i]);
    tiles[i].style.backgroundColor = "rgb(248, 250, 248)";
}
}

const gridSize = document.getElementById('gridSize');
gridSize.addEventListener('click',onGridSize)

function onGridSize(){
    const changeGridSize = prompt("enter Grid Size:")
    if(changeGridSize<4) {
        alert("ENTER NUMBER ABOVE 4")
    }
    if(changeGridSize >4) {
        clearGrids();
    }
    emptyLayout(changeGridSize);
}

function onHover(){
        this.style.backgroundColor="black";
}

function onHoverOut(){
        this.style.backgroundColor= "rgb(248, 250, 248)";
    }