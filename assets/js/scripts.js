/*
Author       : Tech Trek.
Template Name: Nekaton - Responsive School Template
Version      : 1.0
*/

/*=============================================
TABLE OF CONTENTS
================================================

01. PRELOADER JS
02. JQUERY STICKY MENU
03. MENU JS
04. SECTIONS BACKGROUNDS
05. BOOTSTRAP TOOLTIP
06. HOME SLIDER JS             
07. TEAM SLIDER JS
08. TESTIMONIAL SLIDER JS
09. BLOG SLIDER JS
10. SERVICE SLIDER JS
11. BLOG GALLERY SLIDER JS
12. CLIENT SLIDER JS
13. COUNTER SECTION JS
14. ACCORDION JS 
15. PORTFOLIO JS
16. VENOBOX JS
17. WOW JS

Table Of Contents end
================================================
*/

(function ($) {
	'use strict';

	jQuery(document).on('ready', function () {
		
		/* 01. PRELOADER JS */
		$(window).on('load', function () {
			function fadeOut(el) {
				el.style.opacity = 0.4;
				var last;
				var tick = function () {
					el.style.opacity = +el.style.opacity - (new Date() - last) / 600;
					last = +new Date();
					if (+el.style.opacity > 0) {
						(window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 100);
					} else {
						el.style.display = "none";
					}
				};
				tick();
			}
			var pagePreloaderId = document.getElementById("page-preloader");
			setTimeout(function () {
				fadeOut(pagePreloaderId)
			}, 1000);
		});


		/* 02. JQUERY STICKY MENU */
		$(".sticky-menu").sticky({
			topSpacing: 0,
			zIndex: 1100
		});


		/* 03. MENU JS */
		$('nav.navbar').meanmenu({
			meanMenuContainer: '.mainmenu-area',
			meanScreenWidth: "991"
		});

		$(window).on('scroll', function () {
			if ($(this).scrollTop() > 200) {
				$('.mainmenu-area').addClass('menu-animation');
			} else {
				$('.mainmenu-area').removeClass('menu-animation');
			}
		});


		/* 04. SECTIONS BACKGROUNDS */
		var pageSection = $("section,div");
		pageSection.each(function (indx) {
			if ($(this).attr("data-background")) {
				$(this).css("background-image", "url(" + $(this).data("background") + ")");
			}
		});


		/* 06. HOME SLIDER JS */
		$('.home-slides').owlCarousel({
			loop: true,
			autoplay: false,
			autoplayTimeout: 4000,
			dots: true,
			nav: true,
			navText: ["<i class='icofont-simple-left'></i>", "<i class='icofont-simple-right'></i>"],
			responsiveClass: true,
			responsive: {
				0: {
					items: 1,
					nav: false
				},
				600: {
					items: 1,
					nav: false
				},
				768: {
					items: 1,
					nav: true
				},
				1000: {
					items: 1,
					nav: true
				}
			}
		});


		/* 07. TEAM SLIDER JS */
		$('.team-slides').owlCarousel({
			items: 4,
			margin: 30,
			loop: true,
			autoplay: false,
			autoplayTimeout: 4000,
			nav: false,
			navText: ["<i class='icofont-long-arrow-left'></i>", "<i class='icofont-long-arrow-right'></i>"],
			dots: true,
			responsiveClass: true,
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 1
				},
				768: {
					items: 3
				},
				1000: {
					items: 4
				}
			}

		});


		/* 08. TESTIMONIAL SLIDER JS */
		$('.testimonial-wrapper').owlCarousel({
			loop: true,
			margin: 0,
			autoplay: false,
			animateIn: "fadeInDown",
			animateOut: "fadeOutDown",
			nav: false,
			navText: ["<i class='icofont-long-arrow-left'></i>", "<i class='icofont-long-arrow-right'></i>"],
			autoHeight: true,
			dots: true,
			dotsData: true,
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 1
				},
				1000: {
					items: 1
				}
			}
		});

		var owltestimonial = $('.testimonial-wrapper');
		$('.testimonial-wrapper.owl-theme .owl-dots .owl-dot').click(function () {
			owltestimonial.trigger('to.owl.carousel', [$(this).index(), 300]);
		});


		/* 09. BLOG SLIDER JS */
		$('.blog-slides').owlCarousel({
			items: 3,
			margin: 30,
			loop: true,
			autoplay: false,
			autoplayTimeout: 4000,
			nav: false,
			dots: true,
			navText: ["<i class='icofont-long-arrow-left'></i>", "<i class='icofont-long-arrow-right'></i>"],
			responsiveClass: true,
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 1
				},
				768: {
					items: 2
				},
				1000: {
					items: 3
				}
			}
		});


		/* 10. SERVICE SLIDER JS */
		$('.service-slides-wrapper').owlCarousel({
			loop: true,
			margin: 0,
			autoplay: false,
			nav: true,
			navText: ["<i class='icofont-rounded-left'></i>", "<i class='icofont-rounded-right'></i>"],
			autoHeight: true,
			dots: true,
			dotsData: true,
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 1
				},
				1000: {
					items: 1
				}
			}
		});

		var owlclass = $('.service-slides-wrapper');
		$('.service-slides-wrapper.owl-theme .owl-dots .owl-dot').click(function () {
			owlclass.trigger('to.owl.carousel', [$(this).index(), 300]);
		});


		/* 11. BLOG GALLERY SLIDER JS */
		$('.gallery-slides-wrapper').owlCarousel({
			loop: true,
			margin: 0,
			autoplay: false,
			nav: true,
			navText: ["<i class='icofont-rounded-left'></i>", "<i class='icofont-rounded-right'></i>"],
			autoHeight: true,
			dots: false,
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 1
				},
				1000: {
					items: 1
				}
			}
		});


		/* 12. CLIENT SLIDER JS */
		$('.clients-slides').owlCarousel({
			loop: true,
			margin: 30,
			autoplay: true,
			nav: false,
			autoHeight: true,
			responsiveClass: true,
			responsive: {
				0: {
					items: 1,
					dots: true
				},
				600: {
					items: 2,
					dots: true
				},
				768: {
					items: 4,
					dots: false
				},
				1000: {
					items: 5,
					dots: false
				}
			}
		});


		/* 13. COUNTER SECTION JS */
		$('#counter').on('inview', function (event, visible, visiblePartX, visiblePartY) {
			if (visible) {
				$(this).find('.timer').each(function () {
					var $this = $(this);
					$({
						Counter: 0
					}).animate({
						Counter: $this.text()
					}, {
						duration: 2000,
						easing: 'swing',
						step: function () {
							$this.text(Math.ceil(this.Counter));
						}
					});
				});
				$(this).unbind('inview');
			}
		});


		/* 14. ACCORDION JS */
		var selectIds = $('#panel1,#panel2,#panel3,#panel4,#panel5');
		$(function ($) {
			selectIds.on('show.bs.collapse hidden.bs.collapse', function () {
				$(this).prev().find('.icofont').toggleClass('icofont-minus icofont-plus');
			})
		});


		/* 15. PORTFOLIO JS */
		$(".portfolio-filter-menu ul li").click(function () {
			$(".portfolio-filter-menu ul li").removeClass("active");
			$(this).addClass("active");
			var selector = $(this).attr("data-filter");
			$(".project-list").isotope({
				filter: selector,
			});
		});

		$(".project-list").isotope();


		/* 16. VENOBOX JS */
		$('.venobox').venobox({
			titleattr: 'data-title',
			spinner: 'three-bounce',
			titlePosition: 'bottom',
			titleColor: '#fff',
			spinColor: '#fff',
			numeratio: true,
			numerationPosition: 'top'
		});

	});


	/* 17. WOW JS */
	new WOW().init();


})(jQuery);
      // You can add form validation logic here if needed
	  document.getElementById('contactForm').addEventListener('submit', function(event) {
		// Add your validation logic here if needed
		// Example: Ensure all fields are filled before submitting

		// Uncomment the next line to prevent the form from actually submitting
		// event.preventDefault();
	});
	var testiomnialData = [
		{
			avatar: "https://img.freepik.com/free-photo/woman-with-long-hair-yellow-hoodie-with-word-music-it_1340-39068.jpg",
			name: "Simonette Lindermann",
			review: "Mind-blowing discovery! changed my routine. Essential for everyone. A vise advice to all interested. Can't imagine without it!"
		},
		{
			avatar: "https://img.freepik.com/free-photo/close-up-portrait-young-bearded-man-white-shirt-jacket-posing-camera-with-broad-smile-isolated-gray_171337-629.jpg",
			name: "Merilee Beal",
			review: "Unbelievable gem! Altered my life. A must-have now. Wholeheartedly advise it to everyone. An absolute game-changer"
		},
		{
			avatar: "https://img.freepik.com/free-photo/handsome-african-guy-with-stylish-haircut-taking-photo-digital-camera_171337-1345.jpg",
			name: "Suzi Lankester",
			review: "Phenomenal addition! Completely transformed my days. Can't go without it. Strongly endorse for all. A game-changer for sure!"
		},
		{
			avatar: "https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg",
			name: "Gaston Cunnow",
			review: "Amazing product! It changed my life. Can't live without it now. Highly recommended to everyone!"
		},
		{
			avatar: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg",
			name: "Marys Lobb",
			review: "Life-altering find! Indispensable now. Enthusiastically suggest to all. A game-changer for everyone!"
		},
		{
			avatar: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg",
			name: "Marys Lobb",
			review: "Life-altering find! Indispensable now. Enthusiastically suggest to all. A game-changer for everyone!"
		}, {
			avatar: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg",
			name: "Marys Lobb",
			review: "Life-altering find! Indispensable now. Enthusiastically suggest to all. A game-changer for everyone!"
		}]
	var slideHolder = document.querySelector("#slideHolder")
	for (let i of testiomnialData) slideHolder.innerHTML += `<div class="swiper-slide"> <div class="ImgHolder"><img src="${i.avatar}"></div><div class="ContentHolder"><h3>${i.name}</h3><p>${i.review}</p></div></div>`
	
	const swiper = new Swiper('#craouselContainer', {
		grabCursor: true,
		centeredSlides: true,
		slidesPerView: 2.3,
		loop: true,
		spaceBetween: 30,
		effect: "coverflow",
		coverflowEffect: {
			rotate: 0,
			depth: 800,
			slideShadows: true,
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		},
		autoplay: { delay: 5000 }
	});
	window.onresize = queryResizer
	queryResizer()
	function queryResizer() {
		if (window.innerWidth < 724) swiper.params.slidesPerView = 2
		if (window.innerWidth > 501) swiper.params.slidesPerView = 2
		if (window.innerWidth > 724) swiper.params.slidesPerView = 2.3
		if (window.innerWidth < 501) swiper.params.slidesPerView = 1
		swiper.update()
	}
 
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  // TAB
	  // $(document).on('click', '.tab-wrap ul li a', function (e) {
	  //     var curTabContentId = $(this).attr('href');
	  //     $(this).parents('.tab-wrap').find('ul li').removeClass('active');
	  //     $(this).parents('li').addClass('active');
	  //     $(this).parents('.tab-wrap').find('.tab-content-id').removeClass('active');
	  //     $(curTabContentId).addClass("active");
	  //     e.preventDefault();
	  // });	