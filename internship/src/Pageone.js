import "./App.css";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
function Pageone() {
  const navigate = useNavigate();
  const [arr, setarr] = useState([]);
  useEffect(() => {
    fetchapi();
  }, []);
  const fetchapi = async () => {
    const res = await axios.get("https://api.tvmaze.com/search/shows?q=all");
    console.log(res.data);
    setarr(res.data);
  };
  const navigation = (ide) => {
    navigate("/pagetwo", { state: { id: ide } });
  };
  return (
    <>
      <div className="whole_container">
        <div className="display_element_as_grid">
          {arr &&
            arr.map((item) => {
              console.log(item.show.image);
              return (
                <div className="displayitem">
                  <div className="image">
                    <img
                      src={item.show.image.original}
                      alt=""
                      className="image"
                    />
                  </div>
                  <div className="moviename">Movie Name : {item.show.name}</div>
                  <div className="move_language">
                    Language : {item.show.language}
                  </div>
                  <div className="movie_readmore">
                    <button onClick={() => navigation(item.show.id)}>
                      Read More...
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default Pageone;
