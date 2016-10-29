// DOM is ready
$(document).ready(function () {
	
	// deal with selecting appended element
	
	$('.navbar-header').on('click', '.logout-btn', function () { $.get('/logout'); location.reload(); })
	

	
	$('.logon-btn').click(function () {
		
		uname = $('#uname').val();
		pwd = $('#pwd').val();
		$.post('/?uname=' + uname + '&pwd=' + pwd,  function( resp ) {
			
			if ( resp != 'loginAttemptFailed') {
				
				$('form').remove();
				$('.navbar-header').append('Logggged as: ' + uname + '<button type="submit" class="btn btn-default logout-btn">Log out</button>');
				
			};
		});

	});
	
});
	
	
