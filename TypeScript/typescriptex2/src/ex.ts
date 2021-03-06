
interface IBook {
    readonly title : string,
    readonly author : string,
    published?: Date,
    pages?: number
}

function testIBook(ib : IBook){
    console.log(`hello ${ib.author} and he wrote ${ib.title}`)
}

const b1 : IBook ={
    title: "Moby Dick",
    author: "Herman Melville",
    published: new Date("1851-10-18"),
    pages: 500
};

// b1.title = "hej";

testIBook(b1)

//According to TypeScript, Duck-Typing is a method/rule used to check the type compatibility for more complex variable types.
//TypeScript uses the duck-typing method to compare one object with other objects by checking that both objects have the same type matching names or not.

class Book implements IBook {
    //private _name : String;
    #title: string
    #author: string
    #published: Date
    #pages: number
    constructor (title: string, author : string, published : Date, pages : number){this.#title = title,this.#author = author,this.#published = published,this.#pages = pages}
    get title():string {return this.#title}
    get author():string {return this.#author}
    get published():Date {return this.#published}
    get pages():number {return this.#pages}

    set title(title:string) {this.#title= title}
    set author(author:string) {this.#author= author}
    set published(published:Date) {this.#published= published}
    set pages(pages:number) {this.#pages= pages}

    toString():string {return `${this.#title}, ${this.#author}, ${this.#published}, ${this.#pages}`}
  }

  const b2 = new Book("Godnat", "Mor", new Date("1851-10-18"), 500)
  const book1 = new Book(b1.title,b1.author,b1.published!,b1.pages!);

  testIBook(b2)
  testIBook(book1)