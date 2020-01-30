import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import Characters from "./components/Characters";
import client from "./service/connectApi";

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <div>
          <h2>
            My first Apollo app{" "}
            <span role="img" aria-label="rocket">
              🚀
            </span>
          </h2>
        </div>
        <Characters />
      </ApolloProvider>
    </div>
  );
}

export default App;
