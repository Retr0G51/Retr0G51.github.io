        const products = [
             { id: 1, name: "Smart TV UHD 4K Marca SANSUI 65", price: 640, category: "tv", image: "images/IMG-20241106-WA0063.jpg", description: "-Factura Impresa y Garantía: 1 mes -Transporte Incluido." },   
             { id: 2, name: "Smart TV 4K Marca ONN 65", price: 650, category: "tv", image: "images/7623d410-418d-4850-bc99-5a278b282165.jpg", description: "-Factura Impresa y Garantía: 1 mes -Transporte Incluido" },
             { id: 3, name: "Smart TV Premier 4K HD Marca Element", price: 660, category: "tv", image: "images/8b27b8d0-53d8-4483-894d-ddd4e6d72fa5.jpg", description: "-Factura Impresa y Garantía: 1 mes -Transporte Incluido" },
             { id: 4, name: "Smart TV Premier 4K 60", price: 620, category: "tv", image: "images/681f60fa-7210-4b5b-b821-105b35e9bc7e.jpg", description: "-Factura Impresa y Garantía: 1 mes -Transporte Incluido" },
             { id: 5, name: "Smart TV Marca Hisense UHD 4K 58", price: 610, category: "tv", image: "images/4e66158a-e29f-4990-8fbf-0ee112e6918d.jpg", description: "-Factura Impresa y Garantía: 1 mes -Transporte Incluido" },
             { id: 6, name: "Smart TV Modelo 2021 Marca LG 55", price: 650, category: "tv", image: "images/33dd8014-5c87-4f70-9219-d9c6b7591356.jpg", description: "-Factura Impresa y Garantía: 1 mes -Transporte Incluido" },
             { id: 7, name: "Smart TV Milexus 55", price: 510, category: "tv", image: "images/29b338aa-dfeb-41bb-b0a5-a818b7b6cdaf.jpg", description: "-Factura Impresa y Garantía: 1 mes -Transporte Incluido -Ultra HD 4K" },
             { id: 8, name: "Smart TV Milexus 50", price: 450, category: "tv", image: "images/85634ced-c3d4-4452-95d1-bdf12ef02570.jpg", description: "-Factura Impresa y Garantía: 1 mes -Transporte Incluido" },
             { id: 9, name: "Smart TV ROYAL 43 ", price: 365, category: "tv", image: "images/30db0ce4-b5ce-4035-83a2-9313efd6d511.jpg", description: "-Factura Impresa y Garantía: 1 mes -Transporte Incluido" },
             { id: 10, name: "Smart TV Marca TCL FHD TCL 43", price: 370, category: "tv", image: "images/b1e00a04-fa3a-4c4b-98b6-e8f0f3c4ff52.jpg", description: "-Factura Impresa y Garantía: 1 mes -Transporte Incluido" },
             { id: 11, name: "Smart Tv Emerald 43", price: 360, category: "tv", image: "images/c249154f-d68c-4b98-96e9-17ad5265c37e.jpg", description: "-Factura Impresa y Garantía: 1-3 meses -Transporte Incluido" },
             { id: 12, name: "Smart TV Premier 43", price: 365, category: "tv", image: "images/92d1a59b-5f65-43fd-8290-d5f6c063dad6.jpg", description: "-Factura Impresa y Garantía: 1 mes -Transporte Incluido" },
             { id: 13, name: "Smart TV MILEXUS de 42", price: 360, category: "tv", image: "images/bafe4373-3991-437d-a2cd-311eceeca148.jpg", description: "-Factura Impresa y Garantía: 3 mes -Transporte Incluido" },
             { id: 14, name: "Smart Tv Philips 40", price: 370, category: "tv", image: "images/7ae5f265-5c10-4964-a87e-e62473edab03.jpg", description: "-Factura Impresa y Garantía: 15 días -Transporte Incluido -3 puertos HDMI, 1 puerto USB y entrada analogica" },
             { id: 15, name: "Smart TV Premier 32", price: 250, category: "tv", image: "images/00b83b9b-8aeb-4a88-8eb2-d2237465acae.jpg", description: "-Factura Impresa y Garantía: 1 mes -Transporte Incluido -Android 14 -Soporte Incluido, 2 Mandos " },
             { id: 16, name: "Smart TV  HD Insignia 32", price: 250, category: "tv", image: "images/34b033b8-7c49-4a58-a1e2-589a9747bb5d.jpg", description: "-Factura Impresa y Garantía: 1 mes -Transporte Incluido" },
             { id: 17, name: "Smart Tv Oska 32", price: 250, category: "tv", image: "images/5293878a-220c-4a74-aaeb-6c8fc9e87b7c.jpg", description: "-Factura Impresa y Garantía: 1-3 meses -Transporte Incluido" },
             { id: 18, name: "Smart TV Milexus 32", price: 245, category: "tv", image: "images/eca8367c-a98b-42ca-97f5-9a5ec282f884.jpg", description: "-Factura Impresa y Garantía: 3 meses -Transporte Incluido" },
             { id: 19, name: "Smart Tv Challenger 32", price: 265, category: "tv", image: "images/58c9b1c0-0bb5-460a-a62e-b244a9f2e20b.jpg", description: "-Factura Impresa y Garantía: 3 meses -Transporte Incluido -Soporte de pared y 2 Mandos incluidos" },
             { id: 20, name: "Refrigerador Premier 7 pies", price: 560, category: "refri", image: "images/208371b1-b8ea-4151-9434-2506b04834d5.jpg", description: "-Factura Impresa y Garantía: 6 meses -Transporte Incluido -Congelacion Seca" },
             { id: 21, name: "Refrigerador Saco 7 pies", price: 570, category: "refri", image: "images/3f53fd91-ac63-4e1e-9dc6-0faf39a5cf35.jpg", description: "-Factura Impresa y Garantía: 1-3 meses -Transporte Incluido -Regulador de Voltaje Incluido" },
             { id: 22, name: "Refrigerador ROYAL 8.5 pies", price: 550, category: "refri", image: "images/d148c3c7-fd5a-4b0e-ac57-ac52362bf7df.jpg", description: "-Factura Impresa y Garantía: 3-6 meses -Transporte Incluido" },
             { id: 23, name: "Refrigerador Galamz 7.6 Pies", price: 630, category: "refri", image: "images/d0ac9b6f-9249-4aa0-ba81-72c38b64b1f1.jpg", description: "-Factura Impresa y Garantía: 1-3 meses -Transporte Incluido" },
             { id: 24, name: "Refrigerador Premier 8.7 pies", price: 590, category: "refri", image: "images/1102ef84-11b8-44a0-bbe0-8b42e8968151.jpg", description: "-Factura Impresa y Garantía: 3 meses -Transporte Incluido -Congelacion Seca" },
             { id: 25, name: "Refrigerador SANKEY de 9.9 pies", price: 720, category: "refri", image: "images/635e69cd-11e6-4652-a691-b4d36bb3ae29.jpg", description: "-Factura Impresa y Garantía: 3 meses -Transporte Incluido" },
             { id: 26, name: "Refrigerador Milexus 9.1 pies", price: 610, category: "refri", image: "images/e418a1ee-1148-4177-a796-c6c1a111a09b.jpg", description: "-Factura Impresa y Garantía: 3 meses -Transporte Incluido -Congelacion Seca" },
             { id: 27, name: "Refrigerador LG de 10 pies ", price: 900, category: "refri", image: "images/f08db3b0-b104-4f78-ab8f-7eb8035b805a.jpg", description: "-Factura Impresa y Garantía: 1 año -Transporte Incluido -Congelacion Seca -Con Dispensador" },
             { id: 28, name: "Refrigerador PREMIER de 10.7 pies", price: 630, category: "refri", image: "images/f83bdda6-babb-4c33-afb6-338379ef3641.jpg", description: "-Factura Impresa y Garantía: 6 meses -Transporte Incluido" },
             { id: 29, name: "Refrigerador EKO 11.5 Pies", price: 700, category: "refri", image: "images/236e5836-ee05-45f6-9ebf-145b9fd80c17.jpg", description: "-Factura Impresa y Garantía: 1-3 meses -Transporte Incluido -Con dispensador" },
             { id: 30, name: "Refrigerador Milexus 11.5 Pies", price: 780, category: "refri", image: "images/90ad8661-79ce-4092-868e-b017b9309339.jpg", description: "-Factura Impresa y Garantía: 3 meses -Transporte Incluido" },
             { id: 31, name: "Refrigerador ROYAL 11.3 pies ", price: 770, category: "refri", image: "images/ae0a21d9-d6d7-4bea-a05a-ae330c5dd8de.jpg", description: "-Factura Impresa y Garantía: 3 meses -Transporte Incluido" },
             { id: 32, name: "Refrigerador Samsung 12 Pies", price: 950, category: "refri", image: "images/39fd9289-2d4f-4aa6-be46-2bb594ff3012.jpg", description: "-Factura Impresa y Garantía: 1-3 meses -Transporte Incluido" },
             { id: 33, name: "Refrigerador LG 12 Pies", price: 890, category: "refri", image: "images/1a962901-1d1d-4d47-823b-ae67e4bc60e2.jpg", description: "-Factura Impresa y Garantía: 3 meses -Transporte Incluido" },
             { id: 34, name: "Refrigerador Milexus 13.1 Pies", price: 770, category: "refri", image: "images/35933099-a50c-4f82-84a7-fedfcafedc71.jpg", description: "-Factura Impresa y Garantía: 3 meses -Transporte Incluido" },
             { id: 35, name: "Refrigerador Royal 17 Pies", price: 1000, category: "refri", image: "images/df6c288f-35f4-46f8-bb79-fbfd5901107e.jpg", description: "-Factura Impresa y Garantía: 3 meses -Transporte Incluido" },
             { id: 36, name: "Refrigerador Drija 18 Pies ", price: 1870, category: "refri", image: "images/e5fedfca-a901-4d9e-bbdb-d5848eee0846.jpg", description: "-Factura Impresa y Garantía: 3 meses -Transporte Incluido -Color Negro(Efecto Espejo)" },
             { id: 37, name: "Refrigerador LG 18 Pies", price: 1450, category: "refri", image: "images/ff4a3ee6-747c-4cb2-bbc3-f92418bc048b.jpg", description: "-Factura Impresa y Garantía: 3 meses -Transporte Incluido" },
             { id: 38, name: "Nevera Milexus 3.5 pies", price: 320, category: "nevera", image: "images/01ed8fc8-50d9-4f1f-ab55-4d8007ab5a56.jpg", description: "-Factura Impresa y Garantía: 3 meses -Transporte Incluido -100 Litros" },
             { id: 39, name: "Nevera Shiwey 3.5 pies ", price: 310, category: "nevera", image: "images/d49abb75-b86f-47f0-b003-8002d97f1e63.jpg", description: "-Factura Impresa y Garantía -Transporte Incluido" },
             { id: 40, name: "Nevera Milexus 4.2 pies", price: 330, category: "nevera", image: "images/55c7f31f-b437-45cf-ad1a-9d788e0abe2b.jpg", description: "-Factura Impresa y Garantía: 3 meses -Transporte Incluido" },
             { id: 41, name: "Nevera frigidaire 5 pies", price: 370, category: "nevera", image: "images/d1e51a30-9a28-4183-9957-483bc043d451.jpg", description: "-Factura Impresa y Garantía: 6 meses -Transporte Incluido" },
             { id: 42, name: "Nevera Shiwey 5 Pies", price: 350, category: "nevera", image: "images/4e960e8a-b0d4-45c7-8aa0-d874aceeb578.jpg", description: "-Factura Impresa y Garantía: 3 meses -Transporte Incluido" },
             { id: 43, name: "Nevera Xingx 7 Pies", price: 480, category: "nevera", image: "images/35f3500c-884a-4dd3-b56f-3df29d995616.jpg", description: "-Factura Impresa y Garantía: 1-3 meses -Transporte Incluido" },
             { id: 44, name: "Nevera Royal 8 Pies", price: 500, category: "nevera", image: "images/3b17a9c7-7eb9-4e82-a226-0178d5b6cfd9.jpg", description: "-Factura Impresa y Garantía: 16454-48d0-a65f-af7bb7eba369.jpg", description: "-Factura Impresa y Garantía: 3 meses -Transporte Incluido -280 Litros" },
             { id: 46, name: "Nevera Royal 12.5 pies ", price: 580, category: "nevera", image: "images/c9127eaf-227d-4f35-b646-557fff72de39.jpg", description: "-Factura Impresa y Garantía: 3 meses -Transporte Incluido" },
             { id: 47, name: "Nevera Royal 20 Pies", price: 1050, category: "nevera", image: "images/541da644-04f9-401a-baa0-02cc5454ae94.jpg", description: "-Factura Impresa y Garantía: 1 mes -Transporte Incluido" },
             { id: 48, name: "Nevera Milexus 25 pies", price: 1500, category: "nevera", image: "images/0f4c4ecc-53b4-4560-b8f7-e86190d1e403.jpg", description: "-Factura Impresa y Garantía: 1-3 meses -Transporte Incluido" },
             { id: 49, name: "Exhibidora Dulcera", price: 1860, category: "exhibidoras", image: "images/9204d085-06ba-4367-85e4-1296551b62cd.jpg", description: "-Factura Impresa y Garantía: 3 meses -Transporte Incluido" },
             { id: 50, name: "Heladera Exhibidora Royal 16 Pies", price: 1320, category: "exhibidoras", image: "images/760abbd6-318e-4201-ac53-01a7664beeb3.jpg", description: "-Factura Impresa y Garantía: 1-6 meses -Transporte Incluido" },
             { id: 51, name: "Heladera Horizontal Marca Milexus 9 Pies", price: 800, category: "exhibidoras", image: "images/34118989-65fd-49b3-8cd4-4d4a1246bd92.jpg", description: "-Factura Impresa y Garantía: 6 meses -Transporte Incluido" },
             { id: 52, name: "Exhibidora Eko 7 pies", price: 750, category: "exhibidoras", image: "images/d04dcce2-97d5-479f-a338-cf55f7696346.jpg", description: "-Factura Impresa y Garantía: 1-3 meses -Transporte Incluido" },
             { id: 53, name: "Exhibidora Milexus 13.5 Pies", price: 850, category: "exhibidoras", image: "images/12c3b04b-9bb0-4634-af26-7a127630ffe6.jpg", description: "-Factura Impresa y Garantía: 3 meses -Transporte Incluido" },
             { id: 54, name: "Exhibidora Milexus 20 pies", price: 1400, category: "exhibidoras", image: "images/cbff1651-99a0-4a8d-b9bd-993c5126df57.jpg", description: "-Factura Impresa y Garantía: 1-6 meses -Transporte Incluido" },
             { id: 55, name: "Exhibidora Vertical XINGX 25 Pies", price: 1500, category: "exhibidoras", image: "images/90cd1c08-5020-47d2-b99c-a6208f52d8c6.jpg", description: "-Factura Impresa y Garantía: 1 mes -Transporte Incluido" },
             { id: 56, name: "Lavadora Semiautomática MILEXUS 7kg", price: 260, category: "lavadoras", image: "images/b3f4a362-60e2-407f-8d08-36b5426445d5.jpg", description: "-Factura Impresa y Garantía: 3 meses -Transporte Incluido" },
             { id: 57, name: "Lavadora Semiautomática EKO 8.5 kg", price: 300, category: "lavadoras", image: "images/861dec99-1ffc-4005-aca8-b082203d4b29.jpg", description: "-Factura Impresa y Garantía: 3 meses -Transporte Incluido" },
             { id: 58, name: "Lavadora Semiautomática marca Frigidaire 12 kg", price: 450, category: "lavadoras", image: "images/7e092c41-7b23-43a4-8504-5f5e80b28e30.jpg", description: "-Factura Impresa y Garantía: 3 meses -Transporte Incluido" },
             { id: 59, name: "Lavadora Automática PREMIUM 7 kg", price: 380, category: "lavadoras", image: "images/5c3b3218-d0af-4fdc-b9b8-15283c6c63e0.jpg", description: "-Factura Impresa y Garantía: 3 meses -Transporte Incluido" },
             { id: 60, name: "Lavadora Automática KONKA 8 kg", price: 400, category: "lavadoras", image: "images/a1ae0992-5ca8-492c-a98c-1bc6f1ad247a.jpg", description: "-Factura Impresa y Garantía: 6 meses -Transporte Incluido" },
             { id: 61, name: "Lavadora Automática SANKEY 12 kg", price: 540, category: "lavadoras", image: "images/b230986f-5e6a-47bb-81d5-86550e8a207c.jpg", description: "-Factura Impresa y Garantía: 3 meses -Transporte Incluido" },
                  ];


