/* const makeSquares = (line, column) => {

    const divContainer = document.querySelector("#container");

    const lineString = document.querySelector("#linhas").value
    const columnString = document.querySelector("#colunas").value 

    let lineValue = Number(lineString)
    let columnValue = Number(columnString) 

    for (let i = 0; i < line; i++){
        for (let j = 0; j < column; j++){
            const divGrid = document.createElement("div")
            divGrid.className = "div_16X16"

            
            divContainer.appendChild(divGrid)
        };
    };
    
}; */

function makeSquares (line, column) {
    const divContainer = document.querySelector("#container");
    divContainer.style.gridTemplateRows = `repeat(${line}, 1fr)`;
    divContainer.style.gridTemplateColumns = `repeat(${column}, 1fr)`;

    if (line > 120 || column > 120) {
        window.alert("Maior valor disponível é 120")
    } else

    for (let i = 0; i < line; i++){
        for (let j = 0; j < column; j++){
            const divGrid = document.createElement("div")
            divGrid.className = "div_16X16"

            divContainer.appendChild(divGrid)
        };
    };
};

makeSquares(16, 16)

const paintSquares = () => {
    const divGridNodeList = document.querySelectorAll(".div_16X16");

    let divGrids = Array.from(divGridNodeList);

    let currentColor = "#000"

    const blackPaint = document.querySelector('#black') // botão para cor preta
    blackPaint.onclick = () => {   
        return currentColor = "#000"
    };

    const randomPaint = document.querySelector("#randomColor"); // botão para cores aleatorias
    randomPaint.onclick = () => {
        divGrids.forEach((grid) => {
            grid.addEventListener("mouseover", () => {  
               return  currentColor = randomColor()
            });           
        });
    }

    divGrids.forEach((grid) => {
        grid.addEventListener("mouseover", () => {
            
            grid.style.background = currentColor;
            console.log(randomColor())
        });           
    });

    
}

const randomColor = () => {
    let str = 'ABCDEF0123456789'
    let newSTR = "#"
    for(let i = 0; i <= 5; i++){
        newSTR += str[Math.floor(Math.random() * str.length)]
    }
    return newSTR
}


paintSquares()



const clearButton = () => {
    const clearScreen = document.querySelector("button")

    clearScreen.addEventListener('click', () => {
    const lineString = document.querySelector("#linhas").value
    const columnString = document.querySelector("#colunas").value 

    let lineValue = Number(lineString)
    let columnValue = Number(columnString)

    const divContainer = document.querySelector("#container");
    divContainer.innerHTML = ""
    makeSquares(lineValue || 16, columnValue || 16)
    paintSquares()
})
}

clearButton()