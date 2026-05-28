import { ITransaction } from "../../domain/entities/ITransaction";
import { Balance } from "./Balance/Balance";
import { Card, DateWrapper, GreetingWrapper, Heading } from "./styles";

interface AccountProps {
  transactions: ITransaction[];
}

const options: Intl.DateTimeFormatOptions = {
  weekday: "long",
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
};

const calcularSaldo = (transactions: ITransaction[]): number => {
  return transactions.reduce((acc, transaction) => {
    const isDeposito = transaction.type.display === "Depósito";
    const valor = isDeposito ? transaction.value : -transaction.value;
    return acc + valor;
  }, 0);
};

export const Account = ({ transactions }: AccountProps) => {
  const saldo = calcularSaldo(transactions);

  return (
    <Card>
      <GreetingWrapper>
        <DateWrapper>
          {new Date().toLocaleDateString("pt-BR", options)}
        </DateWrapper>
        <Heading>Olá! :)</Heading>
      </GreetingWrapper>
      <div>
        <Balance value={saldo} />
      </div>
    </Card>
  );
};
