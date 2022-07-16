import { lazy, Suspense } from 'react';
import {
  Navigate, Route, Routes,

} from 'react-router-dom';
import Layout from '../components/Layout';

const HomePage = lazy(() => import('../pages/Home'));

function MainRouter(): JSX.Element {
  return (
    <Suspense fallback={<>Loading... </>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<>Prueba Home</>} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
}

export default MainRouter;
