console.log("hello");
let headings = ["WHAT IS A Loan?", "Understanding Loans", "The Process", "Types of Loans", " Impacts of loans", "Secured Loans/Unsecured Loans"];
let Facts = [" <br><br><br><br><b><br>\
A loan is a type of credit in which an amount is lent to another party in exchange for future value or repayment of principal. A Principal in this case; is the set amount of money that you have borrowed and planed to pay back In many cases, lender will add interest and / or funding costs to the principal. This requires the borrower to repay in addition to the principal balance. Loans can be granted for a specific one-time amount or used as a permanent line of credit up to a specific limit amount of time. Loans come in many forms, including secured, unsecured, commercial loans, and personal loans.", "<br><br><br><br><b><br>\
Loans are a type of debt created by an individual or other legal entity. The lender; usually a company, financial institution, or government prepays the amount to the borrower. In return, the borrower agrees to  certain terms, including funding costs, interest, repayment dates, and other terms. In some cases, the lender may  secure the loan and demand collateral to ensure repayment. Loans may also be offered in the form of bonds or certificates of deposit (CD). You can also borrow from your 401 (k) account.", "<br><br><br><br><b><br>\
When someone needs money, they apply for a loan from a bank, company, government, or other entity. The borrower may be asked to provide certain details such as the reason for the loan,  financial history, social security number (SSN), and other information. The lender reviews the information, including the individual's debt-to-revenue ratio (DTI), to determine if the loan can be repaid. The lender rejects or approves the application, depending on the creditor's creditworthiness. If the loan application is rejected, the lender must justify this. Once the application is approved, the parties will sign a contract that regulates the details of the contract. The lender must prepay the proceeds of the loan and then the borrower must repay the amount including interest and other incidental costs.\
<br><br>\
The terms of the loan are agreed  by each party before the money or property is handed over or paid. If the lender requires collateral, the lender specifies this in the loan document. Most loans also have provisions for maximum interest, as well as other agreements such as the length of time before repayment of the loan is required.", "<br><br><br><br><b><br>\
The terms of the loan are agreed  by each party before the money or property is handed over or paid. If the lender requires collateral, the lender specifies this in the loan document. Most loans also have provisions for maximum interest, as well as other agreements such as the length of time before repayment of the loan is required.", "<br><br><br><br><b><br>\
Loans are granted for a variety of reasons, including large purchases, investments, refurbishments, debt consolidation, and business ventures. Loans also help existing companies grow their businesses. Credit opens the competition by growing the total money supply in the economy and  lending to new businesses. Loan interest and fees  are a major source of income for many banks and some retailers from the use of loan facilities and credit cards.", " <br><br><br><br><b><br>\
Loans can be secured or unsecured. Mortgages and car loans are known as a type of secured loans, as they are both backed or secured by collateral. In each of these cases, the collateral is the asset for which the loan is taken out. The collateral for a mortgage is the home, while the vehicle secures a car loan. Borrowers may be required to put up other forms of collateral for other types of secured loans if required.\
<br><br>\
Credit cards and signature loans are unsecured loans. This means that it is not backed by  collateral. Unsecured loans usually have higher interest rates than secured loans because the risk of default is higher than secured loans. This is because the lender of the secured loan can re-claim the collateral if the borrower defaults. Interest rates on unsecured loans tend to fluctuate significantly depending on several factors, including the creditworthiness of the borrower via credit history."];
let imgs = ["IMG/Loan1.png", "IMG/Loan2.png", "IMG/Loan3.png", "IMG/Loan4.png", "IMG/Loan5.png", "IMG/Loan6.png"];
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