const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const ELEMENT_RE = new RegExp('(<article)[^>]*>(.*?)(<\/article>)','g');
const URL_RE = new RegExp('https[^\"]*');
const CATEGORY_RE = new RegExp('text[^<]*');
// download Knowledge Village Page
let parsedCategories = [];
let xhr = new XMLHttpRequest();
let data2 = [];
let data3 = [];
let data4 = [];
xhr.open('GET', 'https://www.henshaws.org.uk/knowledge-village/', true);
xhr.onload = function() {
    if(xhr.status === 200) {
        data1 = xhr.responseText.match(ELEMENT_RE);
        for(let i=0; i<data1.length; i++) {
            data2.push(data1[i].match(URL_RE));
            data3.push(data1[i].match(CATEGORY_RE));
            data3[i][0] = data3[i][0].substring(6);
        }
        for(let i = 0; i<data2.length; i++) {
            data4.push([data2[i][0],data3[i][0]]);    
        }

    }
// parsedCategories is array of URL to category and category name

    console.log(data4);
}
xhr.send();

