console.log('It is working');

let displayValue = '0';
	$('#display').text(displayValue);

	$('.row > div').each(function() {
		$(this).click(function() {
			if (displayValue == '0') displayValue = '';
			if ($(this).text() == 'C') {
				displayValue = '0';
				$('#display').text(displayValue);
			}
			else if ($(this).text() == '=') {

				try {
					displayValue = eval(displayValue);
					$('#display').text(displayValue);
					displayValue = '0'
				}
				catch (e) {
					displayValue = '0';
					$('#display').text('ERROR');
				}
			} else {
				displayValue += $(this).text();
					$('#display').text(displayValue);
			}
			e.preventDefault()
		})
	})