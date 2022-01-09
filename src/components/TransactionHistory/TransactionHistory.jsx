import PropTypes from "prop-types";
import {
  TransactionTable,
  TransactionHead,
  TransactionRow,
  TransactionData,
} from "./TransactionHistory.styled";

const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable>
      <TransactionHead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </TransactionHead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TransactionRow key={id}>
            <TransactionData>{type}</TransactionData>
            <td>{amount}</td>
            <td>{currency}</td>
          </TransactionRow>
        ))}
      </tbody>
    </TransactionTable>
  );
};

TransactionHistory.proTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;
