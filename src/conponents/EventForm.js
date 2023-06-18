import React, { useContext, useState } from "react";
import { ADD_OPERATION_LOG, CREATE_EVENT, DELETE_ALL_EVENT } from "../actions";
import AppContext from "../contexts/AppContext";
import { timeCurrentIso8601 } from "../utils";

const EventForm = () => {
  const { state, dispatch } = useContext(AppContext);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addEvent = (e) => {
    e.preventDefault();

    dispatch({
      type: CREATE_EVENT,
      title,
      body,
    });

    dispatch({
      type: ADD_OPERATION_LOG,
      description: "イベントを作成しました。",
      operateAt: timeCurrentIso8601(),
    });

    setTitle("");
    setBody("");
  };

  const deleteAllEvents = (e) => {
    e.preventDefault();
    const result = window.confirm("すべてのイベントを削除しますか？");
    if (result)
      dispatch({
        type: DELETE_ALL_EVENT,
      });
    dispatch({
      type: ADD_OPERATION_LOG,
      description: "すべてのイベントを削除しました。",
      operateAt: timeCurrentIso8601(),
    });
  };

  const unCreatable = title === "" || body === "";

  return (
    <>
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input
            type="text"
            name=""
            id="formEventTitle"
            className="form-control"
            placeholder=""
            aria-describedby="helpId"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="formEventBody">ボディー</label>
          <textarea
            type="text"
            name=""
            id="formEventBody"
            className="form-control"
            placeholder=""
            aria-describedby="helpId"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>

        <button
          type="button"
          className="btn btn-primary"
          onClick={addEvent}
          disabled={unCreatable}
        >
          イベントを作成する
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={deleteAllEvents}
          disabled={state.events.length === 0}
        >
          すべてのイベントを削除する
        </button>
      </form>
    </>
  );
};

export default EventForm;
