import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const QuestionEditForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");

  useEffect(() => {
    const fetchQuestion = async () => {
      const res = await axios.get(`http://localhost:4000/questions/${id}`);
      setTitle(res.data.title);
      setDetail(res.data.detail);
    };
    fetchQuestion();
  }, []);

  const updateQuestion = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:4000/questions/${id}`, {
        title,
        detail,
      });
      navigate("/");
    } catch (e) {
      alert(e);
    }
  };

  const deleteQuestions = async (e) => {
    try {
        axios.delete(`http://localhost:4000/questions/${id}`)
        .then(alert("the Question has deleted"));
      navigate("/");
    } catch (e) {
      alert(e);
    }
  };

  return (
    <form onSubmit={(e) => updateQuestion(e)} className="question-form">
      <h1 className="question-form__title">Edit Question</h1>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        className="question-form__input"
      />
      <input
        value={detail}
        onChange={(e) => setDetail(e.target.value)}
        type="text"
        className="question-form__input"
      />
      <div>
      <button onClick={deleteQuestions} className="btn btn-danger">
        delete
      </button>
      <button type="submit"  className="btn btn-primary">
        Submit
      </button>
      </div>
    </form>
  );
};

export default QuestionEditForm;
