import { Outlet } from "react-router-dom";
import styles from "./Dashboard.module.css";
import Sidebar from "./Sidebar";

export default function Dashboard({ user }) {
  return (
    <div className={styles.dashboard}>
      <div className={styles.dashboardSidebar}>
        <Sidebar user={user} />
      </div>
      <div className={styles.dashboardContent}>
        <Outlet />
      </div>
    </div>
  );
}
