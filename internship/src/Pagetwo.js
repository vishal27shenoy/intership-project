import React from "react";
import axios from "axios";
import parse from "html-react-parser";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
const Pagetwo = () => {
  const navigate = useNavigate();
  const [arr, setarr] = useState([]);
  const location = useLocation();
  const [str, setstr] = useState("");
  const id = location.state.id;
  useEffect(() => {
    fetchapi();
  }, []);
  const fetchapi = async () => {
    console.log(id);
    const res = await axios.get("https://api.tvmaze.com/search/shows?q=all");
    setarr(res.data);
    console.log(res.data);
  };
  return (
    <div className="pagetwo_container">
      <div className="allinfo">
        {arr &&
          arr.map((item) => {
            if (id == item.show.id) {
              {
                console.log("true");
              }
              return (
                <div className="pagetwo_all_container">
                  <div className="pagetwo_leftimg">
                    <img
                      src={item.show.image.original}
                      alt=""
                      className="pagetwo_img"
                    />
                  </div>
                  <div className="pagetwo_right">
                    <div className="pagetwo_moviename">
                      Name : {item.show.name}
                    </div>
                    <div className="pagetwo_moviename">
                      Language : {item.show.language}
                    </div>

                    <div className="pagetwo_summary">
                      Summary : {parse(item.show.summary)}{" "}
                    </div>
                    <div className="pagetwo_channel">
                      {item.show.webChannel
                        ? `country ${item.show.webChannel.country.name} Time Zone : ${item.show.webChannel.country.timezone} Code : ${item.show.webChannel.country.code}`
                        : ""}
                    </div>
                    <div className="pagetwo_officialsite">
                      <a href={item.show.officialSite}>
                        Click here to visit official site
                      </a>
                    </div>
                    <div className="pagetwo_generes">
                      Generes : {item.show.genres ? item.show.genres[0] : ""}
                    </div>
                    <div className="pagetwo_schedule">
                      Schedule : {item.show.schedule.days[0]} Time :{" "}
                      {item.show.schedule.time}
                    </div>
                    <div className="pagetwo_previosepisode">
                      Previous Episode :
                      <a href={item.show._links.previousepisode}>
                        Click here to see previous eppisode
                      </a>
                    </div>
                    <div className="pagetwo_premire">
                      Premired on : {item.show.premiered}
                    </div>
                    <div className="pagetwo_webchannel">
                      Web Channel :{" "}
                      {item.webChannel ? item.webChannel.name : ""} Official
                      Site :{" "}
                      <a
                        href={
                          item.webChannel ? item.webChannel.officialSite : "/"
                        }
                      >
                        Click here
                      </a>
                    </div>
                  </div>
                </div>
              );
            }
          })}
      </div>
    </div>
  );
};

export default Pagetwo;
