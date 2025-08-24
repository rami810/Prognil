import Aboutus from "../components/aboutus";
import Header from "../components/header";
function AboutUsPage () {
return (
    <>
   <div className="sticky top-0 z-[50] ">
        <Header />
      </div>
<Aboutus animate={true} mode="link" />

    </>
)
}
export default AboutUsPage





