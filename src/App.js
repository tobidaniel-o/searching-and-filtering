// Fetching JSON files locally => app.pluralsight.com/guides/fetch-data-from-a-json-file-in-a-react-app
// const getData = () => {
//   fetch("people.json", {
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//   })
//     .then((response) => {
//       return response.json();
//     })
//     .then((myJson) => setData(myJson));
// };

import React, { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch("MOCK_DATA.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((myJson) => setData(myJson));
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <input type="text" placeholder="Search..." />
      {data.map((val, key) => {
        return (
          <div key={key}>
            <p>{val.first_name} </p>{" "}
          </div>
        );
      })}
    </div>
  );
};

export default App;
