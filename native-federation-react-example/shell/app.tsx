import React from "react";
import { loadRemoteModule } from "@softarc/native-federation";

const RemoteComponent = React.lazy(() =>
    loadRemoteModule({
        remoteName: "mfe1",
        exposedModule: "./component",
    })
    .then((c) => {
      return { default: c.App };
    })
);

export function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>Flights</a>
        </li>
      </ul>

      <React.Suspense fallback="...">
        <RemoteComponent />
      </React.Suspense>
    </div>
  );
}
