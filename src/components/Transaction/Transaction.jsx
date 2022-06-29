import PropTypes from 'prop-types';
import css from './Transaction.module.css';

export const Transaction = ({transactions}) => {
    return (
        <table className={css["transaction-history"]}>
            <thead className={css.transaction__head}>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {transactions.map(({ id, type, amount, currency }) => {
                    return (
                        <tr key={id} className={css.transaction__row}>
                            <td>{type}</td>
                            <td>{amount}</td>
                            <td>{currency}</td>
                        </tr>
                    );
                })}
                
            </tbody>
        </table>
    );
}

Transaction.propTypes = {
    transactions:PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        }),
    ),
}