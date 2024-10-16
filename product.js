let productImg = document.getElementById("productImg");
let btn = document.getElementsByClassName("btn");

btn[0].onclick = function(){
    productImg.src = "images/1 (2).png";

    for(bt of btn){
        bt.classList.remove("active");
    }
    this.classList.add("active");
}
btn[1].onclick = function(){
    productImg.src = "images/1 (3).png";

    for(bt of btn){
        bt.classList.remove("active");
    }
    this.classList.add("active");
}
btn[2].onclick = function(){
    productImg.src = "images/1 (4).png";

    for(bt of btn){
        bt.classList.remove("active");
    }
    this.classList.add("active");
}


/* let productImg1 = document.getElementById("productImg1");
let btn = document.getElementsByClassName("btn");

btn[3].onclick = function(){
    productImg.src = "images/emoji1.jpg";

    for(bt of btn){
        bt.classList.remove("active");
    }
    this.classList.add("active");
}
btn[4].onclick = function(){
    productImg.src = "images/emoji3.jpg";

    for(bt of btn){
        bt.classList.remove("active");
    }
    this.classList.add("active");
}
btn[5].onclick = function(){
    productImg.src = "images/IMG-20200323-WA0002.jpg";

    for(bt of btn){
        bt.classList.remove("active");
    }
    this.classList.add("active");
} */