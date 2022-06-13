import { Route, Routes } from "react-router-dom";
import Layout from "./components/common/Layout";
import About from "./pages/About";
import QuestionEditForm from "./pages/QuestionEditForm";
import QuestionListPage from "./pages/QuestionListPage";
import QuestionCreatePage from "./pages/QuestionCreatePage";
import "./styles/main.scss";

const App = () => (
  <Layout>
    <Routes>
      <Route path="/" element={<QuestionListPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/create" element={<QuestionCreatePage />} />
      <Route path="/question/:id/edit" element={<QuestionEditForm />} />
    </Routes>
  </Layout>
);

export default App;
