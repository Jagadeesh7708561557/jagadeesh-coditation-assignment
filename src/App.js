import "./App.css";
import Game from "./components/Game";

function App() {
  const firebaseConfig = {
  apiKey: "AIzaSyCKot1tADbUxDGFAmNVn0lDx_j3versL9k",
  authDomain: "jagadeesh-coditation-task.firebaseapp.com",
  projectId: "jagadeesh-coditation-task",
  storageBucket: "jagadeesh-coditation-task.appspot.com",
  messagingSenderId: "1039435012356",
  appId: "1:1039435012356:web:b57338c29122c82b121851",
  measurementId: "G-HX3B6165Z8"
};
  const darkHandler = (dark) => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  };
  
  return (
    <div className={"app dark:bg-zinc-800"}>
      <Game darkness={darkHandler} />
    </div>
  );


}

export default App;
