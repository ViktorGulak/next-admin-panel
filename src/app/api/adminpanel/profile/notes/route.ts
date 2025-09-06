import {noteService} from "@/lib/services/note.service"
import { NextRequest } from 'next/server';
export async function GET(request: NextRequest) {
    const {searchParams} = new URL(request.url);
    const id = searchParams.get("id")
  console.log(id)
  try {
    const notes = await noteService.getNotesByUserId(id as string);
    if (!notes || notes.length === 0) {
      return Response.json(
        { error: 'Заметки не найдены' },
        { status: 404 }
      );
    }

    return Response.json(notes);
  } catch (error) {
    return Response.json(
      { error: 'Ошибка сервера' },
      { status: 500 }
    );
  }
}