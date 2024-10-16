import './index.css';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import Signup from './Pages/Signup';
import LearnMore from './Pages/LearnMore';
import { Home } from './Pages/Home';
import { Login } from './Pages/Login';
import { FAQ } from './Pages/faq';
import { Layout } from './Layouts/Layout';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <main>
          <Routes >
            <Route element={<Layout />}>
              <Route index path='/' element={<Navigate to='/webgenius/home' />} />
              <Route path='webgenius/home' element={<Home />} />
              <Route path='webgenius/login' element={<Login />} />
              <Route path='webgenius/signup' element={<Signup />} />
              <Route path='webgenius/about_us' element={<LearnMore />} />
              <Route path='webgenius/faq' element={<FAQ />} />

            </Route>
          </Routes>
          <Toaster richColors />
        </main>
      </BrowserRouter>
    </>
  );
};

export default App;
