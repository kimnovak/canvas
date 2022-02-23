window.addEventListener('load', init);

let drawing = false;

function beginDrawing(ctx, e) {
    drawing = true;
    draw(ctx, e);
}

function draw(ctx, e) {
    if (!drawing) {
        return;
    }

    ctx.lineWidth = 10;
    ctx.lineCap = 'round';

    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);
}


function endDrawing(ctx) {
    drawing = false;
    ctx.beginPath();
}


function init() {
    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext('2d');

    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    canvas.addEventListener('mousedown', beginDrawing.bind(this, ctx));
    canvas.addEventListener('mouseup', endDrawing.bind(this, ctx));
    canvas.addEventListener('mousemove', draw.bind(this, ctx));
}