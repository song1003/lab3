var products = [
	{
		name: "brocoli",
		lactose_intolerant: false,
		nut_allergies: false,
		organic_products: true,
		nonorganic_products: false,
		sale:true,
		price: 2.11
	},
	{
		name: "egg",
		lactose_intolerant: false,
		nut_allergies: false,
		organic_products: false,
		nonorganic_products: true,
		sale:false,
		price: 2.99
	},
	{
		name: "ice cream",
		lactose_intolerant: true,
		nut_allergies: false,
		organic_products: false,
		nonorganic_products: true,
		sale:true,
		price: 3.35
	},
	{
		name: "cabbage",
		lactose_intolerant: false,
		nut_allergies: false,
		organic_products: true,
		nonorganic_products: false,
		sale:false,
		price: 4.99
	},
	{
		name: "milk",
		lactose_intolerant: true,
		nut_allergies: false,
		organic_products: false,
		nonorganic_products: true,
		sale:true,
		price: 5.00
	},
	{
		name: "lettuce",
		lactose_intolerant: false,
		nut_allergies: false,
		organic_products: true,
		nonorganic_products: false,
		sale:true,
		price: 6.89
	},
	{
		name: "seasoning",
		lactose_intolerant: true,
		nut_allergies: false,
		organic_products: false,
		nonorganic_products: true,
		sale:false,
		price: 7.00
	},
	{
		name: "peanut oil",
		lactose_intolerant: false,
		nut_allergies: true,
		organic_products: false,
		nonorganic_products: true,
		sale:false,
		price: 12.99
	},
	{
		name: "salmon",
		lactose_intolerant: false,
		nut_allergies: false,
		organic_products: false,
		nonorganic_products: true,
		sale:true,
		price: 14.00
	},
	{
		name: "ginger",
		lactose_intolerant: false,
		nut_allergies: false,
		organic_products: false,
		nonorganic_products: true,
		sale:false,
		price: 15.99
	}
];

function restrictListProducts(prods, restriction1, restriction2, restriction3, restriction4) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction1 == "lactose-intolerant") && (prods[i].lactose_intolerant == false) && (restriction2 == "nut allergies") && (prods[i].nut_allergies == false) && (restriction3 == "organic products") && (prods[i].organic_products == true) && (restriction4 == "sale products") && (prods[i].sale == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction1 == "lactose-intolerant") && (prods[i].lactose_intolerant == false) && (restriction2 == "nut allergies") && (prods[i].nut_allergies == false) && (restriction3 == "organic products") && (prods[i].organic_products == true) && (restriction4 == "")){
			product_names.push(prods[i].name);
		}
		else if ((restriction1 == "lactose-intolerant") && (prods[i].lactose_intolerant == false) && (restriction2 == "nut allergies") && (prods[i].nut_allergies == false) && (restriction3 == "non-organic products") && (prods[i].nonorganic_products == true) && (restriction4 == "sale products") && (prods[i].sale == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction1 == "lactose-intolerant") && (prods[i].lactose_intolerant == false) && (restriction2 == "nut allergies") && (prods[i].nut_allergies == false) && (restriction3 == "non-organic products") && (prods[i].nonorganic_products == true) && (restriction4 == "")){
			product_names.push(prods[i].name);
		}
		else if ((restriction1 == "lactose-intolerant") && (prods[i].lactose_intolerant == false) && (restriction2 == "nut allergies") && (prods[i].nut_allergies == false) && (restriction3 == "") && (restriction4 == "sale products") && (prods[i].sale == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction1 == "lactose-intolerant") && (prods[i].lactose_intolerant == false) && (restriction2 == "nut allergies") && (prods[i].nut_allergies == false) && (restriction3 == "") && (restriction4 == "")){
			product_names.push(prods[i].name);
		}
		else if ((restriction1 == "lactose-intolerant") && (prods[i].lactose_intolerant == false) && (restriction2 == "") && (restriction3 == "organic products") && (prods[i].organic_products == true) && (restriction4 == "sale products") && (prods[i].sale == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction1 == "lactose-intolerant") && (prods[i].lactose_intolerant == false) && (restriction2 == "") && (restriction3 == "organic products") && (prods[i].organic_products == true) && (restriction4 == "")){
			product_names.push(prods[i].name);
		}
		else if ((restriction1 == "lactose-intolerant") && (prods[i].lactose_intolerant == false) && (restriction2 == "") && (restriction3 == "non-organic products") && (prods[i].nonorganic_products == true) && (restriction4 == "sale products") && (prods[i].sale == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction1 == "lactose-intolerant") && (prods[i].lactose_intolerant == false) && (restriction2 == "") && (restriction3 == "non-organic products") && (prods[i].nonorganic_products == true) && (restriction4 == "")){
			product_names.push(prods[i].name);
		}
		else if ((restriction1 == "lactose-intolerant") && (prods[i].lactose_intolerant == false) && (restriction2 == "") && (restriction3 == "") && (restriction4 == "sale products") && (prods[i].sale == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction1 == "lactose-intolerant") && (prods[i].lactose_intolerant == false) && (restriction2 == "") && (restriction3 == "") && (restriction4 == "")){
			product_names.push(prods[i].name);
		}
		else if ((restriction1 == "nut allergies") && (prods[i].nut_allergies == false) && (restriction2 == "") && (restriction3 == "organic products") && (prods[i].organic_products == true) && (restriction4 == "sale products") && (prods[i].sale == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction1 == "nut allergies") && (prods[i].nut_allergies == false) && (restriction2 == "") && (restriction3 == "organic products") && (prods[i].organic_products == true) && (restriction4 == "")){
			product_names.push(prods[i].name);
		}
		else if ((restriction1 == "nut allergies") && (prods[i].nut_allergies == false) && (restriction2 == "") && (restriction3 == "non-organic products") && (prods[i].nonorganic_products == true) && (restriction4 == "sale products") && (prods[i].sale == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction1 == "nut allergies") && (prods[i].nut_allergies == false) && (restriction2 == "") && (restriction3 == "non-organic products") && (prods[i].nonorganic_products == true) && (restriction4 == "")){
			product_names.push(prods[i].name);
		}
		else if ((restriction1 == "nut allergies") && (prods[i].nut_allergies == false) && (restriction2 == "") && (restriction3 == "") && (restriction4 == "sale products") && (prods[i].sale == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction1 == "nut allergies") && (prods[i].nut_allergies == false) && (restriction2 == "") && (restriction3 == "") && (restriction4 == "")){
			product_names.push(prods[i].name);
		}
		else if ((restriction1 == "none") && (restriction2 == "") && (restriction3 == "organic products") && (prods[i].organic_products == true) && (restriction4 == "sale products") && (prods[i].sale == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction1 == "none") && (restriction2 == "") && (restriction3 == "organic products") && (prods[i].organic_products == true) && (restriction4 == "")){
			product_names.push(prods[i].name);
		}
		else if ((restriction1 == "none") && (restriction2 == "") && (restriction3 == "non-organic products") && (prods[i].nonorganic_products == true) && (restriction4 == "sale products") && (prods[i].sale == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction1 == "none") && (restriction2 == "") && (restriction3 == "non-organic products") && (prods[i].nonorganic_products == true) && (restriction4 == "")){
			product_names.push(prods[i].name);
		}
		else if ((restriction1 == "none") && (restriction2 == "") && (restriction3 == "") && (restriction4 == "sale products") && (prods[i].sale == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction1 == "none") && (restriction2 == "") && (restriction3 == "") && (restriction4 == "")){
			product_names.push(prods[i].name);
		}
	}
	return product_names;
}

