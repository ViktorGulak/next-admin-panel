import React from "react";
import styles from "./page.module.scss";
import UserCard from "@/components/user-card/UserCard"
import {Tab, TabMenu, TabContent} from "@/components/tab/tabUI"
import getTabHeaders from "./tabMenuData"
const Profile = () => {
  const tabs = getTabHeaders();
  return (
    <div className={styles.profile_page_wrapper}> 
      <UserCard/>
      <Tab>
        <TabMenu headers = {tabs}/>
        <TabContent/>
      </Tab>
      
    </div>
  );
}
export default Profile
