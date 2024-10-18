import { useContext, createContext } from "react";

export const TodosContext = createContext({
    todoBox: 'html',
    createTodoBox: () => {},
    deleteTodoBox: () => {},
    openTodoBox: () => {},
    closeTodoBox: () => {},
});

export const TodosProvider = TodosContext.Provider;

export const useTodos = () => {
    const context = useContext(TodosContext);
    if (context === undefined) throw new Error('TodosContext is undefined');
    return context;
}