// Función para mostrar productos
function displayProducts(category = "all", searchTerm = "") {
    const productsContainer = document.getElementById("products");
    productsContainer.innerHTML = "";

    const filteredProducts = products.filter(product => {
        const matchesCategory = category === "all" || product.category === category;
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    filteredProducts.forEach(product => {
        const productElement = document.createElement("div");
        productElement.className = "product";
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Agregar al carrito</button>
        `;
        productsContainer.appendChild(productElement);
    });
}

// Función para agregar un producto al carrito
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCart();
    }
}

// Función para eliminar un producto del carrito
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

// Función para actualizar el carrito
function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const whatsappButton = document.getElementById("whatsapp-button");

    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        const itemElement = document.createElement("div");
        itemElement.className = "cart-item";
        itemElement.innerHTML = `
            <div>
                <img src="${item.image}" alt="${item.name}">
                <div>
                    <h3>${item.name}</h3>
                    <p>$${item.price.toFixed(2)}</p>
                </div>
            </div>
            <span class="remove-item" onclick="removeFromCart(${index})">🗑️</span>
        `;
        cartItems.appendChild(itemElement);
    });

    cartTotal.textContent = `$${total.toFixed(2)}`;
    whatsappButton.disabled = cart.length === 0;
    updateWhatsAppLink();
}

// Función para actualizar el enlace de WhatsApp
function updateWhatsAppLink() {
    const whatsappButton = document.getElementById("whatsapp-button");
    let message = "¡Hola! Me gustaría hacer el siguiente pedido:\n\n";

    cart.forEach(item => {
        message += `- ${item.name} ($${item.price.toFixed(2)})\n`;
    });

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    message += `\nTotal: $${total.toFixed(2)}`;

    const encodedMessage = encodeURIComponent(message);
    whatsappButton.href = `https://wa.me/5355059350?text=${encodedMessage}`;
}

// Event listeners para categorías y búsqueda
document.getElementById("categories").addEventListener("click", (e) => {
    if (e.target.classList.contains("category-btn")) {
        document.querySelectorAll(".category-btn").forEach(btn => btn.classList.remove("active"));
        e.target.classList.add("active");
        const searchTerm = document.getElementById("search-input").value;
        displayProducts(e.target.dataset.category, searchTerm);
    }
});

document.getElementById("search-input").addEventListener("input", (e) => {
    const searchTerm = e.target.value;
    const activeCategory = document.querySelector(".category-btn.active")?.dataset.category || "all";
    displayProducts(activeCategory, searchTerm);
});

// Llamada inicial para mostrar productos
displayProducts();

