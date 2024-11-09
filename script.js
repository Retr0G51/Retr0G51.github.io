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
    
