//import PropTypes from 'prop-types';
import css from './Statistics.module.css';
//import data from 'path/data.json';

/*
[
  { "id": "id-1", "label": ".docx", "percentage": 22 },
  { "id": "id-2", "label": ".pdf", "percentage": 4 },
  { "id": "id-3", "label": ".mp3", "percentage": 17 },
  { "id": "id-4", "label": ".psd", "percentage": 47 },
  { "id": "id-5", "label": ".pdf", "percentage": 10 }
]
*/

export default function Statistics({ title, label, percentage }) {
  return (
    <section className={css.statistics}>
      <h2 className="title">{title}</h2>

      <ul className="stat-list">
        <li className="item">
          <span className="label">{label}</span>
          <span className="percentage">{percentage}%</span>
        </li>
      </ul>
    </section>
  );
}
