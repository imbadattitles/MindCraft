import React from "react";

const Teachers = ({ teachers, theme = "dblue" }) => {
  return (
    <section id="ourMentors" className="ourMentors">
      <div className="container">
        <h4 className="f40 ourMentors_title">
          НАШИ <br />
          <span className="font-blue">ПРЕПОДАВАТЕЛИ</span>
        </h4>
        <div className="ourMentors_row">
          {teachers[0] && (
            <div className="mentor">
              <div className="mentor_pic">
                <div className={`mentor__circle circle-${theme}`}>
                  <img src={teachers[0].image} className="mentor_photo" />
                  <div className="mentor1_cube1" />
                </div>
                <div className="mentor1_cube2" />
              </div>
              <h4 className="f19 mentor_name">{teachers[0].name}</h4>
              {teachers[0].subjects && (
                <h6 className="f12_circe font-blue mentor_type">
                  {Object.values(teachers[0].subjects)[0]}
                </h6>
              )}

              <p className="f14 mentor_text">{teachers[0].description}</p>
            </div>
          )}
          {teachers[1] && (
            <div className="mentor">
              <div className="mentor_pic">
                <div className={`mentor__circle circle-${theme}`}>
                  <img src={teachers[1].image} className="mentor_photo" />
                  <div className="mentor2_cube1" />
                </div>
                <div className="mentor2_cube2" />
              </div>
              <h4 className="f19 mentor_name">{teachers[1].name}</h4>
              {teachers[1].subjects && (
                <h6 className="f12_circe font-blue mentor_type">
                  {Object.values(teachers[1].subjects)[0]}
                </h6>
              )}
              <p className="f14 mentor_text">{teachers[1].description}</p>
            </div>
          )}
          {teachers[2] && (
            <div className="mentor">
              <div className="mentor_pic">
                <div className={`mentor__circle circle-${theme}`}>
                  <img src={teachers[2].image} className="mentor_photo" />
                </div>
                <div className="mentor3_cube1" />
                <div className="mentor3_cube2" />
              </div>
              <h4 className="f19 mentor_name">{teachers[2].name}</h4>
              {teachers[2].subjects && (
                <h6 className="f12_circe font-blue mentor_type">
                  {Object.values(teachers[2].subjects)[0]}
                </h6>
              )}
              <p className="f14 mentor_text">{teachers[2].description}</p>
            </div>
          )}
          {teachers[3] && (
            <div className="mentor">
              <div className="mentor_pic">
                <div className={`mentor__circle circle-${theme}`}>
                  <img src={teachers[3].image} className="mentor_photo" />
                </div>
                <div className="mentor4_cube1" />
                <div className="mentor4_cube2" />
              </div>
              <h4 className="f19 mentor_name">{teachers[3].name}</h4>

              {teachers[3].subjects && (
                <h6 className="f12_circe font-blue mentor_type">
                  {Object.values(teachers[3].subjects)[0]}
                </h6>
              )}
              <p className="f14 mentor_text">{teachers[3].description}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Teachers;
