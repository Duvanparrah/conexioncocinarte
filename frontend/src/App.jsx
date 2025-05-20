import AppRoutes from "./routes/routes";
// Ejemplo: En App.jsx o index.jsx
import '@fortawesome/fontawesome-free/css/all.min.css';

// import './App.css';

// function App() {
//   return <AppRoutes />;
// }

// export default App;




// App.jsx
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <AppRoutes />
    </>
  );
}

export default App;
