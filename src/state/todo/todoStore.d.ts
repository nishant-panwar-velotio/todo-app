declare interface TodoData {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

declare interface TodoStore {
    data: TodoData[];
    mockData: TodoData[];
    error?: Error | null;
}
