import PropTypes from 'prop-types';
import css from './UserProfile.module.css';

export const UserProfile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={css.user__profile}>
      <div>
        <img
          src={avatar}
          alt="User avatar"
          className={css.user__image}
        />
        <p className={css.user__name}>{username}</p>
        <p className={css.user__secondaryInfo}>@{tag}</p>
        <p className={css.user__secondaryInfo}>{location}</p>
      </div>

      <ul className={css.user__stats}>
        <li className={css.user__statsItem}>
          <span>Followers</span>
          <span className={css.user__quantity}>{stats.followers}</span>
        </li>
        <li className={css.user__statsItem}>
          <span>Views</span>
          <span className={css.user__quantity}>{stats.views}</span>
        </li>
        <li className={css.user__statsItem}>
          <span>Likes</span>
          <span className={css.user__quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  )
};

UserProfile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats:PropTypes.objectOf(PropTypes.number).isRequired,
}