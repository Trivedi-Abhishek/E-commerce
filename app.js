const wrapper=document.querySelector(".sliderWrapper")
const menuItems=document.querySelectorAll(".menuItem")
const products=[
    {id:1,title:"Air Force",price:119,
    colors:[{
        code:"black",
        img:"./images/air.png",
    },
    {
        code:"blue",
        img:"./images/air2.png",
    },
    ],
    },
    {id:2,title:"Jordan",price:109,
    colors:[{
        code:"white",
        img:"./images/jordan.png",
    },
    {
        code:"black",
        img:"./images/jordan2.png",
    },
    ],
    },
    {id:3,title:"Blazer",price:89,
    colors:[{
        code:"white",
        img:"./images/blazer.png",
    },
    {
        code:"green",
        img:"./images/blazer2.png",
    },
    ],
    },
    {id:4,title:"Crater",price:109,
    colors:[{
        code:"black",
        img:"./images/crater.png",
    },
    {
        code:"white",
        img:"./images/crater2.png",
    },
    ],
    },
    {id:5,title:"Hippie",price:59,
    colors:[{
        code:"silver",
        img:"./images/hippie.png",
    },
    {
        code:"black",
        img:"./images/hippie2.png",
    },
    ],
    },
]
let choosenProduct = products[0];
const productImg=document.querySelector(".productImg");
const productTitle=document.querySelector(".productTitle");
const productPrice=document.querySelector(".productPrice");
const prodColor=document.querySelectorAll(".color");
const prodSize=document.querySelectorAll(".size");
// color
// size

menuItems.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        
        if(index===0){
            wrapper.style.transform="translateX(0vw)";
        }
        else if(index===1){
            wrapper.style.transform="translateX(-100vw)";
        }
        else if(index===2){
            wrapper.style.transform="translateX(-200vw)";
        }
        else if(index===3){
            wrapper.style.transform="translateX(-300vw)";
        }
        else if(index===4){
            wrapper.style.transform="translateX(-400vw)";
        }
        choosenProduct = products[index];
        productTitle.textContent=choosenProduct.title;
        productImg.src=choosenProduct.colors[0].img;
        productPrice.textContent="$"+choosenProduct.price;
        prodColor.forEach((color,index)=>{
            color.style.backgroundColor=choosenProduct.colors[index].code;
        });
    });
});
prodColor.forEach((element,index)=>{
    element.addEventListener("click",()=>{
        productImg.src=choosenProduct.colors[index].img;
    })
})
prodSize.forEach((size, index) => {
    size.addEventListener("click", () => {
        prodSize.forEach((size) => {
        size.style.backgroundColor = "white";
        size.style.color = "black";
      });
      size.style.backgroundColor = "black";
      size.style.color = "white";
    });
  });
  const productButton=document.querySelector(".productButton");
  const payment=document.querySelector(".payment");
  const close=document.querySelector(".close");
  productButton.addEventListener("click",()=>{
    payment.style.display="flex";
  })
  close.addEventListener("click",()=>{
    payment.style.display="none";
  })