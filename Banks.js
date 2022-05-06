console.log("hello");
let headings = ["WHAT IS A BANK?", "How Are Banks Regulated?", "Retail banks", "Commercial / corporate banks ", "Investment banks", "Bank vs. Credit Union", "How Do I Know My Money Is Safe in a Bank?"];
let Facts = [" <br><br><br><br><b><br>\
Banks are financial institutions that are licensed to receive deposits and make loans. Banks are a very important part of the economy because they provide vital services for both consumers and businesses. Banks provide many finaicl services to the consumer such as; wealth management, currency exchange, and safe deposit boxes. There are many types of banks such as retail banks, commercial or corporate banks, and investment banks. In most countries, banks are either regulated by a central bank, or the countries goverment. Banks also provide credit opportunities for people and corporations. These types of credit can be used for short term cash or long term debt.", "<br><br><br><br><b><br>\
Following the global financial crisis of 2008, US institutions were subjected to increased Supervision. As a result, the regulatory environment for banks has tightened significantly. Banks in the United States are usually regulated on a state or national level, sometimes both. The Office of the Comptroller of the Currency (OCC) supervises the national banks. The Office of the Comptroller of the Currency regulations primarily cover bank capital levels, asset quality, and liquidity. Following the financial crisis, the Dodd-Frank Wall Street Reform and Consumer Protection Act was passed in 2010, with the goal of decreasing risks in the US financial system. Large banks are evaluated under this act to see if they have enough capital to continue operating in difficult economic times. These assessments are given anually and is called the stress test", "<br><br><br><br><b><br>\
Retail banking, often known as consumer banking, accounts for a sizable portion of the American economy. In the United States, consumer spending accounts for 70% of Economy, and retail banks facilitate this spending through loans, debit cards, credit cards, and other means. The world of retail banking is enormous, ranging from checking accounts to mortgages, auto loans to credit cards, lines of credit to foreign currency exchange. There are various sorts of banking products available in retail banking.\
<br>\
The three main types of banking products\ <br> 1.Money management services\ <br> 2.Credit services\ <br> 3.Deposit services", "<br><br><br><br><b><br>\
From small business owners to major corporations, commercial or corporate banks offer specialized services to their business clients. These banks offer credit services to its customers in addition to day-to-day commercial banking. Exampls include<br>\
1.Commercial real estate services<br>\ 2.Trade finance<br>\ 3. Credit services<br>\ 4.Credit services<br>\ 5.cash management", "<br><br><br><br><b><br>\
A financial services organization that acts as a middleman in large and sophisticated financial transactions is known as an investment bank. Whenever a startup companies prepares for an initial public offering (IPO) or when a corporations combines with a major competitor, an investment bank is frequently engaged. Many of these banks also operate storefront community banking and divisions that cater to high-net-worth clients' investing needs.\
<br>\ Global investment banks <br>\ 1.  JPMorgan Chase <br>\ 2.Morgan Stanley <br>\ 3.Deutsche Bank<br>\ 4.Bank of America <br>\ 5.Citigroup", " <br><br><br><br><b><br>\
Banks are in the business of earning money. This means that banks are more concerned with earning a profit than with meeting the requirements of account holders. This is one of the reasons why banks frequently charge greater fees and at a faster rate than credit unions. Banks' lending interest rates are likewise higher, while their annual percentage yields on savings products are lower.<br><br><br>\
A credit union is structured as a cooperative, its members own the institution. Individuals who have a common tie, such as the industry they work in, the community they reside in, their faith, or their membership in another organization, are usually eligible to join credit unions. Credit unions are also normally exempt from federal taxes because they are nonprofits, and some credit unions even receive subsidies from the organizations with which they are linked. This eliminates the need for credit unions to worry about producing a profit for their shareholders.", "<br><br><br><br><b><br>\
The Federal Deposit Insurance Corporation (FDIC) is an independent organization established by Congress to ensure the financial system's stability and public confidence. The Federal Deposit Insurance Corporation (FDIC) guarantees deposits and regulates and inspects banks for safety and consumer protection. For each account ownership group, the usual insurance amount is $250,000 per depositor, per insured bank. You don't need to buy this insurance because you're automatically covered if you open a deposit with an FDIC-insured bank."];
let imgs = ["IMG/Bank1.png", "IMG/Bank2.png", "IMG/Bank3.png", "IMG/Bank4.png", "IMG/Bank5.png", "IMG/Bank6.png", "IMG/Bank7.png"];
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