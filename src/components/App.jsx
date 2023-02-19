import HomePage from 'pages/HomePage/HomePage';
import { Routes, Route } from 'react-router-dom';

import Menu from './Menu/Menu';

export const App = () => {
  return (
    <div>
      <Menu />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
};
