function htmlElement (){
    // own method
    this.click = function(){
        return `clicked`;
    }
};
// prototype method
htmlElement.prototype.focus = function(){
    return `focused`;
};
const e = new htmlElement

console.log(e.focus());

function HtmlSelectElement(arr){
    this.items = arr;
    
    this.addItem = function(item){
        this.items.push(item) 
    }
    
    this.removeItem = function(item){
        this.items.splice(this.items.indexOf(item),1)
    }
    this.render = function () {
        return `<select>\n${this.items.map(ele => `\t<option>${ele}</option>\n`).join('')}</select>`;
    }
};

//select menu  element
HtmlSelectElement.prototype = new htmlElement(); //will return empty object
HtmlSelectElement.prototype.constructor = HtmlSelectElement

// image 
function HtmlImageElement(src) {
    this.src = src;
    this.render = function () {
        return `<img src = "${this.src}" />` 
    }
};

HtmlImageElement.prototype = new htmlElement(); //will return empty object
HtmlImageElement.prototype.constructor = HtmlImageElement


const elements = [
    new HtmlSelectElement([1, 2, 3]),
    new HtmlImageElement("http//blaBla.com")
];
for (let element of elements) {
    console.log(element.render());
}
