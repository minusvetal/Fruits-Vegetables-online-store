// slick

$(document).ready(function () {
	$(".discount-wrapper").slick({
		slidesToShow: 4.9,
		infinite: true,
		arrows: false,
	});
});

$(document).ready(function () {
	$(".categories__slider").slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		prevArrow: `
			<button class="categories__arrow-left" type="button">
				<svg class="icon icon-cat-arrow ">
					<use href="images/icons/sprite.svg#cat-arrow-right"></use>
				</svg>
			</button>
		`,
		nextArrow: `
	  <button class="categories__arrow-right" type="button">
            <svg class="icon icon-cat-arrow ">
              <use href="images/icons/sprite.svg#cat-arrow-right"></use>
            </svg>
          </button>
		`,
	});
});

$(document).ready(function () {
	$(".product-slider").slick({
		infinite: true,
		slidesToShow: 4.999,
		prevArrow: `
			 <button class="product-slider__arrow-left" type="button">
            <svg class="icon icon-cat-arrow ">
              <use href="images/icons/sprite.svg#cat-arrow-right"></use>
            </svg>
          </button>
		`,
		nextArrow: `
	   <button class="product-slider__arrow-right" type="button">
            <svg class="icon icon-cat-arrow ">
              <use href="images/icons/sprite.svg#cat-arrow-right"></use>
            </svg>
          </button>
		`,
	});
});