function restrictListPrices(prods, restriction1, restriction2, restriction3) {
	let prices = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction1 == "lactose-intolerant") && (prods[i].lactose_intolerant == false) && (restriction2 == "nut allergies") && (prods[i].nut_allergies == false) && (restriction3 == "organic products") && (prods[i].organic_products == true)){
			prices.push(prods[i].price);
		}
		else if ((restriction1 == "lactose-intolerant") && (prods[i].lactose_intolerant == false) && (restriction2 == "nut allergies") && (prods[i].nut_allergies == false) && (restriction3 == "non-organic products") && (prods[i].nonorganic_products == true)){
			prices.push(prods[i].price);
		}
		else if ((restriction1 == "lactose-intolerant") && (prods[i].lactose_intolerant == false) && (restriction2 == "nut allergies") && (prods[i].nut_allergies == false) && (restriction3 == "")){
			prices.push(prods[i].price);
		}
		else if ((restriction1 == "lactose-intolerant") && (prods[i].lactose_intolerant == false) && (restriction2 == "") && (restriction3 == "organic products") && (prods[i].organic_products == true)){
			prices.push(prods[i].price);
		}
		else if ((restriction1 == "lactose-intolerant") && (prods[i].lactose_intolerant == false) && (restriction2 == "") && (restriction3 == "non-organic products") && (prods[i].nonorganic_products == true)){
			prices.push(prods[i].price);
		}
		else if ((restriction1 == "lactose-intolerant") && (prods[i].lactose_intolerant == false) && (restriction2 == "") && (restriction3 == "")){
			prices.push(prods[i].price);
		}
		else if ((restriction1 == "nut allergies") && (prods[i].nut_allergies == false) && (restriction2 == "") && (restriction3 == "organic products") && (prods[i].organic_products == true)){
			prices.push(prods[i].price);
		}
		else if ((restriction1 == "nut allergies") && (prods[i].nut_allergies == false) && (restriction2 == "") && (restriction3 == "non-organic products") && (prods[i].nonorganic_products == true)){
			prices.push(prods[i].price);
		}
		else if ((restriction1 == "nut allergies") && (prods[i].nut_allergies == false) && (restriction2 == "") && (restriction3 == "")){
			prices.push(prods[i].price);
		}
		else if ((restriction1 == "none") && (restriction2 == "") && (restriction3 == "organic products") && (prods[i].organic_products == true)){
			prices.push(prods[i].price);
		}
		else if ((restriction1 == "none") && (restriction2 == "") && (restriction3 == "non-organic products") && (prods[i].nonorganic_products == true)){
			prices.push(prods[i].price);
		}
		else if ((restriction1 == "none") && (restriction2 == "") && (restriction3 == "")){
			prices.push(prods[i].price);
		}
	}
	return prices;
}


function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}