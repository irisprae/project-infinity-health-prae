import React, { useState, useEffect } from "react";
import "./ExerciseList.css";
import ReactPaginate from "react-paginate";

const ExerciseList = ({ exerciseList, handleDelete, addAct, handleEdit }) => {
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 3;

  const mockup = [
    {
      title: "",
      activity: "-",
      distance: 0,
      durationHours: "0",
      durationMin: "0",
      date: "dd/mm/yyyy",
      calories: "0",
      heartrate: 0,
      description: "You are new user add your first activity",
      _id: "",
    },
  ];

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    //console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(exerciseList.reverse().slice(itemOffset, endOffset));
    setPageCount(Math.ceil(exerciseList.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, exerciseList]);

  const handlePageClick = (e) => {
    const newOffset = (e.selected * itemsPerPage) % exerciseList.length;
    console.log(
      `User requested page number ${e.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  if (currentItems === 0) {
    return (
      <div>
        <div className="exerciseList">
          <div className="exerciseListContainer">
            <h2 className="createAct" onClick={addAct}>
              + Create your activities
              <br />
            </h2>

            <div className="addCardAct">
              <button className="addCardActText" onClick={addAct}>
                + Tap here to add your activity
                <br />
              </button>
            </div>

            {mockup.map(
              ({
                title,
                activity,
                distance,
                duration,
                date,
                calories,
                heartrate,
                description,
                id,
              }) => {
                return (
                  <div className="cardAct">
                    <div className="cardActName">
                      <div>
                        <span className="boldFont">{description}</span>
                      </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                );
              }
            )}
          </div>

          <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
            containerClassName="paginationButton"
            previousLinkClassName="previousButton"
            nextLinkClassName="nextButton"
            disabledClassName="paginationDisabled"
            activeClassName="paginationActive"
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className="exerciseList">
        <div className="exerciseListContainer">
          <h2 className="createAct" onClick={addAct}>
            + Create your activities
            <br />
          </h2>

          <div className="addCardAct">
            <button className="addCardActText" onClick={addAct}>
              + Tap here to add your activity
              <br />
            </button>
          </div>

          {currentItems.map(
            ({
              _id,
              title,
              activity,
              distance,
              duration,
              date,
              calories,
              heartrate,
              description,
            }) => {
              return (
                <div className="cardAct" key={_id}>
                  <div className="cardActName">
                    <div>
                      <span className="boldFont">{title}</span>
                    </div>
                    <div className="cardActType">
                      <span className="boldFont">{activity}</span>
                    </div>
                  </div>

                  <div>
                    <p className="cardActDuration">
                      <span className="boldFont">Duration: </span>{" "}
                      <span>{duration} minutes</span>
                    </p>
                    <p>
                      <span className="boldFont">Distance: </span> {distance}{" "}
                      km.
                    </p>
                    <p>
                      <span className="boldFont">Heart Rate: </span> {heartrate}{" "}
                      bpm
                    </p>
                    <p className="cardActCalories">
                      <strong>Calories: </strong>
                      {calories}
                    </p>
                    <p className="cardActDes">{description}</p>
                    <p className="cardActAdddate">added activity on {date}.</p>
                  </div>
                  <button
                    className="deleteActButton"
                    onClick={() => handleDelete(_id)}
                  >
                    -Delete-
                  </button>
                  <button
                    className="editActButton"
                    onClick={() => handleEdit(_id)}
                  >
                    -Edit-
                  </button>
                </div>
              );
            }
          )}
        </div>

        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          containerClassName="paginationButton"
          previousLinkClassName="previousButton"
          nextLinkClassName="nextButton"
          disabledClassName="paginationDisabled"
          activeClassName="paginationActive"
        />
      </div>
    );
  }
};
export default ExerciseList;
