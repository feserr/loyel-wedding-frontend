import "../Styles/bank.css"

import DebitCard from "./DebitCard";
import Account from "../Types/Account";

type BankProp = {
  account1: Account;
  account2: Account;
}

export default function Bank(bankProp: BankProp) {
  return (
    <div className="container" data-aos="fade-in" data-aos-easing="linear">
      <div className="columns is-multiline">
        <div className="column is-12 prolog">
          <h1 className="title has-text-centered section-title">Transferencias</h1>
        </div>
      </div>
      <div className="flex justify-evenly flex-col md:flex-row md:flex-wrap bank-text-align" data-aos="fade-up">
        <div className="bank-px-4 mb-10">
          <DebitCard
            bank={bankProp.account1.country}
            accountNumber={bankProp.account1.account}
            name={bankProp.account1.holder}
          />
        </div>
        <div className="bank-px-4 mb-10">
          <DebitCard
            bank={bankProp.account2.country}
            accountNumber={bankProp.account2.account}
            name={bankProp.account2.holder}
          />
        </div>
      </div>
    </div >
  );
}
