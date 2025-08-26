import React from "react";
import styles from "./page.module.scss";
import UserCard from "@/components/user-card/UserCard"
import TabMenu from "@/components/tab-menu/TabMenu"
import getTabHeaders from "./tabMenuData"
const Profile = () => {
  const tabs = getTabHeaders();
  return (
    <div className={styles.profile_page_wrapper}> 
      <UserCard/>
      <TabMenu headers = {tabs}/>
    </div>
  );
}
export default Profile
