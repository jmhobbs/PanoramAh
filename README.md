# PanoramAh

PanoramAh is a jQuery plugin that lets you present easy to scroll panorama images on your web page.

# Usage

1. Include jQuery
2. Include PanoramAh
3. Set up the div's with a rel tag equal to "[image-width]:[image-path]"
4. Panoramize those div's

# Example

    <html>
      <head>
        <title>Colorado Panorama - Small</title>
        <script src="jquery.min.js" type="text/javascript"></script>
        <script src="jquery.panoramah.js" type="text/javascript"></script>
        <script type="text/javascript">
          $(
            function () {
              $( '.panorama' ).panoramah();
            }
          );
        </script>
      </head>
      <body>
        <div class="panorama"
            rel="4201:Panorama-Cropped.sm.jpg"
            style="height: 500px; width: 100%; border: 1px solid #444;">
          Loading...
        </div>
      </body>
    </html>

# Demo

Stunning Colorado Vista - <http://static.velvetcache.org/pages/2010/08/25/panoramah-version-two/>
