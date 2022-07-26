     
export function clickableGrid( rows, cols, callback ){
    var i=-1;
    var grid = document.createElement('table');
    grid.className = 'grid';
    for (var r=0;r<rows;++r){
        var tr = grid.appendChild(document.createElement('tr'));
        for (var c=0;c<cols;++c){
            var cell = tr.appendChild(document.createElement('td'));
            cell.innerHTML = ++i;
            cell.id = i;
            cell.addEventListener('click',(function(i){
                return function(){
                    callback(i);
                }
            })(cell,r,c,i),false);
        }
    }
    return grid;
}

export function updateCell(point,hitMiss){
    point = Number(point);
    const hitPoint = document.getElementById(point);
    if (hitMiss === true) {
        hitPoint.innerHTML = 'O'
        hitPoint.style.color = 'yellow'
        hitPoint.style.fontWeight = 'bold'
    }
    else {
        hitPoint.innerHTML = 'X'
        hitPoint.style.color = 'red'
        hitPoint.style.fontWeight = 'bold'
    }


}

export function gameOverScreen(win) {

    if (win) {
        const winLoseDisplay = document.createElement('label');
        winLoseDisplay.innerHTML = "YOU WIN!!!"
        winLoseDisplay.style.color = 'yellow'
        winLoseDisplay.style.fontWeight = 'bold'
        winLoseDisplay.style.fontSize = '100px'
        document.body.appendChild(winLoseDisplay);
    }
    else {
        const winLoseDisplay = document.createElement('label');
        winLoseDisplay.innerHTML = "YOU LOSE!!!"
        winLoseDisplay.style.color = 'red'
        winLoseDisplay.style.fontWeight = 'bold'
        winLoseDisplay.style.fontSize = '100px'
        document.body.appendChild(winLoseDisplay);
    }

}