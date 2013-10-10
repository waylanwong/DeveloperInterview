//Option 1
function build_html_1(dom_obj){
	var html_array = [];
	htmlarray.push('<li data-id="1" class="selected">');
	htmlarray.push('<p class="contract-date">December 10 2013</p>');
	htmlarray.push('<div class="contract-status">Confirmed</div>');
	htmlarray.push('</li>');
	var html_string = html_array.join('');
	dom_obj.append(html_string);
}

//Option 2
function build_html_2(dom_obj){
	var html_string = '';
	html_string += '<li data-id="1" class="selected">';
	html_string += '<p class="contract-date">December 10 2013</p>';
	html_string += '<div class="contract-status">Confirmed</div>';
	html_string += '</li>';
	dom_obj.append(html_string);
}
