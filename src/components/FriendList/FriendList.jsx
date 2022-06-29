import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
    return (
        <ul className={css.friendList}>
            {friends.map(({ avatar, name, isOnline, id }) => {
                return (
                <li className={css.friendList__item} key={id}>
                    <span className={css.friendList__status} style={{ backgroundColor: isOnline ? "green" : "red" }}></span>
                    <img className={css.friendList__image} src={avatar} alt="User avatar" width="48" />
                    <p className={css.friendList__name}>{name}</p>
                </li>);
            })}
        </ul>
    );
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
        }),
    ),
};