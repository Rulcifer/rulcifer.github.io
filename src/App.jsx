import { Routes, Route } from "react-router-dom";
import { Navbar } from "@/layout/Navbar";
import { Footer } from "@/layout/Footer";
import { HomePage } from "@/pages/HomePage";
import { ProjectsPage } from "@/pages/ProjectsPage";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
