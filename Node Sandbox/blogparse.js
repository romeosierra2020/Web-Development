const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const BLOG_PARSE_RE = new RegExp('<p>(.*?)<\/p>','g'); // extracts blog text from HTML file
const DATA_CLEAN = new RegExp('\&#[0-9]*;','g') // remove formatting strings from blog

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://www.henshaws.org.uk/my-makaton-mission/', true);
xhr.onload = function() {
    if(xhr.status === 200) {
        let output = xhr.responseText.match(BLOG_PARSE_RE);
        for(let i=0; i<output.length; i++) {
            output[i]= output[i].slice(3,output[i].length-4);
            output[i] = output[i].replace(DATA_CLEAN,'');
        }
        // removes links from blog text
        for(let i =0; i<output.length; i++) {
            if(output[i].search('<a') != -1 || output[i].search('cookies') != -1) {
                output[i] = '';
            }
        }
        console.log(output); // final output in array of string sentences
    }
}
xhr.send();

