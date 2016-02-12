(function(){
	angular.module('ShoppingList', [])
		.controller('ListController',ListController);


		function ListController(){

			var vm = this;
			this.name;
			this.newItem;
			this.quantity;
			this.price;

			this.shoppingList = [
				{item:'Computer',quantity:1, price:900 },
				{item:'Chocolate',quantity:5, price:2 },
				{item:'Bus tickets',quantity:20, price:2.75 },
			];
			this.addItem = addItem;
			this.calculateTotal = calculateTotal
			

			function addItem(){
				var shoppingItem = {};
				shoppingItem.item = this.newItem;
				shoppingItem.quantity = this.quantity;
				shoppingItem.price = this.price;
				console.log(shoppingItem);
				this.shoppingList.push(shoppingItem);

				// Need to reset form values to nothing
				this.newItem = null;
				this.quantity = null;
				this.price = null;

			}

			function calculateTotal(){
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