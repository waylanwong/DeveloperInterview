/**
 * @author Hao Cai <hao.cai@willrainit.com>
 * @author Waylan Wong <waylan.wong@willrainit.com>
 */

function calculate_1() {
	var my_array = [1, 5, 8, 9];
	var correct_total = 23;
	var total = sumMe(my_array);
	alert(total == correct_total);
}

function calculate_2() {
	var my_array = [1, [2, 7], 8, [4, 6]];
	var correct_total = 28;
	var total = sumMe(my_array);
	alert(total == correct_total);
}

function calculate_3() {
	var my_array = [1, [3, 7, false], 8, null];
	var correct_total = 19;
	var total = sumMe(my_array);
	alert(total == correct_total);
}

function calculate_4() {
	var my_array = [1, [5, [9, 7]], [2, 4, [7, 1]], [9]];
	var correct_total = 45;
	var total = sumMe(my_array);
	alert(total == correct_total);
}

function sumMe(myinput) {
	var total = 0;
	if ( typeof myinput == "number") {
		return myinput;
	} else if ( typeof myinput == "object") {		
		for (i in myinput) {			
			total += sumMe(myinput[i]);
		}
	}
	return total;
}