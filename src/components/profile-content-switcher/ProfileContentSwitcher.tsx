'use client'
import React from "react"
import {useTabStore} from "@/lib/store/tab-store"
import NotesList from "@/components/notes-list/NotesList"
const ProfileContentSwitcher = () => {
    const { activeTab } = useTabStore();

    const renderTabContent = () => {
        switch(activeTab) {
            case "notes":
                return <NotesList/>;
            
            case "my-tasks":
                return "Мои задачи";
            
            case "created-tasks":
                return "Заданные задачи";
            
            default:
                const _exhaustiveCheck: never = activeTab;
                return _exhaustiveCheck;
        }
    }
    return (
        <>
            {renderTabContent()}
        </>
    )
}

export default ProfileContentSwitcher