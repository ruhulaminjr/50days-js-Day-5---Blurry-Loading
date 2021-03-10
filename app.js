const loading = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;

let init = setInterval(blur,30);

function blur(){
    load++;
    if (load > 99){
        clearInterval(init);
    }
 loading.innerHTML = `${load}%`;
 loading.style.opacity = scale(load,0,100,1,0);
 bg.style.filter = `blur(${scale(load,0,100,30,0)}px)`;

}

const scale = (num,min,max,outmin,outmax) =>{
    return (num - min)*(outmax - outmin) / (max - min) + outmin;
}