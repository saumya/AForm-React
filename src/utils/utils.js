//
//
//
const Utils =	{
	allMonths: function(){
		return(['January','February','March','April','May','June','July','August', 'September', 'October', 'November', 'December']);
	},
	allDaysOfAllMonths: function(){
		return([31,28,31,30,31,30,31,31,30,31,30,31]);
	},
	getNextDay: function(aDay,afterNumDays){
		//console.log( aDay.getDate(), ':', this.allMonths()[aDay.getMonth()] );

		var newDay = new Date();
		newDay.setDate( aDay.getDate() + afterNumDays );
		return newDay;
	},
	getNext7days : function(){
		//console.log('getNext7days');
		//console.log('------------------ getNext7days -------------');
		const today = new Date();
		//console.log( 'today', today );
		//console.log( this.allMonths() );
		//console.log( today.getDate(), ':', this.allMonths()[today.getMonth()] );
		var  i = 1;
		var allDays = [];
		for( i; i<8; i++){
			allDays.push( this.getNextDay( today, i) );
			//console.log ( this.getNextDay(today,i) );
		}
		//console.log( allDays );
		return allDays;
	}
};

export default Utils;