(function(){
	angular.module('GymGoals', [])
		.controller('ListController',ListController);


		function ListController(){

			var vm = this;

			this.newGoal;
			this.start;
			this.goalEnd;

			this.goals = [
				{goal:'Pushups',start:10, endGoal:30 },
				{goal:'Situps',start:30, endGoal:100 },
				{goal:'Track laps',start:10, endGoal:15 },
			];

			this.addGoal = addGoal;
			this.calculatePercentageChange = calculatePercentageChange
			

			function addGoal(){
				var newGoal = {};
				newGoal.goal = this.newGoal;
				newGoal.start = this.start;
				newGoal.endGoal = this.goalEnd;
				this.goals.push(newGoal);

				this.newGoal = null;
				this.start = null;
				this.goalEnd = null;

			}

			function calculatePercentageChange(start, end){
				var change = ((end-start) /start) *100;
				return change;

			}

		}

	})();