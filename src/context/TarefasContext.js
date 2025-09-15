import React, { createContext, useReducer } from "react";


export const TarefasContext = createContext();

const initialState = {
  tarefas: [],
  filtro: "TODAS", 
};


function tarefasReducer(state, action) {
  switch (action.type) {
    case "ADICIONAR_TAREFA":
      return {
        ...state,
        tarefas: [
          ...state.tarefas,
          { id: Date.now(), titulo: action.payload, concluida: false },
        ],
      };

    case "TOGGLE_TAREFA":
      return {
        ...state,
        tarefas: state.tarefas.map((tarefa) =>
          tarefa.id === action.payload
            ? { ...tarefa, concluida: !tarefa.concluida }
            : tarefa
        ),
      };

    case "SET_FILTRO":
      return {
        ...state,
        filtro: action.payload,
      };

    default:
      return state;
  }
}


export function TarefasProvider({ children }) {
  const [state, dispatch] = useReducer(tarefasReducer, initialState);

  return (
    <TarefasContext.Provider value={{ state, dispatch }}>
      {children}
    </TarefasContext.Provider>
  );
}
