export default {
  init() {
    // JavaScript to be fired on all pages

    // Load some Google Fonts asynchrously 
    // Typekit Web Font Loader https://github.com/typekit/webfontloader// https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js loads latest 1.x version
    window.WebFontConfig = {  google: { 
                                families: [ 
                                  'Raleway:300,400,400i,700',   // Add your fonts here
                                  'Open+Sans:300,400,400i,700', // Add your fonts here
                                ],
                              },
                           };
    (function() {  var wf = document.createElement('script');  
      wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';  
      wf.type = 'text/javascript';  wf.async = 'true';  
      var s = document.getElementsByTagName('script')[0];  
      s.parentNode.insertBefore(wf, s);
    })();

  },
  finalize() {
    // JavaScript to be fired on all pages, after page specific JS is fired
  },
};
