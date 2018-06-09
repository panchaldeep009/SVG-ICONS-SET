
var drawAnimationInterval;
function animateIcon(e){
    svg = e.getElementsByTagName('svg')[0];
    svg.style.transform = "scale(1.5)";
    svg.style.filter = "drop-shadow( 10px 10px 10px rgba(0,0,0,0.3) )";
	hex = e.getElementsByTagName("path")[0];
	logo = e.getElementsByTagName("path")[1];
    hex.className.baseVal = e.id+"_hexagone_color rotate";
    logo.className.baseVal ="logo_stroke";
    logo.style.strokeDashoffset = logo.getTotalLength();
    logo.style.strokeDasharray = logo.getTotalLength();
    drawAnimationInterval = setInterval(function (){
        if(logo.style.strokeDashoffset > 0){
            logo.style.strokeDashoffset = (logo.style.strokeDashoffset)-15;
        } else {
            clearInterval(drawAnimationInterval);
            logo.className.baseVal ="logo_color";
            animationStatus = true;
        }
    }, 10);
}
function stopAnimateIcon(e){
    clearInterval(drawAnimationInterval);
    svg = e.getElementsByTagName('svg')[0];
    svg.style.transform = "scale(1)";
    svg.style.filter = "drop-shadow( 0px 0px 0px rgba(0,0,0,0.3) )";
	hex = e.getElementsByTagName("path")[0];
	logo = e.getElementsByTagName("path")[1];
    hex.style.boxShadow = "0px 0px 0px 0px #CCCCCC";
    logo.className.baseVal ="logo_color";
    hex.className.baseVal = "default_hexagone_color";
}