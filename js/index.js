//<pre><code class="javascript"></code></pre>
<pre>
<code class="javascript">
&lt;script&gt;
    // Alphabetical sort
    sports = ["Football", "Tennis", "Baseball", "Hockey"]
    sports.sort()
    document.write(sports + "&lt;br&gt;")
    
    // Reverse alphabetical sort
    sports = ["Football", "Tennis", "Baseball", "Hockey"]
    sports.sort().reverse()
    document.write(sports + "&lt;br&gt;")
    
    // Ascending numeric sort
    numbers = [7, 23, 6, 74]
    numbers.sort(function(a,b){return a - b})
    document.write(numbers + "&lt;br&gt;")
    
    // Descending numeric sort
    numbers = [7, 23, 6, 74]
    numbers.sort(function(a,b){return b - a})
    document.write(numbers + "&lt;br&gt;")
&lt;/script&gt;
</code>
</pre>