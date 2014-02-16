Keeping things relative
=======================
I've applied a rem-only approach to the entire project so it can be transformed into a responsive project in little time. A rem-only approach helps with the line-heightHowever, with understanding that the project requires IE 7/8 to be supported, I've provided a hard-coded fallback for all rem units.

Resetting the html font-size
======================
I have made it fairly convenient to do the fallbacks. The document (HTML tag) font-size is set to 62.5%; That resets the counter to 10px from the default 16px. That allows me to run all of the numbers like the following:

```
with the reset:
1rem = 10px

examples:
1000px = 100rem
16px = 1.6px
```

This makes mental calcuation between rem and pixels fairly doable. I've even added a sass function "forkunits" to do the fallback conversion for me, instead of having to type in the property two times.

OOCSS & Grids
=============
I never write vanilla CSS. I use the sass preprocessor.

Having built the site from scratch so quickly, the site is bound to have some mistakes. I expect that. However, the architecture in HTML and CSS is consistent. I use the BEM (Block, Element, Modifier) methodology. I usually separate my css into tiny sass files categorized in few sections
(Base, Legacy Hacks, Components, UI).

I follow Mailchimp's excellent methods for padding & margins. I've dynamically built (thanks to sass) classes of 1 to 30px (with respective rem counterparts). With these classes I can easily @extend (sass function) these classes to any element to quickly build components. I avoid hard-coding padding/margins at all costs. A lot of my components include 75% to 100% of @extend properties. Basically this: if there is a property that you need to use but haven't built to be extendable, build it then extend it.

I try to make my grids consistent by avoiding putting UI classes directly on the grid elements. Unless I'm making a component.

```
.row
  .column
    .block__
      .row
        .column
          .someotherclass
            .row
              etc...
```

"is" file
=========
I usually use a ".is" modular methodlogy where most of properties become extendable, all of them consolidated in a partial sass file called "is". For instance, instead of hand-coding float: left, I just create a class called .is__this--floating--left. Then I extend all things that need to be floated left with that class. This method covers a lot of properities (from text formatting to color to backgrounds to borders);

Choosing to use polyfills for IE7
=================================
I went ahead and used one polyfill. The polyfill extends box-sizing: border-box support to IE7/8.

I have went ahead and used the polyfill because this property alone allows the design of the grid and the elements to be simpler, to be more honest. A more honest design means it's more maintainable. No hacks.

If it was up to me, I'd just slap on this [blanket polyfill](http://code.google.com/p/ie7-js/) with the assistance of Modernizr. The global userbase for IE7 and lower is so tiny, according to W3C's 2013 stats - totals to half a percent. I think a proven polyfill will do the job very well.


Single-direction Margin Declarations
====================================
Almost all of the grid elements have only bottom-margin or left-margin declared. This greatly reduces the chance of collapsing margins.

A very good article on mangaging [margins](http://csswizardry.com/2012/06/single-direction-margin-declarations/).

##Graceful Degradation

I think it's very important to communicate with the client that the website will NOT look the same across websites — that they should expect minor variations in styling. The right mentality largely reduces the amount of hacking/polyfills needed.

So with that mind, the transparent elements are degraded to similar-colored solid counterparts. The transparent of the captions and the gradients of the navigation bar will degrade to solid colors.

##PNGS in IE7+
The play buttons of the videos will disappear on IE7. We can resolve this with the following options
  - use a polyfill (PNG)
  - backend programming & conditional tags (backend code creates separate thumbnails with the play button burned in, and conditional tags show different images)

##Separate IE styling file
I've made a separate IE file, so it's easier to see what kind of hacks are made. And when we can terminate support, we only need to remove this file. We can modify this file to match up with conditional tags in HTML if that is chosen to be implemented.

Remaning jinks to be worked out
===============================
There are two things I haven't implemented yet.

It's the "ribbon wings" of the blue title ribbons of "categories" & "videos".

And the carousel shows the thumbs instead of the full-size images.

Overall
=======
Beyond this challenge and in a real-world scenario, I would have relied on:

 - a community-maintained framework (far less bugs), - a few polyfills ( PNG/rgba support, box-sizing support)
 - a responsive design
 - more communication with the designer

 It's far more productive when the design is responsive and pixels aren't paid attention to. This brings on a more flexible mentality, allowing things to degrade gracefully instead of worrying whether this will look exactly the same in the legacy.

 Also, the PSD itself doesn't follow any kind of (PSD equitette rules)[http://photoshopetiquette.com/] and it makes the recent front-end implementation quite chore-filled. Too many fonts vary in size and formatting. There's no easy way to export all of the assets. That kind of thing. If I do get hired, I do hope there's some kind of standard your designers and front-end devs do follow while designing these templates, or at least I can provide guidance.

 And of course, as a very strong promoter of responsive design, I believe a device perfect — rather than pixel perfect — approach makes design more effective and fareaching, and coding practical.

 Any questions you have lingering, fire away.

 It was a fun challenge.

 Cheers.

 Seth