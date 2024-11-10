function randomQuotes() {
  var quoteDay = [
    {
      quote: "“Be yourself; everyone else is already taken.”",
      author: "― Oscar Wilde",
    },
    {
      quote:
        " “I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
      author: "― Marilyn Monroe",
    },
    {
      quote: "“So many books, so little time.” ",
      author: "― Frank Zappa",
    },
    {
      quote: "“Be yourself; everyone else is already taken.”",
      author: "― Oscar Wilde",
    },
   
  ];

  var random = Math.trunc(Math.random() * quoteDay.length);

  document.getElementById("quote-text").innerHTML = quoteDay[random].quote;
  document.getElementById("quote-author").innerHTML = quoteDay[random].author;
}
