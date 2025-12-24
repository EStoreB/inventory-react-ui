import "./styles.css";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="layout">
      <Sidebar />
      <main className="content">
        <Dashboard />
      </main>
    </div>
  );
}

export default App;
