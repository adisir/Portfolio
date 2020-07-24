# PortfolioExampleSBA

This is an example portfolio I made for a full stack java course. We were given the option to make anything with the skills we made and I made an example portfolio. I learned a lot from this project and I will probably use a similar portfolio later without the meet me section. I added that part to meet the technical specifications. 

# Getting Started 
To open the website, you can open the index.html and that will serve as the home page. 

# Installation 

There is no installation. You can run index.html in any browser like chrome. 

# Functionality 
On the home page, my name and job have rubberband animation on hover and contact me button also has an animation on hover. 

In the about me section, I used scrollTrigger and GSAP library to make the bars work on scroll. So if you scroll down they increase, if you scroll up they decrease. 

The projects section has buttons that filter what type of projects the person can see and links to my other projects. 

Finally, the meet me section was added to meet all the technical specifications of the project such as having a table and another form with regex validation. 

# Features 
The portfolio is fully responsive because of a media query. Once the screen size hits certain breakpoints. Image-widths are turned into percentages so that they can be resized according to the device. 

```css
@media (max-width: 960px) {
	.profile-img img{
		width: 90%;
	}
	.contact h1, .projects h1, .about h1, .skills h1, .reason h1{font-size: 4rem;
		margin-bottom: 40px;
	}
	.about h1 {
		margin-bottom: 80px;
	}

	.navbar{ display: none; }
	.topnav { display: block; }
	form input,
	form textarea{
		width: 80%;
	}
	.container{
		padding: 0 8%;
	}
	#projects{
		margin-bottom: 10vh;
		text-align:center;
	}
  
	nav {
		flex-flow:column wrap;
	}
}
```
# Libraries

This project uses the ScrollTrigger plugin from the GSAP library to use trigger animations on scroll in the skills animation on the skills page. I initialized a timeline properties like so and added animations to be triggered on scroll when it hits the skills class. 

```js
var t1 = gsap.timeline({
	scrollTrigger: {
      trigger: ".skills",
      pin: true,   // pin the trigger element while active
      start: "top top", // when the top of the trigger hits the top of the viewport
      end: "+=500", // end after scrolling 500px beyond the start
      scrub: 1
    }
  }
)
```

This library can be found at https://greensock.com/docs/
