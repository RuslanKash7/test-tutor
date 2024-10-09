import React, { useState } from "react";
import TheQuestion from "./theQuestion";
import { questions } from "./../../fakeApi/questions.api";
import _ from "lodash";
import VerticalPagination from "./verticalPagination";

const QuestionList = () => {
  const itemsPerPage = 1; // Количество вопросов на странице
  const [currentPage, setCurrentPage] = useState(1);

  // Разбиваем список вопросов на страницы
  const paginatedQuestions = _.chunk(questions, itemsPerPage);

  // Обработчик изменения страницы
  const handlePageChange = (page) => {
    if (page > 0 && page <= paginatedQuestions.length) {
      setCurrentPage(page);
    }
  };

  // Обработчики кнопок "Предыдущее" и "Следующее"
  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < paginatedQuestions.length) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <>
      <div className="d-flex">
        {/* Вертикальная пагинация слева */}
        <VerticalPagination
          totalPages={paginatedQuestions.length}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />

        {/* Рендерим вопросы для текущей страницы */}

        {paginatedQuestions[currentPage - 1].map((question) => (
          <TheQuestion key={question.id} question={question} />
        ))}
      </div>
      {/* Твой блок с кнопками действий */}

      <div
        className="card-body d-flex justify-content-between align-items-center"
        id="block-btn-action"
      >
        <div className="d-flex">
          <a
            className="prev-test-item btn btn-outline-primary mr-2" // Отступ справа от первой ссылки
            title="К предыдущему тестовому заданию"
            onClick={handlePrevious} // Обработчик для кнопки "Предыдущее"
            disabled={currentPage === 1} // Деактивировать, если на первой странице
          >
            <i
              className="fas fa-arrow-left"
              style={{ marginRight: "0.5rem" }}
            />
            <span className="d-none d-md-inline">
              Предыдущее тестовое задание
            </span>
          </a>
          <a
            className="prev-test-item btn btn-outline-primary"
            title="К следующему тестовому заданию"
            onClick={handleNext} // Обработчик для кнопки "Следующее"
            disabled={currentPage === paginatedQuestions.length} // Деактивировать, если на последней странице
          >
            <span className="d-none d-md-inline">
              Следующее тестовое задание
            </span>
            <i
              className="fas fa-arrow-right"
              style={{ marginLeft: "0.5rem" }}
            />
          </a>
        </div>

        <a
          className="prev-test-item btn btn-outline-danger"
          title="Завершение текущего модуля"
          disabled="disabled"
        >
          <i className="fas fa-power-off" style={{ marginRight: "0.5rem" }} />
          <span className="d-none d-md-inline">Завершить текущий модуль</span>
        </a>
      </div>
    </>
  );
};

export default QuestionList;
