import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({title, stats}) => {
    return (
        <section className={css.statistics}>
            {title && <h2 className={css.title}>{title}</h2>}
            <ul className={css['stat-list']}>
                {stats.map(({ id, label, percentage }) => {
                    return (
                        <li key={id} className={css['stat-list__item']}>
                            <span className={css['stat-list__label']}>{label}</span>
                            <span className={css['stat-list__percentage']}>{percentage}%</span>
                        </li>
                    )
                })}
            </ul>
        </section>
    );
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }),
    ),
};