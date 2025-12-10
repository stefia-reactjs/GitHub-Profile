import styles from "./StatCard.module.css";
function StatCard({ label, value }) {
  return (
    <div className={styles.card}>
      <div className={styles.label}>{label}</div>
      <div>{value}</div>
    </div>
  );
}
export default StatCard;
