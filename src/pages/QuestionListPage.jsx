import axios from "axios";
import { useEffect, useState } from "react";
import QuestionCard from "../components/QuestionCard";
import SearchBar from "../components/SearchBar";
import { Link } from "react-router-dom";

const QuestionListPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      const res = await axios.get("http://localhost:4000/questions");
      setQuestions(res.data);
    };
    fetchQuestions();
  }, []);

  const renderQuestionList = () => {
    let questionList = questions;
    if (searchQuery) {
      questionList = questionList.filter(({ title }) =>
        title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return questionList.map(({ title, detail, id }) => {
      return <QuestionCard title={title} detail={detail} id={id} key={id} />;
    });
  };

  return (
    <>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="card__action">
        <Link className="btn btn-primary" to={`/create`}>
          Create New Question
        </Link>
      </div>
      <div className="list">{renderQuestionList()}</div>
    </>
  );
};

export default QuestionListPage;
