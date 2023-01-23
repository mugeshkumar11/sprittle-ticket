import React from "react";
import "./ticket.css";
const Ticket = () => {
  return (
    <div>
      <section className="ticket">
        <section className="container">
          <div className="ticketflex">
            <div className="ticketbox1">
              <div className="box">1</div>
              <div className="box">2</div>
              <div className="box">3</div>
              <div className="box">4</div>
              <div className="box">5</div>
              <div className="box">6</div>
              <div className="box">7</div>
              <div className="box">8</div>
              <div className="box">9</div>
              <div className="box">10</div>
              <div className="box">11</div>
              <div className="box">12</div>
              <div className="box">13</div>
              <div className="box">14</div>
              <div className="box">15</div>
              <div className="box">16</div>
              <div className="box">17</div>
              <div className="box">18</div>
              <div className="box">19</div>
              <div className="box">20</div>
              <div className="box">21</div>
              <div className="box">22</div>
              <div className="box">23</div>
              <div className="box">24</div>
              <div className="box">25</div>
              <div className="box">26</div>
              <div className="box">27</div>
              <div className="box">28</div>
              <div className="box">29</div>
              <div className="box">30</div>
            </div>
            <div className="ticketbox2">
              <input type="text" placeholder="username"></input>
              <input type="number" placeholder="age"></input>
              <div className="genderdata">
                <h3>male</h3>
                <input type="radio" name="gender"></input>
                <h3>female</h3>
                <input type="radio" name="gender"></input>
              </div>
              <button>submit</button>
              <div className="colorbox">
                <div className="box2">
                  <h5>available</h5>
                </div>
                <div className="box2">
                <h5>sold</h5>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Ticket;
