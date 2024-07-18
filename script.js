let products = [];
const URL = 'https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json';

const fetchedData = async () => {
    try {
        let response = await fetch(URL);
        let data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

const getProductDetails = async () => {
    const response = await fetchedData();
    products = response.categories;
    //console.log(products); // Log the products after fetching
    return products;
}
getProductDetails()

let isTabActive = false;

function displayProducts(array) {
    let unorderEL = document.getElementById('unorder');
    unorderEL.innerHTML = ''; // Clear any existing content

    array.forEach(eachItem => {
        let listItem = document.createElement('div');
        listItem.classList.add('flexs');
        let discountPrice = eachItem.compare_at_price - eachItem.price;
        let discountPercent = Math.round((discountPrice / eachItem.compare_at_price) * 100);
        listItem.innerHTML = `
            <div class="bg">
                <img src="${eachItem.image}" alt="${eachItem.title}" class="img"/>
                <div class="flex">
                    <p class="title">${eachItem.title.substring(0, 11)}</p>
                    <p>${eachItem.vendor}</p>
                </div>
                <div class="flex">
                    <p>Rs ${eachItem.price}</p>
                    <p class="strike">${eachItem.compare_at_price}</p>
                    <p class='discount'>${discountPercent}50% Off</p>
                </div>
                <button class='cart-button'>Add to Cart</button>
                ${eachItem.badge_text !== null ? `<p class="position">${eachItem.badge_text}</p>` : ''}
            </div>
        `;

        unorderEL.appendChild(listItem);
    });
}

function handleSwitchTab(category) {
    switch (category) {
        case 'Men':
            products.forEach(eachItem => {
                if (eachItem.category_name === 'Men') {
                    console.log(eachItem.category_products);
                    displayProducts(eachItem.category_products);
                }
            });
            break;
        case 'Women':
            products.forEach(eachItem => {
                if (eachItem.category_name === 'Women') {
                    console.log(eachItem.category_products);
                    displayProducts(eachItem.category_products);
                }
            });
            break;
        case 'Kids':
            products.forEach(eachItem => {
                if (eachItem.category_name === 'Kids') {
                    console.log(eachItem.category_products);
                    displayProducts(eachItem.category_products);
                }
            });
            break;
        default:
            console.log('Invalid category');
            break;
    }
}