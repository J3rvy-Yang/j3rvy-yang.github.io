console.log("hello");
let headings = ["Overview", "Understanding stocks", "Where to buy stocks", "Penny Stocks", "Blue-Chip stocks", "Growth stocks", "dividend stocks"];
let Facts = [" <br><br><br><br><b><br>\
A stock is a partial ownership of big public corporations. When you purchase a company's stock, you're purchasing a small piece of a company, called a share or a stake. Investors purchase stocks of companies they think will go up in value. If that happens, the company's stock increases in value and can be sold for a profit.", "<br><br><br><br><b><br>\
For companies, issuing stock is a way to raise capitial to grow and reinvest in their business. For investors, stocks are a way to grow their money and outpace inflation over time. When you own a stock in a company you invest in, you are called a shareholder because you share in the company's profits. For example, if a company has 1,000 shares of stock outstanding and one person owns 100 shares, that person would own and have a claim to 10% of the company's assets and earnings. Public companies being traded in brokerages generally have their stocks split into billions and billions of shares, so shareholdes usally own a very tiny proportion of companies they invest in.", "<br><br><br><br><b><br>\
Public companies sell their stock through a stock market exchange, like the NASDAQ or the New York Stock Exchange. Investors can then buy and sell these shares among themselves through stockbrokers. The stock exchanges track the supply and demand of each company's stock, which directly affects the stock's price. Investors can then buy and sell these shares among themselves through stockbrokers. The stock exchanges track the supply and demand of each company's stock, which directly affects the stock's price.\
Some online brokerages to consider<br><br>\
1.WeBull\
<br>\
2.RobinHood\
<br>\
3.Vanguard\
<br>\
4.TD Ameritrade\
<br>\
5.Fidelity", "<br><br><br><br><b><br>\
A penny stock is a stock that trades for less than $5 a share and belongs to a small company. Though some penny stocks are traded on major exchanges like the New York Stock Exchange (NYSE), the majority are traded over-the-counter (OTC) through the electronic OTC Bulletin Board (OTCBB) or the privately held OTC Markets Group.\
<br><br>\
Penny stocks are typically linked with small businesses and trade infrequently, implying a lack of liquidity and available buyers in the market. Penny stocks are often seen as highly speculative due to their lack of liquidity. In other words, investors may lose a significant portion or all of their money. Many Penny stocks usually do not do well in the market, but a very few penny stocks skyrocker and penny stock investers profit way more than the initail investment. With bigger risk, comes bigger rewards.", "<br><br><br><br><b><br>\
A blue chip stock is a large corporation with a good reputation. These are usually large, well-established, and financially strong businesses that have been in operation for a long time and have consistent earnings, generally providing dividends to shareholders. A blue chip stock has a market valuation of billions of dollars, is usually the market leader or one of the top three corporations in its industry, and is almost always a household name. Blue chip stocks are among the most popular among investors for all of these reasons.\
<br><br>\
Blue chip stocks can be purchased directly, as well as through mutual funds or exchange-traded funds (ETFs) that invest in blue chip stocks. Funds and ETFs may hold a number of equities and asset classes, including blue chips, in some situations. In certain situations, the funds or ETFs are only focused on blue chip stocks, such as an ETF that tracks the Dow Jones Industrial Average, which includes 30 of the largest blue chip stocks.", " <br><br><br><br><b><br>\
A growth stock is a stock that is expected to increase at a rate that is much higher than the market average. The majority of these stocks do not pay dividends. This is because growth stock issuers are typically businesses that seek to reinvest any profits in order to accelerate growth in the short term. When investors buy growth stocks, they expect to profit from capital gains when they sell their shares in the future.\
<br><br>\
There is a basic trade-off between risk and return in all investing. Growth stocks have a higher potential for future returns, but they also carry a higher risk than other assets such as value stocks or corporate bonds. The major risk is that the current or anticipated growth does not sustain. Investors have paid a hefty amount for something they didn't obtain. A growth stock's price can plummet in such circumstances.", "<br><br><br><br><b><br>\
A dividend is a distribution of a portion of a company's earnings to a class of shareholders chosen by the board of directors of the firm. As long as they own the shares before the ex-dividend date, common shareholders of dividend-paying firms are usually eligible.\
<br><br>\
Ex-dividend date: The ex-dividend date, often known as the ex-date, is the date on which dividend eligibility expires. For example, if a stock's ex-date is Monday, June 5, shareholders who purchase it on or after that date will not be eligible for the dividend because they are purchasing it after the dividend expiry date. The dividend will be paid to shareholders who own the shares one business day before the ex-date, which is Friday, June 2 or earlier.\
<br><br>\
A high-value dividend announcement can suggest that the business is performing well and is profitable. However, it could also mean that the company lacks viable projects to create higher returns in the future. As a result, instead of reinvesting in expansion, it is paying dividends to shareholders.\
<br><br>\
If a corporation has a lengthy history of paying dividends, a reduction in the amount or cancellation of the payout may indicate to investors that the company is in difficulty."];
let imgs = ["IMG/Stock1.png", "IMG/Stock2.png", "IMG/Stock3.png", "IMG/Stock4.png", "IMG/Stock5.png", "IMG/Stock6.png", "IMG/Stock7.png"];
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