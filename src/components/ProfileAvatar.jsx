import styles from "./ProfileAvatar.module.css";

function ProfileAvatar({ src, alt }) {
  return (
    <div className={styles.wrapper}>
      <img className={styles.avatar} src={src} alt={alt}></img>
    </div>
  );
}

export default ProfileAvatar;
