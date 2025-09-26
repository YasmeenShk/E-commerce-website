const products = [
  { id: 1, title: "Smart Watch", category: "electronics", price: 980, desc: "Afforable watch.", image: "/images/watch2.jpg" },
  { id: 2, title: "Casio Watch", category: "electronics", price: 1000, desc: "Vintage watch.", image: "/images/watch1.jpg" },
  { id: 3, title: "Vinatge watch", category: "electronics", price: 2000, desc: "Vinatge watch", image: "/images/watch3.jpg" },
  { id: 4, title: "Dior Bag", category: "accessories", price: 3000, desc: "luxury Bag", image: "/images/bag1.jpg" },
  { id: 5, title: "Gucci Bag", category: "accessories", price: 2000, desc: "luxury Bag", image: "/images/bag2.jpg" },
  { id: 6, title: "LV Bag", category: "accessories", price: 3250, desc: "luxury Bag", image: "/images/bag3.jpg" },
  { id: 7, title: "Men Shirt", category: "clothing", price: 500, desc: "Men Shirt", image: "/images/cloth6.jpg" },
  { id: 8, title: "Men Shirt", category: "clothing", price: 600, desc: "Men Shirt", image: "/images/cloth5.jpg" },
  { id: 9, title: "Women Shirt", category: "clothing", price: 700, desc: "Women shirt", image: "/images/cloth4.jpg" },
  { id: 10, title: "Women Shirt", category: "clothing", price: 499, desc: "Women shirt", image: "/images/cloth3.jpg" },
  { id: 11, title: "Skirt", category: "clothing", price: 600, desc: "Skirt", image: "/images/cloth2.jpg" },
  { id: 12, title: "Skirt", category: "clothing", price: 500, desc: "Skirt", image: "/images/cloth1.jpg" },

]

const productGrid = document.getElementById("productGrid")
const productModel = document.getElementById("productModel")
const productImage = document.getElementById("productImage")
const productTitle = document.getElementById("productTitle")
const productCategory = document.getElementById("productCategory")
const productPrice = document.getElementById("productPrice")
const productDetail = document.getElementById("productDetail")
const addToCartBtn = document.getElementById("addToCartBtn")
const cartBtn = document.getElementById("cartBtn")
const cartSidebar = document.getElementById("cartSidebar")
const cardItems = document.getElementById("cartItems")
const cartTotal = document.getElementById("cartTotal")
const cartCount = document.getElementById("cartCount")
const themeToggle = document.getElementById("themeToggle")
const bodyEl = document.getElementById("bodyEl")

function renderProducts(list) {
  productGrid.innerHTML = "";
  list.forEach(p => {
    productGrid.innerHTML += `
          <div class="bg-gray-800 text-white rounded-xl shadow hover:shadow-lg transition overflow-hidden animate-fadeIn">
            <img src="${p.image}" class="w-full h-48 object-contain bg-white" />
            <div class="p-4">
              <h3 class="font-semibold text-lg">${p.title}</h3>
              <p class="text-sm text-gray-500">${p.category}</p>
              <p class="text-blue-600 font-bold mt-2">$${p.price}</p>
              <button onclick='openModal(${p.id})' class="mt-3 w-full bg-blue-500 hover:bg-blue-600 text-white py-1 rounded-lg">View</button>
            </div>
          </div>`;
  });
}

renderProducts(products)
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function openModal(id) {
  const p = products.find(x => x.id === id);
  currentProduct = p;
  productTitle.textContent = p.title
  productCategory.textContent = p.category
  productPrice.textContent = "$" + p.price
  productDetail.textContent = p.desc
  productImage.src = p.image
  productModel.classList.remove("hidden")
}

function closeModal() {
  productModel.classList.add("hidden")
}

window.onload = () => {
  addToCartBtn.onclick = () => {
    cart.push(currentProduct);
    updateCart();
    closeModal();
  }
}

function updateCart() {
  cardItems.innerHTML = ""
  let total = 0;
  cart.forEach((item, i) => {
    total += item.price;
    cardItems.innerHTML += `
        <li class="flex justify-between items-center border-b pb-2">
            <div>
              <p class="font-medium">${item.title}</p>
              <p class="text-sm text-gray-500">$${item.price}</p>
            </div>
            <button onclick="removeFromCart(${i})" class="text-red-500 hover:text-red-700">Remove</button>
          </li>`;
  })
  cartTotal.textContent = "$" + total;
  cartCount.textContent = cart.length;
  localStorage.setItem("cart", JSON.stringify(cart))
}

function removeFromCart(i) {
  cart.splice(i, 1)
  updateCart()
}

cartBtn.onclick = () => {
  cartSidebar.classList.toggle("translate-x-full");
}

//search
document.getElementById("searchInput").addEventListener("input", (e) => {
  const val = e.target.value.toLowerCase();
  renderProducts(products.filter(p => p.title.toLowerCase().includes(val)))
})

// filter button
document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("bg-blue-500", "text-white"))
    btn.classList.add("bg-blue-500", "text-white")
    btn.classList.remove("bg-gray-200", "text-black");
    btn.classList.add("bg-blue-500", "text-white");

    const cat = btn.dataset.category
    if (cat === "all") renderProducts(products)
    else renderProducts(products.filter(p => p.category === cat))
  })
})


updateCart();
