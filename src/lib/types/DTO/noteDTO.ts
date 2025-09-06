interface NoteDTO {
  id: number;
  note: string;
  creationDate: Date;
  isComlete: boolean;
  employeeId: number
}

export type {NoteDTO}