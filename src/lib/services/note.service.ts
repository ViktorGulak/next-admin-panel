import prisma from "../db/prisma"

class NoteService{
  async getNotesByUserId(userId: string) {
    try {
      const notes = await prisma.note.findMany({
        where: {
          employeeId: Number(userId) // Фильтруем по ID пользователя
        },
        orderBy: {
          creationDate: 'desc' // Сортировка по дате
        }
      });
      return notes;
    } catch (error) {
      throw new Error('Ошибка при получении заметок');
    }
  }
}

export const noteService = new NoteService()