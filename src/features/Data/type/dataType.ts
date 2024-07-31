export interface ToDoState{
    todo: ToDoItems[] | null
    status: string
    error: string | null | unknown
}

interface ToDoItems{
    completed: boolean
    id: number
    title: string
    userId: number
}