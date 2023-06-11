import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
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
          />
        </div>

        <button type="button" className="btn btn-primary">
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
        </table>
      </form>
    </div>
  );
};

export default App;
