# SVG ICONS SET
This repository contains a web project that has 12 interactive icons
## Getting Started
To view this project just clone or download this repository from [here](https://github.com/panchaldeep009/SVG-ICONS-SET/archive/master.zip) and open a HTML file in your browser named :
```
index.html
```
### View
On view you can see 12 icons which is SVG vector, that has one path for hexagon background and other is compound path for logo
```
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="-400 -400 800 800">
    <path id="facebook_hexgone" class="default_hexagone_color" d="M31.3-386.9l144,83.1l144.8,83.6c19.6,11.3,30.6,31.8,30.6,52.9h0.3V0v167.2c0,24.8-14.7,46.1-35.8,55.8l-139.9,80.8L30.5,387.4c-19.8,11.4-43.4,10.4-61.7-0.5l-144-83.1l-144.9-83.6c-19.6-11.3-30.6-31.8-30.6-52.9h-0.3V0v-167.2c0-24.8,14.7-46.1,35.8-55.8l139.9-80.8l144.8-83.6C-10.6-398.8,12.9-397.8,31.3-386.9z"/>
    <path id="facebook_logo" class="logo_color" d="M83.2-54.2H30.7V-89c3.8-32.9,58.3-26.7,58.3-26.7v-2.2v-0.2v-54.2l0,0l0,0l0,0c-1.9-0.5-108.3-25.7-129.4,55.3c0,0,0,0,0,0.1c-0.1,0.2-0.1,0.3-0.2,0.6c-3.3,10.1-3.1,56.5-3.1,62.3h-45.4V8h48.3v168.6h70.3V7.8h53.7l6.1-62L83.2-54.2L83.2-54.2z"/>
</svg>
```
On initial state you can see all icon has blue hexagon and white logo shape on top. 
### On mouse cursor hover 
On mouse cursor hover on icons below listed change in icon by JavaScript function `animateIcon(this)` to make wonderful effect
* Icon scale increase half more
```
    svg.style.transform = "scale(1.5)";
```
* Fill service theme color to hexagon path by switching class from `.default_hexagone_color` to 
```
.facebook_hexagone_color{fill:#264D90;}
.twitter_hexagone_color{fill:#57A7DC;}
.instagram_hexagone_color{fill:#E200A8;}
.linkedin_hexagone_color{fill:#0072B3;}
.googleplus_hexagone_color{fill:#D33D27;}
.pinterest_hexagone_color{fill:#B92025;}
.youtube_hexagone_color{fill:#CA2026;}
.whatsapp_hexagone_color{fill:#0DB04B;}
.snapchat_hexagone_color{fill:#F9EC00;}
.skype_hexagone_color{fill:#00A7E0;}
.spotify_hexagone_color{fill:#4AB654;}
.stackoverflow_hexagone_color{fill:#F07522;}
```
* Add Drop shadow to icon
```
    svg.style.filter = "drop-shadow( 10px 10px 10px rgba(0,0,0,0.3) )";
```
* Add 'rotate' class to Hexagone for spin effect
```
.rotate{
	-webkit-animation:spin 1s linear infinite;
	-moz-animation:spin 1s linear infinite;
	animation:spin 1s linear infinite;
}
@-moz-keyframes spin { 100% { -moz-transform: rotate(360deg); } }
@-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } }
@keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }
```
* change Logo class from `logo_color` to `logo_stroke`
```
.logo_color{fill:#FFFFFF;}
.logo_stroke{fill:rgba(255, 255, 255, 0.3);stroke:#FFFFFF;stroke-width:10;}
```
* Generate stroke animation by offset logo stroke to it's total stroke length and then decrease that offset till it gets 0 which complete the stroke path. And when it complete It reset logo class to `logo_color` that fill white color in path.
```
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

```
* Discover Detail message by changing its opacity from 0 to 1 and for 3D transformation it change rotateX transformation degree from 60 to 0 by preserving 3d perspective in icon-set-container
```
#icon-set-container {
    perspective: 1000px;
    .....
}
#icon-set-container .icon div{
    ........
    opacity: 0;
    transform-style: preserve-3d;
    -webkit-transform-style: preserve-3d;
    backface-visibility: hidden;
    transform: translate(-40%, -40%) rotateX(90deg);
    -webkit-transform: translate(-40%, -40%) rotateX(90deg);
    .........
}
#icon-set-container .icon:hover div{
    .......
    opacity: 1;
    transform: translate(-40%, 0%) rotateX(0deg);
    -webkit-transform: translate(-40%, 0%) rotateX(0deg);
    ......
}
```

On mouse out all rest back to it's initial state by calling Function `stopAnimateIcon(this)`.
