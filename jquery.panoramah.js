// Copyright (c) 2010 John Hobbs
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// 
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
// 
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
(
	function ( $ ) {
		$.fn.panoramah = function ( options ) {

			var settings = {
				'orientation'  : 'horizontal'
			};

			return this.each(
				function ( index ) {
				
					if ( options ) { $.extend( settings, options ); }

					// Localize the element
					var photo = $( this );
					var panorama_details = photo.attr( 'rel' ).split( ':' );
					// Extract the relevant data from the rel attribute
					var panorama_size = panorama_details.shift();
					// Patch together the rest of it (thanks Naina!)
					var panorama_url = panorama_details.join( ':' );
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
									if( settings.orientation == 'vertical' ) {
										// Get the offset
										offset = Math.floor( ( panorama_size - photo.height() ) * ( ( event.pageY - photo.offset().top ) / photo.height() ) )
										// Mind the overflows
										if( offset <= panorama_size - photo.height() ) { photo.css( 'background-position',  '50% -' + offset + 'px' ); }
									}
									else {
										// Get the offset
										offset = Math.floor( ( panorama_size - photo.width() ) * ( ( event.pageX - photo.offset().left ) / photo.width() ) )
										// Mind the overflows
										if( offset <= panorama_size - photo.width() ) { photo.css( 'background-position',  '-' + offset + 'px 50%' ); }
									}
								}
							);
						}
					);
					// Start the loading process
					img.attr( 'src', panorama_url );
				}
			);
		}
	}
)(jQuery);
