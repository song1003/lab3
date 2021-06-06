
function openInfo(evt, buttonName){

	div2 = document.getElementsByClassName("div2");
	for (var i = 0; i < div2.length; i++) {
		div2[i].style.display = "none";
	}

	buttons = document.getElementsByClassName("buttons");
	for (var i = 0; i < buttons.length; i++) {
		buttons[i].className = buttons[i].className.replace(" active","");
	}

	document.getElementById(buttonName).style.display = "block";
	evt.currentTarget.className += " active";
}

function openInfo1(evt, buttonName, num){

	div2 = document.getElementsByClassName("div2");
	for (var i = 0; i < div2.length; i++) {
		div2[i].style.display = "none";
	}

	buttons = document.getElementsByClassName("buttons");
	for (var i = 0; i < buttons.length; i++) {
		buttons[i].className = buttons[i].className.replace(" active","");
	}

	document.getElementById(buttonName).style.display = "block";
	//for (var j = 0; j < buttons.length; j++) {
	buttons[num].className += " active";
	
	//evt.currentTarget.className += " active";
}

function populateListProductChoices(slct1, slct2, slct3, slct4, slct5) {
    //var s1 = document.getElementById(slct1);
    var s2 = document.getElementById(slct5);
	
    s2.innerHTML = "";
		
    var optionArray = restrictListProducts(products, slct1, slct2, slct3, slct4);
    var optionArray2 = restrictListPrices(products, slct1, slct2, slct3, slct4);
		
	for (i = 0; i < optionArray.length; i++) {
			
		var productName = optionArray[i];
		var productPrice = optionArray2[i];
		
		//var para = document.createElement("P");
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "sproduct";
		checkbox.value = productName;
		s2.appendChild(checkbox);
		
		var label = document.createElement('label')
		label.htmlFor = productName;
		label.appendChild(document.createTextNode(productName));
		s2.appendChild(label);
		s2.appendChild(document.createElement("br")); 

		var para = document.createElement("strong");
		para.innerHTML = "Price : ";
		para.appendChild(document.createTextNode(productPrice.toString()));
		s2.appendChild(para);
		
		s2.appendChild(document.createElement("br"));    
	}
}

