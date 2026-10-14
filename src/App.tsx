import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BlogIndex from "./pages/BlogIndex";
import BlogPost from "./pages/BlogPost";
import { LandingPage } from "./pages/LandingPage";
import NotFound from "./pages/NotFound";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/solutions/technology" element={<LandingPage slug="/solutions/technology" />} />
      <Route path="/solutions/creative" element={<LandingPage slug="/solutions/creative" />} />
      <Route path="/solutions/strategy-growth" element={<LandingPage slug="/solutions/strategy-growth" />} />
      <Route path="/solutions/web3" element={<LandingPage slug="/solutions/web3" />} />
      <Route path="/products" element={<LandingPage slug="/products" />} />
      <Route path="/partnerships" element={<LandingPage slug="/partnerships" />} />
      <Route path="/blog" element={<BlogIndex />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
