const hexValues:string[] = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "F"];

const btn = document.getElementById('btn')!;
const color = document.querySelector('.color')!;

btn.addEventListener("click", function(){
    let hexColor: string = "#";
    for (let x = 0; x<6; x++) {
       hexColor += hexValues[getRandomNumber()]; 
       console.log( hexColor);
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
    // console.log(document.body)
})

function getRandomNumber(): number {
    return Math.floor(Math.random()* hexValues.length)
}