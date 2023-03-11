/**
* @preserve Admin Screenshots | @senff | GPL2 Licensed
*/

(function($) {
	$('body').on('click','#admin-screenshots-popup .admin-screenshots-close-button',function(){
		$('.admin-screenshots-module').remove();	
	});

	$('body').on('click','#admin-screenshots-popup .admin-screenshots-copy-button',function(){
		imageURL = $(this).parent().find('a').attr('href');		
		copyToClipboard(imageURL);
		$('.admin-screenshots-module').remove();	
	});

	$('#wp-admin-bar-admin-screenshots-button').on('click','a',function(se){
		screenshotThis();
		se.preventDefault();
		$(this).html('Creating screenshot...').addClass('working');
	});


}(jQuery));


function copyToClipboard(str) {
	const el = document.createElement('textarea');
	el.value = str;
	document.body.appendChild(el);
	el.select();
	document.execCommand('copy');
	document.body.removeChild(el);
}


function screenshotThis(){
	html2canvas(document.body, {
		x: window.scrollX,
		y: window.scrollY,
		width: window.innerWidth,
		height: window.innerHeight,
	}).then(function(canvas) {

		var dataURL = canvas.toDataURL();
		jQuery.ajax({
			url: ajaxurl,
			type: 'POST',
			data: {
		    		action: 'save_canvas',
		    		image: dataURL
			},
			success: function(response) {
		    		filepath = response.substring(0, response.indexOf(","));
		   			imageid = response.slice(response.indexOf(',') + 1);
		    		jQuery('body').append('<div id="admin-screenshots-overlay" class="admin-screenshots-module"><div id="admin-screenshots-popup" class="admin-screenshots-module"><h2>Success!</h2><form><strong>Screenshot '+imageid+'</strong> was saved in your Media Library and can be accessed directly at:<br><a href="'+filepath+'/'+imageid+'.png" target="_blank">'+filepath+'/'+imageid+'.png</a><br><button class="admin-screenshots-close-button button-secondary">CLOSE</button><button class="admin-screenshots-copy-button button-primary">CLOSE &amp; COPY URL</form></div></div>');
					jQuery('#wp-admin-bar-admin-screenshots-button a').html('SCREENSHOT THIS PAGE').removeClass('working');
			},
			error: function(xhr, status, error) {
		    		alert("Screenshot could not be saved.")
			}
		});
	});
}
