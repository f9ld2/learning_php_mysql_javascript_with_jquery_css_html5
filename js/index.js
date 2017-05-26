//<pre><code class="javascript"></code></pre>
<pre>
<code class="javascript">
&lt;!DOCTYPE html&gt;
&lt;html&gt; &lt;!-- jqueryajaxget.htm --&gt;
    &lt;head&gt;
        &lt;title&gt;jQuery Ajax Get&lt;/title&gt;
        &lt;script src='jquery-1.11.1.min.js'&gt;&lt;/script&gt;
    &lt;/head&gt;
    &lt;body style='text-align:center'&gt;
        &lt;h1&gt;Loading a web page into a DIV&lt;/h1&gt;
        &lt;div id='info'&gt;This sentence will be replaced&lt;/div&gt;
        &lt;script&gt;
            $.get('urlget.php?url=amazon.com/gp/aw', function(data){
                $('#info').html(data)
            } )
        &lt;/script&gt;
    &lt;/body&gt;
&lt;/html&gt;
</code>
</pre>