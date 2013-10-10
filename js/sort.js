$(document).ready(function(){
	$(".sort-by-list input").change(function(){
		var contract_objs = $('.contract');
		contract_objs.detach();
		switch(parseInt($(this).val())){
			//sort by name
			case 1:
				contract_objs.sort(sortByName);
				break;
			//sort by status
			case 2:
				contract_objs.sort(sortByStatus);
				break;
			//sort by date
			case 3:
				contract_objs.sort(sortByDate);
				break;
		}
		$('.contract-list').append(contract_objs);
	});
});

function sortByName(a, b){
	var name_a = $(a).find('.project-name').text().toLowerCase();
	var name_b = $(b).find('.project-name').text().toLowerCase();
	if(name_a > name_b){
		return 1;
	}
	else{
		return -1;
	}
}

function sortByStatus(a, b){
	var status_a = $(a).find('.contract-status').text().toLowerCase();
	var status_b = $(b).find('.contract-status').text().toLowerCase();
	if(status_a > status_b){
		return 1;
	}
	else{
		return -1;
	}
}

function sortByDate(a, b){
	var date_a = $(a).find('.contract-created').data('created').toLowerCase();
	var date_b = $(b).find('.contract-created').data('created').toLowerCase();
	if(date_a > date_b){
		return -1;
	}
	else{
		return 1;
	}
}
