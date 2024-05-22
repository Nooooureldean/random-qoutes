
var arr=[];
var qoute_1= "<p>“Be yourself; everyone else is already taken.” </p> <p>― Oscar Wilde</p>";
var qoute_2= "<p>“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.” </p> <p> ― Marilyn Monroe</p>";
var qoute_3= "<p>“So many books, so little time.” </p> <p> ― Frank Zappa</p>";
var qoute_4= "<p>“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.” </p> <p> ― Albert Einstein</p>";
var qoute_5= "<p>“A room without books is like a body without a soul.” </p> <p> ― Marcus Tullius Cicero </p>";
var qoute_6= "<p>“You only live once, but if you do it right, once is enough.” </p> <p>― Mae West </p>";
var qoute_7= "<p>““Be the change that you wish to see in the world.”” </p> <p>  ― Mahatma Gandhi </p>";
var qoute_8= "<p>“In three words I can sum up everything I've learned about life: it goes on.” </p> <p> ― Robert Frost </p>";
var qoute_9= "<p>“If you tell the truth, you don't have to remember anything.” </p> <p> ― Mark Twain </p>";
var qoute_10= "<p>“A friend is someone who knows all about you and still loves you.” </p> <p> ― Elbert Hubbard </p>";
var demo =document.getElementById("demo");

function  genertaQoute()
{
arr=[qoute_1,qoute_2,qoute_2,qoute_4,qoute_5,qoute_6,qoute_7,qoute_8,qoute_9,qoute_10];
console.log(arr);
display();
}

function display()
{
    var length = arr.length;
    
    var rand = Math.round(Math.random() * (length - 1));
   
      demo.innerHTML =arr[rand];
           
      

}
console.log(display());
