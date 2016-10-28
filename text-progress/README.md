# text-progressbar
A superlight textprogressbar using HTML,CSS3 Transitions and jQuery. This plugin uses CSS animations instead of using the "animate" feature of jQuery.

# Features

* Animate all fonts and font icons. (images should be able to do same thing using backgrounds)
* Show percentege of the progress
* Supersmall ~200bytes of JavaScript and ~800bytes of core CSS

# Demo
[View demo here](http://dev.jonatanolsson.se/textprogress/index.html)

# How to use?
Attach to your website after jQuery
```
<script src="jquery.js"></script>
<script src="assets/js/txtProgress.js"></script>
```

Create a container with the class "textProgress" and assign an identifying class or ID depending what you want "html" in this case and then two spans within and with the class "tp" (textprogress) and after that add a div with the class "progress" as shown below.
```
    <div class="textProgress html">
        <span class="tp">HTML</span>
        <span class="tp">HTML</span>
        <div class="progress"><span class="percent">0</span></div>
    </div>
```
Then call textProgress using something like waypoints.js to trigger the animation. 

```
$(".html").textProgress(100); // 100%
```

Done!


Created by Jonatan Olsson
