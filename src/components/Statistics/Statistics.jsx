import css from './Statistics.module.css';
import PropTypes from 'prop-types';

// const item = document.querySelectorAll('.Statistics_item__8qNhM');

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// item.style.backgroundColor = getRandomHexColor();

const Statistics = ({ title, stats }) => {
  const titleElement = title && <h2 className={css.title}>{title}</h2>;

  const infoElement = stats.map(item => (
    <li key={item.id} className={css.item}>
      <span className="label">{item.label}</span>
      <span className={css.percentage}>{item.percentage}%</span>
    </li>
  ));
  return (
    <section className={css.statistics}>
      {titleElement}
      <ul className={css.statlist}>{infoElement}</ul>
    </section>
  );
};

export default Statistics;

Statistics.defaultProps = {
  stats: [],
};

Statistics.propType = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
