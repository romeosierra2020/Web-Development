const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const LINK_INDENT_RE = new RegExp('(<a)[^>]*>(.*?)(<\/a)','g');
const ELEMENT_BLOG_RE = new RegExp('(<p>)(.*)(\\n*)(.*)(<\/p>)','g');
const LINK_URL_RE = new RegExp('(https[^\"]*\")');

const STRIP_HTML_RE = new RegExp('<(.*?)>','g');

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://www.henshaws.org.uk/shop/knowledge-village-apps/be-my-eyes-and-bespecular-the-apps-bringing-volunteering-into-the-digital-world-blog/', true);
xhr.onload = function() {
    if(xhr.status === 200) {
        let output = xhr.responseText.match(ELEMENT_BLOG_RE);
        let linkURLArray = xhr.responseText.match(LINK_INDENT_RE);
        let linkURL = 'default message';
        let linkURLItem = 'Default URL Item';
        // TODO Get Link URL

        for(let i=0; i<output.length; i++) {
            if(output[i].search('donation') !== -1) {
                output[i] = '';
            }
            if(output[i].search('<a ') === -1) {
                output[i] = output[i].replace(STRIP_HTML_RE,'');
                if((i>0 && output[i] === output[i-1]) ) {
                    output[i] = '';
                }
            } else {
                output[i] = '';
            }


        }

        for(let i = 0; i<linkURLArray.length; i++) {
            if(linkURLArray[i].search('View ') != -1) {
                linkURLArray = linkURLArray[i].substring(0,linkURLArray[i].length-1);
            }
        }
//        linkURL = linkURLArray.join();
        linkURL = linkURLArray.match(LINK_URL_RE);
        linkURLItem=linkURL[0].substring(0,linkURL[0].length-1);
        
        console.log(linkURLItem);
        // final output in array of strings. final linkURLItem is the url  of th eblog
        
    }
}
xhr.send();