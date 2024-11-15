
var newquotes=["“Be yourself; everyone else is already taken.”","“You only live once, but if you do it right, once is enough.”","“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”"
    ,"“So many books, so little time.”","“A room without books is like a body without a soul.”",
    "“Be the change that you wish to see in the world.”","“If you tell the truth, you don't have to remember anything.”"
    ,"“We accept the love we think we deserve.”"
];
var author=["Oscar Wilde"," Marilyn Monroe","Mae West","Frank Zappa","Marcus Tullius Cicero","Mahatma Gandhi","Mark Twain","Stephen Chbosky"];
var shownindex=[];
function getquote(){
    var randomindex;
    var x;
    if(shownindex.length==newquotes.length){
        x=shownindex[shownindex.length - 1];
        clearshownindex();
        
    }
        do{
            randomindex=Math.floor(Math.random()*newquotes.length);
            
                }while(shownindex.includes(randomindex) || randomindex ===x);
                shownindex.push(randomindex);
 
   
    document.getElementById('quote').innerHTML=newquotes[randomindex];
    document.getElementById('author').innerHTML="-- "+author[randomindex];
}
function clearshownindex(){
    shownindex=[];
}