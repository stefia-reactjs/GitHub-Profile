import styles from "./UserStats.module.css";
import StatCard from "./StatCard";
import ProfileAvatar from "./ProfileAvatar";

function UserStats({ src, alt, followers, following, location }) {
  return (
    <div className={styles.wrapper}>
      <ProfileAvatar src={src} alt={alt} />
      <StatCard label="Followers" value={followers} />
      <StatCard label="Following" value={following} />
      <StatCard label="Location" value={location} />
    </div>
  );
}

export default UserStats;
