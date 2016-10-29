// DOM is ready
$(document).ready(function () {
	
	$('.logout-btn').click(function () {
		$.get('/logout');
	
	});
	
	$('.logon-btn').click(function () {
		
		uname = $('#uname').val();
		pwd = $('#pwd').val();
		$.post('/?uname=' + uname + '&pwd=' + pwd,  function( resp ) {
			
			if ( resp != 'loginAttemptFailed') {
				
				$('#uname').remove();
				$('#pwd').replaceWith('LogFged as:' + uname);
				$('.logon-btn').replaceWith('<button type="submit" class="btn btn-default logout-btn">Log out</button>')
				
						alert(resp);		
			};
		});

		
	});
	
	
	
	


	
	
});
