const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const https = require('https');

const elementRe = new RegExp('(<article)[^>]*>(.*?)(<\/article>)','g');
const URLRe1 = new RegExp('https[^\"]*');
const categoryRe2 = new RegExp('text[^<]*');
const elementBlogRE = new RegExp('(https[^\"]*-blog)','g');



let data2 = [];
let data3 = [];
let data4 = [];

let re1, re2;

// download Knowledge Village Page

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://www.henshaws.org.uk/knowledge-village/', true);
xhr.onload = function() {
    if(xhr.status === 200) {
        let parsedCategories = parseCat(xhr.responseText);
        let xhr1 = new XMLHttpRequest();
        xhr1.open('GET',parsedCategories[0][0], true);
        xhr1.onload = function () {
            if(xhr1.status === 200) {
                let parsedBlogUrls = parseBlogUrls(xhr1.responseText);
                let xhr2 = new XMLHttpRequest();
                xhr2.open('GET',parsedBlogUrls[0], true);
                xhr2.onload = function() {
                    if(xhr2.status === 200) {
                        console.log('Blog....');
                    }
                    else {
                        // Parse Blog Page
                        console.log(xhr2.status);
                    }
                }
                xhr2.send();
            }
        }
        xhr1.send();
    }

}
xhr.send();


function parseCat(data1) {
    data1 = data1.match(elementRe);
    for(let i=0; i<data1.length; i++) {
        data2.push(data1[i].match(URLRe1));
        data3.push(data1[i].match(categoryRe2));
        data3[i][0] = data3[i][0].substring(6);
    }
    for(let i = 0; i<data2.length; i++) {
        data4.push([data2[i][0],data3[i][0]]);    
    }
    return data4;
}

function parseBlogUrls(data) {
    return(data.match(elementBlogRE));
}


/*

https.get('https://www.henshaws.org.uk/knowledge-village/', (response) => {
    let data = '';
    response.on('data', (chunk) => {
        data += chunk;
    });
    response.on('end', () => {

// Parse Knowledge Village Page to URL's and names of categories. Produces Data4

        let elementRe = new RegExp('(<article)[^>]*>(.*?)(<\/article>)','g');
        let data1 = data.match(elementRe);
        for(let i=0; i<data1.length; i++) {
            URLRe1 = new RegExp('https[^\"]*');
            categoryRe2 = new RegExp('text[^<]*');
            data2.push(data1[i].match(URLRe1));
            data3.push(data1[i].match(categoryRe2));
            data3[i][0] = data3[i][0].substring(6);
        }
        for(let i = 0; i<data2.length; i++) {
            data4.push([data2[i][0],data3[i][0]]);    
        }


// Access Knowledge Village Category from data4
     //   console.log("*****",data3[0][0][0]);
        https.get(data4[0][0], (response) => {
            let data = '';
            response.on('data', (chunk) => {
                data += chunk;
            });
            response.on('end', () => {   
                let elementCatRe = new RegExp('(https[^\"]*-blog)','g');
                let data1 = data.match(elementCatRe);

// RegeExp produces URL's for blogs and puts them in Array data1

                    https.get(data1[0], (response) => {   
                    let blogData = '';                 
                    response.on('data', (chunk) => {
                        console.log('chunk');
                        blogData += chunk;
                    });
                    response.on('end', () => {
                       console.log(data1[0]);
                    })
                    .on('error',(error) => {
                        console.log("Error: ", error);
                    });
                });

            }); 
        });

    });  
});
*/