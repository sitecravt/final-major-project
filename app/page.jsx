
import HomePage from "./components/HomePage";
import GigsPage from "./components/GigsPage";
import GalleryPage from "./components/GalleryPage";
import AboutPage from "./components/AboutPage";
import BlogPage from "./components/BlogPage";
import ReviewsPage from "./components/ReviewsPage";
import ContactPage from "./components/ContactPage";
import FeedbackPage from "./components/FeedbackPage";

//below i added all the pages into the main page this is where everything in the browser comes from
export default function Home() {
  return (
   <div className="bg-[#000000]">
   

    <HomePage/>
    <GigsPage/>
    <GalleryPage/>
    <AboutPage/>
    <BlogPage/>
    <ReviewsPage/>
    <ContactPage/>
    <FeedbackPage/>
    
   </div>
  )
}
