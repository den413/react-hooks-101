import "bootstrap/dist/css/bootstrap.min.css";
import reducer from "../reducers";
import { useReducer, useState } from "react";
import Event from "./Event";

const App = () => {
  const [state, dispatch] = useReducer(reducer, []);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addEvent = (e) => {
    e.preventDefault();

    dispatch({
      type: "CREATE_EVENT",
      title,
      body,
    });
    setTitle("");
    setBody("");
  };

  return (
    <div className="container-fluid">
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

        <button type="button" className="btn btn-primary" onClick={addEvent}>
          イベントを作成する
        </button>
        <button type="button" className="btn btn-danger">
          すべてのイベントを削除する
        </button>

        <h4>イベント一覧</h4>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>タイトル</th>
              <th>ボディー</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {state.map((event, index) => {
              <Event key={index} event={event} dispatch={dispatch} />;
            })}
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default App;
