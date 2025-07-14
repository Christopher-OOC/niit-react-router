import { Link, NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";

export default function Sidebar({ user }) {
  return (
    <div className={styles.sidebarHome}>
      {user && <h2>Welcome, {user.firstName + " " + user.lastName}</h2>}
      <div>
        <NavLink to="home">Home</NavLink>
      </div>
      <div>
        <NavLink to="profile">Profile</NavLink>
      </div>
      <div>
        <NavLink to="settings">Settings</NavLink>
      </div>
      <div>
        <NavLink to="admin">Admin</NavLink>
      </div>
      <div>
        <NavLink to="logout">Logout</NavLink>
      </div>
    </div>
  );
}
