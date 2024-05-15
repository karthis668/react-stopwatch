
export default function stopwatch(){
    return (
      <div className="card text-center">
        <div className="card-body">
          <h2 className="card-title mb-3">React-Stopwatch</h2>

          <h3 className="card-subtitle mb-2 text-body-secondary mb-5">
            <div className="text-center">
              <span>00</span> : <span>00</span> : <span> 00</span>
            </div>
          </h3>

          <div className="d-flex">
            <button type="button" className="btn btn-success btn-lg mx-3">
              Start
            </button>
            <button type="button" className="btn btn-primary btn-lg mx-3">
              Pause
            </button>
            <button type="button" className="btn btn-danger btn-lg mx-3">
              Reset
            </button>
          </div>
        </div>
      </div>
    );
}