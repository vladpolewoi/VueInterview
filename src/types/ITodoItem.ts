import { uuid } from 'vue-uuid'

export default interface ITodoItem {
  id: string
  title: string
  isCompleted: boolean
}

export const sampleData: ITodoItem[] = [
  {
    id: uuid.v4(),
    title: 'First Todo Item',
    isCompleted: false
  },
  {
    id: uuid.v4(),
    title: 'Second Todo Item',
    isCompleted: false
  },
  {
    id: uuid.v4(),
    title: 'Third Todo Item',
    isCompleted: true
  }
]
