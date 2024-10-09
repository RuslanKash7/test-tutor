import React from "react";

const TheQuestion = ({ question }) => {
  return (
    <>
      <div className="card mt-2 col-12" style={{ border: "none" }}>
        <div className="card-body">
          <div className="row">
            <div className="mt-3">
              <p className="h6 unit-name text-primary">
                {question.documentName}
              </p>{" "}
            </div>
            <div className="col-11">
              <p className="h6 unit-name">{question.question}</p>
            </div>
            <div className="col-1"></div>
          </div>
        </div>
        <div className="row">
          <ul className="answer-list col-12 list-group list-group-flush">
            {question.answers.map((answer) => (
              <li
                key={answer.id}
                className="list-group-item"
                style={{ border: "none", padding: ".15rem 2.5rem" }}
              >
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="answer-correct-input custom-control-input"
                    id={`customCheckbox${answer.id}`}
                  />
                  <label
                    className="custom-control-label"
                    htmlFor={`customCheckbox${answer.id}`}
                  >
                    {answer.text}
                  </label>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default TheQuestion;
