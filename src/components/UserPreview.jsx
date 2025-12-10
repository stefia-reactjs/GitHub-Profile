import styles from "./UserPreview.module.css";

function UserPreview({ profile, onClick }) {
  if (!profile) {
    return null;
  }
  const { avatar_url, name, login, bio } = profile;
  return (
    <div className={styles.wrapper} onClick={onClick}>
      <img className={styles.avatar} src={avatar_url} />
      <div className={styles.info}>
        <div className={styles.name}>{name || login}</div>
        <div className={styles.bio}>{bio}</div>
      </div>
    </div>
  );
}
export default UserPreview;
