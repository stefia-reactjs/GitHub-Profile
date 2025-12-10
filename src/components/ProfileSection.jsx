import styles from "./ProfileSection.module.css";
import UserStats from "./UserStats";
import ProfileAvatar from "./ProfileAvatar";
import ProfileInfo from "./ProfileInfo";

function ProfileSection({ profile }) {
  const { avatar_url, name, login, followers, following, location, bio } =
    profile;
  return (
    <>
      <UserStats
        src={avatar_url}
        alt={name || login}
        followers={followers}
        following={following}
        location={location || "No location"}
      />
      <ProfileInfo name={name || login} bio={bio} />
    </>
  );
}

export default ProfileSection;
