import { useState, useEffect } from "react";
import styles from "./App.module.css";
import SearchBar from "./components/SearchBar";
import ProfileSection from "./components/ProfileSection";
import UserRepos from "./components/UserRepos";
import UserPreview from "./components/UserPreview";
import axios from "axios";

function App() {
  const [username, setUsername] = useState("");
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [previewProfile, setPreviewProfile] = useState(null);

  const handleSearch = async () => {
    if (!username.trim()) {
      setError("Введите логин GitHub");
      setProfile(null);
      setRepos([]);
      return;
    }
    try {
      setError("");
      const profileRes = await axios.get(
        `https://api.github.com/users/${username}`
      );
      const reposRes = await axios.get(
        `https://api.github.com/users/${username}/repos`
      );
      setProfile(profileRes.data);
      setRepos(reposRes.data);
    } catch (e) {
      console.error(e);
      setError("Пользователь не найден или ошибка сети");
      setProfile(null);
      setRepos([]);
    }
  };
  useEffect(() => {
    if (!username.trim()) {
      setPreviewProfile(null);
      return;
    }

    const timeoutId = setTimeout(() => {
      axios
        .get(`https://api.github.com/users/${username}`)
        .then((res) => {
          setPreviewProfile(res.data);
        })
        .catch(() => {
          setPreviewProfile(null);
        });
    }, 600);

    return () => clearTimeout(timeoutId);
  }, [username]);

  return (
    <main className={styles.wrapper}>
      <div className={styles.header}>
        <SearchBar
          username={username}
          setUsername={setUsername}
          onSearch={handleSearch}
        />
        <UserPreview profile={previewProfile} onClick={handleSearch} />
      </div>
      <div className={styles.section}>
        {profile && (
          <>
            <ProfileSection profile={profile} />
            <UserRepos repos={repos} />
          </>
        )}
      </div>
    </main>
  );
}

export default App;
