$(document).ready(function(){var e=[{full:"images/carousel/full--1.jpg",thumb:"images/carousel/thumb--1.jpg",headline:"DOWNTOWN BALTIMORE",subtitle:"Check out the USS Torsk at Baltimore's historic Maritime Museum."},{full:"images/carousel/full--2.jpg",thumb:"images/carousel/thumb--2.jpg",headline:"EXPLORING THE VENETIAN",subtitle:"Enjoy the best gondola ride on this side of the Atlantic Ocean."},{full:"images/carousel/full--3.jpg",thumb:"images/carousel/thumb--3.jpg",headline:"LONDON AFTER DARK",subtitle:"Enjoy the pubs along the river Thames & get spectacular view from the London Eye."},{full:"images/carousel/full--4.jpg",thumb:"images/carousel/thumb--4.jpg",headline:"MOUNT RUSHMORE",subtitle:"Marvel at the majestic beauty of the Black Hills and come face to face with American history."}];$.fn.carousel=function(e){var a=!1,u=e,l=0,t=$(".j--block__carousel");$(".j--carousel__main--image");var o=$(".j--carousel__thumb-roll"),s=$(".j--carousel__main--headline"),r=$(".j--carousel__main--subtitle"),n="";$.fn.carouselIsHoveredByUser=function(){t.hover(function(){a=!a,console.log(a)})},$.fn.carouselPopulateThumbs=function(){for(var e in u){var a='data-thumbNumber="'+e+'"',l=u[e].thumb,t='src="'+l+'"',s='<div class="carousel__thumb"><img class="j--carousel__thumb--image" '+a+" "+t+"></div>";o.append(s)}n=$(".j--carousel__thumb--image")},$.fn.carouselPopulateMainImage=function(e){var e=e,a=u[e];$(".j--carousel__main--image").attr("src",a.full),s.html(a.headline),r.html(a.subtitle),l=e},$.fn.carouselPlay=function(){setInterval(function(){a||($.fn.carouselPopulateMainImage(l),l++,l===u.length&&(l=0))},1500)},$.fn.carouselThumbHoverEmitter=function(){n.hover(function(){var e=$(this).data("thumbnumber");$.fn.carouselPopulateMainImage(e)})},$.fn.carouselIsHoveredByUser(),$.fn.carouselPopulateThumbs(),$.fn.carouselPopulateMainImage(l),$.fn.carouselPlay(),$.fn.carouselThumbHoverEmitter()},$.fn.carousel(e)});