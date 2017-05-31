//<pre><code class="javascript"></code></pre>
<pre>
<code class="javascript">
window.onload = function()
{
    if (!!document.getItems)
    {
        data = document.getItems('http://schema.org/Person')[0]
        alert(data.properties['jobTitle'][0].textContent)
    }
}
</code>
</pre>