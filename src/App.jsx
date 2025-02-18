import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { About_Us, Benefits, Blog, Home,Services, Reviews } from "./pages";


export default function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="gallery" element={<Services/>}/>
        <Route path="contact" element={<About_Us/>}/>
        <Route path="privacy" element={<Benefits/>}/>
        <Route path="services" element={<Blog/>}/>
        <Route path="reviews" element={<Reviews/>}/>
        
      </Routes>
      <Layout/>
     
    </BrowserRouter>
  );
}
