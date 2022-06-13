import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const QuestionCreatePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");

  useEffect(() => {
    const fetchQuestions = async () => {
      const res = await axios.get("http://localhost:4000/questions");
      setQuestions(res.data);
    };
    fetchQuestions();
  }, []);

  const createQuestion = async (e) => {
    e.preventDefault();

    try {
      await axios
        .post(`http://localhost:4000/questions`, { 
            title, 
            detail })
        .then(alert("the Question has Created"))
      navigate("/");
    } catch (e) {
      alert(e);
    }
  };
  return (
    <form onSubmit={(e) => createQuestion(e)} className="question-form">
      <h1 className="question-form__title">Edit Question</h1>
      <label className="question-form__label">Title</label>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        className="question-form__input"
      />
      <label className="question-form__label">Detail</label>
      <input
        value={detail}
        onChange={(e) => setDetail(e.target.value)}
        type="text"
        className="question-form__input"
      />
      <button type="submit"  className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default QuestionCreatePage;