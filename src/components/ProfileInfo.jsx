import styles from "./ProfileInfo.module.css";

function ProfileInfo({ name, bio }) {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.name}>{name}</h1>
      <div className={styles.bio}>{bio}</div>
    </div>
  );
}

export default ProfileInfo;
