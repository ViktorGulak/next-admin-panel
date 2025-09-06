import React from "react";
import styles from "./page.module.scss";
import UserCard from "@/components/user-card/UserCard"
import {Tab, TabMenu, TabContent} from "@/components/tab/tabUI"
import ProfileTabMenu from "@/components/profile-tab-menu/ProfileTabMenu"
import ProfileContentSwitcher from "@/components/profile-content-switcher/ProfileContentSwitcher"
import getTabHeaders from "./tabMenuData"
const Profile = () => {
  const tabs = getTabHeaders();
  return (
    <div className={styles.profile_page_wrapper}> 
      <UserCard/>
      <Tab>
        <TabMenu>
          <ProfileTabMenu headers={getTabHeaders()}/>
        </TabMenu>
        <TabContent>
          <ProfileContentSwitcher/>
        </TabContent> 
      </Tab>   
    </div>
  );
}
export default Profile
