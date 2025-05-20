export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export type FilterStatus = 'all' | 'completed' | 'active';