import PropTypes from 'prop-types';
import css from './transactions.module.css';

const Transactions = ({ items }) => {
  const item = items.map(item => (
    <tbody>
      <tr>
        <td>{item.type}</td>
        <td>{item.amount}</td>
        <td>{item.currency}</td>
      </tr>
    </tbody>
  ));
  return (
    <table className={css.transaction_history}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      {item}
    </table>
  );
};

export default Transactions;

Transactions.defaultProp = {
  items: [],
};

Transactions.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
