## JavaScript ```defer``` vs ```async``` script attributes

### defer
When the ```defer``` attribute is used on the ```<script>``` tags, all the JavaScript files will get loaded in the background without stopping the processing of HTML, thereby building the DOM and making the content visible quickly. All the loaded scripts will be executed when the DOM has been built.


### async
When the ```async``` attribute is used on the ```<script>``` tag, the JavaScript files will load in the background without blocking the processing of HTML. But, the scripts using async don't depend on anything and get executed as soon as they are loaded. 

<br><br>

The main difference between ```defer``` and ```async``` is that scripts loaded with defer attribute wait till the DOM is built and also follow the original order. In the case of async, once the scripts load in the background, it gets executed irrespective of their order of use.