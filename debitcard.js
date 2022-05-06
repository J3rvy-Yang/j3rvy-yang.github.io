console.log("hello");
let headings = ["WHAT IS A debit card?", "How a Debit Card Works", "Debit Card Fees", "Advantages of debit cards", "Disavantages of debit cards", "when to use a debit card"];
let Facts = [" <br><br><br><br><b><br>\
A debit card is a payment card that deducts money directly from a consumer’s checking account when it is used. Also called “check cards” or bank cards, they can be used to buy goods or services; or to get cash from an automated teller machine(ATM) or a merchant who'll let you add an extra amount onto a purchase.", "<br><br><br><br><b><br>\
A debit card is usually a rectangular piece of plastic, resembling any charge card. It is linked to the user's checking account at a bank or credit union. The amount of money that can be spent with it is tied to the money. Debit cards usually have daily purchase limits as well, meaning you can't spend more than a certain amount with them in one 24-hour period.", "<br><br><br><br><b><br>\
Debit cards don't cost anything extra; There are no annual membership fees or cash-advance charges. However, that does not mean that you are completely immune to fees. If you withdraw cash from an ATM that's not from or affiliated with the bank that issued your debit card, you may be well charged an ATM transaction fee.\
What if you use the card to spend more than you have in your account? You can get hit with insufficient funds charges, similar to those incurred by a bounced paper check. If you've registered for overdraft protection, you will incur overdraft fees. ", "<br><br><br>\
 With a Debit card, consumers are effectively making their purchases in cash; with money they actually have, as opposed to money borrowed on credit.  Every transaction made with a debit or check card will appear on the account holder’s monthly statement, so you know where the money went to. \
<br><br>\
 While stolen or lost cash is gone forever, any stolen or lost debit cards can be reported to the bank. The bank will deactivate the card, remove any fraudulent transactions from the cardholder’s account, and reissue a new card.\
 <br><Br>\
 Debit cards are also easier to get than that of a Credit cards if you have poor credit. As long as a bank has approved your account, you're all set. You don't have to apply for one, and because Debit cards don't charge merchants as much, merchants won't't impose minimum-purchase amounts on debit cards, as they often do with credit cards.", "<br>\
While debit card are very convenient, they also have downsides as well. They dont have the perks or the fraud protection as a credit card will. Below is a more in dept reasons on the disavantages of Debit Cards.\
<br><br>\
1. Limited Fraud Protection: According to the FTC, if your  debit card is stolen and you notify your bank within two days; you could be responsible for up to $50 of any fraudulent charges. If you notify the bank after 2 business days, you might be responsible for up to $500 of the fraudulent charges. Notifying the bank after 60 days could hold you liable for all fraudulent charges.\
<br><br>\
2. Your spending amount is limited: A debit card is a good option for smaller purchases, but it’s not the best option for large expenses that exceed your account balance. While it’s ideal to budget for large expenses, a credit card is another way to help you afford them.\
<br><br>\
3. Don't offer cash-back perks: Many Credit Card companies offer a cash-back program for creit card purchases. Many creidt card offer a range of 1 percent to 5 percent cash back on purchases. Using a debit card is choosing to opt out on the perk of getting cash back.", " <br><br><br><br><b><br>\
 A big difference between debit and credit cards is that debit cards don’t affect your credit score. Knowing which card to use in each situation could come in handy. Debit cards are ideal for everyday purchases, like a lunch or buying groceries on your way home from work. With these smaller purchases, it is  easier to track your spending and ensure that you have enough money in your checking account to cover the transactions. Since you can’t spend more than you have, debit cards can also be a helpful way to build strong spending habits."];
let imgs = ["IMG/Debit1.png", "IMG/Debit2.png", "IMG/Debit3.png", "IMG/Debit5.png", "IMG/Debit4.png", "IMG/Debit7.png"];
let index = 0

function set_text(id) {
    if(id == 'next' || id == 'nexttop') index++;
    if(id == 'prev' || id == 'prevtop') index--;
    if(index > headings.length - 1) index = 0;
    if(index < 0) index = headings.length - 1;
    document.getElementById('title1').innerHTML = headings[index];
    if(index > Facts.length - 1) index = 0;
    if(index < 0) index = Facts.length - 1;
    document.getElementById('div2').innerHTML = Facts[index];
    if(index > imgs.length - 1) index = 0;
    if(index < 0) index = imgs.length - 1;
    document.getElementById('div1').innerHTML = "<img src='" + imgs[index] + "'>";
}