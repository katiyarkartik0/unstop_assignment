import { createPortal } from "react-dom";
import Skills from "./Skills/Skills";
import "./Modal.css";
const Modal = ({ toggleModal }) => {
  return createPortal(
    <>
      <div className="modal-container">
        <div
          className="modal-background"
          id="modalBackground"
          onClick={toggleModal}
        ></div>
        <div className="modal" id="modal">
          <div className="modal-header">
            <div className="modalHeaderHeading">Create new assessment</div>
            <div className="close-btn" id="closeModalBtn" onClick={toggleModal}>
              &times;
            </div>
          </div>
          <div className="modal-content">
            <form className="informationField">
              <div>
                <label htmlFor="nameOfAssesment" className="fieldHeading">
                  Name of Assesment
                </label>
                <input
                  type="text"
                  id="nameOfAssesment"
                  name="institute"
                  placeholder="Type here"
                  className="inputBox"
                ></input>
              </div>
              <div>
                <label htmlFor="purposeOfTest" className="fieldHeading">
                  Purpose of test is
                </label>
                <select
                  id="purposeOfTest"
                  name="purposeOfTest"
                  className="selectBox"
                  placeholder="Select"
                >
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="fiat">Fiat</option>
                  <option value="audi">Audi</option>
                </select>
              </div>

              <div>
                <label htmlFor="description" className="fieldHeading">
                  Description
                </label>
                <select
                  id="description"
                  name="description"
                  className="selectBox"
                  placeholder="Select"
                >
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="fiat">Fiat</option>
                  <option value="audi">Audi</option>
                </select>
              </div>

              <Skills />

              <div>

              <label htmlFor="durationOfAssesment" className="fieldHeading">Duration of Assesment</label>
              <input
                type="time"
                id="durationOfAssesment"
                name="durationOfAssesment"
                placeholder="HH:MM:SS"
                className="inputBox durationOfAssesment"
              ></input>
              </div>
            </form>
          </div>

          <div className="modal-footer">
            <button className="saveBtn">Save</button>
          </div>
        </div>
      </div>
    </>,
    document.querySelector(".portalModal")
  );
};

export default Modal;
