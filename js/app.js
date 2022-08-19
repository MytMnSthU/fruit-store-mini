let fruits = [
    {
        name: "Apple",
        img: "🍎",
        price: 4.99,
        selected: false,
    },
    {
        name: "Pineapple",
        img: "🍍",
        price: 8.99,
        selected: false,
    },
    {
        name: "Lemon",
        img: "🍋",
        price: 2.99,
        selected: false,
    },
    {
        name: "Green-apple",
        img: "🍏",
        price: 3.99,
        selected: false,
    },
    {
        name: "Watermelon",
        img: "🍉",
        price: 8.99,
        selected: false,
    },
    {
        name: "Coconut",
        img: "🥥",
        price: 6.99,
        selected: false,
    },
    {
        name: "Grapes",
        img: "🍇",
        price: 12.99,
        selected: false,
    },
    {
        name: "Kiwi",
        img: "🥝",
        price: 9.99,
        selected: false,
    },
];

const container = document.querySelector(".fruit-container");
const display = document.querySelector(".display");

fruits.forEach((fruit, idx) => {
    const btn = document.createElement("button");
    btn.setAttribute("type", "button");
    btn.setAttribute("title", fruit.name);
    btn.setAttribute("class", "btn btn-fruit");
    // let fruit = fruits[idx];

    btn.innerHTML = `
        <span class="fruit">${fruit.img}</span>
        <h6 class="price">$${fruit.price}</h6>
    `;

    container.appendChild(btn);

    const fruitBtns = document.querySelectorAll(".btn-fruit");
    let fruitBtn = fruitBtns[idx];

    fruitBtn.addEventListener("click", () => {
        fruitBtn.classList.toggle("selected");
        if (fruitBtn.classList.contains("selected")) {
            fruit.selected = true;
        } else {
            fruit.selected = false;
        }

        let selectedFruits = [];
        fruits.map((fruit) => {
            if (fruit.selected) {
                selectedFruits.push(fruit.img);
            } else {
                if (selectedFruits.includes(fruit.img)) {
                    selectedFruits.splice(selectedFruits.indexOf(fruit.img), 1);
                }
            }
        });

        // parse string 
        let parseStr = selectedFruits.join('+');
        console.log(parseStr);

        // Calculate Total
        let price = 0;
        if (selectedFruits.length !== 0) {
            price = fruits
                .filter((fruit) => fruit.selected)
                .map((sfruit) => sfruit.price)
                .reduce((a, b) => a + b);
            // price = Math.round(price);
        }


        if (selectedFruits.length !== 0) {
            display.innerHTML = `${parseStr} = $${price}`;
        } else {
            display.innerHTML = "WELCOME";
        }
    });
});
