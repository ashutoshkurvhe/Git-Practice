// Product data
const products = [
  {
    id: 1,
    name: "Glow Serum",
    price: "₹999",
    img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=60",
    desc: "Lightweight vitamin C + hyaluronic acid serum for daily glow.",
  },
  {
    id: 2,
    name: "Silk Foundation",
    price: "₹1299",
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=60",
    desc: "Buildable, breathable coverage with skin-loving botanicals.",
  },
  {
    id: 3,
    name: "Rose Lip Balm",
    price: "₹399",
    img: "https://images.unsplash.com/photo-1585238342028-2ce0a0f6c9e4?auto=format&fit=crop&w=800&q=60",
    desc: "Hydrating balm with a hint of rose tint.",
  },
  {
    id: 4,
    name: "Velvet Blush",
    price: "₹699",
    img: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=800&q=60",
    desc: "Cream-to-powder blush for natural flush.",
  },
  {
    id: 5,
    name: "Eye Brightener",
    price: "₹849",
    img: "https://images.unsplash.com/photo-1556228720-6da1c48f0df9?auto=format&fit=crop&w=800&q=60",
    desc: "Illuminating formula to reduce tiredness appearance.",
  },
  {
    id: 6,
    name: "Overnight Mask",
    price: "₹1199",
    img: "https://images.unsplash.com/photo-1541534401786-7b78e9a8e270?auto=format&fit=crop&w=800&q=60",
    desc: "Nourishing night mask for soft, plumped skin.",
  },
];

const productGrid = document.getElementById("productGrid");
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");
const year = document.getElementById("year");
year.textContent = new Date().getFullYear();

function renderProducts(list) {
  productGrid.innerHTML = "";
  list.forEach((p) => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <h3>${p.name}</h3>
      <div style="display:flex;justify-content:space-between;align-items:center">
        <div class="price">${p.price}</div>
        <button class="add" data-id="${p.id}">Add</button>
      </div>
    `;
    productGrid.appendChild(card);
  });
}
renderProducts(products.slice(0, 3)); // top 3

// Mobile menu toggle
const menuBtn = document.getElementById("menuBtn");
const navlinks = document.getElementById("navlinks");
menuBtn.addEventListener("click", () => {
  if (navlinks.style.display === "flex") navlinks.style.display = "none";
  else navlinks.style.display = "flex";
  navlinks.style.flexDirection = "column";
});

// Product modal
document.addEventListener("click", (e) => {
  const add = e.target.closest(".add");
  if (add) {
    const id = Number(add.dataset.id);
    const p = products.find((x) => x.id === id);
    openModal(p);
  }
});

function openModal(product) {
  modalContent.innerHTML = `
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;align-items:center">
      <img src="${product.img}" alt="${product.name}" style="width:100%;height:260px;object-fit:cover;border-radius:10px">
      <div>
        <h2 style="margin-top:0">${product.name}</h2>
        <p style="color:var(--muted)">${product.desc}</p>
        <div style="margin-top:12px;font-weight:700;color:var(--accent);font-size:18px">${product.price}</div>
        <div style="margin-top:14px;display:flex;gap:8px">
          <button style="padding:10px 12px;border-radius:10px;border:0;background:var(--accent);color:#fff;font-weight:700">Buy now</button>
          <button id="addToCart" style="padding:10px 12px;border-radius:10px;border:1px solid #eee;background:#fff;font-weight:700">Add to cart</button>
        </div>
      </div>
    </div>
  `;
  modal.style.display = "flex";
}
document
  .getElementById("modalClose")
  .addEventListener("click", () => (modal.style.display = "none"));
modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});

// Contact form
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const msg = document.getElementById("message").value.trim();
  if (!name || !email) {
    alert("Please enter name and a valid email.");
    return;
  }
  alert("Thanks " + name + "! We received your message.");
  e.target.reset();
});
