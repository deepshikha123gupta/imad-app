var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles = {
   'article-one' : {
    title:'article-one.html',
    heading:'Article-One',
    date:'March 30 , 2018',
    content:`
           <p>This is the content for my first article.This is the content for my first article.This is the content for my first article.
               This is the content for my first article.This is the content for my first article.This is the content for my first article.
               This is the content for my first article.This is the content for my first article.This is the content for my first artic
               .</p>
               
            <p>This is the content for my first article.This is the content for my first article.This is the content for my first article.
               This is the content for my first article.This is the content for my first article.This is the content for my first article.
               This is the content for my first article.This is the content for my first article.This is the content for my first article.</p>
               
            <p>This is the content for my first article.This is the content for my first article.This is the content for my first article.
               This is the content for my first article.This is the content for my first article.This is the content for my first article.
               This is the content for my first article.This is the content for my first article.This is the content for my first article.</p>`
    
},
   'article-two' : {
    title:'article-two.html',
    heading:'Article-Two',
    date:'March 31 , 2018',
    content:`
           <p>This is the content for my first article.This is the content for my first article.This is the content for my first article.
               This is the content for my first article.This is the content for my first article.This is the content for my first article.
               This is the content for my first article.This is the content for my first article.This is the content for my first artic
               .</p>
               
            <p>This is the content for my first article.This is the content for my first article.This is the content for my first article.
               This is the content for my first article.This is the content for my first article.This is the content for my first article.
               This is the content for my first article.This is the content for my first article.This is the content for my first article.</p>
               `
    
},
   'article-three' : {
    title:'article-three.html',
    heading:'Article-Three',
    date:'March 29 , 2018',
    content:`
           <p>This is the content for my first article.This is the content for my first article.This is the content for my first article.
               This is the content for my first article.This is the content for my first article.This is the content for my first article.
               This is the content for my first article.This is the content for my first article.This is the content for my first artic
               .</p>
               `
    
}
};
function createTemplet(data) {
var title =data.title;
var heading =data.heading;
var date =data.date;
var content =data.content;

var htmlTemplet = `
<html>
    <head>
        <title>${title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
         <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
      <div class="container">
        <div>
            <a href="*">HOME</a>
        </div>
        <hr/>
        <div>
            <h3>${heading}</h3>
        </div>
        <div>
            ${date}
        </div>
        <div>
            ${content}
        </div>
      </div>
    </body>
</html>
`;
return htmlTemplet;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/:articleName', function (req, res) {
    var articleName =req.param.articleName;
  res.send(createTemplet(articles[articleName]));
});
app.get('/article-two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});
app.get('/article-three', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
