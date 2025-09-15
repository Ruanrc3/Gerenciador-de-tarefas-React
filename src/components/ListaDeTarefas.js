import React, { useContext } from "react";
import { TarefasContext } from "../context/TarefasContext";
import Tarefa from "./Tarefa";

export default function ListaDeTarefas() {
  const { state } = useContext(TarefasContext);

  const filtrarTarefas = () => {
    switch (state.filtro) {
      case "CONCLUIDAS":
        return state.tarefas.filter((t) => t.concluida);
      case "PENDENTES":
        return state.tarefas.filter((t) => !t.concluida);
      default:
        return state.tarefas;
    }
  };

  const tarefasFiltradas = filtrarTarefas();

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {tarefasFiltradas.map((tarefa) => (
        <Tarefa key={tarefa.id} tarefa={tarefa} />
      ))}
    </ul>
  );
}
