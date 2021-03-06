"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _title, _author, _published, _pages;
function testIBook(ib) {
    console.log(`hello ${ib.author} and he wrote ${ib.title}`);
}
const b1 = {
    title: "Moby Dick",
    author: "Herman Melville",
    published: new Date("1851-10-18"),
    pages: 500
};
// b1.title = "hej";
testIBook(b1);
//According to TypeScript, Duck-Typing is a method/rule used to check the type compatibility for more complex variable types.
//TypeScript uses the duck-typing method to compare one object with other objects by checking that both objects have the same type matching names or not.
class Book {
    constructor(title, author, published, pages) {
        //private _name : String;
        _title.set(this, void 0);
        _author.set(this, void 0);
        _published.set(this, void 0);
        _pages.set(this, void 0);
        __classPrivateFieldSet(this, _title, title), __classPrivateFieldSet(this, _author, author), __classPrivateFieldSet(this, _published, published), __classPrivateFieldSet(this, _pages, pages);
    }
    get title() { return __classPrivateFieldGet(this, _title); }
    get author() { return __classPrivateFieldGet(this, _author); }
    get published() { return __classPrivateFieldGet(this, _published); }
    get pages() { return __classPrivateFieldGet(this, _pages); }
    set title(title) { __classPrivateFieldSet(this, _title, title); }
    set author(author) { __classPrivateFieldSet(this, _author, author); }
    set published(published) { __classPrivateFieldSet(this, _published, published); }
    set pages(pages) { __classPrivateFieldSet(this, _pages, pages); }
    toString() { return `${__classPrivateFieldGet(this, _title)}, ${__classPrivateFieldGet(this, _author)}, ${__classPrivateFieldGet(this, _published)}, ${__classPrivateFieldGet(this, _pages)}`; }
}
_title = new WeakMap(), _author = new WeakMap(), _published = new WeakMap(), _pages = new WeakMap();
const b2 = new Book("Godnat", "Mor", new Date("1851-10-18"), 500);
const book1 = new Book(b1.title, b1.author, b1.published, b1.pages);
testIBook(b2);
testIBook(book1);
//# sourceMappingURL=ex.js.map