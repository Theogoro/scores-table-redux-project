import React from "react";
import { useDispatch } from "react-redux";
import { removeScore, addToScore } from "../redux/scoresDucks";

export default function Score(props) {
  const dispatch = useDispatch();

  const removeClick = (e) => {
    dispatch(removeScore(props.id));
  };

  const addClick = (e) => {
    dispatch(addToScore(1, props.id));
  };

  const sustractClick = (e) => {
    dispatch(addToScore(-1, props.id));
  };

  const style = {
    maxWidth: "500px",
    width: "100%",
  };

  return (
    <li className="card mx-0" style={style}>
      <div className="card-body">
        <button
          onClick={removeClick}
          type="button"
          class="btn-close float-end"
          aria-label="Close"
        ></button>
        <h3>{props.name}</h3>
        <p>Score: {props.score}</p>
      </div>
      <div class="card-footer d-flex justify-content-end">
        <button
          onClick={addClick}
          className="btn btn-primary rounded me-2 w-25"
        >
          Add 1
        </button>
        <button
          onClick={sustractClick}
          className="btn btn-primary rounded w-25"
        >
          Sustract 1
        </button>
      </div>
    </li>
  );
}
