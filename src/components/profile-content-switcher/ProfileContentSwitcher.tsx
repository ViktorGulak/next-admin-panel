'use client'
import React from "react"
import {useTabStore} from "@/lib/store/tab-store"
const ProfileContentSwitcher = () => {
    const { activeTab } = useTabStore();

    const renderTabContent = () =>{
        switch(activeTab) {
            case "notes":
                return "Заметки";
            
            case "my-tasks":
                return "Мои задачи";
            
            case "created-tasks":
                return "Заданные задачи";
            
            default:
                const _exhaustiveCheck: never = activeTab;
                return _exhaustiveCheck;
        }
    }
    console.log(activeTab)
    return (
        <>
            {renderTabContent()}
        </>
    )
}

export default ProfileContentSwitcher