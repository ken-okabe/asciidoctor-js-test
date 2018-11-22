const path = require("path");

const dir = path.join(
    __dirname, "docs");

const name = "test.adoc";

const dir_name = path.join(
    dir, name
)

const text = require("fs")
    .readFileSync(dir_name, "UTF-8");

console.log(text);

const asciidoctor = require('asciidoctor.js')();

const option1 =
{
    safe: 'unsafe',
    attributes:
    {
        icons: 'font',
        docdir: dir
    },

};

const html1 = asciidoctor
    .convert(text, option1);
console.log("=========");
console.log(html1);

const option2 =
{
    safe: 'unsafe',
    attributes:
    {
        icons: 'font',
    },
    base_dir: dir
};

const html2 = asciidoctor
    .convert(text, option2);
console.log("=========");
console.log(html2);


//result of both (same)
/*

=========
<div class="imageblock">
<div class="content">
<img src="./images/cat.jpg" alt="cat">
</div>
</div>

*/

