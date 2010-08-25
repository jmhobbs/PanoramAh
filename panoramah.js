var PanoramAh = {
	// Shortcut function that takes a jQuery selector and panoramize's all of the matching elements
	easy: function ( selector ) {
		$( selector ).each( function ( i ) { PanoramAh.panoramize( $( this ) ); } );
	},

	// Take a single jQuery object and panoramizes it
	panoramize: function ( el ) {
		// Localize the element
		var photo = el;
		// Extract the relevant data from the rel attribute
		var panorama_width = photo.attr( 'rel' ).split( ':' )[0];
		var panorama_url = photo.attr( 'rel' ).split( ':' )[1];
		// Get the preloader
		var img = $( "<img src='' />" );
		// Setup the onload callback
		img.load(
			function () {
				// Set the background to the image
				photo.css( 'background', "transparent url( '" + panorama_url + "' ) no-repeat" );
				// Clear out the loading crap
				photo.html( "" );
				// Set up the mouse monitoring
				photo.mousemove(
					function ( event ) {
						// Get the offset
						offset = Math.floor( ( panorama_width - photo.width() ) * ( ( event.pageX - photo.offset().left ) / photo.width() ) )
						// Mind the overflows
						if( offset <= panorama_width - photo.width() ) { photo.css( 'background-position',  '-' + offset + 'px 50%' ); }
					}
				);
			}
		);
		// Start the loading process
		img.attr( 'src', panorama_url );
	}
}
