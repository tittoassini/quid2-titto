 function daysBetween(date1, date2) {
   var DSTAdjust = 0;
   // constants used for our calculations below
   oneMinute = 1000 * 60;
    var oneDay = oneMinute * 60 * 24;
    // equalize times in case date objects have them
    date1.setHours(0);
    date1.setMinutes(0);
    date1.setSeconds(0);
    date2.setHours(0);
    date2.setMinutes(0);
    date2.setSeconds(0);
    // take care of spans across Daylight Saving Time changes
    if (date2 > date1) {
      DSTAdjust = 
	(date2.getTimezoneOffset( ) - date1.getTimezoneOffset( )) * oneMinute;
    } else {
        DSTAdjust = 
	  (date1.getTimezoneOffset( ) - date2.getTimezoneOffset( )) * oneMinute;    
    }

    var diff = Math.abs(date2.getTime( ) - date1.getTime( )) - DSTAdjust;
    return Math.ceil(diff/oneDay);
 }
