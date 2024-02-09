let ps = document.querySelector(".ps");

let products = [
  {
    id: 1,
    name: "The crew 2",
    image: "the crew.jpeg",
    price: 100,
    quantity :1 
  },

  {
    id: 2,
    name: "Fifa 23",
    image: "fifa23.jpeg",
    price: 150,
    quantity :1 
  },

  {
    id: 3,
    name: "Ghost of tsushima",
    image: "ghost.jpeg",
    price: 120,
    quantity :1 
  },

  {
    id: 4,
    name: "God of war",
    image: "god of war.jpeg",
    price: 180,
    quantity :1 
  },

  {
    id: 5,
    name: "Mortal kombat 11",
    image: "mortal kombat.jpeg",
    price: 80,
    quantity :1 
  },

  {
    id: 6,
    name: "Detroit : become human ",
    image: "detroit.jpeg",
    price: 200,
    quantity :1 
  },

  {
    id: 7,
    name: "It takes two",
    image: "it takes two.jpeg",
    price: 100,
    quantity :1 
  },

  {
    id: 8,
    name: "Over cooked 2",
    image: "overcooked.jpeg",
    price: 70,
    quantity :1 
  },

  {
    id: 9,
    name: "The last of us",
    image: "the last of us.jpeg",
    price: 170,
    quantity :1 
  },

  {
    id: 10,
    name: "Rocket league",
    image: "rocket league.jpeg",
    price: 60,
    quantity :1 
  },
  {
    id: 11,
    name: "Man of medan",
    image: "man of medan.jpeg",
    price: 90,
    quantity :1 
  },

  {
    id: 12,
    name: "Blood borne ",
    image: "bloodborne.jpeg",
    price: 110,
    quantity :1 
  },

  {
    id: 13,
    name: "Horizone ",
    image: "horizone..jpeg",
    price: 80,
    quantity :1 
  },

  {
    id: 14,
    name: "call of duty black ops III",
    image: "call of duty.jpeg",
    price: 140,
    quantity :1 
  },

  {
    id: 15,
    name: "Crash team race",
    image: "crash.jpeg",
    price: 50,
    quantity :1 
  },

  {
    id: 16,
    name: "Spider man",
    image: "spider man.jpeg",
    price: 250,
    quantity :1 
  },

  {
    id: 17,
    name: "Unravel",
    image: "unravel.jpeg",
    price: 153,
    quantity :1 
  },

  {
    id: 18,
    name: "Unravel 2",
    image: "unravel2.jpeg",
    price: 196,
    quantity :1 
  },

  {
    id: 19,
    name: "W2k22",
    image: "w2k.jpeg",
    price: 96,
    quantity :1 
  },

  {
    id: 20,
    name: "Uncharted 4",
    image: "uncharted.jpeg",
    price: 744,
    quantity :1 
  },

  {
    id: 21,
    name: "Gran turismo",
    image: "gran turismo.jpeg",
    price: 296,
    quantity :1 
  },

  {
    id: 22,
    name: "Erica",
    image: "erica.jpeg",
    price: 520,
    quantity :1 
  },

  {
    id: 23,
    name: "Brohters: Tale of two sons",
    image: "brothers.jpeg",
    price: 275,
    quantity :1 
  },

  {
    id: 24,
    name: "far cry 6  ",
    image: "farcry6.jpeg",
    price: 50,
    quantity :1 
  },
];

Cartslist = [];

function games() {
  products.forEach((value, key) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("card");
    newDiv.innerHTML = `
        <img src =' ${value.image}'
        <div class="font"> <h3>${value.name}</h3></div> 
        <div class='all-PB'>
            <div class='price'>${value.price}</div>
            <button onclick="addTocart(${key})" class='PB-card'   > Add to cart</button>
            </div>
        `;
    ps.appendChild(newDiv);
  });
}

games();

// add to cart section 
let listCart = document.querySelector('.listcart');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');


// 1-add product to cart as number


function addTocart(key) {
  if (Cartslist[key] == null){
    Cartslist[key] = products[key];
    Cartslist[key].quantity = 1;
  }
  reloadCart();
}



// 2-add products to cart as product


function reloadCart(){
  listCart.innerHTML = '';
  let count = 0;
  let totalPrice = 0;
  Cartslist.forEach(( value , key ) => {
    count = count + value.quantity;
    totalPrice = totalPrice + value.price;
    if(value != null) {
      let newDiv = document.createElement('li')
      newDiv.classList.add('item')
      newDiv.innerHTML = `
      <div class = "image"> <img src = "${value.image}"> </div>
      <div class = "all-content">
      <div class = "name"> ${value.name} </div>
      <div class = "Price"> ${value.price.toLocaleString()} </div>

      <div class = "quantity-btn">
      <button class = "btn" onclick = "changeQuantity(${key} , ${value.quantity-1})"> -1 </button>
      <div class= "count"> ${value.quantity} </div>
      <button class = "btn" onclick = "changeQuantity(${key} , ${value.quantity+1})"> +1 </button>
      </div>
      </div>
      `
      listCart.appendChild(newDiv);
    }
  });

  total.innerText = totalPrice.toLocaleString();
  quantity.innerText = count ;
}


function changeQuantity(key,quantity){
  console.log(key,quantity)
  if(quantity == 0){
    delete Cartslist[key];
  }
  else{
  Cartslist[key].quantity = quantity;
  Cartslist[key].price = quantity * products[key].price;
  }
  reloadCart()
}

// 3- cart add class active


  let btn = document.querySelector('.active-cart') ;
  let Body = document.querySelector('body') ;
  let close = document.querySelector('.closeshopping')
  let cartBtn = document.getElementById('cart-btn')

  btn.addEventListener('click' , () => {
    Body.classList.add('active')
  })

  close.addEventListener('click', () => {
    Body.classList.remove('active')
  })

  cartBtn.addEventListener('click' , () => {
    Body.classList.remove('active')
  })


// search bar 

let searchBar = document.querySelector('.input-search')
let body = document.querySelector('body')
let home = document.querySelector('.home')
let productsList = document.querySelector('.products-list')

searchBar.addEventListener('click' ,() => {
  body.classList.add ('card-card')
  home.classList.remove ('card-card')
  productsList.style.display = 'block'
})





function search(){


let searchBar = document.querySelector('.input-search').value.toUpperCase()
let products = document.querySelectorAll('.products')
let productsName = document.getElementsByTagName('h2')

for (let i = 0 ; i < productsName.length ; i++){
  if (productsName[i].innerHTML.toUpperCase().indexOf(searchBar) >= 0){
    products[i].style.display = ""
  }
  else{
    products[i].style.display = "none"
  }
}}



// light mode section

let light = document.querySelector('.light')
let night = document.querySelector('.night')

light.addEventListener('click', () => {
  body.classList.add('modes')
  body.style.background = 'url(kk.jpg)'
})

night.addEventListener('click', () => {
  body.classList.remove('modes')
  body.style.background = 'url(back.jpg)'
})





//            responsive           


let ul = document.getElementById('ul');
let open = document.getElementById('open');
let closebtn = document.getElementById('close');

open.onclick = function(){
  ul.style.display ='block';
  closebtn.style.display = 'block';
  this.style.display = 'none';
  closebtn.style.marginTop =  '-33rem';
}

closebtn.onclick = function(){
  ul.style.display ='none';
  open.style.display = 'block';
  this.style.display = 'none';
}

