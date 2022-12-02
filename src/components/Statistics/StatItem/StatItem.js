import PropTypes from 'prop-types';
import css from './StatItem.module.css';

export function StatItem({ label, percentage }) {
  return (
    <li
      className={css.item}
      style={{ backgroundColor: `${generateRandomColor()}`, color: 'white' }}
    >
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
  );
}

function generateRandomColor() {
  let r = Math.round(Math.random() * 255); //red 0 to 255
  let g = Math.round(Math.random() * 255); //green 0 to 255
  let b = Math.round(Math.random() * 255); //blue 0 to 255
  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}

StatItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
