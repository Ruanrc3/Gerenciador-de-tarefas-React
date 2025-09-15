import React, { useContext } from "react";
import { TarefasContext } from "../context/TarefasContext";

export default function Tarefa({ tarefa }) {
  const { dispatch } = useContext(TarefasContext);

  return (
    <li style={styles.item}>
      <input
        type="checkbox"
        checked={tarefa.concluida}
        onChange={() => dispatch({ type: "TOGGLE_TAREFA", payload: tarefa.id })}
      />
      <span style={{
        ...styles.texto,
        textDecoration: tarefa.concluida ? "line-through" : "none",
        color: tarefa.concluida ? "#888" : "#333"
      }}>
        {tarefa.titulo}
      </span>
    </li>
  );
}

const styles = {
  item: {
    display: "flex",
    alignItems: "center",
    padding: "10px",
    margin: "5px 0",
    background: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
  },
  texto: {
    marginLeft: "10px",
    fontSize: "16px",
  },
};
