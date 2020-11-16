var audio = document.createElement('audio');
audio.setAttribute('src', 'sound.mp3');
audio.loop = true;
audio.play();


document.onkeydown = function(e){
    console.log(e.keyCode)
    if(e.keyCode == 40){
        let car = document.querySelector('.car1')
        carx = parseInt(window.getComputedStyle(car,null).getPropertyValue('top'));
        car.style.top = carx + 10 +'px'
    }
    if(e.keyCode == 38){
        let car = document.querySelector('.car1')
        carx = parseInt(window.getComputedStyle(car,null).getPropertyValue('top'));
        car.style.top = carx - 10 +'px'
    }

    if(e.keyCode == 37){
        let car = document.querySelector('.car1')
        carx = parseInt(window.getComputedStyle(car,null).getPropertyValue('left'));
        car.style.left = carx - 10 +'px'
    }

    if(e.keyCode == 39){
        let car = document.querySelector('.car1')
        carx = parseInt(window.getComputedStyle(car,null).getPropertyValue('left'));
        car.style.left= carx + 10 +'px'
    }

}
