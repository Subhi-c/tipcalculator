import { useState } from "react";
import "./App.css";

function App() {
  const tip = [
    {
      id: 1,
      tip: "5%",
      value: 5,
    },
    {
      id: 2,
      tip: "10%",
      value: 10,
    },
    {
      id: 3,
      tip: "15%",
      value: 15,
    },
    {
      id: 4,
      tip: "25%",
      value: 25,
    },
    {
      id: 5,
      tip: "50%",
      value: 50,
    },
    {
      id: 6,
      tip: "custom",
      value: 0,
    },
  ];
  const [bill, setbill] = useState();
  const [tp, settp] = useState(0);
  const [nu, setnu] = useState(0);
  const [isbill, setisbill] = useState(0);
  const [istp, setistp] = useState(0);
  const [isnu, setisnu] = useState(0);
  const [totalperson, settotalperson] = useState(0);
  const [totaltip, settotaltip] = useState(0);
  // const
  function handlebill(bill) {
    setbill(bill);
    console.log(bill);
    bill === "" ? setisbill(0) : setisbill(1);
  }
  function storetip(tip) {
    settp(tip);
    tip === "" ? setistp(0) : setistp(1);
    console.log(tip);
  }
  function setperson(num) {
    setnu(num);
    num === "" ? setisnu(0) : setisnu(1);
    console.log(num);
  }
  function calculate() {
    console.log(bill + parseInt(tp) + parseInt(nu));
  }
  return (
    <>
      <div className="container">
        <div className="content">
          <div className="inputs">
            <div>
              <Input_bill bill={bill} handlebill={handlebill} />
            </div>
            <div>
              <p>Select tip</p>
              <div className="tip">
                {tip.map((tip) => (
                  <Tip
                    key={tip.id}
                    value={tip.value}
                    tip={tip.tip}
                    storetip={storetip}
                  />
                ))}
              </div>
            </div>

            <div>
              <Input_person setperson={setperson} />
            </div>
          </div>
          <div className="Outputs">
            <div className="amount">
              <div className="tipamountdiv">
                <p>
                  Tip Amount <br />/ Person
                </p>
                <Tipamout totaltip={totaltip} />
              </div>
              <div className="totalamountdiv">
                <p>
                  Total <br />/ Person
                </p>
                <Total totalperson={totalperson} />
              </div>
            </div>
            <div className="reset">
              <ResetBtn />
            </div>
          </div>
        </div>
      </div>

      {/* <div>
        <Show_data isbill={isbill} istp={istp} isnu={isnu} />
      </div> */}
    </>
  );
}

function Show_data({ isbill, istp, isnu }) {
  return (
    <div>
      <h1>
        {isbill}
        {istp}
        {isnu}
      </h1>
    </div>
  );
}

function ResetBtn() {
  return (
    <div>
      <button className="reset">Reset</button>
    </div>
  );
}

function Input_bill({ bill, handlebill }) {
  return (
    <div className="bill">
      <p>Bill</p>
      <input
        className="input"
        type="number"
        name="text"
        id="bill"
        value={bill}
        onChange={(e) => handlebill(e.target.value)}
      />
    </div>
  );
}
function Tip({ key, value, tip, storetip }) {
  return (
    <div>
      {tip != "custom" ? (
        <button className="button" value={tip} onClick={() => storetip(value)}>
          {tip}
        </button>
      ) : (
        <input
          className="button"
          type="text"
          name=""
          id=""
          placeholder="Custom"
          onChange={(e) => storetip(e.target.value)}
        />
      )}
    </div>
  );
}
function Input_person({ setperson }) {
  return (
    <div>
      <p>Number of People</p>
      <input
        className="input"
        type="number"
        onChange={(e) => setperson(e.target.value)}
      />
    </div>
  );
}

function Tipamout({ totaltip }) {
  return (
    <div className="tipamount">
      <input type="text" value={totaltip} />
    </div>
  );
}

function Total({ totalperson }) {
  return (
    <div className="total">
      <input type="text" value={totalperson} />
    </div>
  );
}
export default App;
