'use client'
import React from 'react'
import styles from "./notesList.module.scss"
import useSWR from "swr"
import { getNotes } from '@/lib/http/note'
import { useParams } from 'next/navigation';
import type {NoteDTO} from "@/lib/types/DTO/noteDTO"

const NotesList = () => {
    const params = useParams();
    const { data: notes, error, isLoading } = useSWR<NoteDTO[]>(
        `/adminpanel/profile/notes?id=${params.id}`, getNotes
    )
    console.log(notes)
  return (
    <ul>
        {notes?.map(el => (
            <li key={String(el.id)}>
                {el.note}
            </li>
        ))}
    </ul>
  )
}

export default NotesList
