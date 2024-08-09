---
title: 3D Campsite Experience
pubDate: 2024-01-09
projectDuration: 1 Week
isDraft: true
description: Exploring 3D interaction on the web.
role: Jackie Ho
category: 3D Interaction
thumbnail: "../../images/portfolio/campsite/campsite.jpg"
alt: campsite
technology: Spline, Lighthouse, Astro
isLocked: false
cta: Learn more
deliverables: [3D Demo]
carousel: []
hero: "../../images/portfolio/campsite/campsite.jpg"

---
## Project Summary
3D interaction adds a very novel experience that is not available currently in a lot of websites. This novelty makes the web experience more memorible, which can lead to better user retention and shareability. 


# Exploring 3D Case Study
<script type="module" src="https://unpkg.com/@splinetool/viewer@1.0.54/build/spline-viewer.js"></script>
<spline-viewer  url="https://prod.spline.design/4RTRFFhgCxiilGVL/scene.splinecode"></spline-viewer>

After the 3D Canvas has loaded, you can use 2 fingers or a mouse to orbit the 3D Space horizontally.



## Performance
I originally wanted to have 3D interactive elements as a homepage hero but opted against it as it severaly affected the performance load of the website. This defeated the purpose of building this in Astro to begin with. 

Loading up reduced the performance of the page up to 30 points in Lighthouse. The more objects that you have within the 3D Canvas, the harder it is on performance.

## Creating the scene
Using the pre-built objects to populate the scene with tents, fires, trees and etc.

## Lighting
I wanted to create a night environment so I removed all ambient light from the scene. I created the fire light by using a coloured spotlight to light up the space by the fire. I added a point light to the moon to ensure that it's bright enough to illuminate the scene.

## Smoke effects
Using a particle system to generate smoke effects by tweaking the speed, size, colour  and other particle attributes.

## Animation
Spline also has a lot of event-based triggers for animation. For this example, I just used an on start event and rotated the fire object.

 
