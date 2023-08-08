

const Event = () => {
  return (
    <>
      <div className="event-section">
        <h2 className="custom-text-shadow">RECENT EVENTS</h2>
        <div className=" flex flex-wrap gap-5  ">
          <div className="card  ">
            <div className="card-header">
              <img src="./event_01.png" alt="" />
            </div>
            <div className="card-body">
              <h3>Valentine Linkup 2023</h3>
              <p>
                Description goes hereDescription goes hereDescription goes here
              </p>

              <div className="category">
                <div className="date">Date : xxxx</div>
                <div className="date">Venue : xxxxxxxx</div>
              </div>
              <button className="btn">View Album</button>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <img src="./event_02.png" alt="" />
            </div>
            <div className="card-body">
              <h3>Remember Me </h3>
              <p>
                Description goes hereDescription goes hereDescription goes here
              </p>

              <div className="category">
                <div className="date">Date : xxxx</div>
                <div className="date">Venue : xxxxxxxx</div>
              </div>
              <button className="btn">View Album</button>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <img src="./event_03.png" alt="" />
            </div>
            <div className="card-body">
              <h3>Hope for Makoko</h3>
              <p>
                Description goes hereDescription goes hereDescription goes here
              </p>

              <div className="category">
                <div className="date">Date : xxxx</div>
                <div className="date">Venue : xxxxxxxx</div>
              </div>
              <button className="btn">View Album</button>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <img src="./event_04.png" alt="" />
            </div>
            <div className="card-body">
              <h3 className="space">Rendezvous 2022</h3>
              <p className="space">
                Description goes hereDescription goes hereDescription goes here
              </p>

              <div className="category space">
                <div className="date">Date : xxxx</div>
                <div className="date">Venue : xxxxxxxx</div>
              </div>
              <button className="btn">View Album</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Event;
