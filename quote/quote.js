let btn=document.querySelector('#new-quote');
let quote=document.querySelector('.quote');
let book=document.querySelector('.book');
const quotes=[{
    quote:`“It is only with the heart that one can see rightly; what is essential is invisible to the eye.” `,
    book: `-from The Little Prince`
},
{
    quote:`“I am no bird; and no net ensnares me: I am a free human being with an independent will, which I now exert to leave you.”`,
    book:`-from Jane Eyre`
},
{
    quote:` “This above all: To thine own self be true, And it must follow, as the night the day, Thou canst not then be false to any man.”`,
    book:`-from Hamlet`
},
{
    quote:`“I took a deep breath and listened to the old brag of my heart: I am, I am, I am.”`,
    book:`-from The Bell Jar`
},
{
    quote:`“There are years that ask questions and years that answer.”`,
    book:`-from Their Eyes Were Watching God`
},
{
    quote:`“It is nothing to die; it is dreadful not to live.” `,
    book:`-from Les Misérables`
},
{
    quote:` “When you play the game of thrones you win or you die.”`,
    book:`-from A Game of Thrones`
},
{
    quote:`“Anyone who ever gave you confidence, you owe them a lot.”`,
    book:`-from Breakfast at Tiffany's`
},
{
    quote:`“But soft! What light through yonder window breaks? It is the east, and Juliet is the sun.” `,
    book:`-from Romeo and Juliet`
},
];
btn.addEventListener('click',function(){
    let random=Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    book.innerText = quotes[random].book;
})