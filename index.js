function colorgenerator(){
    let arr=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
    let color="#";
    for(let i=0;i<6;i++){
    color+= arr[Math.floor(Math.random()*arr.length)];
    }
    document.body.style.backgroundColor=color;
    document.querySelector(".spn").textContent=color;

}

