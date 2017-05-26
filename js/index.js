//<pre><code class="css"></code></pre>
<pre>
<code class="css">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
    &lt;head&gt;
        &lt;title&gt;Transitioning on hover&lt;/title&gt;
        &lt;style&gt;
            #square {
                position :absolute;
                top :50px;
                left :50px;
                width :100px;
                height :100px;
                padding :2px;
                text-align :center;
                border-width :1px;
                border-style :solid;
                background :orange;
                transition :all .8s ease-in-out;
                -moz-transition :all .8s ease-in-out;
                -webkit-transition:all .8s ease-in-out;
                -o-transition :all .8s ease-in-out;
                -ms-transition :all .8s ease-in-out;
            }

            #square:hover {
                background :yellow;
                -moz-transform :rotate(180deg);
                -webkit-transform :rotate(180deg);
                -o-transform :rotate(180deg);
                -ms-transform :rotate(180deg);
                transform :rotate(180deg);
            }
        &lt;/style&gt;
    &lt;/head&gt;
    &lt;body&gt;
        &lt;div id='square'&gt;
        Square shape&lt;br&gt;
        created using&lt;br&gt;
        a simple div&lt;br&gt
        element with&lt;br&gt;
        a 1px border
        &lt;/div&gt;
    &lt;/body&gt;
&lt;/html&gt;
</code>
</pre>