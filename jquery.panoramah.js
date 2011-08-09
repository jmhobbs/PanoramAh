/*!
	PanoramAh Library v0.1.0
	https://github.com/jmhobbs/PanoramAh

	Copyright 2011, John Hobbs
	Licensed under the MIT license.
	https://github.com/jmhobbs/PanoramAh/blob/master/LICENSE
*/
(
	function ( $ ) {
		$.fn.panoramah = function ( options ) {

			var settings = {
				'orientation'  : 'horizontal',
				'size'         : null,
				'url'          : null
			};

			return this.each(
				function ( index ) {
				
					if ( options ) { $.extend( settings, options ); }

					var photo = $( this ),
					      img = $( "<img src='' />" );

					// Set options
					if( 'undefined' != typeof photo.data( 'panorama-size' ) ) {
						settings.size = photo.data( 'panorama-size' );
					}
					if( 'undefined' != typeof photo.data( 'panorama-url' ) ) {
						settings.url = photo.data( 'panorama-url' );
					}
					if( 'undefined' != typeof photo.data( 'panorama-orientation' ) ) {
						settings.orientation = photo.data( 'panorama-orientation' );
					}

					// Setup the onload callback
					img.load(
						function () {
							// Set the background to the image
							photo.css( 'background', "transparent url( '" + settings.url + "' ) no-repeat" );
							// Clear out the loading crap
							photo.html( "" );
							// Set up the mouse monitoring
							photo.mousemove(
								function ( event ) {
									if( settings.orientation == 'vertical' ) {
										// Get the offset
										offset = Math.floor( ( settings.size - photo.height() ) * ( ( event.pageY - photo.offset().top ) / photo.height() ) )
										// Mind the overflows
										if( offset <= settings.size - photo.height() ) { photo.css( 'background-position',  '50% -' + offset + 'px' ); }
									}
									else {
										// Get the offset
										offset = Math.floor( ( settings.size - photo.width() ) * ( ( event.pageX - photo.offset().left ) / photo.width() ) )
										// Mind the overflows
										if( offset <= settings.size - photo.width() ) { photo.css( 'background-position',  '-' + offset + 'px 50%' ); }
									}
								}
							);
						}
					);
					// Start the loading process
					img.attr( 'src', settings.url );
				}
			);
		}
	}
)(jQuery);
