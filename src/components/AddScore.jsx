import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addScore } from "../redux/scoresDucks";

export default function AddScrore() {
  const dispatch = useDispatch();

  const inputRef = useRef(0);
  const clickHandler = (e) => {
    e.preventDefault();
    dispatch(addScore(inputRef.current.value));
    inputRef.current.value = "";
  };

  return (
    <div className="add-score container-sm">
      <form action="" className="add-score__form border rounded my-3 p-2">
        <div className="input-group mb-3 input-group-sm">
          <label
            htmlFor="add-score-input-name"
            className="add-score__label input-group-text"
          >
            New player name:
          </label>
          <input
            ref={inputRef}
            type="text"
            name="Name"
            id="add-score-input-name"
            className="add-score__input form-control"
            placeholder="Name"
            aria-label="Name"
          />
        </div>
        <button className="btn btn-primary ms-auto" onClick={clickHandler}>
          Add
        </button>
      </form>
    </div>
  );
}
