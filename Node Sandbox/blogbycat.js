const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const LINK_INDENT_RE = new RegExp('(<a)[^>]*>(.*?)(<\/a)','g');
const ARTICLE_RE = new RegExp('(<article)[^>]*>(.*?)(<\/article>)','g');

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://www.henshaws.org.uk/knowledge-village/health-wellbeing/', true);
xhr.onload = function() {
    if(xhr.status === 200) {
        let output = xhr.responseText.match(ARTICLE_RE);
        console.log(output);

/*
        let filteredOutput = [];
        let URLDescArray = [];
        for(let i=0; i<output.length; i++) {
            if(output[i].search('(blog)') !== -1) {
                filteredOutput.push(output[i]);
            }
        }
        for(let i = 0; i<filteredOutput.length; i++) {
            filteredOutput[i] = filteredOutput[i].replace('<a href="','');
            let position = filteredOutput[i].indexOf('"');
            let blogURL = filteredOutput[i].substring(0,position);
            let startPos = filteredOutput[i].indexOf('description">')+13;
            let endPos = filteredOutput[i].lastIndexOf('</div>');
            let blogDesc = filteredOutput[i].substring(startPos,endPos);
            URLDescArray.push([blogURL,blogDesc]);



        }

        console.log(URLDescArray);
        // URLDescArray is made up of the blog url and the blog description
        */
    }
}
xhr.send();