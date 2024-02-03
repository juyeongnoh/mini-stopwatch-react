import './App.css';

function App() {
  return (
    <>
      <section className="flex flex-col justify-center max-w-sm px-8 pt-6 pb-8 m-auto mb-4 bg-white rounded shadow-md w-fit mt-36">
        <h1
          id="timer"
          className="pb-8 text-5xl font-extrabold tracking-tighter text-center break-words"
        >
          00:00.00
        </h1>
        <div className="flex justify-between pb-8 text-sm text-white select-none">
          <button
            id="lap-reset-btn"
            className="relative flex flex-col items-center justify-center w-16 h-16 bg-gray-600 rounded-full shadow-md cursor-pointer "
          >
            <p id="lap-reset-btn-label" className="text-base">
              리셋
            </p>
            <p className="text-xs">L</p>
          </button>
          <button
            id="start-stop-btn"
            className="relative flex flex-col items-center justify-center w-16 h-16 bg-green-600 rounded-full shadow-md cursor-pointer"
          >
            <p id="start-stop-btn-label" className="text-base">
              시작
            </p>
            <p className="text-xs">S</p>
          </button>
        </div>
        <article className="h-64 overflow-auto text-gray-600 border-t-2">
          <ul id="laps">
            {/* 추가되는 lap은 아래의 HTML 코드 형식을 사용해 추가해주세요.  */}
            {/* <li className="flex justify-between px-3 py-2 border-b-2">
                            <span>랩 5</span>
                            <span>00:00.28</span>
                        </li> */}
          </ul>
        </article>
      </section>
      <footer className="text-xs text-center text-gray-500">
        ©2022 Hanameee Corp. All rights reserved.
      </footer>
    </>
  );
}

export default App;
