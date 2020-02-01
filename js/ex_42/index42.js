let message = "'Ready Player One' is a 2011 science fiction novel, and the debut 'novel of American author Ernest Cline. The story, set in \n a dystopian 2044, follows protagonist Wade Watts on his search for an Easter egg in a worldwide virtual reality game, the discovery of which \n will lead him to inherit the game creator's fortune. Cline sold the rights to publish the novel in June 2010, in a bidding war to the Crown \n Publishing Group (a division of Random House)]. The book was published on August 16, 2011. An audiobook was released the same day; it was \n narrated by Wil Wheaton, who was mentioned briefly in one of the chapters.Ch. 20 In 2012, the book received an Alex Award from the Young \n Adult Library Services Association division of the American Library Association and won the 2012 Prometheus Award."
let messageLower = message.toLowerCase;
let messageUpper = message.toUpperCase;
console.log(messageLower);
console.log(messageUpper);
let message2 = "Ready Player One is a 2011 science fiction novel, and the debut novel of American author Ernest Cline. The story, set in a \n dystopian 2044, follows protagonist Wade Watts on his search for an Easter egg in a worldwide virtual reality game, the discovery of which \n will lead him to inherit the game creator's fortune. "
var message2Upper = message2.toUpperCase();
let message3 = "Cline sold the rights to publish the novel in June 2010, in a bidding war to the Crown Publishing Group (a division of \n Random House)]. The book was published on August 16, 2011. An audiobook was released the same day; it was narrated by Wil Wheaton, \n who was mentioned briefly in one of the chapters.Ch. 20 In 2012, the book received an Alex Award from the Young Adult Library \n Services Association division of the American Library Association and won the 2012 Prometheus Award."
var message3Lower = message3.toLowerCase();
let concat1 = `${message2Upper.concat(message3Lower)}`;
console.log(concat1);