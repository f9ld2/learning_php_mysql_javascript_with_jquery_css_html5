//<pre><code class="javascript"></code></pre>
<pre>
<code class="javascript">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
    &lt;head&gt;
        &lt;title&gt;Simple Animation&lt;/title&gt;
        &lt;script src='OSC.js'&gt;&lt;/script&gt;
        &lt;style&gt;
        #box {
            position :absolute;
            background:orange;
            border :1px solid red;
        }
        &lt;/style&gt;
    &lt;/head&gt;
    &lt;body&gt;
        &lt;div id='box'&gt;&lt;/div&gt;
        &lt;script&gt;
            SIZE = LEFT = 0
            setInterval(animate, 30)
            function animate()
            {
                SIZE += 10
                LEFT += 3
                if (SIZE == 200) SIZE = 0
                if (LEFT == 600) LEFT = 0
                S('box').width = SIZE + 'px'
                S('box').height = SIZE + 'px'
                S('box').left = LEFT + 'px'
            }
        &lt;/script&gt;
    &lt;/body&gt;
&lt;/html&gt;
</code>
</pre>