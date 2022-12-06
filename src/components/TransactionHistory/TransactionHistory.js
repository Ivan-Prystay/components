import PropTypes from 'prop-types';

import css from './TransactionHistory.module.css';

export function TransactionHistory({ itemss }) {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {itemss.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td className={css.type}>{type}</td>
            <td className={css.amount}>{amount}</td>
            <td className={css.currency}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  type: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
};
