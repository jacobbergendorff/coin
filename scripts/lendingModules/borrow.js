
export default function borrow(){

let borrow = `
<div class="lending-container-borrow-title">
                <h2>Borrow SQR</h2>
            </div>
            <div class="lending-container-borrow-amount">
                <h3>Amount</h3>
                <input type="text" placeholder="e.g 1 000 000 SQR" />
            </div>
            <div class="lending-container-borrow-collateral">
                <h3>Collateral</h3>
                    <input type="text" placeholder="e.g 1 000 000 SQR" />
                    <h3> Borrow term </h3>
                    <div class="liquidityTerm2">
                        <button id="borrow1M" style="background-color: rgb(51, 74, 78);">30 Days</button>
                        <button id="borrow3M" style="background-color: rgb(51, 74, 78);">90 Days</button>
                        <button id="borrow6M" style="background-color: rgb(51, 74, 78);">180 Days</button>
                        <button id="borrow12" style="background-color: rgb(51, 74, 78);">360 Days</button>
                        <h3> SQR available to borrow:</h3>
                        <h4> 12481294 SQL </h4>
                        <h4> Expected interest: 5% </h4>
                    </div>
                <div class="lending-container-borrow-credentials">
                    <h3>Enter Your Credentials...</h3>
                    <label for="name">Username</label>
                    <input id="username" type="text" placeholder="JACOB"/>
                    <label for="password">Password</label>
                    <input id="password" type="password" placeholder="********"/>
                    <h3>...or Verify Wallet Connection</h3>
                    <button>Authorize Wallet</button>
                    <h3>Execute Transaction</h3>
                    <button id="lending-execute-button">Execute</button>
                </div>
            </div>`;
            return borrow
}