var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var tablecartdata = "";
var datasfilter = "";
var x = 0;
//let mencloth=document.getElementById("mencloth") as HTMLAnchorElement;
var heddinText = document.getElementById("txt-main");
var zeroicon = document.getElementById("zero");
var msgcartemtyBox = document.getElementById("msg-cart-emty");
function navDisplayNone() {
    document.getElementById('nav-box').style.display = 'none';
}
function navDisplay() {
    document.getElementById('nav-box').style.display = 'flex';
}
function fetchData() {
    return __awaiter(this, void 0, void 0, function () {
        function setupAddToCartButtons(data) {
            var x = 0;
            var tablecartdata = '';
            var addCartButtons = document.querySelectorAll('[data-id]');
            document.getElementById('btn-colose').addEventListener("click", function () {
                document.getElementById('ta').style.display = 'none';
            });
            addCartButtons.forEach(function (value) {
                var button = value;
                button.addEventListener("click", function () {
                    x++;
                    var itemId = button.getAttribute("data-id");
                    var selectedItem = data.find(function (item) { return item.id == itemId; });
                    console.log(selectedItem.id);
                    document.getElementById('zero').innerHTML = x.toString();
                    //======= "Add Cart" button click event
                    var price = parseFloat(selectedItem.price);
                    // Applying discount based on price
                    if (price > 75) {
                        price *= 0.9; // 10% discount for prices over $75
                    }
                    else if (price > 30) {
                        price *= 0.95; // 5% discount for prices over $30
                    }
                    // Formatting price as USD currency
                    var formattedPrice = new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD'
                    }).format(price);
                    var lineThroughClass = price > 30 ? 'line-through' : '';
                    var displayStyle = price > 30 ? 'block' : 'none';
                    tablecartdata += "\n                            <div class=\"flex w-full shadow-md mb-4\">\n                                <div class=\"flex-1 hidden\">\n                                    <h2>".concat(selectedItem.id, "</h2>\n                                </div>\n                                <div class=\"flex-1  mr-auto flex items-center justify-center\">\n                                    <img src=\"").concat(selectedItem.image, "\" class=\"w-[50px]  mt-3\">\n                                </div>\n                                <div class=\"flex-1 item center mr-auto mb-auto mt-auto\">\n                                    <h2 class=\"text-[20px]\">").concat(selectedItem.category, "</h2>\n                                   <h2 class=\"text-[12px] text-[#a31b16]\" style=\"display: ").concat(displayStyle, "\">").concat(formattedPrice, " USD</h2>\n                                    <h2 class=\"text-[12px] text-[#16a34a]  ").concat(lineThroughClass, "\">").concat("$", " ").concat(selectedItem.price, " USD</h2>\n                                </div>\n                               \n                                <div class=\"ml-auto mb-auto mt-auto\">\n                                    <button class=\"pr-5 pl-5 pt-2 pb-2 bg-[#22c55e] text-[12px] text-white rounded btn-delete cursor-pointer\"><svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"w-6 h-6\">\n                                    <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0\" />\n                                  </svg>\n                                  </button>\n                                </div>\n                            </div>");
                    // ==== table with new item
                    document.getElementById('table').innerHTML = tablecartdata;
                    // == delete button
                    var deleteButtons = document.querySelectorAll('.btn-delete');
                    deleteButtons.forEach(function (button) {
                        button.addEventListener("click", function () {
                            var _a;
                            var parentElement = (_a = button.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement;
                            if (parentElement) {
                                x--;
                                document.getElementById('zero').innerHTML = x.toString();
                                var row = parentElement;
                                row.remove();
                            }
                        });
                    });
                });
                document.getElementById('zero').addEventListener("click", function () {
                    document.getElementById('ta').style.display = 'block';
                    document.getElementById('table').innerHTML = tablecartdata;
                    if (zeroicon.textContent === '0') {
                        document.getElementById('ta').style.display = 'none';
                        msgcartemtyBox.style.display = 'block';
                    }
                });
            });
        }
        var response, data_1, fulllist_1, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    //nav/
                    document.getElementById('btn-menu').addEventListener("click", function () {
                        navDisplay();
                        document.getElementById('menu-close').style.display = 'none';
                    });
                    document.getElementById('menu-close').addEventListener("click", function () {
                        document.getElementById('btn-menu').style.display = 'flex';
                        document.getElementById('menu-close').style.display = 'none';
                        navDisplayNone();
                    });
                    document.getElementById('btn-menu').addEventListener("click", function () {
                        document.getElementById('btn-menu').style.display = 'none';
                        document.getElementById('menu-close').style.display = 'flex';
                    });
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch("https://fakestoreapi.com/products")];
                case 2:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 3:
                    data_1 = _a.sent();
                    fulllist_1 = "";
                    data_1.forEach(function (item) {
                        var price = parseFloat(item.price);
                        // Applying discount based on price
                        if (price > 75) {
                            price *= 0.9; // 10% discount for prices over $75
                        }
                        else if (price > 30) {
                            price *= 0.95; // 5% discount for prices over $30
                        }
                        // Formatting price as USD currency
                        var formattedPrice = new Intl.NumberFormat('en-US', {
                            style: 'currency',
                            currency: 'USD'
                        }).format(price);
                        var lineThroughClass = price > 30 ? 'line-through' : '';
                        var displayStyle = price > 30 ? 'block' : 'none';
                        fulllist_1 +=
                            "<div class=\"w-full sm:w-full md:w-1/2 lg:w-1/4 p-4 shadow-md mb-4\">\n                <a href=\"./productPage.html?id=".concat(item.id, "\">\n                <img src=\"").concat(item.image, "\" class=\"mb-2 h-[300px] p-10 mr-auto ml-auto\" alt=\"").concat(item.title, "\">\n                    <h1 class=\"text-center text-[24px] text-[#f97316]\">").concat(item.category, "</h1></a>\n                    <p class=\"text-center text-[14px] text-[#94a3b8]\">").concat(item.title, "</p>\n                    <h2 class=\"text-center text-[12px] text-[#a31b16]\" style=\"display: ").concat(displayStyle, "\">").concat(formattedPrice, " USD</h2>\n                        <h2 class=\"text-center text-[12px] text-[#16a34a]  ").concat(lineThroughClass, "\">").concat("$", " ").concat(item.price, " USD</h2>\n                    <div class=\"flex justify-center\">\n                        <button class=\"text-center bg-[#f97316] text-[#fff] pr-20 pl-20 pt-2 pb-2 rounded-[20px] font-bold hover:bg-[#ea580c]\" data-id=\"").concat(item.id, "\">Add Cart</button>\n                    </div>\n                </div>");
                    });
                    document.getElementById("productsContainer").innerHTML = fulllist_1;
                    setupAddToCartButtons(data_1);
                    // Example usage:
                    // Call this function passing the 'data' array as argument
                    // setupAddToCartButtons(data);
                    //mencloth=======================================//
                    // Example usage
                    document.getElementById('home').addEventListener("click", function () {
                        document.title = "HOME";
                        heddinText.innerHTML = "Home";
                        var listElement = document.getElementById("list");
                        if (listElement) {
                            listElement.style.display = "block";
                        }
                    });
                    // Define a function that will be called when the button is clicked
                    document.getElementById('home').addEventListener("click", function () {
                        document.getElementById("productsContainer").innerHTML = fulllist_1;
                    });
                    //mencloth=======================================//
                    document.getElementById('mencloth').addEventListener("click", function () {
                        heddinText.innerHTML = " MEN CLOTHS";
                        document.title = "HOME";
                        var listElement = document.getElementById("list");
                        if (listElement) {
                            listElement.style.display = "none";
                        }
                        function fetchAndFilterMenClothing() {
                            return __awaiter(this, void 0, void 0, function () {
                                var menClothing;
                                return __generator(this, function (_a) {
                                    try {
                                        menClothing = data_1.filter(function (product) { return product.category.toLowerCase().includes('men') && !product.category.toLowerCase().includes('women'); });
                                        return [2 /*return*/, menClothing];
                                    }
                                    catch (error) {
                                        throw error;
                                    }
                                    return [2 /*return*/];
                                });
                            });
                        }
                        fetchAndFilterMenClothing()
                            .then(function (menClothingData) {
                            var fulllists = "";
                            //get to data disndig odaer
                            menClothingData.sort(function (a, b) { return parseFloat(b.id) - parseFloat(a.id); });
                            console.log("Dis" + menClothingData);
                            menClothingData.forEach(function (product) {
                                console.log("ID: " + product.id);
                                var price = parseFloat(product.price);
                                // Applying discount based on price
                                if (price > 75) {
                                    price *= 0.9; // 10% discount for prices over $75
                                }
                                else if (price > 30) {
                                    price *= 0.95; // 5% discount for prices over $30
                                }
                                // Formatting price as USD currency
                                var formattedPrice = new Intl.NumberFormat('en-US', {
                                    style: 'currency',
                                    currency: 'USD'
                                }).format(price);
                                var lineThroughClass = price > 30 ? 'line-through' : '';
                                var displayStyle = price > 30 ? 'block' : 'none';
                                fulllists +=
                                    "<div class=\"w-full sm:w-full md:w-1/2 lg:w-1/4 p-4 shadow-md mb-4\">\n                    <a href=\"./productPage.html?id=".concat(product.id, "\"><img src=\"").concat(product.image, "\" class=\"mb-2 h-[300px] p-10 mr-auto ml-auto\" alt=\"").concat(product.title, "\"></a>\n                    <h1 class=\"text-center text-[24px] text-[#f97316]\">").concat(product.category, "</h1>\n                    <p class=\"text-center text-[14px] text-[#94a3b8]\">").concat(product.title, "</p>\n                    <div class=\"flex-1 item center mr-auto mb-auto mt-auto\">\n                    \n                    <h2 class=\"text-center text-[12px] text-[#a31b16]\" style=\"display: ").concat(displayStyle, "\">").concat(formattedPrice, " USD</h2>\n                    <h2 class=\"text-center text-[12px] text-[#16a34a]  ").concat(lineThroughClass, "\">").concat("$", " ").concat(product.price, " USD</h2>\n                </div>\n                    <div class=\"flex justify-center\">\n                        <button class=\"text-center bg-[#f97316] text-[#fff] pr-20 pl-20 pt-2 pb-2 rounded-[20px] font-bold hover:bg-[#ea580c]\" data-id=\"").concat(product.id, "\">Add Cart</button>\n                    </div>\n                </div>");
                                ;
                                // ==== table with new item
                            });
                            // Update the products container with the list of men's clothing
                            document.getElementById('productsContainer').innerHTML = fulllists;
                            setupAddToCartButtons(menClothingData);
                        })
                            .catch(function (error) {
                            console.error('Error:', error);
                        });
                    });
                    //women
                    document.getElementById('womencloth').addEventListener("click", function () {
                        document.title = "WOMEN CLOTHS";
                        heddinText.innerHTML = "WOmen Cloths";
                        var listElement = document.getElementById("list");
                        if (listElement) {
                            listElement.style.display = "none";
                        }
                        function fetchAndFilterWomenClothing() {
                            return __awaiter(this, void 0, void 0, function () {
                                var womenClothing;
                                return __generator(this, function (_a) {
                                    try {
                                        womenClothing = data_1.filter(function (product) { return product.category.toLowerCase().includes('women'); });
                                        return [2 /*return*/, womenClothing];
                                    }
                                    catch (error) {
                                        throw error;
                                    }
                                    return [2 /*return*/];
                                });
                            });
                        }
                        fetchAndFilterWomenClothing()
                            .then(function (womenClothingData) {
                            //get to data disndig odaer
                            womenClothingData.sort(function (a, b) { return parseFloat(b.id) - parseFloat(a.id); });
                            console.log("Dis" + womenClothingData);
                            var fullListswo = "";
                            womenClothingData.forEach(function (product) {
                                console.log("ID: " + product.id);
                                var price = parseFloat(product.price);
                                // Applying discount based on price
                                if (price > 75) {
                                    price *= 0.9; // 10% discount for prices over $75
                                }
                                else if (price > 30) {
                                    price *= 0.95; // 5% discount for prices over $30
                                }
                                // Formatting price as USD currency
                                var formattedPrice = new Intl.NumberFormat('en-US', {
                                    style: 'currency',
                                    currency: 'USD'
                                }).format(price);
                                var lineThroughClass = price > 30 ? 'line-through' : '';
                                var displayStyle = price > 30 ? 'block' : 'none';
                                fullListswo +=
                                    "<div class=\"w-full sm:w-full md:w-1/2 lg:w-1/4 p-4 shadow-md mb-4\">\n                        <a href=\"./productPage.html?id=".concat(product.id, "\">  <img src=\"").concat(product.image, "\" class=\"mb-2 h-[300px] p-10 mr-auto ml-auto\" alt=\"").concat(product.title, "\"></a>\n                            <h1 class=\"text-center text-[24px] text-[#f97316]\">").concat(product.category, "</h1>\n                            <p class=\"text-center text-[14px] text-[#94a3b8]\">").concat(product.title, "</p>\n                            <div class=\"flex-1 item center mr-auto mb-auto mt-auto\">\n                                <h2 class=\"text-center text-[12px] text-[#a31b16]\" style=\"display: ").concat(displayStyle, "\">").concat(formattedPrice, " USD</h2>\n                                <h2 class=\"text-center text-[12px] text-[#16a34a] ").concat(lineThroughClass, "\">").concat("$", " ").concat(product.price, " USD</h2>\n                            </div>\n                            <div class=\"flex justify-center\">\n                                <button class=\"text-center bg-[#f97316] text-[#fff] pr-20 pl-20 pt-2 pb-2 rounded-[20px] font-bold hover:bg-[#ea580c]\" data-id=\"").concat(product.id, "\">Add Cart</button>\n                            </div>\n                        </div>");
                            });
                            // Update the products container with the list of women's clothing
                            document.getElementById('productsContainer').innerHTML = fullListswo;
                            setupAddToCartButtons(womenClothingData);
                        })
                            .catch(function (error) {
                            console.error('Error:', error);
                        });
                    });
                    //juwellary//
                    document.getElementById('jewelery').addEventListener("click", function () {
                        document.title = "JEWELERY";
                        heddinText.innerHTML = "Jewelery";
                        var listElement = document.getElementById("list");
                        if (listElement) {
                            listElement.style.display = "none";
                        }
                        function fetchAndFilterjewelery() {
                            return __awaiter(this, void 0, void 0, function () {
                                var womenClothing;
                                return __generator(this, function (_a) {
                                    try {
                                        womenClothing = data_1.filter(function (product) { return product.category.toLowerCase().includes('jewelery'); });
                                        return [2 /*return*/, womenClothing];
                                    }
                                    catch (error) {
                                        throw error;
                                    }
                                    return [2 /*return*/];
                                });
                            });
                        }
                        fetchAndFilterjewelery()
                            .then(function (JeweleryData) {
                            //get to data disndig odaer
                            JeweleryData.sort(function (a, b) { return parseFloat(b.id) - parseFloat(a.id); });
                            console.log("Dis" + JeweleryData);
                            var fullListswo = "";
                            JeweleryData.forEach(function (product) {
                                console.log("ID: " + product.id);
                                var price = parseFloat(product.price);
                                // Applying discount based on price
                                if (price > 75) {
                                    price *= 0.9; // 10% discount for prices over $75
                                }
                                else if (price > 30) {
                                    price *= 0.95; // 5% discount for prices over $30
                                }
                                // Formatting price as USD currency
                                var formattedPrice = new Intl.NumberFormat('en-US', {
                                    style: 'currency',
                                    currency: 'USD'
                                }).format(price);
                                var lineThroughClass = price > 30 ? 'line-through' : '';
                                var displayStyle = price > 30 ? 'block' : 'none';
                                fullListswo +=
                                    "<div class=\"w-full sm:w-full md:w-1/2 lg:w-1/4 p-4 shadow-md mb-4\">\n                        <a href=\"./productPage.html?id=".concat(product.id, "\"> <img src=\"").concat(product.image, "\" class=\"mb-2 h-[300px] p-10 mr-auto ml-auto\" alt=\"").concat(product.title, "\"></a>\n                            <h1 class=\"text-center text-[24px] text-[#f97316]\">").concat(product.category, "</h1>\n                            <p class=\"text-center text-[14px] text-[#94a3b8]\">").concat(product.title, "</p>\n                            <div class=\"flex-1 item center mr-auto mb-auto mt-auto\">\n                                <h2 class=\"text-center text-[12px] text-[#a31b16]\" style=\"display: ").concat(displayStyle, "\">").concat(formattedPrice, " USD</h2>\n                                <h2 class=\"text-center text-[12px] text-[#16a34a] ").concat(lineThroughClass, "\">").concat("$", " ").concat(product.price, " USD</h2>\n                            </div>\n                            <div class=\"flex justify-center\">\n                                <button class=\"text-center bg-[#f97316] text-[#fff] pr-20 pl-20 pt-2 pb-2 rounded-[20px] font-bold hover:bg-[#ea580c]\" data-id=\"").concat(product.id, "\">Add Cart</button>\n                            </div>\n                        </div>");
                            });
                            // Update the products container with the list of women's clothing
                            document.getElementById('productsContainer').innerHTML = fullListswo;
                            setupAddToCartButtons(JeweleryData);
                        })
                            .catch(function (error) {
                            console.error('Error:', error);
                        });
                    });
                    //electronics//
                    document.getElementById('electronics').addEventListener("click", function () {
                        document.title = "ELECTRONICS";
                        heddinText.innerHTML = "Electronics";
                        var listElement = document.getElementById("list");
                        if (listElement) {
                            listElement.style.display = "none";
                        }
                        function fetchAndFilterElectronics() {
                            return __awaiter(this, void 0, void 0, function () {
                                var womenClothing;
                                return __generator(this, function (_a) {
                                    try {
                                        womenClothing = data_1.filter(function (product) { return product.category.toLowerCase().includes('electronics'); });
                                        return [2 /*return*/, womenClothing];
                                    }
                                    catch (error) {
                                        throw error;
                                    }
                                    return [2 /*return*/];
                                });
                            });
                        }
                        fetchAndFilterElectronics()
                            .then(function (ElectronicsData) {
                            //get to data disndig odaer
                            ElectronicsData.sort(function (a, b) { return parseFloat(b.id) - parseFloat(a.id); });
                            console.log("Dis" + ElectronicsData);
                            var fullListswo = "";
                            ElectronicsData.forEach(function (product) {
                                console.log("ID: " + product.id);
                                var price = parseFloat(product.price);
                                // Applying discount based on price
                                if (price > 75) {
                                    price *= 0.9; // 10% discount for prices over $75
                                }
                                else if (price > 30) {
                                    price *= 0.95; // 5% discount for prices over $30
                                }
                                // Formatting price as USD currency
                                var formattedPrice = new Intl.NumberFormat('en-US', {
                                    style: 'currency',
                                    currency: 'USD'
                                }).format(price);
                                var lineThroughClass = price > 30 ? 'line-through' : '';
                                var displayStyle = price > 30 ? 'block' : 'none';
                                fullListswo +=
                                    "<div class=\"w-full sm:w-full md:w-1/2 lg:w-1/4 p-4 shadow-md mb-4\">\n                    <a href=\"./productPage.html?id=".concat(product.id, "\"><img src=\"").concat(product.image, "\" class=\"mb-2 h-[300px] p-10 mr-auto ml-auto\" alt=\"").concat(product.title, "\"></a>\n                        <h1 class=\"text-center text-[24px] text-[#f97316]\">").concat(product.category, "</h1>\n                        <p class=\"text-center text-[14px] text-[#94a3b8]\">").concat(product.title, "</p>\n                        <div class=\"flex-1 item center mr-auto mb-auto mt-auto\">\n                            <h2 class=\"text-center text-[12px] text-[#a31b16]\" style=\"display: ").concat(displayStyle, "\">").concat(formattedPrice, " USD</h2>\n                            <h2 class=\"text-center text-[12px] text-[#16a34a] ").concat(lineThroughClass, "\">").concat("$", " ").concat(product.price, " USD</h2>\n                        </div>\n                        <div class=\"flex justify-center\">\n                            <button class=\"text-center bg-[#f97316] text-[#fff] pr-20 pl-20 pt-2 pb-2 rounded-[20px] font-bold hover:bg-[#ea580c]\" data-id=\"").concat(product.id, "\">Add Cart</button>\n                        </div>\n                    </div>");
                            });
                            // Update the products container with the list of women's clothing
                            document.getElementById('productsContainer').innerHTML = fullListswo;
                            setupAddToCartButtons(ElectronicsData);
                        })
                            .catch(function (error) {
                            console.error('Error:', error);
                        });
                    });
                    return [3 /*break*/, 5];
                case 4:
                    error_1 = _a.sent();
                    console.error("Error fetching data:", error_1);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
/*function myFunction() {
    alert('Button clicked!');
}

// Get a reference to the button element
const button = document.getElementById('myButton');

// Add a click event listener to the button element
mencloth.addEventListener('click', myFunction);*/
// fetchDat
fetchData();
