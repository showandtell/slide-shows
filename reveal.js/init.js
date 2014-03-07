var slidesTemplate = Handlebars.compile(document.getElementById('slide-template').innerHTML);
document.getElementById('slides').innerHTML = slidesTemplate(deck);
// Full list of configuration options available here:
// https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
	controls: true,
	progress: true,
	history: true,
	center: true,

	theme: Reveal.getQueryHash().theme, // available themes are in /css/theme
	transition: Reveal.getQueryHash().transition || 'default', // default/cube/page/concave/zoom/linear/fade/none

	// Optional libraries used to extend on reveal.js
	dependencies: [
		{ src: '../reveal.js/lib/js/classList.js', condition: function() { return !document.body.classList; } },
		{ src: '../reveal.js/plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
		{ src: '../reveal.js/plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
		{ src: '../reveal.js/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
		{ src: '../reveal.js/plugin/zoom-js/zoom.js', async: true, condition: function() { return !!document.body.classList; } },
		{ src: '../reveal.js/plugin/notes/notes.js', async: true, condition: function() { return !!document.body.classList; } }
	]
});

		
Reveal.addEventListener( 'ready', function( event ) {
    event.currentSlide.getElementsByTagName('audio')[0].play();
});
Reveal.addEventListener( 'slidechanged', function( event ) {
    event.currentSlide.getElementsByTagName('audio')[0].play();
});