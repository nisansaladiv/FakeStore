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
var x = 0;
mencloth = document.getElementById("mencloth");
function fetchData() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data_1, fulllist_1, addCartButtons, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("https://fakestoreapi.com/products")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
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
                            "<div class=\"w-full sm:w-full md:w-1/2 lg:w-1/4 p-4 shadow-md mb-4\">\n                    <img src=\"".concat(item.image, "\" class=\"mb-2 h-[300px] p-10 mr-auto ml-auto\" alt=\"").concat(item.title, "\">\n                    <h1 class=\"text-center text-[24px] text-[#f97316]\">").concat(item.category, "</h1>\n                    <p class=\"text-center text-[14px] text-[#94a3b8]\">").concat(item.title, "</p>\n                    <h2 class=\"text-center text-[12px] text-[#a31b16]\" style=\"display: ").concat(displayStyle, "\">").concat(formattedPrice, " USD</h2>\n                        <h2 class=\"text-center text-[12px] text-[#16a34a]  ").concat(lineThroughClass, "\">").concat("$", " ").concat(item.price, " USD</h2>\n                    <div class=\"flex justify-center\">\n                        <button class=\"text-center bg-[#f97316] text-[#fff] pr-20 pl-20 pt-2 pb-2 rounded-[20px] font-bold hover:bg-[#ea580c]\" data-id=\"").concat(item.id, "\">Add Cart</button>\n                    </div>\n                </div>");
                    });
                    document.getElementById("list").innerHTML = fulllist_1;
                    addCartButtons = document.querySelectorAll('[data-id]');
                    addCartButtons.forEach(function (value, key, parent) {
                        var button = value;
                        button.addEventListener("click", function () {
                            x++;
                            var itemId = button.getAttribute("data-id");
                            //const selectedItem: any = data.find((item: any) => item.id == itemId);
                            var selectedItem = data_1.find(function (item) { return item.id == itemId; });
                            console.log(selectedItem.id);
                            document.getElementById('zero').innerHTML = x.toString();
                            //======= "Add Cart" button click event
                            document.getElementById('zero').addEventListener("click", function () {
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
                                tablecartdata += "\n                        <div class=\"flex w-full shadow-md mb-4\">\n                            <div class=\"flex-1 hidden\">\n                                <h2>".concat(selectedItem.id, "</h2>\n                            </div>\n                            <div class=\"flex-1  mr-auto flex items-center justify-center\">\n                                <img src=\"").concat(selectedItem.image, "\" class=\"w-[50px]  mt-3\">\n                            </div>\n                            <div class=\"flex-1 item center mr-auto mb-auto mt-auto\">\n                                <h2 class=\"text-[20px]\">").concat(selectedItem.category, "</h2>\n                               <h2 class=\"text-[12px] text-[#a31b16]\" style=\"display: ").concat(displayStyle, "\">").concat(formattedPrice, " USD</h2>\n                                <h2 class=\"text-[12px] text-[#16a34a]  ").concat(lineThroughClass, "\">").concat("$", " ").concat(selectedItem.price, " USD</h2>\n                            </div>\n                           \n                            <div class=\"ml-auto mb-auto mt-auto\">\n                                <button class=\"pr-5 pl-5 pt-2 pb-2 bg-[#22c55e] text-[12px] text-white rounded btn-delete cursor-pointer\"><svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"w-6 h-6\">\n                                <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0\" />\n                              </svg>\n                              </button>\n                            </div>\n                        </div>");
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
                        });
                    });
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error("Error fetching data:", error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
// Define the URL of the Feckstore API endpoint
var apiUrl = 'https://api.feckstore.com/products';
// Function to fetch products from the Feckstore API
function fetchProducts() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch(apiUrl)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
                case 3:
                    error_2 = _a.sent();
                    console.error('Error fetching products:', error_2);
                    return [2 /*return*/, []];
                case 4: return [2 /*return*/];
            }
        });
    });
}
// Function to fetch products from the API
function fetchProducts() {
    return __awaiter(this, void 0, void 0, function () {
        var response, products, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch('https://example.com/api/products')];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error('Failed to fetch products');
                    }
                    return [4 /*yield*/, response.json()];
                case 2:
                    products = _a.sent();
                    return [2 /*return*/, products];
                case 3:
                    error_3 = _a.sent();
                    console.error('Error fetching products:', error_3);
                    return [2 /*return*/, []];
                case 4: return [2 /*return*/];
            }
        });
    });
}
// Function to render products on the page
function renderProducts(products) {
    var productListElement = document.getElementById('productList');
    if (productListElement) {
        productListElement.innerHTML = ''; // Clear existing list
        products.forEach(function (product) {
            var li = document.createElement('li');
            li.textContent = "".concat(product.name, " - $").concat(product.price);
            productListElement.appendChild(li);
        });
    }
}
// Function to handle button click event
function handleButtonClick() {
    return __awaiter(this, void 0, void 0, function () {
        var products;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetchProducts()];
                case 1:
                    products = _a.sent();
                    renderProducts(products);
                    return [2 /*return*/];
            }
        });
    });
}
// Add event listener to the button
var fetchButton = document.getElementById('fetchButton');
if (fetchButton) {
    fetchButton.addEventListener('click', handleButtonClick);
}
// fetchDat
fetchData();
