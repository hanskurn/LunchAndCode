(function(){
	angular.module('ShoppingList', [])
		.controller('ListController',ListController);


		function ListController(){

			/** These are variables made available to the view, 'this' represents the controller, the '.' means the following name is an attribute of the controller **/
			this.name;
			this.newItem;
			this.quantity;
			this.price;

			/** This is the list of data that will be initially shown in the view**/
			this.shoppingList = [
				{item:'Computer',quantity:1, price:900 },
				{item:'Chocolate',quantity:5, price:2 },
				{item:'Bus tickets',quantity:20, price:2.75 },
			];

			/** These are functions made available to the view, setting something equal to the attribute allows it to be accessed in the view, eg. the function addItem can now be referenced and used in the view **/ 
			this.addItem = addItem;
			this.calculateTotal = calculateTotal
			
			/**
				@namespace: addItem
				@desc: Creates a new javascript object out of the inputted fields from the view and adds it to the pre-existing list of shopping items, then sets all the input fields to null to reset the form
			**/
			function addItem(){
				/** EXERCISE 2: Add logic for adding an item to the shopping list here **/

				//This line creates an empty javascript object
				var shoppingItem = {};

				shoppingItem.item = this.newItem;
				shoppingItem.quantity = this.quantity;
				shoppingItem.price = this.price;
				this.shoppingList.push(shoppingItem);

				//This function will print to the developer console the javascript object you just created. 
				console.log(shoppingItem);

				// These lines reset the form values to empty
				this.newItem = null;
				this.quantity = null;
				this.price = null;

			}

			/**
				@namespace: calculateTotal
				@desc: Goes through each item in the shopping list, multiplies the price times quantity, then adds the subtotal for each item to the total sum
				@returns: {Integer} the total cost of the shopping list
			**/
			function calculateTotal(){
				/** EXERCISE 3: Add logic for summing up the total cost of the shopping list here **/

				//Make sure to initialize a variable that you will return after you have done the calculations
				var total=0;
				for(var i=0;i<this.shoppingList.length;i++){
					var listItem = this.shoppingList[i];
					var subTotal = listItem.quantity * listItem.price;
					total += subTotal;
				}
				return total;

			}

		
		}

	})();