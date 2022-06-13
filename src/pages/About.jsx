import { useEffect, useState } from "react";
import axios from "axios";
import PortofolioCard from "../components/PortofolioCard";
import SearchBar from "../components/SearchBar";
import PersonalData from "../components/PersonalData";

const About = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [Portofolio, setPortofolio] = useState([]);

    useEffect(() => {
        const fetchPortofolio = async () => {
          const res = await axios.get("http://localhost:4000/Portofolio");
          setPortofolio(res.data);
        };
        fetchPortofolio();
      }, []);

      const renderPortofolioList = () => {
        let PortofolioList = Portofolio;
        if (searchQuery) {
          PortofolioList = PortofolioList.filter(({ name }) =>
            name.toLowerCase().includes(searchQuery.toLowerCase())
          );
        }
    
        return PortofolioList.map(({ name, detail,link, id }) => {
          return <PortofolioCard name={name} detail={detail} link={link} id={id} key={id} />;
        });
      };
    
      return (
        <>
          <PersonalData/>
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <div className="list">{renderPortofolioList()}</div>
        </>
      );

}

export default About;
