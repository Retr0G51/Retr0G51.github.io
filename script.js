        const products = [
            { id: 1, name: "Smart TV UHD 4K Marca SANSUI 65", price: 640, category: "electrodomesticos", image: "images/IMG-20241106-WA0063.jpg", description: "-Factura Impresa y Garantía: 1 mes -Transporte Incluido." },
            { id: 2, name: "Smart TV 4K Marca ONN 65", price: 650, category: "electrodomesticos", image: "images/7623d410-418d-4850-bc99-5a278b282165.jpg", description: "-Factura Impresa y Garantía: 1 mes -Transporte Incluido" },
            { id: 3, name: "Smart TV 4K HD Marca Element 65", price: 660, category: "electrodomesticos", image: "images/8b27b8d0-53d8-4483-894d-ddd4e6d72fa5.jpg", description: "-Factura Impresa y Garantía: 1 mes -Transporte Incluido"" },
            { id: 4, name: "Smart TV Premier 4K 60", price: 620, category: "electrodomesticos", image: "images/681f60fa-7210-4b5b-b821-105b35e9bc7e.jpg", description: "-Factura Impresa y Garantía: 1 mes -Transporte Incluido" },
             { id: 5, name: "Smart TV Marca Hisense UHD 4K 58", price: 610, category: "electrodomesticos", image: "images/4e66158a-e29f-4990-8fbf-0ee112e6918d.jpg", description: "-Factura Impresa y Garantía: 1 mes -Transporte Incluido" },
             { id: 6, name: "Smart TV Modelo 2021 Marca LG 55", price: 650, category: "electrodomestico", image: "images/33dd8014-5c87-4f70-9219-d9c6b7591356.jpg", description: "-Factura Impresa y Garantía: 1 mes -Transporte Incluido" }
             { id: 7, name: "Smart TV Milexus 55", price: 510, category: "electrodomestico", image: "images/29b338aa-dfeb-41bb-b0a5-a818b7b6cdaf.jpg", description: "-Factura Impresa y Garantía: 1 mes -Transporte Incluido -Ultra HD 4K" }
             { id: 8, name: "Smart TV Milexus 50", price: 450, category: "electrodomestico", image: "images/85634ced-c3d4-4452-95d1-bdf12ef02570.jpg", description: "-Factura Impresa y Garantía: 1 mes -Transporte Incluido" }
             { id: 9, name: "Smart TV ROYAL 43 ", price: 365, category: "electrodomestico", image: "images/30db0ce4-b5ce-4035-83a2-9313efd6d511.jpg", description: "-Factura Impresa y Garantía: 1 mes -Transporte Incluido" }
             { id: 10, name: "Smart TV Marca TCL FHD TCL 43", price: 370, category: "electrodomestico", image: "images/b1e00a04-fa3a-4c4b-98b6-e8f0f3c4ff52.jpg", description: "-Factura Impresa y Garantía: 1 mes -Transporte Incluido" }
             { id: 11, name: "Smart Tv Emerald 43", price: 360, category: "electrodomestico", image: "images/c249154f-d68c-4b98-96e9-17ad5265c37e.jpg", description: "-Factura Impresa y Garantía: 1-3 meses -Transporte Incluido" }
             { id: 12, name: "Smart TV Premier 43", price: 365, category: "electrodomestico", image: "images/92d1a59b-5f65-43fd-8290-d5f6c063dad6.jpg", description: "-Factura Impresa y Garantía: 1 mes -Transporte Incluido" }
             { id: 13, name: "Smart TV MILEXUS de 42", price: 360, category: "electrodomestico", image: "images/bafe4373-3991-437d-a2cd-311eceeca148.jpg", description: "-Factura Impresa y Garantía: 3 mes -Transporte Incluido" }
             { id: 14, name: "Smart Tv Philips 40", price: 370, category: "electrodomestico", image: "images/7ae5f265-5c10-4964-a87e-e62473edab03.jpg", description: "-Factura Impresa y Garantía: 15 días -Transporte Incluido -3 puertos HDMI, 1 puerto USB y entrada analogica" }
             { id: 15, name: "Smart TV Premier 32", price: 250, category: "electrodomestico", image: "images/00b83b9b-8aeb-4a88-8eb2-d2237465acae.jpg", description: "-Factura Impresa y Garantía: 1 mes -Transporte Incluido -Android 14 -Soporte Incluido, 2 Mandos " }
             { id: 16, name: "Smart TV  HD Insignia 32", price: 250, category: "electrodomestico", image: "images/34b033b8-7c49-4a58-a1e2-589a9747bb5d.jpg", description: "-Factura Impresa y Garantía: 1 mes -Transporte Incluido" }
             { id: 17, name: "Smart Tv Oska 32", price: 250, category: "electrodomestico", image: "images/5293878a-220c-4a74-aaeb-6c8fc9e87b7c.jpg", description: "-Factura Impresa y Garantía: 1-3 meses -Transporte Incluido" }
             { id: 18, name: "Smart TV Milexus 32", price: 245, category: "electrodomestico", image: "images/eca8367c-a98b-42ca-97f5-9a5ec282f884.jpg", description: "-Factura Impresa y Garantía: 3 meses -Transporte Incluido" }
             { id: 19, name: "Smart Tv Challenger 32", price: 265, category: "electrodomestico", image: "images/58c9b1c0-0bb5-460a-a62e-b244a9f2e20b.jpg", description: "-Factura Impresa y Garantía: 3 meses -Transporte Incluido -Soporte de pared y 2 Mandos incluidos" }
             { id: 20, name: "Refrigerador Premier 7 pies", price: 560, category: "electrodomestico", image: "images/208371b1-b8ea-4151-9434-2506b04834d5.jpg", description: "-Factura Impresa y Garantía: 6 meses -Transporte Incluido -Congelacion Seca" }
             { id: 21, name: "Refrigerador Saco 7 pies", price: 570, category: "electrodomestico", image: "images/3f53fd91-ac63-4e1e-9dc6-0faf39a5cf35.jpg", description: "-Factura Impresa y Garantía: 1-3 meses -Transporte Incluido -Regulador de Voltaje Incluido" }
             { id: 22, name: "Refrigerador ROYAL 8.5 pies", price: 550, category: "electrodomestico", image: "images/d148c3c7-fd5a-4b0e-ac57-ac52362bf7df.jpg", description: "-Factura Impresa y Garantía: 3-6 meses -Transporte Incluido" }
             { id: 23, name: "Refrigerador Galamz 7.6 Pies", price: 630, category: "electrodomestico", image: "images/d0ac9b6f-9249-4aa0-ba81-72c38b64b1f1.jpg", description: "-Factura Impresa y Garantía: 1-3 meses -Transporte Incluido" }
             { id: 24, name: "Refrigerador Premier 8.7 pies", price: 590, category: "electrodomestico", image: "images/1102ef84-11b8-44a0-bbe0-8b42e8968151.jpg", description: "-Factura Impresa y Garantía: 3 meses -Transporte Incluido -Congelacion Seca" }
             { id: 25, name: "Refrigerador SANKEY de 9.9 pies", price: 720, category: "electrodomestico", image: "images/635e69cd-11e6-4652-a691-b4d36bb3ae29.jpg", description: "-Factura Impresa y Garantía: 3 meses -Transporte Incluido" }
             { id: 26, name: "Refrigerador Milexus 9.1 pies", price: 610, category: "electrodomestico", image: "images/e418a1ee-1148-4177-a796-c6c1a111a09b.jpg", description: "-Factura Impresa y Garantía: 3 meses -Transporte Incluido -Congelacion Seca" }
             { id: 27, name: "Refrigerador Milexus 9.1 pies", price: 610, category: "electrodomestico", image: "images/e418a1ee-1148-4177-a796-c6c1a111a09b.jpg", description: "-Factura Impresa y Garantía: 3 meses -Transporte Incluido -Congelacion Seca" }
             { id: 28, name: "Refrigerador Milexus 9.1 pies", price: 610, category: "electrodomestico", image: "images/e418a1ee-1148-4177-a796-c6c1a111a09b.jpg", description: "-Factura Impresa y Garantía: 3 meses -Transporte Incluido -Congelacion Seca" }
             { id: 29, name: "Rexfrigerador LG de 10 pies ", price: 900, category: "electrodomestico", image: "images/f08db3b0-b104-4f78-ab8f-7eb8035b805a.jpg", description: "-Factura Impresa y Garantía: 1 año -Transporte Incluido -Congelacion Seca -Con Dispensador" }
             { id: 30, name: "Refrigerador PREMIER de 10.7 pies", price: 630, category: "electrodomestico", image: "images/f83bdda6-babb-4c33-afb6-338379ef3641.jpg", description: "-Factura Impresa y Garantía: 6 meses -Transporte Incluido" }
             { id: 31, name: "Refrigerador EKO 11.5 Pies", price: 700, category: "electrodomestico", image: "images/236e5836-ee05-45f6-9ebf-145b9fd80c17.jpg", description: "-Factura Impresa y Garantía: 1-3 meses -Transporte Incluido -Con dispensador" }
             { id: 32, name: "Refrigerador Milexus 11.5 Pies", price: 780, category: "electrodomestico", image: "images/90ad8661-79ce-4092-868e-b017b9309339.jpg", description: "-Factura Impresa y Garantía: 3 meses -Transporte Incluido" }
             { id: 33, name: "Refrigerador ROYAL 11.3 pies ", price: 770, category: "electrodomestico", image: "images/ae0a21d9-d6d7-4bea-a05a-ae330c5dd8de.jpg", description: "-Factura Impresa y Garantía: 3 meses -Transporte Incluido" },
        ];

        let cart = [];

        function showProducts() {
            document.getElementById('products-page').style.display = 'block';
            document.getElementById('cart-page').style.display = 'none';
        }

        function showCart() {
            document.getElementById('products-page').style.display = 'none';
            document.getElementById('cart-page').style.display = 'block';
            updateCartDisplay();
        }

        function displayProducts(category = 'todos', searchTerm = '') {
            const productsGrid = document.getElementById('products-grid');
            productsGrid.innerHTML = '';

            let filteredProducts = products;
            
            if (category !== 'todos') {
                filteredProducts = filteredProducts.filter(product => product.category === category);
            }
            
            if (searchTerm) {
                filteredProducts = filteredProducts.filter(product => 
                    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    product.description.toLowerCase().includes(searchTerm.toLowerCase())
                );
            }

            filteredProducts.forEach(product => {
                const productElement = document.createElement('div');
                productElement.className = 'product-card';
                productElement.innerHTML = `
                    <div class="product-image" onclick="showProductDetails(${product.id})">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                    <div class="product-info">
                        <h3 class="product-title">${product.name}</h3>
                        <p class="product-price">$${product.price}</p>
                        <button class="add-to-cart" onclick="addToCart(${product.id})">
                            Añadir al carrito
                        </button>
                    </div>
                `;
                productsGrid.appendChild(productElement);
            });
        }

        function showProductDetails(productId) {
            const product = products.find(p => p.id === productId);
            if (product) {
                const modal = document.getElementById('product-modal');
                const modalContent = document.getElementById('modal-product-details');
                
                modalContent.innerHTML = `
                    <h2>${product.name}</h2>
                    <img src="${product.image}" alt="${product.name}" class="product-modal-image">
                    <p class="product-description">${product.description}</p>
                    <p class="product-price">Precio: $${product.price}</p>
                    <button class="add-to-cart" onclick="addToCart(${product.id}); closeModal();">
                        Añadir al carrito
                    </button>
                `;
                
                modal.style.display = 'block';
            }
        }

        function closeModal() {
            document.getElementById('product-modal').style.display = 'none';
        }

        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                closeModal();
            }
        });

        function addToCart(productId) {
            const product = products.find(p => p.id === productId);
            if (product && !cart.some(item => item.id === productId)) {
                cart.push(product);
                updateCartCount();
                updateCartDisplay();
            }
        }

        function removeFromCart(index) {
            cart.splice(index, 1);
            updateCartCount();
            updateCartDisplay();
        }

        function updateCartCount() {
            document.getElementById('cart-count').textContent = cart.length;
        }

        function updateCartDisplay() {
            const cartItems = document.getElementById('cart-items');
            const cartTotal = document.getElementById('cart-total');
            cartItems.innerHTML = '';

            let total = 0;

            cart.forEach((item, index) => {
                total += item.price;
                const itemElement = document.createElement('div');
                itemElement.className = 'cart-item';
                itemElement.innerHTML = `
                    <div class="cart-item-info">
                        <img src="${item.image}" alt="${item.name}">
                        <div>
                            <h3>${item.name}</h3>
                            <p>$${item.price}</p>
                        </div>
                    </div>
                    <span class="remove-item" onclick="removeFromCart(${index})">🗑️</span>
                `;
                cartItems.appendChild(itemElement);
            });

            cartTotal.textContent = total.toFixed(2);
            updateWhatsAppLink();
        }

        function updateWhatsAppLink() {
            const whatsappButton = document.getElementById('whatsapp-button');
            let message = "¡Hola! Me gustaría hacer el siguiente pedido:\n\n";
            
            cart.forEach(item => {
                message += `- ${item.name} ($${item.price})\n`;
            });
            
            const total = cart.reduce((sum, item) => sum + item.price, 0);
            message += `\nTotal: $${total.toFixed(2)}`;
            
            const encodedMessage = encodeURIComponent(message);
            whatsappButton.href = `https://wa.me/5355059350?text=${encodedMessage}`;
        }

        document.getElementById('categories').addEventListener('click', (e) => {
            if (e.target.classList.contains('category-btn')) {
                document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
                e.target.classList.add('active');
                const searchTerm = document.getElementById('search-input').value;
                displayProducts(e.target.dataset.category, searchTerm);
            }
        });

        document.getElementById('search-input').addEventListener('input', (e) => {
            const searchTerm = e.target.value;
            const activeCategory = document.querySelector('.category-btn.active').dataset.category;
            displayProducts(activeCategory, searchTerm);
        });

        displayProducts();
        showProducts();
    
