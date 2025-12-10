import styles from "./UserRepos.module.css";
import Repo from "./Repo";

function UserRepos({ repos }) {
  if (!repos || repos.length === 0) {
    return <p>No repos</p>;
  }
  return (
    <div>
      <ul className={styles.allRepos}>
        {repos.map((repo) => (
          <Repo key={repo.id} repo={repo} />
        ))}
      </ul>
    </div>
  );
}

export default UserRepos;
