$(document).ready(function(){
	
	$('#btn_january').click(function(){
		var html_string = '';
		html_string += '<li data-id="1" class="selected">';
		html_string += '<p class="contract-date">January</p>';
		html_string += '<div class="contract-status">Started</div>';
		html_string += '</li>';
		dom_contractlist.append(html_string);	
	});
	
	$('#btn_february').click(function(){
		var html_string = '';
		html_string += '<li data-id="1" class="selected">';
		html_string += '<p class="contract-date">February</p>';
		html_string += '<div class="contract-status">Started</div>';
		html_string += '</li>';	
		dom_contractlist.append(html_string);
	});
	
	$(document).on('contract_month_selected', function() {		
		
		calculateMonth();	
		
		var calculateMonth = function() {
			
			if ($(this).data('month') === 'January') {
				return false;
			} else if ($(this).data('month') == 'February') {
				return true;
			}
			
			var html_string = '';
			html_string += '<li data-id="1" class="selected">';
			html_string += '<p class="contract-date">'+ $(this).data('month') +'</p>';
			html_string += '<div class="contract-status">Started</div>';
			html_string += '</li>';	
			dom_contractlist.append(html_string);
		};
	});
	
	
});
