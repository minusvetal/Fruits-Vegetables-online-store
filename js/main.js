const discount = new Swiper(".discount", {
	slidesPerView: 5,
	// centeredSlides: true,
	spaceBetween: 40,
	grabCursor: true,
	loop: true,
});

// categories

const categories = new Swiper(".categories__container", {
	slidesPerView: 6,
	spaceBetween: 25,
	grabCursor: true,
	loop: true,
	direction: "horizontal",
	navigation: {
		nextEl: ".categories__arrow-right",
		prevEl: ".categories__arrow-left",
	},
});
