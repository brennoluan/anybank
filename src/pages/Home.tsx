import styled from "styled-components";
import { Sidebar } from "../presentation/Sidebar";
import { Account } from "../presentation/Account";
import { TransactionForm } from "../presentation/TransactionForm";
import { Statement } from "../presentation/Statement";
import { useEffect, useState } from "react";
import { ITransaction } from "../presentation/Transaction";
import { ListAllTransactions } from "../domain/useCases/ListAllTransactions";
import { TransactionSupabaseRepository } from "../infra/supabase/TransactionSupabaseRepository";

const Main = styled.main`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 34px;
`;

const listTransactions = new ListAllTransactions(
  new TransactionSupabaseRepository(),
);

const Home = () => {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  const onRegisterTransacion = (newTransaction: ITransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  useEffect(() => {
    listTransactions.execute().then((transactions) => {
      setTransactions(transactions);
    });
  }, []);

  return (
    <>
      <Sidebar />
      <Main>
        <Account transactions={transactions} />
        <TransactionForm onRegister={onRegisterTransacion} />
      </Main>
      <div>
        <Statement allTransactions={transactions} />
      </div>
    </>
  );
};

export default Home;
