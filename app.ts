let tablecartdata: string = "";
let datasfilter:string="";
let x: number = 0;
//let mencloth=document.getElementById("mencloth") as HTMLAnchorElement;
let heddinText= document.getElementById("txt-main")!as HTMLHeadElement;
let zeroicon= document.getElementById("zero")!as HTMLHeadElement;
let msgcartemtyBox=document.getElementById("msg-cart-emty")! as HTMLDivElement;
function navDisplayNone(){
    document.getElementById('nav-box')!.style.display = 'none';
}
function navDisplay(){
    document.getElementById('nav-box')!.style.display = 'flex';
}
async function fetchData(): Promise<void> {
   //nav/
  document.getElementById('btn-menu')!.addEventListener("click", function() {
    navDisplay();
    document.getElementById('menu-close')!.style.display = 'none';
});
document.getElementById('menu-close')!.addEventListener("click", function() {
    document.getElementById('btn-menu')!.style.display = 'flex';
    document.getElementById('menu-close')!.style.display = 'none';
    navDisplayNone();
});
document.getElementById('btn-menu')!.addEventListener("click", function() {
    document.getElementById('btn-menu')!.style.display = 'none';
    document.getElementById('menu-close')!.style.display = 'flex';
});

    try {
        const response: Response = await fetch("https://fakestoreapi.com/products");
        const data: any[] = await response.json();
        let fulllist: string = "";

        data.forEach((item: any) => {
            let price = parseFloat(item.price);

            // Applying discount based on price
            if (price > 75) {
                price *= 0.9; // 10% discount for prices over $75
            } else if (price > 30) {
                price *= 0.95; // 5% discount for prices over $30
            }

            // Formatting price as USD currency
            let formattedPrice = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD'
            }).format(price);
            let lineThroughClass = price > 30 ? 'line-through' : '';
            let displayStyle = price > 30 ? 'block' : 'none';
      
          
            fulllist +=
                `<div class="w-full sm:w-full md:w-1/2 lg:w-1/4 p-4 shadow-md mb-4">
                <a href="./productPage.html?id=${item.id}">
                <img src="${item.image}" class="mb-2 h-[300px] p-10 mr-auto ml-auto" alt="${item.title}">
                    <h1 class="text-center text-[24px] text-[#f97316]">${item.category}</h1></a>
                    <p class="text-center text-[14px] text-[#94a3b8]">${item.title}</p>
                    <h2 class="text-center text-[12px] text-[#a31b16]" style="display: ${displayStyle}">${formattedPrice} USD</h2>
                        <h2 class="text-center text-[12px] text-[#16a34a]  ${lineThroughClass}">${"$"} ${item.price} USD</h2>
                    <div class="flex justify-center">
                        <button class="text-center bg-[#f97316] text-[#fff] pr-20 pl-20 pt-2 pb-2 rounded-[20px] font-bold hover:bg-[#ea580c]" data-id="${item.id}">Add Cart</button>
                    </div>
                </div>`;
        });

        document.getElementById("productsContainer")!.innerHTML = fulllist;

        function setupAddToCartButtons(data: any[]): void {
            let x = 0;
            let tablecartdata = '';
        
            const addCartButtons: NodeList = document.querySelectorAll('[data-id]');
            document.getElementById('btn-colose')!.addEventListener("click", function() {
                document.getElementById('ta')!.style.display = 'none';
            });
            addCartButtons.forEach((value: Node) => {
                const button = value as HTMLElement;
                button.addEventListener("click", () => {
                    x++;
                    const itemId: string | null = button.getAttribute("data-id");
                    const selectedItem: any = data.find((item: any) => item.id == itemId);
        
                    console.log(selectedItem.id);
                    document.getElementById('zero')!.innerHTML = x.toString();
        
                    //======= "Add Cart" button click event
                  
                        let price = parseFloat(selectedItem.price);
        
                        // Applying discount based on price
                        if (price > 75) {
                            price *= 0.9; // 10% discount for prices over $75
                        } else if (price > 30) {
                            price *= 0.95; // 5% discount for prices over $30
                        }
        
                        // Formatting price as USD currency
                        let formattedPrice = new Intl.NumberFormat('en-US', {
                            style: 'currency',
                            currency: 'USD'
                        }).format(price);
                        let lineThroughClass = price > 30 ? 'line-through' : '';
                        let displayStyle = price > 30 ? 'block' : 'none';
                        tablecartdata += `
                            <div class="flex w-full shadow-md mb-4">
                                <div class="flex-1 hidden">
                                    <h2>${selectedItem.id}</h2>
                                </div>
                                <div class="flex-1  mr-auto flex items-center justify-center">
                                    <img src="${selectedItem.image}" class="w-[50px]  mt-3">
                                </div>
                                <div class="flex-1 item center mr-auto mb-auto mt-auto">
                                    <h2 class="text-[20px]">${selectedItem.category}</h2>
                                   <h2 class="text-[12px] text-[#a31b16]" style="display: ${displayStyle}">${formattedPrice} USD</h2>
                                    <h2 class="text-[12px] text-[#16a34a]  ${lineThroughClass}">${"$"} ${selectedItem.price} USD</h2>
                                </div>
                               
                                <div class="ml-auto mb-auto mt-auto">
                                    <button class="pr-5 pl-5 pt-2 pb-2 bg-[#22c55e] text-[12px] text-white rounded btn-delete cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                  </svg>
                                  </button>
                                </div>
                            </div>`;
        
                        // ==== table with new item
                        document.getElementById('table')!.innerHTML = tablecartdata;
        
                        // == delete button
                        const deleteButtons: NodeListOf<HTMLElement> = document.querySelectorAll('.btn-delete');
                        deleteButtons.forEach((button: HTMLElement) => {
                            button.addEventListener("click", () => {
                                const parentElement = button.parentElement?.parentElement;
                                if (parentElement) {
                                    x--;
                                    document.getElementById('zero')!.innerHTML = x.toString();
                                    const row: HTMLElement | null = parentElement;
                                    row.remove();
                                }
                            });
                        });
                   
                });
                
                document.getElementById('zero')!.addEventListener("click", function() {
                    document.getElementById('ta')!.style.display = 'block';
                    document.getElementById('table')!.innerHTML = tablecartdata;
                    if (zeroicon.textContent === '0') {
                        document.getElementById('ta')!.style.display = 'none';
                        msgcartemtyBox.style.display='block';
                    }
                });
            });
        }

        
        setupAddToCartButtons(data);
        // Example usage:
        // Call this function passing the 'data' array as argument
        // setupAddToCartButtons(data);
        
        //mencloth=======================================//
       
         // Example usage

         document.getElementById('home')!.addEventListener("click", () => {
            document.title = "HOME";
            heddinText.innerHTML="Home";
            const listElement = document.getElementById("list");
            if (listElement) {
                listElement.style.display = "block";
            }});

       // Define a function that will be called when the button is clicked


