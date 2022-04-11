var random_color ='';

function pickColor() {

    // array containing colors
    var colors = [
        '#47dd6c', '#05209b', '#ff4b4b', '#fffb1f'
    ];

    // selecting random color
    random_color = colors[Math.floor(
        Math.random() * colors.length)];

} 

function changeColor(){
    pickColor()
    document.documentElement.style.setProperty('--nav-light', random_color);
    setTimeout(changeColor, 1000);
}
changeColor()