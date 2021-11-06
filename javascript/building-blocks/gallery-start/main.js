const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
for(let i=1;i<=5;i++)
{
    const newImage = document.createElement('img');
    let xxx = 'images/pic'+i+'.jpg';
    newImage.setAttribute('src', xxx);
    thumbBar.appendChild(newImage);

    newImage.onclick = function(e){
        let imgsrc = e.target.getAttribute('src');
        displayedImage.setAttribute('src',imgsrc);
    }

}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click',handler);

function handler(){
    var btn_class = btn.getAttribute('class');
    let new_class, str, col;
    if(btn_class === 'dark'){
        new_class = "light";
        str = "Lighten";
        col = "rgba(0,0,0,0.5)";
    } 
    else{
        new_class = 'dark';
        str = "Darken";
        col = "rgba(0,0,0,0)";
    }
    btn.setAttribute('class',new_class);
    btn.textContent = str;
    overlay.style.backgroundColor = col;

    
}