console.log("hello");
let headings = ["WHAT IS A credit card", "Understanding Credit Cards", "Building Credit History with Credit Cards", "Secured Credit cards", "Importance of Good Credit scores", "How to build credit", "How to read a credit card"];
let Facts = [" <br><br><br><br><b><br>\
A credit card is a thin rectangular piece of plastic or metal issued by a bank or financial services company that allows cardholders to borrow money to pay for goods and services of merchants who accept the card as a payment method. Credit cards are subject to the condition that the cardholder pays the borrowing in addition to the accrued interest and additional agreed fees in full by the billing date or over time. The majority of companies allow customers to make purchases using a credit card. Credit cards are one of the most popular payment methods for purchasing consumer goods and services.<br>\
<br>\
By law, credit card issuers are required to have a grace period of at least 21 days before interest accrues at the time of purchase1. For this reason, it is advisable to pay the balance before the grace period, if possible. It is also important to understand whether the issuer earns daily or monthly interest. The former is because the  interest cost will be high until the balance is  paid. This is especially important to know if you want to transfer your credit card balance to a low interest rate card. Mistakenly switching from a monthly accrual card to a daily one may potentially nullify the savings from a lower rate.", "<br><br><br><br><b><br>\
Credit cards usually charge a higher annual  rate (APR) than other forms of consumer credit. Interest  on outstanding balances charged on the card will usually be charged approximately one month after  purchase (0% APR in the first period after opening an account, unless there is  an outstanding balance carried forward from the previous month. Unless referral offers apply). In this case, no grace period will be granted for the new charges.\
<br><br>\
Credit card companies are required by law to provide a grace period of at least 21 days before charging interest on purchases. That is why, whenever possible, paying off balances before the grace period expires is a good practice. It is also critical to understand whether your issuer charges interest daily or monthly, as the former results in higher interest charges for as long as the balance remains unpaid. This is especially important to understand if you want to transfer a credit card balance to a card with a lower interest rate. Switching from a monthly accrual card to a daily accrual card by mistake may potentially negate the savings from the lower rate.", "<br><br><br><br><b><br>\
Regular insecure and secure cards, when used responsibly, provide a way for consumers to buy online and help  build a positive credit history while eliminating the need to carry cash. Both types of credit cards report payments and purchase activities to  major credit reporting agencies, so cardholders who use their cards responsibly  build strong credit scores and potentially expand their  credit lines. However, if you have a secure card, you may upgrade to a regular card with a credit card.", "<br><br><br><br><b><br>\
If the credit card is secured, this means that the credit card issuer and money have to be deposited to open an account. The money is known as a  deposit. And it will be held by  credit card issuer while the account is open. \
secured Credit Cards can be a great choice for people who build, build, or rebuild loans. Constructing a loan through responsible applications can be a  candidate such as a mortgage, an automobile loan, and other credit cards.\
<br>\
<br>\
Like secure credit cards, prepaid debit cards are a type of secure payment card, and the available balance is the same as the money someone has already  parked in your linked bank account. In contrast, unsecured credit cards do not require  deposits or collateral. These cards tend to offer higher credit lines  and lower interest rates compared to secure cards.\
", "<br><br><br><br><b><br>\
your creditworthiness is defined by your three-digit credit score and is the key to your financial life. Good credit can be the make-or-break detail that determines whether you’ll get a mortgage, car loan or student loan. Good credit can make a big difference even if you aren't looking for a loan. Landlords, insurance companies, and employers often use credit information as a lithograph test to determine if you are trustworthy and responsible. Bad credit may indicate that you are a risky bet, and  your credit history only technically  details  how you handle your debt, but some Extrapolates the characteristics of your economic life to other situations. Good credit can mean that your financial situation-and the rest of your life-is on the right track. This means that your credit score can affect your premiums, the housing you approve, and perhaps even if you get that new job.", " <br><br><br><br><b><br>\
Good financial decisions help lenders and businesses consider you low risk. You are more likely to receive financial opportunities, including higher credit limits and lower interest rates. <br>\
Steps to build Credit<br><br>\
1.Start early :The length of your credit history is a key factor in determining your credit score<br><br>\
2.Start small:Lenders assume that if you apply for a lot of loans in a short period of time, you are not going to live by your means<br><br>\
3.Don't abuse the privilege:It's easy to get in over your head. Make responsible decisions with your credit cards and loans<br><br>\
4.Pay bills on time: ANY unpaid bills, including credit card, medical, cell phone, etc., will appear on your credit report and can negatively impact your credit score<br><br>\
5.Use caution when closing accounts: It may negatively impact your credit score by shortening your credit history or decreasing your available credit<br><br>\
6.Track credit utilization:Experts generally recommend keeping your utilization rate below 30%; aim for a single-digit utilization rate (under 10%) if you really want a good credit score.\
", "<br><br><br><br><b><br>\
Front here"];
let imgs = ["IMG/Credit1.png", "IMG/Credit2.png", "IMG/Credit3.png", "IMG/Credit4.png", "IMG/Credit5.png"];
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