import React, { useState,useEffect } from "react"
import "./ExerciseList.css"
import ReactPaginate from "react-paginate";

const ExerciseList = ({exerciseList, handleDelete, addAct, handleEdit}) => {

    //const {exerciseList} = props;
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage  = 3;
  
  useEffect(() => {

    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(exerciseList.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(exerciseList.length / itemsPerPage));
  }, [itemOffset, itemsPerPage,exerciseList]);

  const handlePageClick = (e) => {
    const newOffset = (e.selected * itemsPerPage) % exerciseList.length;
    console.log(
      `User requested page number ${e.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };


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
            id,
            activity,
            distance,
            durationHours,
            durationMin,
            date,
            calories,
            heartrate,
            description,
          }) => {
            return (
              
              <div className="cardAct" key={id}>
                <div className="cardActName">
                  <div>
                    <span className="boldFont">
                      Run to Forget Christine (again)
                    </span>
                  </div>
                  <div className="cardActType">
                    <span className="boldFont">
                      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {activity}
                    </span>
                  </div>
                </div>

                <div>
                  <p className="cardActDuration">
                    <span className="boldFont">Duration:</span>{" "}
                    <span>
                      {durationHours} Hour {durationMin} Minutes
                    </span>
                  </p>
                  <p className="cardActCalories">{calories}</p>
                  <p className="cardActDes">{description}</p>
                  <p className="cardActAdddate">added activity on {date}.</p>
                  <p className="cardActCompletedDate">completed on {date}.</p>
                  <p>
                    id {id} distance {distance} heart {heartrate}
                  </p>
                </div>
                <button
                  className="deleteActButton"
                  onClick={() => handleDelete(id)}
                >
                  -Delete-
                </button>
                <button
                  className="editActButton"
                  onClick={() => handleEdit(id)}
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
};

export default ExerciseList