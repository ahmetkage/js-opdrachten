 /// we maken een canvas met 800x 600 en voeg toe aan de html pagina


let canvas = document.createElement('canvas');
let ctx = canvas.getContent('2d');
canvas.width = 800;
canvas.height = 600;
ctx.fillStyle = "#FF000"
document.body.appendChild(canvas);


// variablen voor de positie en snelheid van de cerkel
 let x = 50 // startpositie x
 let y = 50 // startpositie y
 let dx = 2; // snelheid x
 let dy = 2; // snelheid y
 let radius = 20; // radius van de cirkel


 /// funcion om de cercel te tekenen
 function drawCircle() {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, true);
    ctx.fillStyle = 'blue';
    ctx.fillStyle();
    ctx.closePath();
 }