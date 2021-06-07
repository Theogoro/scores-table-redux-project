import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getScores } from "../redux/scoresDucks"; // Importar accion
import Score from "./Score";

export default function Scores() {
  const dispatch = useDispatch(); // Disparar acciones
  dispatch(getScores);

  const scores = useSelector(
    (store) => store.scores.array,
    (left, rigth) => {
      // Comparation function, if false it will re-render

      return 0; // Force update
    }
  );

  const containerStyles = {
    display: "flex",
    gap: "8px",
    justifyContent: "center",
    flexWrap: "wrap",
  };

  return (
    <div className="scores">
      {scores.length !== 0 ? (
        <ul className="container" style={containerStyles}>
          {scores.map((s, index) => (
            <Score key={s.id} id={s.id} name={s.name} score={s.score} />
          ))}
        </ul>
      ) : (
        <p className="text-center display-2">No Scores yet</p>
      )}
    </div>
  );
}
