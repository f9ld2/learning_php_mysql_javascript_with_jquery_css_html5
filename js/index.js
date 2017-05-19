//<pre><code class="php"></code></pre>
<pre>
<code class="php">
&lt;?php
    session_start();
    if (!isset($_SESSION['initiated']))
    {
        session_regenerate_id();
        $_SESSION['initiated'] = 1;
    }
    if (!isset($_SESSION['count'])) $_SESSION['count'] = 0;
    else ++$_SESSION['count'];
        echo $_SESSION['count'];
?&gt;
</code>
</pre>