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

// favorite
$(".product-slider__favorite").on("click", function (e) {
	e.preventDefault();
	$(this).toggleClass("product-slider__favorite-active");
});

// кнопки плюс минус

// Убавляем кол-во по клику
$(".product-count .product-count__minus").click(function () {
	let $input = $(this).parent().find(".quantity");
	let count = parseInt($input.val()) - 1;
	count = count < 1 ? 1 : count;
	$input.val(count);
});
// Прибавляем кол-во по клику
$(".product-count .product-count__plus").click(function () {
	let $input = $(this).parent().find(".quantity");
	let count = parseInt($input.val()) + 1;
	count =
		count > parseInt($input.data("max-count"))
			? parseInt($input.data("max-count"))
			: count;
	$input.val(parseInt(count));
});
// Убираем все лишнее и невозможное при изменении поля
$(".product-count .quantity").bind("change keyup input click", function () {
	if (this.value.match(/[^0-9]/g)) {
		this.value = this.value.replace(/[^0-9]/g, "");
	}
	if (this.value == "") {
		this.value = 1;
	}
	if (this.value > parseInt($(this).data("max-count"))) {
		this.value = parseInt($(this).data("max-count"));
	}
});