document.getElementById('home')!.addEventListener("click", () => {
   
    document.getElementById("productsContainer")!.innerHTML = fulllist;
   
});
     




//mencloth=======================================//
        document.getElementById('mencloth')!.addEventListener("click", () => {
            heddinText.innerHTML=" MEN CLOTHS";
            document.title = "HOME";
            const listElement = document.getElementById("list");
            if (listElement) {
                listElement.style.display = "none";
            }

            async function fetchAndFilterMenClothing(): Promise<void[]> {
        
                try {
                    // const response = await fetch('https://fakestoreapi.com/products');
                    // const data: Prod[] = await response.json();
        
                    // Filter data for men's clothing
                    const menClothing = data.filter(product => product.category.toLowerCase().includes('men') && !product.category.toLowerCase().includes('women'));
                    
                    return menClothing;
                } catch (error) {
                    throw error;
                }
            }
        
            fetchAndFilterMenClothing()
               .then(menClothingData => {
                let fulllists: string = "";
                //get to data disndig odaer
                menClothingData.sort((a: any, b: any) => parseFloat(b.id) - parseFloat(a.id));
               console.log("Dis"+menClothingData);
                menClothingData.forEach((product:any) => {
                    
                    console.log("ID: " + product.id);
                    let price = parseFloat(product.price);

                    // Applying discount based on price
                    if (price > 75) {
                        price *= 0.9; // 10% discount for prices over $75
                    } else if (price > 30) {
                        price *= 0.95; // 5% discount for prices over $30
                    }

                    // Formatting price as USD currency
                    let formattedPrice = new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD'
                    }).format(price);
                    let lineThroughClass = price > 30 ? 'line-through' : '';
                    let displayStyle = price > 30 ? 'block' : 'none';
                    fulllists += 
                    `<div class="w-full sm:w-full md:w-1/2 lg:w-1/4 p-4 shadow-md mb-4">
                    <a href="./productPage.html?id=${product.id}"><img src="${product.image}" class="mb-2 h-[300px] p-10 mr-auto ml-auto" alt="${product.title}"></a>
                    <h1 class="text-center text-[24px] text-[#f97316]">${product.category}</h1>
                    <p class="text-center text-[14px] text-[#94a3b8]">${product.title}</p>
                    <div class="flex-1 item center mr-auto mb-auto mt-auto">
                    
                    <h2 class="text-center text-[12px] text-[#a31b16]" style="display: ${displayStyle}">${formattedPrice} USD</h2>
                    <h2 class="text-center text-[12px] text-[#16a34a]  ${lineThroughClass}">${"$"} ${product.price} USD</h2>
                </div>
                    <div class="flex justify-center">
                        <button class="text-center bg-[#f97316] text-[#fff] pr-20 pl-20 pt-2 pb-2 rounded-[20px] font-bold hover:bg-[#ea580c]" data-id="${product.id}">Add Cart</button>
                    </div>
                </div>`;;

                // ==== table with new item
               
                });
    
                // Update the products container with the list of men's clothing
                document.getElementById('productsContainer')!.innerHTML = fulllists;
                setupAddToCartButtons(menClothingData);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });
      //women
    document.getElementById('womencloth')!.addEventListener("click", () => {
        document.title = "WOMEN CLOTHS";
        heddinText.innerHTML="WOmen Cloths";
        const listElement = document.getElementById("list");
        if (listElement) {
            listElement.style.display = "none";
        }
    
        async function fetchAndFilterWomenClothing(): Promise<any[]> {
            try {
                
    
                // Filter data for women's clothing
                const womenClothing = data.filter(product => product.category.toLowerCase().includes('women'));
                return womenClothing;
            } catch (error) {
                throw error;
            }
        }
       
        fetchAndFilterWomenClothing()
            .then(womenClothingData => {
                //get to data disndig odaer
                womenClothingData.sort((a: any, b: any) => parseFloat(b.id) - parseFloat(a.id));
               console.log("Dis"+womenClothingData);
                let fullListswo: string = "";
                
                womenClothingData.forEach(product => {
                    console.log("ID: " + product.id);
                    let price = parseFloat(product.price);
    
                    // Applying discount based on price
                    if (price > 75) {
                        price *= 0.9; // 10% discount for prices over $75
                    } else if (price > 30) {
                        price *= 0.95; // 5% discount for prices over $30
                    }
    
                    // Formatting price as USD currency
                    let formattedPrice = new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD'
                    }).format(price);
    
                    let lineThroughClass = price > 30 ? 'line-through' : '';
                    let displayStyle = price > 30 ? 'block' : 'none';
    
                    fullListswo +=
                        `<div class="w-full sm:w-full md:w-1/2 lg:w-1/4 p-4 shadow-md mb-4">
                        <a href="./productPage.html?id=${product.id}">  <img src="${product.image}" class="mb-2 h-[300px] p-10 mr-auto ml-auto" alt="${product.title}"></a>
                            <h1 class="text-center text-[24px] text-[#f97316]">${product.category}</h1>
                            <p class="text-center text-[14px] text-[#94a3b8]">${product.title}</p>
                            <div class="flex-1 item center mr-auto mb-auto mt-auto">
                                <h2 class="text-center text-[12px] text-[#a31b16]" style="display: ${displayStyle}">${formattedPrice} USD</h2>
                                <h2 class="text-center text-[12px] text-[#16a34a] ${lineThroughClass}">${"$"} ${product.price} USD</h2>
                            </div>
                            <div class="flex justify-center">
                                <button class="text-center bg-[#f97316] text-[#fff] pr-20 pl-20 pt-2 pb-2 rounded-[20px] font-bold hover:bg-[#ea580c]" data-id="${product.id}">Add Cart</button>
                            </div>
                        </div>`;
                      
                });
    
                // Update the products container with the list of women's clothing
                document.getElementById('productsContainer')!.innerHTML = fullListswo;
                setupAddToCartButtons(womenClothingData);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });
    
 //juwellary//
    document.getElementById('jewelery')!.addEventListener("click", () => {
        document.title = "JEWELERY";
        heddinText.innerHTML="Jewelery";
        const listElement = document.getElementById("list");
        if (listElement) {
            listElement.style.display = "none";
        }
    
        async function fetchAndFilterjewelery(): Promise<any[]> {
            try {
                
    
                // Filter data for women's clothing
                const womenClothing = data.filter(product => product.category.toLowerCase().includes('jewelery'));
                return womenClothing;
            } catch (error) {
                throw error;
            }
        }
    
        fetchAndFilterjewelery()
            .then(JeweleryData => {
                //get to data disndig odaer
                JeweleryData.sort((a: any, b: any) => parseFloat(b.id) - parseFloat(a.id));
               console.log("Dis"+JeweleryData);
                let fullListswo: string = "";
                JeweleryData.forEach(product => {
                    console.log("ID: " + product.id);
                    let price = parseFloat(product.price);
    
                    // Applying discount based on price
                    if (price > 75) {
                        price *= 0.9; // 10% discount for prices over $75
                    } else if (price > 30) {
                        price *= 0.95; // 5% discount for prices over $30
                    }
    
                    // Formatting price as USD currency
                    let formattedPrice = new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD'
                    }).format(price);
    
                    let lineThroughClass = price > 30 ? 'line-through' : '';
                    let displayStyle = price > 30 ? 'block' : 'none';
    
                    fullListswo +=
                        `<div class="w-full sm:w-full md:w-1/2 lg:w-1/4 p-4 shadow-md mb-4">
                        <a href="./productPage.html?id=${product.id}"> <img src="${product.image}" class="mb-2 h-[300px] p-10 mr-auto ml-auto" alt="${product.title}"></a>
                            <h1 class="text-center text-[24px] text-[#f97316]">${product.category}</h1>
                            <p class="text-center text-[14px] text-[#94a3b8]">${product.title}</p>
                            <div class="flex-1 item center mr-auto mb-auto mt-auto">
                                <h2 class="text-center text-[12px] text-[#a31b16]" style="display: ${displayStyle}">${formattedPrice} USD</h2>
                                <h2 class="text-center text-[12px] text-[#16a34a] ${lineThroughClass}">${"$"} ${product.price} USD</h2>
                            </div>
                            <div class="flex justify-center">
                                <button class="text-center bg-[#f97316] text-[#fff] pr-20 pl-20 pt-2 pb-2 rounded-[20px] font-bold hover:bg-[#ea580c]" data-id="${product.id}">Add Cart</button>
                            </div>
                        </div>`;
                });
    
                // Update the products container with the list of women's clothing
                document.getElementById('productsContainer')!.innerHTML = fullListswo;
                
                setupAddToCartButtons(JeweleryData);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });  
    
    


  //electronics//
  document.getElementById('electronics')!.addEventListener("click", () => {
    document.title = "ELECTRONICS";
    heddinText.innerHTML="Electronics";
    const listElement = document.getElementById("list");
    if (listElement) {
        listElement.style.display = "none";
    }

    async function fetchAndFilterElectronics(): Promise<any[]> {
        try {
            

            // Filter data for women's clothing
            const womenClothing = data.filter(product => product.category.toLowerCase().includes('electronics'));
            return womenClothing;
        } catch (error) {
            throw error;
        }
    }

    fetchAndFilterElectronics()
        .then(ElectronicsData => {
              //get to data disndig odaer
              ElectronicsData.sort((a: any, b: any) => parseFloat(b.id) - parseFloat(a.id));
              console.log("Dis"+ElectronicsData);
            let fullListswo: string = "";
            ElectronicsData.forEach(product => {
                console.log("ID: " + product.id);
                let price = parseFloat(product.price);

                // Applying discount based on price
                if (price > 75) {
                    price *= 0.9; // 10% discount for prices over $75
                } else if (price > 30) {
                    price *= 0.95; // 5% discount for prices over $30
                }

                // Formatting price as USD currency
                let formattedPrice = new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD'
                }).format(price);

                let lineThroughClass = price > 30 ? 'line-through' : '';
                let displayStyle = price > 30 ? 'block' : 'none';

                fullListswo +=
                    `<div class="w-full sm:w-full md:w-1/2 lg:w-1/4 p-4 shadow-md mb-4">
                    <a href="./productPage.html?id=${product.id}"><img src="${product.image}" class="mb-2 h-[300px] p-10 mr-auto ml-auto" alt="${product.title}"></a>
                        <h1 class="text-center text-[24px] text-[#f97316]">${product.category}</h1>
                        <p class="text-center text-[14px] text-[#94a3b8]">${product.title}</p>
                        <div class="flex-1 item center mr-auto mb-auto mt-auto">
                            <h2 class="text-center text-[12px] text-[#a31b16]" style="display: ${displayStyle}">${formattedPrice} USD</h2>
                            <h2 class="text-center text-[12px] text-[#16a34a] ${lineThroughClass}">${"$"} ${product.price} USD</h2>
                        </div>
                        <div class="flex justify-center">
                            <button class="text-center bg-[#f97316] text-[#fff] pr-20 pl-20 pt-2 pb-2 rounded-[20px] font-bold hover:bg-[#ea580c]" data-id="${product.id}">Add Cart</button>
                        </div>
                    </div>`;
            });

            // Update the products container with the list of women's clothing
            document.getElementById('productsContainer')!.innerHTML = fullListswo;
          
            setupAddToCartButtons(ElectronicsData);
        })

        .catch(error => {
            console.error('Error:', error);
        });
}); 



        // Add a click event listener to the button element
        //mencloth.addEventListener('click', fetchAndFilterMenClothing);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
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