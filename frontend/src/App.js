import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmployeeList from "./components/EmployeeList";
import AddEmployee from "./components/AddEmployee";
import EditEmployee from "./components/EditEmployee";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<EmployeeList />} />
          <Route path="add" element={<AddEmployee />} />
          <Route path="edit/:id" element={<EditEmployee/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