function selectedDietaryRestrictionsAndPreference(){
	var ele = document.getElementsByName("restrictions");
	var ele1 = document.getElementsByName("organic");
	var ele2 = document.getElementsByName("onSale");
	if((ele[0].checked)&&(ele[1].checked)&&(ele1[0].checked)&&(ele2[0].checked)){
		populateListProductChoices("lactose-intolerant","nut allergies","organic products","sale products",'product')
	}
	else if((ele[0].checked)&&(ele[1].checked)&&(ele1[0].checked)&&(ele2[1].checked)){
		populateListProductChoices("lactose-intolerant","nut allergies","organic products","",'product')
	}
	else if((ele[0].checked)&&(ele[1].checked)&&(ele1[1].checked)&&(ele2[0].checked)){
		populateListProductChoices("lactose-intolerant","nut allergies","non-organic products","sale products",'product')
	}
	else if((ele[0].checked)&&(ele[1].checked)&&(ele1[1].checked)&&(ele2[1].checked)){
		populateListProductChoices("lactose-intolerant","nut allergies","non-organic products","",'product')
	}
	else if((ele[0].checked)&&(ele[1].checked)&&(ele1[2].checked)&&(ele2[0].checked)){
		populateListProductChoices("lactose-intolerant","nut allergies","","sale products",'product')
	}
	else if((ele[0].checked)&&(ele[1].checked)&&(ele1[2].checked)&&(ele2[1].checked)){
		populateListProductChoices("lactose-intolerant","nut allergies","","",'product')
	}
	else if((ele[0].checked)&&(ele1[0].checked)&&(ele2[0].checked)){
		populateListProductChoices("lactose-intolerant","","organic products","sale products",'product');
	}
	else if((ele[0].checked)&&(ele1[0].checked)&&(ele2[1].checked)){
		populateListProductChoices("lactose-intolerant","","organic products","",'product');
	}
	else if((ele[0].checked)&&(ele1[1].checked)&&(ele2[0].checked)){
		populateListProductChoices("lactose-intolerant","","non-organic products","sale products",'product');
	}
	else if((ele[0].checked)&&(ele1[1].checked)&&(ele2[1].checked)){
		populateListProductChoices("lactose-intolerant","","non-organic products","",'product');
	}
	else if((ele[0].checked)&&(ele1[2].checked)&&(ele2[0].checked)){
		populateListProductChoices("lactose-intolerant","","","sale products",'product');
	}
	else if((ele[0].checked)&&(ele1[2].checked)&&(ele2[1].checked)){
		populateListProductChoices("lactose-intolerant","","","",'product');
	}
	else if((ele[1].checked)&&(ele1[0].checked)&&(ele2[0].checked)){
		populateListProductChoices("nut allergies","","organic products","sale products",'product');
	}
	else if((ele[1].checked)&&(ele1[0].checked)&&(ele2[1].checked)){
		populateListProductChoices("nut allergies","","","",'product');
	}
	else if((ele[1].checked)&&(ele1[1].checked)&&(ele2[0].checked)){
		populateListProductChoices("nut allergies","","non-organic products","sale products",'product');
	}
	else if((ele[1].checked)&&(ele1[1].checked)&&(ele2[1].checked)){
		populateListProductChoices("nut allergies","","non-organic products","",'product');
	}
	else if((ele[1].checked)&&(ele1[2].checked)&&(ele2[0].checked)){
		populateListProductChoices("nut allergies","","","sale products",'product');
	}
	else if((ele[1].checked)&&(ele1[2].checked)&&(ele2[1].checked)){
		populateListProductChoices("nut allergies","","","",'product');
	}
	else if((ele[2].checked)&&(ele1[0].checked)&&(ele2[0].checked)){
		populateListProductChoices("none","","organic products","sale products",'product');
	}
	else if((ele[2].checked)&&(ele1[0].checked)&&(ele2[1].checked)){
		populateListProductChoices("none","","organic products","",'product');
	}
	else if((ele[2].checked)&&(ele1[1].checked)&&(ele2[0].checked)){
		populateListProductChoices("none","","non-organic products","sale products",'product');
	}
	else if((ele[2].checked)&&(ele1[1].checked)&&(ele2[1].checked)){
		populateListProductChoices("none","","non-organic products","",'product');
	}
	else if((ele[2].checked)&&(ele1[2].checked)&&(ele2[0].checked)){
		populateListProductChoices("none","","","sale products",'product');
	}
	else if((ele[2].checked)&&(ele1[2].checked)&&(ele2[1].checked)){
		populateListProductChoices("none","","","",'product');
	}
	openInfo1(event,'Products',1);
}
	

function selectedItems(){
	
	var ele = document.getElementsByName("sproduct");
	var chosenProducts = [];
	
	var c = document.getElementById('showProducts');
	c.innerHTML = "";
	
	var para = document.createElement("P");
	//para.innerHTML = "You selected : ";
	//para.appendChild(document.createElement("br"));
	for (i = 0; i < ele.length; i++) { 
		if (ele[i].checked) {
			para.appendChild(document.createTextNode(ele[i].value));
			para.appendChild(document.createElement("br"));
			para.appendChild(document.createTextNode("Price : "));
			for (var j = 0; j < products.length; j++) {
				if(ele[i].value==(products[j].name)){
					para.appendChild(document.createTextNode(products[j].price.toString()));
				}
			}
			para.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i].value);
		}
	}
		
	c.appendChild(para);
	var para2 = document.createElement("strong");
	para2.appendChild(document.createTextNode("Total Price is " + getTotalPrice(chosenProducts)));
	c.appendChild(para2);
		
}