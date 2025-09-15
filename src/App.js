import React, { useState, useContext } from "react";
import { TarefasProvider, TarefasContext } from "./context/TarefasContext";
import ListaDeTarefas from "./components/ListaDeTarefas";

function AppContent() {
  const { state, dispatch } = useContext(TarefasContext);
  const [novaTarefa, setNovaTarefa] = useState("");

  const adicionarTarefa = () => {
    if (novaTarefa.trim() !== "") {
      dispatch({ type: "ADICIONAR_TAREFA", payload: novaTarefa });
      setNovaTarefa("");
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.titulo}>📌 Gerenciador de Tarefas</h1>

      {/* Input e botão */}
      <div style={styles.inputArea}>
        <input
          type="text"
          placeholder="Digite uma tarefa..."
          style={styles.input}
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
        />
        <button style={styles.botao} onClick={adicionarTarefa}>
          ➕ Adicionar
        </button>
      </div>

      {/* Filtros */}
      <div style={styles.filtros}>
        <button style={styles.filtroBtn} onClick={() => dispatch({ type: "SET_FILTRO", payload: "TODAS" })}>
          Todas
        </button>
        <button style={styles.filtroBtn} onClick={() => dispatch({ type: "SET_FILTRO", payload: "CONCLUIDAS" })}>
          Concluídas
        </button>
        <button style={styles.filtroBtn} onClick={() => dispatch({ type: "SET_FILTRO", payload: "PENDENTES" })}>
          Pendentes
        </button>
      </div>

      {/* Lista */}
      <ListaDeTarefas />
    </div>
  );
}

export default function App() {
  return (
    <TarefasProvider>
      <AppContent />
    </TarefasProvider>
  );
}

const styles = {
  container: {
    maxWidth: "600px",
    margin: "40px auto",
    padding: "20px",
    background: "#f4f6f9",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
  },
  titulo: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333",
  },
  inputArea: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
  input: {
    flex: 1,
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    outline: "none",
    fontSize: "16px",
  },
  botao: {
    background: "#4caf50",
    color: "#fff",
    border: "none",
    padding: "10px 16px",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "0.2s",
  },
  filtros: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "20px",
  },
  filtroBtn: {
    background: "#2196f3",
    color: "#fff",
    border: "none",
    padding: "8px 12px",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "0.2s",
  },
};
