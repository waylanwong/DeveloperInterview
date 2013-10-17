function sort(){
	var objs = document.getElementsByTagName('h5');
	var string_array = [];
	for(var i = 0 ; i < objs.length; i++){
		string_array.push(objs[i].innerHTML);
	}
	var sorted_array = merge_sort(string_array);
	for(var i = 0 ; i < objs.length; i++){
		objs[i].innerHTML = sorted_array[i];
	}
}

function merge_sort(input){
	if(input.length <= 1){
		return input;
	}
	else{
		var fir_array = merge_sort(input.slice(0, input.length/2));
		var sec_array = merge_sort(input.slice(input.length/2));
		//merge these two arrays
		var i = 0;
		var j = 0;
		var merged_array = [];
		while(i < fir_array.length || j < sec_array.length){
			if(i < fir_array.length && (j >= sec_array.length || fir_array[i].length <= sec_array[j].length)){
				merged_array.push(fir_array[i]);
				i += 1;
			}
			else{
				merged_array.push(sec_array[j]);
				j += 1;
			}
		}
		return merged_array;
	}
}

function quick_sort(input){
	if(input.length <= 1){
		return input;
	}
	else{
		var cursor = Math.round(Math.random() * (input.length - 1));
		//move shorter string to fir_array and longer string to sec_array
		var fir_array = [];
		var sec_array = [];
		for(var i in input){
			if(i != cursor){
				if(input[i].length <= input[cursor].length){
					fir_array.push(input[i]);
				}
				else{
					sec_array.push(input[i]);
				}
			}
		}
		fir_array = quick_sort(fir_array);
		sec_array = quick_sort(sec_array);
		fir_array.push(input[cursor]);
		return fir_array.concat(sec_array);
	}
}