
(function () {
	const scripts = [
		"https://cdn.jsdelivr.net/npm/@srexi/purecounterjs/dist/purecounter_vanilla.js",
		"https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js",
		"https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js",
		"https://cdn.jsdelivr.net/npm/glightbox@3.3.0/dist/js/glightbox.min.js",
		"https://cdn.jsdelivr.net/npm/boxicons@2.1.4/dist/boxicons.min.js",
		"https://cdn.jsdelivr.net/npm/isotope-layout@3.0.6/dist/isotope.pkgd.min.js",
		"https://cdn.jsdelivr.net/npm/swiper@11.1.9/swiper-bundle.min.js",
		"https://unwmataram.ac.id/websrc/js/unwmtr.js"
	];

	scripts.forEach(src => {
		const s = document.createElement("script");
		s.src = src;
		s.defer = true;
		document.body.appendChild(s);
	});
})();
