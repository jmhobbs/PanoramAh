var PanoramAh = {
	init: function () {
		// Get the element
		el = $( ".panorama" );
		// Extract the relevant data from the rel attribute
		panorama_width = el.attr( 'rel' ).split( ':' )[0];
		panorama_url = el.attr( 'rel' ).split( ':' )[1];
		// Get the preloader
		img = el.find( '.preload' )
		// Setup the onload callback
		img.load(
			function () {
				// Set the background to the image
				el.css( 'background', "transparent url( '" + panorama_url + "' ) no-repeat" );
				// Clear out the loading crap
				el.html( "" );
				// Set up the mouse monitoring
				el.mousemove(
					function ( event ) {
						// Get the offset
						offset = Math.floor( ( panorama_width - el.width() ) * ( ( event.pageX - el.offset().left ) / el.width() ) )
						// Mind the overflows
						if( offset <= panorama_width - el.width() ) { el.css( 'background-position',  '-' + offset + 'px 50%' ); }
					}
				);
			}
		);
		// Start the loading process
		img.attr( 'src', panorama_url );
	}
}