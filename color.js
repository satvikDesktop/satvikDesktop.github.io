var random_color ='';
var random_color2='';
function pickColor() {

    // array containing colors
    var colors = [
        '#47dd6c', '#05209b', '#ff4b4b', '#fffb1f'
    ];

    // selecting random color
    random_color = colors[Math.floor(
        Math.random() * colors.length)];
    random_color2 = colors[Math.floor(
        Math.random() * colors.length)];

} 

function changeColor(){
    pickColor()
    document.documentElement.style.setProperty('--randColor1', random_color);
    document.documentElement.style.setProperty('--randColor2', random_color2);
    setTimeout(changeColor, 600);
}
changeColor()