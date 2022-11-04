var inputRange = document.querySelectorAll('input[type="range"]');
console.log(inputRange[0].value);


//function to store the value gotten

var returnRange = function(e){
    //console.log(e.target.value)
    console.log(e.offsetX);
    let value = e.offsetX;
    let outputValue = Math.round(value / 4);
    //console.log(outputValue)
    e.target.value = outputValue;
    console.log(e.target.value)
    
    e.target.parentElement.lastElementChild.style= "visibility: visible;"
    e.target.parentElement.lastElementChild.innerText= outputValue;

    console.log(e.target.parentElement)
};

//add event listener to range type input
/* 
inputRange.forEach(function(x){
    x.addEventListener('mouseup', returnRange)
}) */


var noHover = function(e){
    e.target.parentElement.lastElementChild.style= "visibility: none;"
};


var hoverEffect = function(e){
    console.log(e.target.parentElement)
    console.log(e.target.value)
    e.target.parentElement.style = "height: 2rem;"
    console.log(e.target.parentElement)
}; 

inputRange.forEach(function(x){
    x.addEventListener('mousemove', returnRange)
    x.addEventListener('mouseout', noHover)
})

