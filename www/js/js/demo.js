/**
 * demo.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2016, Codrops
 * http://www.codrops.com
 */
;(function(window) {

	'use strict';

	// taken from mo.js demos
	function isIOSSafari() {
		var userAgent;
		userAgent = window.navigator.userAgent;
		return userAgent.match(/iPad/i) || userAgent.match(/iPhone/i);
	};

	// taken from mo.js demos
	function isTouch() {
		var isIETouch;
		isIETouch = navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
		return [].indexOf.call(window, 'ontouchstart') >= 0 || isIETouch;
	};
	
	// taken from mo.js demos
	var isIOS = isIOSSafari(),
		clickHandler = isIOS || isTouch() ? 'touchstart' : 'click';

	function extend( a, b ) {
		for( var key in b ) { 
			if( b.hasOwnProperty( key ) ) {
				a[key] = b[key];
			}
		}
		return a;
	}

	function Animocon(el, options) {
		this.el = el;
		this.options = extend( {}, this.options );
		extend( this.options, options );

		this.checked = false;

		this.timeline = new mojs.Timeline();
		
		for(var i = 0, len = this.options.tweens.length; i < len; ++i) {
			this.timeline.add(this.options.tweens[i]);
		}

		var self = this;
		this.el.addEventListener(clickHandler, function() {
			if( self.checked ) {
				self.options.onUnCheck();
			}
			else {
				self.options.onCheck();
				self.timeline.start();
			}
			self.checked = !self.checked;
		});
	}

	Animocon.prototype.options = {
		tweens : [
			new mojs.Burst({
				shape : 'circle',
				isRunLess: true
			})
		],
		onCheck : function() { return false; },
		onUnCheck : function() { return false; }
	};

	// grid items:
	var items = [].slice.call(document.querySelectorAll('ol.grid > .grid__item'));
	console.log(items)
	function init() {
		
		/* Icon 13 */
		var el13 = $("#class13").querySelector('button.icobutton'), el13span = el13.querySelector('span');
		new Animocon(el13, {
			tweens : [
				// burst animation
				new mojs.Burst({
					parent: el13,
					duration: 600,
					shape : 'circle',
					fill: '#C0C1C3',
					x: '0%',
					y: '0%',
					childOptions: { 
						radius: {60:0},
						type: 'line',
						stroke: '#988ADE',
						strokeWidth: 1
					},
					radius: {80:250},
					angle: -90,
					count: 1,
					isRunLess: true,
					easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
				}),
				// burst animation
				new mojs.Burst({
					parent: el13,
					duration: 600,
					shape : 'circle',
					fill: '#C0C1C3',
					x: '0%',
					y: '50%',
					childOptions: { 
						radius: {60:0},
						type: 'line',
						stroke: '#988ADE',
						strokeWidth: 1
					},
					radius: {80:200},
					angle: -90,
					count: 1,
					isRunLess: true,
					easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
				}),
				// burst animation
				new mojs.Burst({
					parent: el13,
					duration: 600,
					shape : 'circle',
					fill: '#C0C1C3',
					x: '0%',
					y: '100%',
					childOptions: { 
						radius: {60:0},
						type: 'line',
						stroke: '#988ADE',
						strokeWidth: 1
					},
					radius: {80:250},
					angle: -90,
					count: 1,
					isRunLess: true,
					easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
				}),
				// burst animation
				new mojs.Burst({
					parent: el13,
					duration: 600,
					delay: 150,
					shape : 'circle',
					fill: '#C0C1C3',
					x: '50%',
					y: '50%',
					childOptions: { 
						radius: {30:0},
						type: 'line',
						stroke: '#988ADE',
						strokeWidth: {2:1}
					},
					radius: {60:90},
					degree: -90,
					angle: 135,
					count: 6,
					isRunLess: true,
					easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
				}),
				// icon scale animation
				new mojs.Tween({
					duration : 1000,
					onUpdate: function(progress) {
						var elasticOutProgress = mojs.easing.elastic.out(progress);
						el13span.style.WebkitTransform = el13span.style.transform = 'translate3d(' + -50*(1-elasticOutProgress) + '%,0,0)';
					}
				})
			],
			onCheck : function() {
				el13.style.color = '#988ADE';
			},
			onUnCheck : function() {
				el13.style.color = '#C0C1C3';	
			}
		});
		/* Icon 13 */

		/* Icon 14 */
		var el14 = items[13].querySelector('button.icobutton'), el14span = el14.querySelector('span'), el14counter = el14.querySelector('span.icobutton__text');
		new Animocon(el14, {
			tweens : [
				// ring animation
				new mojs.Transit({
					parent: el14,
					duration: 750,
					type: 'circle',
					radius: {0: 40},
					fill: 'transparent',
					stroke: '#F35186',
					strokeWidth: {35:0},
					opacity: 0.2,
					x: '50%',     
					y: '45%',
					isRunLess: true,
					easing: mojs.easing.bezier(0, 1, 0.5, 1)
				}),
				new mojs.Transit({
					parent: el14,
					duration: 500,
					delay: 100,
					type: 'circle',
					radius: {0: 20},
					fill: 'transparent',
					stroke: '#F35186',
					strokeWidth: {5:0},
					opacity: 0.2,
					x: '50%', 
					y: '50%',
					shiftX : 40, 
					shiftY : -60,
					isRunLess: true,
					easing: mojs.easing.sin.out
				}),
				new mojs.Transit({
					parent: el14,
					duration: 500,
					delay: 180,
					type: 'circle',
					radius: {0: 10},
					fill: 'transparent',
					stroke: '#F35186',
					strokeWidth: {5:0},
					opacity: 0.5,
					x: '50%', 
					y: '50%',
					shiftX : -10, 
					shiftY : -80,
					isRunLess: true,
					easing: mojs.easing.sin.out
				}),
				new mojs.Transit({
					parent: el14,
					duration: 800,
					delay: 240,
					type: 'circle',
					radius: {0: 20},
					fill: 'transparent',
					stroke: '#F35186',
					strokeWidth: {5:0},
					opacity: 0.3,
					x: '50%', 
					y: '50%',
					shiftX : -70, 
					shiftY : -10,
					isRunLess: true,
					easing: mojs.easing.sin.out
				}),
				new mojs.Transit({
					parent: el14,
					duration: 800,
					delay: 240,
					type: 'circle',
					radius: {0: 20},
					fill: 'transparent',
					stroke: '#F35186',
					strokeWidth: {5:0},
					opacity: 0.4,
					x: '50%', 
					y: '50%',
					shiftX : 80, 
					shiftY : -50,
					isRunLess: true,
					easing: mojs.easing.sin.out
				}),
				new mojs.Transit({
					parent: el14,
					duration: 1000,
					delay: 300,
					type: 'circle',
					radius: {0: 15},
					fill: 'transparent',
					stroke: '#F35186',
					strokeWidth: {5:0},
					opacity: 0.2,
					x: '50%', 
					y: '50%',
					shiftX : 20, 
					shiftY : -100,
					isRunLess: true,
					easing: mojs.easing.sin.out
				}),
				new mojs.Transit({
					parent: el14,
					duration: 600,
					delay: 330,
					type: 'circle',
					radius: {0: 25},
					fill: 'transparent',
					stroke: '#F35186',
					strokeWidth: {5:0},
					opacity: 0.4,
					x: '50%', 
					y: '50%',
					shiftX : -40, 
					shiftY : -90,
					isRunLess: true,
					easing: mojs.easing.sin.out
				}),
				// icon scale animation
				new mojs.Tween({
					duration : 1200,
					easing: mojs.easing.ease.out,
					onUpdate: function(progress) {
						if(progress > 0.3) {
							var elasticOutProgress = mojs.easing.elastic.out(1.43*progress-0.43);
							el14span.style.WebkitTransform = el14span.style.transform = 'scale3d(' + elasticOutProgress + ',' + elasticOutProgress + ',1)';
						}
						else {
							el14span.style.WebkitTransform = el14span.style.transform = 'scale3d(0,0,1)';
						}
					}
				})
			],
			onCheck : function() {
				el14.style.color = '#F35186';
				el14counter.innerHTML = Number(el14counter.innerHTML) + 1;
			},
			onUnCheck : function() {
				el14.style.color = '#C0C1C3';
				var current = Number(el14counter.innerHTML);
				el14counter.innerHTML = current > 1 ? Number(el14counter.innerHTML) - 1 : '';
			}
		});
		/* Icon 14 */



		
		
		// bursts when hovering the mo.js link
		var molinkEl = document.querySelector('.special-link'),
			moTimeline = new mojs.Timeline(),
			moburst1 = new mojs.Burst({
				parent: molinkEl,
				duration: 1300,
				shape : 'circle',
				fill : [ '#988ADE', '#DE8AA0', '#8AAEDE', '#8ADEAD', '#DEC58A', '#8AD1DE' ],
				x: '0%',
				y: '-50%',
				radius: {0:60},
				count: 6,
				isRunLess: true,
				easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
			}),
			moburst2 = new mojs.Burst({
				parent: molinkEl,
				duration: 1600,
				delay: 100,
				shape : 'circle',
				fill : [ '#988ADE', '#DE8AA0', '#8AAEDE', '#8ADEAD', '#DEC58A', '#8AD1DE' ],
				x: '-100%',
				y: '-20%',
				radius: {0:120},
				count: 14,
				isRunLess: true,
				easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
			}),
			moburst3 = new mojs.Burst({
				parent: molinkEl,
				duration: 1500,
				delay: 200,
				shape : 'circle',
				fill : [ '#988ADE', '#DE8AA0', '#8AAEDE', '#8ADEAD', '#DEC58A', '#8AD1DE' ],
				x: '130%',
				y: '-70%',
				radius: {0:90},
				count: 8,
				isRunLess: true,
				easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
			}),
			moburst4 = new mojs.Burst({
				parent: molinkEl,
				duration: 2000,
				delay: 300,
				shape : 'circle',
				fill : [ '#988ADE', '#DE8AA0', '#8AAEDE', '#8ADEAD', '#DEC58A', '#8AD1DE' ],
				x: '-20%',
				y: '-150%',
				radius: {0:60},
				count: 14,
				isRunLess: true,
				easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
			}),
			moburst5 = new mojs.Burst({
				parent: molinkEl,
				duration: 1400,
				delay: 400,
				shape : 'circle',
				fill : [ '#988ADE', '#DE8AA0', '#8AAEDE', '#8ADEAD', '#DEC58A', '#8AD1DE' ],
				x: '30%',
				y: '-100%',
				radius: {0:60},
				count: 12,
				isRunLess: true,
				easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
			});

		moTimeline.add(moburst1, moburst2, moburst3, moburst4, moburst5);
		molinkEl.addEventListener('mouseenter', function() {
			moTimeline.start();
		});
	}
	
	init();

})(window);