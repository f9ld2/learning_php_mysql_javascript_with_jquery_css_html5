<section>
    <h2>Introduction to Dynamic Web Content</h2>
    <span>The World Wide Web is a constantly evolving network that has already traveled far</span>
    <span>beyond its conception in the early 1990s, when it was created to solve a specific prob‐</span>
    <span>lem. State-of-the-art experiments at CERN (the European Laboratory for Particle</span>
    <span>Physics&mdash;now best known as the operator of the Large Hadron Collider) were pro‐</span>
    <span>ducing incredible amounts of data&mdash;so much that the data was proving unwieldy to</span>
    <span>distribute to the participating scientists who were spread out across the world.</span>
    <span>At this time, the Internet was already in place, with several hundred thousand com‐</span>
    <span>puters connected to it, so Tim Berners-Lee (a CERN fellow) devised a method of nav‐</span>
    <span>igating between them using a hyperlinking framework, which came to be known as</span>
    <span>Hypertext Transfer Protocol, or HTTP. He also created a markup language called</span>
    <span>Hypertext Markup Language, or HTML. To bring these together, he wrote the first</span>
    <span>web browser and web server, tools that we now take for granted.</span>
    <span>But back then, the concept was revolutionary. The most connectivity so far experi‐</span>
    <span>enced by at-home modem users was dialing up and connecting to a bulletin board</span>
    <span>that was hosted by a single computer, where you could communicate and swap data</span>
    <span>only with other users of that service. Consequently, you needed to be a member of</span>
    <span>many bulletin board systems in order to effectively communicate electronically with</span>
    <span>your colleagues and friends.</span>
    <span>But Berners-Lee changed all that in one fell swoop, and by the mid-1990s, there were</span>
    <span>three major graphical web browsers competing for the attention of 5 million users. It</span>
    <span>soon became obvious, though, that something was missing. Yes, pages of text and</span>
    <span>graphics with hyperlinks to take you to other pages was a brilliant concept, but the</span>
    <span>results didn&rsquo;t reflect the instantaneous potential of computers and the Internet to</span>
    <span>meet the particular needs of each user with dynamically changing content. Using the</span>
    <span>Web was a very dry and plain experience, even if we did now have scrolling text and</span>
    <span>animated GIFs!</span>
    <span>Shopping carts, search engines, and social networks have clearly altered how we use</span>
    <span>the Web. In this chapter, we&rsquo;ll take a brief look at the various components that make</span>
    <span>up the Web, and the software that helps make it a rich and dynamic experience.</span>
    <span>It is necessary to start using some acronyms more or less right</span>
    <span>away. I have tried to clearly explain them before proceeding. But</span>
    <span>don&rsquo;t worry too much about what they stand for or what these</span>
    <span>names mean, because the details will become clear as you read on.</span>
    <h4>HTTP and HTML: Berners-Lee&rsquo;s Basics</h4>
    <span>HTTP is a communication standard governing the requests and responses that take</span>
    <span>place between the browser running on the end user&rsquo;s computer and the web server.</span>
    <span>The server&rsquo;s job is to accept a request from the client and attempt to reply to it in a</span>
    <span>meaningful way, usually by serving up a requested web page&mdash;that&rsquo;s why the term</span>
    <span>server</span>
    <span>is used. The natural counterpart to a server is a</span>
    <span>client</span>
    <span>, so that term is applied</span>
    <span>both to the web browser and the computer on which it&rsquo;s running.</span>
    <span>Between the client and the server there can be several other devices, such as routers,</span>
    <span>proxies, gateways, and so on. They serve different roles in ensuring that the requests</span>
    <span>and responses are correctly transferred between the client and server. Typically, they</span>
    <span>use the Internet to send this information.</span>
    <span>A web server can usually handle multiple simultaneous connections and&mdash;when not</span>
    <span>communicating with a client&mdash;spends its time listening for an incoming connection.</span>
    <span>When one arrives, the server sends back a response to confirm its receipt.</span>
    <h3>The Request/Response Procedure</h3>
    <span>At its most basic level, the request/response process consists of a web browser asking</span>
    <span>the web server to send it a web page and the server sending back the page. The</span>
    <span>browser then takes care of displaying the page (see</span>
    <span>Figure 1-1</span>
    <span>).</span>
    <span>Figure 1-1. The basic client/server request/response sequence</span>
    <span>Each step in the request and response sequence is as follows:</span>
    <span>1.</span>
    <span>You enter</span>
    <span>http://server.com</span>
    <span>into your browser&rsquo;s address bar.</span>
    <span>2.</span>
    <span>Your browser looks up the IP address for</span>
    <span>server.com</span>
    <span>.</span>
    <span>3.</span>
    <span>Your browser issues a request for the home page at</span>
    <span>server.com</span>
    <span>.</span>
    <span>4.</span>
    <span>The request crosses the Internet and arrives at the</span>
    <span>server.com</span>
    <span>web server.</span>
    <span>5.</span>
    <span>The web server, having received the request, looks for the web page on its disk.</span>
    <span>6.</span>
    <span>The web page is retrieved by the server and returned to the browser.</span>
    <span>7.</span>
    <span>Your browser displays the web page.</span>
    <span>For an average web page, this process takes place once for each object within the</span>
    <span>page: a graphic, an embedded video or Flash file, and even a CSS template.</span>
    <span>In step 2, notice that the browser looked up the IP address of</span>
    <span>&nbsp;server.com</span>
    <span>. Every</span>
    <span>machine attached to the Internet has an IP address&mdash;your computer included. But we</span>
    <span>generally access web servers by name, such as</span>
    <span>google.com</span>
    <span>. As you probably know, the</span>
    <span>browser consults an additional Internet service called the Domain Name Service</span>
    <span>(DNS) to find its associated IP address and then uses it to communicate with the</span>
    <span>computer.</span>
    <span>For dynamic web pages, the procedure is a little more involved, because it may bring</span>
    <span>both PHP and MySQL into the mix (see</span>
    <span>Figure 1-2</span>
    <span>).</span>
    <span>Figure 1-2. A dynamic client/server request/response sequence</span>
    <span>1.</span>
    <span>You enter</span>
    <span>http://server.com</span>
    <span>into your browser&rsquo;s address bar.</span>
    <span>2.</span>
    <span>Your browser looks up the IP address for</span>
    <span>server.com</span>
    <span>.</span>
    <span>3.</span>
    <span>Your browser issues a request to that address for the web server&rsquo;s home page.</span>
    <span>4.</span>
    <span>The request crosses the Internet and arrives at the</span>
    <span>server.com</span>
    <span>web server.</span>
    <span>5.</span>
    <span>The web server, having received the request, fetches the home page from its hard</span>
    <span>disk.</span>
    <span>6.</span>
    <span>With the home page now in memory, the web server notices that it is a file incor‐</span>
    <span>porating PHP scripting and passes the page to the PHP interpreter.</span>
    <span>7.</span>
    <span>The PHP interpreter executes the PHP code.</span>
    <span>8.</span>
    <span>Some of the PHP contains MySQL statements, which the PHP interpreter now</span>
    <span>passes to the MySQL database engine.</span>
    <span>9.</span>
    <span>The MySQL database returns the results of the statements to the PHP interpreter.</span>
    <span>10.</span>
    <span>The PHP interpreter returns the results of the executed PHP code, along with the</span>
    <span>results from the MySQL database, to the web server.</span>
    <span>11.</span>
    <span>The web server returns the page to the requesting client, which displays it.</span>
    <span>Although it&rsquo;s helpful to be aware of this process so that you know how the three ele‐</span>
    <span>ments work together, in practice you don&rsquo;t really need to concern yourself with these</span>
    <span>details, because they all happen automatically.</span>
    <span>HTML pages returned to the browser in each example may well contain JavaScript,</span>
    <span>which will be interpreted locally by the client, and which could initiate another</span>
    <span>request&mdash;the same way embedded objects such as images would.</span>
    <h3>The Benefits of PHP, MySQL, JavaScript, CSS, and HTML5</h3>
    <span>At the start of this chapter, I introduced the world of Web 1.0, but it wasn&rsquo;t long</span>
    <span>before the rush was on to create Web 1.1, with the development of such browser</span>
    <span>enhancements as Java, JavaScript, JScript (Microsoft&rsquo;s slight variant of JavaScript), and</span>
    <span>ActiveX. On the server side, progress was being made on the Common Gateway</span>
    <span>Interface (CGI) using scripting languages such as Perl (an alternative to the PHP lan‐</span>
    <span>guage) and</span>
    <span>server-side scripting</span>
    <span>&mdash;inserting the contents of one file (or the output of a</span>
    <span>system call) into another one dynamically.</span>
    <span>Once the dust had settled, three main technologies stood heads and shoulders above</span>
    <span>the others. Although Perl was still a popular scripting language with a strong follow‐</span>
    <span>ing, PHP&rsquo;s simplicity and built-in links to the MySQL database program had earned it</span>
    <span>more than double the number of users. And JavaScript, which had become an essen‐</span>
    <span>tial part of the equation for dynamically manipulating Cascading Style Sheets (CSS)</span>
    <span>and HTML, now took on the even more muscular task of handling the client side of</span>
    <span>the Ajax process. Under Ajax, web pages perform data handling and send requests to</span>
    <span>web servers in the background&mdash;without the web user being aware that this is going</span>
    <span>on.</span>
    <span>No doubt the symbiotic nature of PHP and MySQL helped propel them both for‐</span>
    <span>ward, but what attracted developers to them in the first place? The simple answer has</span>
    <span>to be the ease with which you can use them to quickly create dynamic elements on</span>
    <span>websites. MySQL is a fast and powerful, yet easy-to-use, database system that offers</span>
    <span>just about anything a website would need in order to find and serve up data to brows‐</span>
    <span>ers. When PHP allies with MySQL to store and retrieve this data, you have the funda‐</span>
    <span>mental</span>
    <span>parts</span>
    <span>required</span>
    <span>for</span>
    <span>the</span>
    <span>development</span>
    <span>of</span>
    <span>social</span>
    <span>networking</span>
    <span>sites</span>
    <span>and</span>
    <span>the</span>
    <span>beginnings of Web 2.0.</span>
    <span>And when you bring JavaScript and CSS into the mix too, you have a recipe for build‐</span>
    <span>ing highly dynamic and interactive websites.</span>
    <h4>Using PHP</h4>
    <span>With PHP, it&rsquo;s a simple matter to embed dynamic activity in web pages. When you</span>
    <span>give pages the</span>
    <span>.php</span>
    <span>extension, they have instant access to the scripting language. From</span>
    <span>a developer&rsquo;s point of view, all you have to do is write code such as the following:</span>
    <span>&lt;?php</span>
    <span>echo " Today is " . date("l") . ". ";</span>
    <span>?&gt;</span>
    <span>Here's the latest news.</span>
    <span>The opening</span>
    <span>&lt;?php</span>
    <span>tells the web server to allow the PHP program to interpret all the</span>
    <span>following code up to the</span>
    <span>?&gt;</span>
    <span>tag. Outside of this construct, everything is sent to the</span>
    <span>client as direct HTML. So the text</span>
    <span>Here's the latest news.</span>
    <span>is simply output to the</span>
    <span>browser; within the PHP tags, the built-in</span>
    <span>date</span>
    <span>function displays the current day of</span>
    <span>the week according to the server&rsquo;s system time.</span>
    <span>The final output of the two parts looks like this:</span>
    <span>Today is Wednesday. Here's the latest news.</span>
    <span>PHP is a flexible language, and some people prefer to place the PHP construct</span>
    <span>directly next to PHP code, like this:</span>
    <span>Today is &lt;?php echo date("l"); ?&gt;. Here's the latest news.</span>
    <span>There are also other ways of formatting and outputting information, which I&rsquo;ll</span>
    <span>explain in the chapters on PHP. The point is that with PHP, web developers have a</span>
    <span>scripting language that, although not as fast as compiling your code in C or a similar</span>
    <span>language, is incredibly speedy and also integrates seamlessly with HTML markup.</span>
    <span>If you intend to enter the PHP examples in this book to work along</span>
    <span>with me, you must remember to add</span>
    <span>&lt;?php</span>
    <span>in front and</span>
    <span>?&gt;</span>
    <span>after</span>
    <span>them to ensure that the PHP interpreter processes them. To facili‐</span>
    <span>tate this, you may wish to prepare a file called</span>
    <span>&nbsp;example.php</span>
    <span>&nbsp;with</span>
    <span>those tags in place.</span>
    <span>Using PHP, you have unlimited control over your web server. Whether you need to</span>
    <span>modify HTML on the fly, process a credit card, add user details to a database, or fetch</span>
    <span>information from a third-party website, you can do it all from within the same PHP</span>
    <span>files in which the HTML itself resides.</span>
    <h4>Using MySQL</h4>
    <span>Of course, there&rsquo;s not a lot of point to being able to change HTML output dynami‐</span>
    <span>cally unless you also have a means to track the changes that users make as they use</span>
    <span>your website. In the early days of the Web, many sites used &ldquo;flat&rdquo; text files to store</span>
    <span>data such as usernames and passwords. But this approach could cause problems if the</span>
    <span>file wasn&rsquo;t correctly locked against corruption from multiple simultaneous accesses.</span>
    <span>Also, a flat file can get only so big before it becomes unwieldy to manage&mdash;not to</span>
    <span>mention the difficulty of trying to merge files and perform complex searches in any</span>
    <span>kind of reasonable time.</span>
    <span>That&rsquo;s where relational databases with structured querying become essential. And</span>
    <span>MySQL, being free to use and installed on vast numbers of Internet web servers, rises</span>
    <span>superbly to the occasion. It is a robust and exceptionally fast database management</span>
    <span>system that uses English-like commands.</span>
    <span>The highest level of MySQL structure is a database, within which you can have one</span>
    <span>or more tables that contain your data. For example, let&rsquo;s suppose you are working on</span>
    <span>a table called</span>
    <span>users</span>
    <span>, within which you have created columns for</span>
    <span>surname</span>
    <span>,</span>
    <span>firstname</span>
    <span>,</span>
    <span>and</span>
    <span>email</span>
    <span>, and you now wish to add another user. One command that you might use</span>
    <span>to do this is as follows:</span>
    <span>INSERT INTO users VALUES('Smith', 'John', 'jsmith@mysite.com');</span>
    <span>Of course, as mentioned earlier, you will have issued other commands to create the</span>
    <span>database and table and to set up all the correct fields, but the</span>
    <span>INSERT</span>
    <span>command here</span>
    <span>shows how simple it can be to add new data to a database.</span>
    <span>INSERT</span>
    <span>is an example of</span>
    <span>Structured Query Language (SQL), a language designed in the early 1970s and remi‐</span>
    <span>niscent of one of the oldest programming languages, COBOL. It is well suited, how‐</span>
    <span>ever, to database queries, which is why it is still in use after all this time.</span>
    <span>It&rsquo;s equally easy to look up data. Let&rsquo;s assume that you have an email address for a user</span>
    <span>and need to look up that person&rsquo;s name. To do this, you could issue a MySQL query</span>
    <span>such as the following:</span>
    <span>SELECT surname,firstname FROM users WHERE email='jsmith@mysite.com';</span>
    <span>MySQL will then return</span>
    <span>Smith, John</span>
    <span>and any other pairs of names that may be asso‐</span>
    <span>ciated with that email address in the database.</span>
    <span>As you&rsquo;d expect, there&rsquo;s quite a bit more that you can do with MySQL than just simple</span>
    <span>INSERT</span>
    <span>and</span>
    <span>SELECT</span>
    <span>commands. For example, you can join multiple tables according</span>
    <span>to various criteria, ask for results in a variety of orders, make partial matches when</span>
    <span>you know only part of the string that you are searching for, return only the</span>
    <span>n</span>
    <span>th result,</span>
    <span>and a lot more.</span>
    <span>Using PHP, you can make all these calls directly to MySQL without having to run the</span>
    <span>MySQL program yourself or use its command-line interface. This means you can save</span>
    <span>the results in arrays for processing and perform multiple lookups, each dependent on</span>
    <span>the results returned from earlier ones, to drill down to the item of data you need.</span>
    <span>For even more power, as you&rsquo;ll see later, there are additional functions built right into</span>
    <span>MySQL that you can call up for common operations and extra speed.</span>
    <h4>Using JavaScript</h4>
    <span>The oldest of the three core technologies in this book, JavaScript, was created to</span>
    <span>enable scripting access to all the elements of an HTML document. In other words, it</span>
    <span>provides a means for dynamic user interaction such as checking email address valid‐</span>
    <span>ity in input forms, and displaying prompts such as &ldquo;Did you really mean that?&rdquo;</span>
    <span>(although it cannot be relied upon for security, which should always be performed on</span>
    <span>the web server).</span>
    <span>Combined with CSS (see the following section), JavaScript is the power behind</span>
    <span>dynamic web pages that change in front of your eyes rather than when a new page is</span>
    <span>returned by the server.</span>
    <span>However, JavaScript can also be tricky to use, due to some major differences in the</span>
    <span>ways different browser designers have chosen to implement it. This mainly came</span>
    <span>about when some manufacturers tried to put additional functionality into their</span>
    <span>browsers at the expense of compatibility with their rivals.</span>
    <span>Thankfully, the developers have mostly now come to their senses and have realized</span>
    <span>the need for full compatibility with one another, so they don&rsquo;t have to write multi-</span>
    <span>exception code. But there remain millions of legacy browsers that will be in use for a</span>
    <span>good many years to come. Luckily, there are solutions for the incompatibility prob‐</span>
    <span>lems, and later in this book we&rsquo;ll look at libraries and techniques that enable you to</span>
    <span>safely ignore these differences.</span>
    <span>For now, let&rsquo;s take a look at how to use basic JavaScript, accepted by all browsers:</span>
    <span>&lt;script type="text/javascript"&gt;</span>
    <span>document.write("Today is " + Date() );</span>
    <span>&lt;/script&gt;</span>
    <span>This code snippet tells the web browser to interpret everything within the</span>
    <span>script</span>
    <span>tags</span>
    <span>as JavaScript, which the browser then does by writing the text</span>
    <span>Today is</span>
    <span>to the current</span>
    <span>document, along with the date, by using the JavaScript function</span>
    <span>Date</span>
    <span>. The result will</span>
    <span>look something like this:</span>
    <span>Today is Sun Jan 01 2017 01:23:45</span>
    <span>Unless you need to specify an exact version of JavaScript, you can</span>
    <span>normally omit the</span>
    <span>type="text/javascript"</span>
    <span>and just use</span>
    <span>&lt;script&gt;</span>
    <span>to start the interpretation of the JavaScript.</span>
    <span>As previously mentioned, JavaScript was originally developed to offer dynamic con‐</span>
    <span>trol over the various elements within an HTML document, and that is still its main</span>
    <span>use. But more and more, JavaScript is being used for Ajax. This is a term for the pro‐</span>
    <span>cess of accessing the web server in the background. (It originally meant</span>
    <span>Asynchronous</span>
    <span>JavaScript and XML</span>
    <span>, but that phrase is already a bit outdated.)</span>
    <span>Ajax is the main process behind what is now known as Web 2.0 (a term popularized</span>
    <span>by Tim O&rsquo;Reilly, the founder and CEO of this book&rsquo;s publishing company), in which</span>
    <span>web pages have started to resemble standalone programs, because they don&rsquo;t have to</span>
    <span>be reloaded in their entirety. Instead, a quick Ajax call can pull in and update a single</span>
    <span>element on a web page, such as changing your photograph on a social networking site</span>
    <span>or replacing a button that you click with the answer to a question. This subject is fully</span>
    <span>covered in</span>
    <span>Chapter 17</span>
    <span>.</span>
    <span>Then, in</span>
    <span>Chapter 21</span>
    <span>, we take a good look at the jQuery framework, which you can</span>
    <span>use to save reinventing the wheel when you need fast, cross-browser code to manipu‐</span>
    <span>late your web pages. Of course, there are other frameworks available too, but jQuery</span>
    <span>is by far the most popular and, due to continuous maintenance, is extremely reliable,</span>
    <span>and a major tool in the utility kit of many seasoned web developers.</span>
    <h4>Using CSS</h4>
    <span>With the emergence of the CSS3 standard in recent years, CSS now offers a level of</span>
    <span>dynamic interactivity previously supported only by JavaScript. For example, not only</span>
    <span>can you style any HTML element to change its dimensions, colors, borders, spacing,</span>
    <span>and so on, but now you can also add animated transitions and transformations to</span>
    <span>your web pages, using only a few lines of CSS.</span>
    <span>Using CSS can be as simple as inserting a few rules between</span>
    <span>&lt;style&gt;</span>
    <span>and</span>
    <span>&lt;/style&gt;</span>
    <span>tags in the head of a web page, like this:</span>
    <span>&lt;style&gt;</span>
    <span>p {</span>
    <span>text-align:justify;</span>
    <span>font-family:Helvetica;</span>
    <span>}</span>
    <span>&lt;/style&gt;</span>
    <span>These rules will change the default text alignment of the</span>
    <span>&lt;p&gt;</span>
    <span>tag so that paragraphs</span>
    <span>contained in it will be fully justified and will use the Helvetica font.</span>
    <span>As you&rsquo;ll learn in</span>
    <span>Chapter 18</span>
    <span>, there are many different ways you can lay out CSS rules,</span>
    <span>and you can also include them directly within tags or save a set of rules to an external</span>
    <span>file to be loaded in separately. This flexibility not only lets you style your HTML pre‐</span>
    <span>cisely, but it can also (for example) provide built-in hover functionality to animate</span>
    <span>objects as the mouse passes over them. You will also learn how to access all of an ele‐</span>
    <span>ment&rsquo;s CSS properties from JavaScript as well as HTML.</span>
    <h3>And Then There&rsquo;s HTML5</h3>
    <span>As useful as all these additions to the web standards became, they were not enough</span>
    <span>for ever more ambitious developers. For example, there was still no simple way to</span>
    <span>manipulate graphics in a web browser without resorting to plug-ins such as Flash.</span>
    <span>And the same went for inserting audio and video into web pages. Plus, several annoy‐</span>
    <span>ing inconsistencies had crept into HTML during its evolution.</span>
    <span>So, to clear all this up and take the Internet beyond Web 2.0 and into its next itera‐</span>
    <span>tion, a new standard for HTML was created to address all these shortcomings. It was</span>
    <span>called</span>
    <span>HTML5</span>
    <span>and it began development as long ago as 2004, when the first draft was</span>
    <span>drawn up by the Mozilla Foundation and Opera Software (developers of two popular</span>
    <span>web browsers). But it wasn&rsquo;t until the start of 2013 that the final draft was submitted</span>
    <span>to the World Wide Web Consortium (W3C), the international governing body for</span>
    <span>web standards.</span>
    <span>With nine years for it to develop, you might think that would be the end of the speci‐</span>
    <span>fication, but that&rsquo;s not how things work on the Internet. Although websites come and</span>
    <span>go at great speed, the underlying software is developed slowly and carefully, and so</span>
    <span>the stable recommendation for HTML5 is expected only after this edition of the book</span>
    <span>has been published&mdash;in late 2014. And then guess what? Work will move on to ver‐</span>
    <span>sions 5.1 and higher, beginning in 2015. It&rsquo;s a never-ending cycle of development.</span>
    <span>However, while HTML5.1 is planned to bring some handy improvements (mainly to</span>
    <span>the canvas), basic HTML5 is the new standard web developers now need to work to,</span>
    <span>and it will remain in place for many years to come. So learning everything you can</span>
    <span>about it now will stand you in very good stead.</span>
    <span>There&rsquo;s actually a great deal of new stuff in HTML (and quite a few things that have</span>
    <span>been changed or removed), but in summary, here&rsquo;s what you get:</span>
    <span>Markup</span>
    <span>Including new elements such as</span>
    <span>&lt;nav&gt;</span>
    <span>and</span>
    <span>&lt;footer&gt;</span>
    <span>, and deprecated elements like</span>
    <span>&lt;font&gt;</span>
    <span>and</span>
    <span>&lt;center&gt;</span>
    <span>.</span>
    <span>New APIs</span>
    <span>Such as the</span>
    <span>&lt;canvas&gt;</span>
    <span>element for writing and drawing on a graphics canvas,</span>
    <span>&lt;audio&gt;</span>
    <span>and</span>
    <span>&lt;video&gt;</span>
    <span>elements, offline web applications, microdata, and local storage.</span>
    <span>Applications</span>
    <span>Including two new rendering technologies: MathML (Math Markup Language) for</span>
    <span>displaying mathematical formulae and SVG (Scalable Vector Graphics) for creating</span>
    <span>graphical elements outside of the new</span>
    <span>&lt;canvas&gt;</span>
    <span>element. However, MathML and</span>
    <span>SVG are somewhat specialist, and are so feature-packed they would need a book of</span>
    <span>their own, so I don&rsquo;t cover them here.</span>
    <span>All these things (and more) are covered in detail starting in</span>
    <span>Chapter 22</span>
    <span>.</span>
    <span>One of the little things I like about the HTML5 specification is that</span>
    <span>XHTML syntax is no longer required for self-closing elements. In</span>
    <span>the past, you could display a line break using the</span>
    <span>&lt;br&gt;</span>
    <span>element.</span>
    <span>Then, to ensure future compatibility with XHTML (the planned</span>
    <span>replacement for HTML that never happened), this was changed to</span>
    <span>&lt;br /&gt;</span>
    <span>, in which a closing</span>
    <span>/</span>
    <span>character was added (since all ele‐</span>
    <span>ments were expected to include a closing tag featuring this charac‐</span>
    <span>ter). But now things have gone full circle, and you can use either</span>
    <span>version of these types of element. So, for the sake of brevity and</span>
    <span>fewer keystrokes, in this book I have reverted to the former style of</span>
    <span>&lt;br&gt;</span>
    <span>,</span>
    <span>&lt;hr&gt;</span>
    <span>, and so on.</span>
    <h3>The Apache Web Server</h3>
    <span>In addition to PHP, MySQL, JavaScript, CSS, and HTML5, there&rsquo;s a sixth hero in the</span>
    <span>dynamic Web: the web server. In the case of this book, that means the Apache web</span>
    <span>server. We&rsquo;ve discussed a little of what a web server does during the HTTP server/</span>
    <span>client exchange, but it does much more behind the scenes.</span>
    <span>For example, Apache doesn&rsquo;t serve up just HTML files&mdash;it handles a wide range of</span>
    <span>files from images and Flash files to MP3 audio files, RSS (Really Simple Syndication)</span>
    <span>feeds, and so on. To do this, each element a web client encounters in an HTML page</span>
    <span>is also requested from the server, which then serves it up.</span>
    <span>But these objects don&rsquo;t have to be static files such as GIF images. They can all be gen‐</span>
    <span>erated by programs such as PHP scripts. That&rsquo;s right: PHP can even create images and</span>
    <span>other files for you, either on the fly or in advance to serve up later.</span>
    <span>To do this, you normally have modules either precompiled into Apache or PHP or</span>
    <span>called up at runtime. One such module is the GD (Graphics Draw) library, which</span>
    <span>PHP uses to create and handle graphics.</span>
    <span>Apache also supports a huge range of modules of its own. In addition to the PHP</span>
    <span>module, the most important for your purposes as a web programmer are the modules</span>
    <span>that handle security. Other examples are the Rewrite module, which enables the web</span>
    <span>server to handle a varying range of URL types and rewrite them to its own internal</span>
    <span>requirements, and the Proxy module, which you can use to serve up often-requested</span>
    <span>pages from a cache to ease the load on the server.</span>
    <span>Later in the book, you&rsquo;ll see how to use some of these modules to enhance the fea‐</span>
    <span>tures provided by the three core technologies.</span>
    <h3>About Open Source</h3>
    <span>Whether or not being open source is the reason these technologies are so popular has</span>
    <span>often been debated, but PHP, MySQL, and Apache</span>
    <span>are</span>
    <span>the three most commonly used</span>
    <span>tools in their categories. What can be said definitively, though, is that their being</span>
    <span>open source means that they have been developed in the community by teams of pro‐</span>
    <span>grammers writing the features they themselves want and need, with the original code</span>
    <span>available for all to see and change. Bugs can be found and security breaches can be</span>
    <span>prevented before they happen.</span>
    <span>There&rsquo;s another benefit: all these programs are free to use. There&rsquo;s no worrying about</span>
    <span>having to purchase additional licenses if you have to scale up your website and add</span>
    <span>more servers. And you don&rsquo;t need to check the budget before deciding whether to</span>
    <span>upgrade to the latest versions of these products.</span>
    <h3>Bringing It All Together</h3>
    <span>The real beauty of PHP, MySQL, JavaScript (sometimes aided by jQuery or other</span>
    <span>frameworks), CSS, and HTML5 is the wonderful way in which they all work together</span>
    <span>to produce dynamic web content: PHP handles all the main work on the web server,</span>
    <span>MySQL manages all the data, and the combination of CSS and JavaScript looks after</span>
    <span>web page presentation. JavaScript can also talk with your PHP code on the web server</span>
    <span>whenever it needs to update something (either on the server or on the web page).</span>
    <span>And with the powerful new features in HTML5, such as the canvas, audio and video,</span>
    <span>and geolocation, you can make your web pages highly dynamic, interactive, and</span>
    <span>multimedia-packed.</span>
    <span>Without using program code, let&rsquo;s summarize the contents of this chapter by looking</span>
    <span>at the process of combining some of these technologies into an everyday Ajax feature</span>
    <span>that many websites use: checking whether a desired username already exists on the</span>
    <span>site when a user is signing up for a new account. A good example of this can be seen</span>
    <span>with Gmail (see</span>
    <span>Figure 1-3</span>
    <span>).</span>
    <span>Figure 1-3. Gmail uses Ajax to check the availability of usernames</span>
    <span>The steps involved in this Ajax process would be similar to the following:</span>
    <span>1.</span>
    <span>The server outputs the HTML to create the web form, which asks for the neces‐</span>
    <span>sary details, such as username, first name, last name, and email address.</span>
    <span>2.</span>
    <span>At the same time, the server attaches some JavaScript to the HTML to monitor</span>
    <span>the username input box and check for two things: (a) whether some text has been</span>
    <span>typed into it, and (b) whether the input has been deselected because the user has</span>
    <span>clicked on another input box.</span>
    <span>3.</span>
    <span>Once the text has been entered and the field deselected, in the background the</span>
    <span>JavaScript code passes the username that was entered back to a PHP script on the</span>
    <span>web server and awaits a response.</span>
    <span>4.</span>
    <span>The web server looks up the username and replies back to the JavaScript regard‐</span>
    <span>ing whether that name has already been taken.</span>
    <span>5.</span>
    <span>The JavaScript then places an indication next to the username input box to show</span>
    <span>whether the name is one available to the user&mdash;perhaps a green checkmark or a</span>
    <span>red cross graphic, along with some text.</span>
    <span>6.</span>
    <span>If the username is not available and the user still submits the form, the JavaScript</span>
    <span>interrupts</span>
    <span>the</span>
    <span>submission</span>
    <span>and</span>
    <span>reemphasizes</span>
    <span>(perhaps</span>
    <span>with</span>
    <span>a</span>
    <span>larger</span>
    <span>graphic</span>
    <span>and/or an alert box) that the user needs to choose another username.</span>
    <span>7.</span>
    <span>Optionally, an improved version of this process could even look at the username</span>
    <span>requested by the user and suggest an alternative that is currently available.</span>
    <span>All of this takes place quietly in the background and makes for a comfortable and</span>
    <span>seamless user experience. Without Ajax, the entire form would have to be submitted</span>
    <span>to the server, which would then send back HTML, highlighting any mistakes. It</span>
    <span>would be a workable solution, but nowhere near as tidy or pleasurable as on-the-fly</span>
    <span>form-field processing.</span>
    <span>Ajax can be used for a lot more than simple input verification and processing,</span>
    <span>though; we&rsquo;ll explore many additional things that you can do with it in the Ajax chap‐</span>
    <span>ters later in this book.</span>
    <span>In this chapter, you have read a good introduction to the core technologies of PHP,</span>
    <span>MySQL, JavaScript, CSS, and HTML5 (as well as Apache), and have learned how they</span>
    <span>work together. In</span>
    <span>Chapter 2</span>
    <span>, we&rsquo;ll look at how you can install your own web develop‐</span>
    <span>ment server on which to practice everything that you will be learning.</span>
    <h3>Questions</h3>
    <span>1.</span>
    <span>What four components (at the minimum) are needed to create a fully dynamic</span>
    <span>web page?</span>
    <span>2.</span>
    <span>What does</span>
    <span>HTML</span>
    <span>stand for?</span>
    <span>3.</span>
    <span>Why does the name</span>
    <span>MySQL</span>
    <span>contain the letters</span>
    <span>SQL</span>
    <span>?</span>
    <span>4.</span>
    <span>PHP and JavaScript are both programming languages that generate dynamic</span>
    <span>results for web pages. What is their main difference, and why would you use both</span>
    <span>of them?</span>
    <span>5.</span>
    <span>What does</span>
    <span>CSS</span>
    <span>stand for?</span>
    <span>6.</span>
    <span>List three major new elements introduced in HTML5.</span>
    <span>7.</span>
    <span>If you encounter a bug (which is rare) in one of the open source tools, how do</span>
    <span>you think you could get it fixed?</span>
    <span>See</span>
    <span>Chapter 1 Answers</span>
    <span>in</span>
    <span>Appendix A</span>
    <span>for the answers to these questions.</span>
    <span>their distinctive scents can be bothersome to humans; as they are nocturnal creatures,</span>
    <span>they will bark, hiss, run, and glide all night long; it&rsquo;s not uncommon for them to lose</span>
    <span>control of their bowels while playing or eating; and in some states and countries, it is</span>
    <span>illegal to own sugar gliders as household pets.</span>
    <span>The cover image is from</span>
    <span>Dover&rsquo;s Animals</span>
    <span>. The cover fonts are URW Typewriter and</span>
    <span>Guardian Sans. The text font is Adobe Minion Pro; the heading font is Adobe Myriad</span>
    <span>Condensed; and the code font is Dalton Maag&rsquo;s Ubuntu Mono.</span>
</section>