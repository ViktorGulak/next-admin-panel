import styles from "./layout.module.scss"
type ProfileLayoutProps = {
  children: React.ReactNode,
  myTasks: React.ReactNode,
  tasksFromMe: React.ReactNode,
  notes: React.ReactNode
}
export default function ProfileLayout({
  children,
  myTasks,
  tasksFromMe,
  notes
}: ProfileLayoutProps) {
  return (
    <div className={styles.profile_page_wrapper}>  
      {children}
      <ul className="tab">
        <li className="tab-item active">
          <a href="#">
            {notes}
          </a>
        </li>
        <li className="tab-item">
          <a href="#">
            {myTasks}
          </a>
        </li>
        <li className="tab-item">
          <a href="#">
            {tasksFromMe}
          </a>
        </li>
      </ul>
    </div>
  );
}