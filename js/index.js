//<pre><code class="javascript"></code></pre>
<pre>
<code class="javascript">
<span>&lt;!DOCTYPE html&gt;</span>
<span>&lt;html&gt; &lt;!-- jqueryajaxget.htm --&gt;</span>
<span>&lt;head&gt;</span>
<span>&lt;title&gt;jQuery Ajax Get&lt;/title&gt;</span>
<span>&lt;script src='jquery-1.11.1.min.js'&gt;&lt;/script&gt;</span>
<span>&lt;/head&gt;</span>
<span>&lt;body style='text-align:center'&gt;</span>
<span>&lt;h1&gt;Loading a web page into a DIV&lt;/h1&gt;</span>
<span>&lt;div id='info'&gt;This sentence will be replaced&lt;/div&gt;</span>
<span>&lt;script&gt;</span>
<span>&nbsp;</span>
<span>$.get('urlget.php?url=amazon.com/gp/aw', function(data)</span>
<span>&nbsp;</span>
<span>{</span>
<span>&nbsp;</span>
<span>$('#info').html(data)</span>
<span>&nbsp;</span>
<span>} )</span>
<span>&lt;/script&gt;</span>
<span>&lt;/body&gt;</span>
<span>&lt;/html&gt;</span>
</code>
</pre>