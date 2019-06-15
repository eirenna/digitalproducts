import $ from 'jquery';
import 'what-input';

// Foundation JS relies on a global varaible. In ES6, all imports are hoisted
// to the top of the file so if we used`import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
// require('foundation-sites');

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
import './lib/foundation-explicit-pieces';

import './lib/slick.min.js';

$(window).scroll(function () {
	if ($(window).scrollTop() > 200) {
		$('.ba-header-wrap').addClass('ba-scrolled');
	} else {
		$('.ba-header-wrap').removeClass('ba-scrolled');
	}
});

let worksSlider = $('.ba-works-slider');
worksSlider.slick({
	slide: '.ba-work',
	infinite: true,
	dots: true,
	nextArrow: worksSlider.find('[data-next]'),
	prevArrow: worksSlider.find('[data-prev]')
});

let teamSlider = $('.ba-team-slider');
teamSlider.slick({
	slide: '.ba-teammate',
	infinite: true,
	dots: false,
	nextArrow: teamSlider.find('[data-next]'),
	prevArrow: teamSlider.find('[data-prev]'),
	slidesToShow: 3,
	slidesToScroll: 1,
	mobileFirst: true,
	responsive: [{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 640,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 0,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
});
//Add Map
function initMap() {
	//Create map and asign to this baMap var
	let mapCenter = {
		lat: -7.9307512,
		lng: 112.6355576
	}
	let baMap = new google.maps.Map(document.getElementById('ba-map'), {
		center: mapCenter,
		zoom: 13,
		styles: [{
				"featureType": "water",
				"elementType": "geometry",
				"stylers": [{
						"color": "#e9e9e9"
					},
					{
						"lightness": 17
					}
				]
			},
			{
				"featureType": "landscape",
				"elementType": "geometry",
				"stylers": [{
						"color": "#f5f5f5"
					},
					{
						"lightness": 20
					}
				]
			},
			{
				"featureType": "road.highway",
				"elementType": "geometry.fill",
				"stylers": [{
						"color": "#ffffff"
					},
					{
						"lightness": 17
					}
				]
			},
			{
				"featureType": "road.highway",
				"elementType": "geometry.stroke",
				"stylers": [{
						"color": "#ffffff"
					},
					{
						"lightness": 29
					},
					{
						"weight": 0.2
					}
				]
			},
			{
				"featureType": "road.arterial",
				"elementType": "geometry",
				"stylers": [{
						"color": "#ffffff"
					},
					{
						"lightness": 18
					}
				]
			},
			{
				"featureType": "road.local",
				"elementType": "geometry",
				"stylers": [{
						"color": "#ffffff"
					},
					{
						"lightness": 16
					}
				]
			},
			{
				"featureType": "poi",
				"elementType": "geometry",
				"stylers": [{
						"color": "#f5f5f5"
					},
					{
						"lightness": 21
					}
				]
			},
			{
				"featureType": "poi.park",
				"elementType": "geometry",
				"stylers": [{
						"color": "#dedede"
					},
					{
						"lightness": 21
					}
				]
			},
			{
				"elementType": "labels.text.stroke",
				"stylers": [{
						"visibility": "on"
					},
					{
						"color": "#ffffff"
					},
					{
						"lightness": 16
					}
				]
			},
			{
				"elementType": "labels.text.fill",
				"stylers": [{
						"saturation": 36
					},
					{
						"color": "#333333"
					},
					{
						"lightness": 40
					}
				]
			},
			{
				"elementType": "labels.icon",
				"stylers": [{
					"visibility": "off"
				}]
			},
			{
				"featureType": "transit",
				"elementType": "geometry",
				"stylers": [{
						"color": "#f2f2f2"
					},
					{
						"lightness": 19
					}
				]
			},
			{
				"featureType": "administrative",
				"elementType": "geometry.fill",
				"stylers": [{
						"color": "#fefefe"
					},
					{
						"lightness": 20
					}
				]
			},
			{
				"featureType": "administrative",
				"elementType": "geometry.stroke",
				"stylers": [{
						"color": "#fefefe"
					},
					{
						"lightness": 17
					},
					{
						"weight": 1.2
					}
				]
			}
		]

	});

	let marker = new google.maps.Marker({
		position: {
			lat: -7.9307512,
			lng: 112.6355576
		},
		map: baMap,
		icon: 'assets/img/map-marker.svg'
	});
}

$(document).ready(function (e) {
	initMap();
});

$(document).foundation();