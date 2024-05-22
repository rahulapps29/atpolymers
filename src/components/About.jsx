import aboutSvg from "../assets/aboutat.png";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        {/* <img src={aboutSvg} className="w-full h-64" /> */}
        <article>
          <SectionTitle text="About ATPolymers" />
          <p className="text-slate-600 mt-8 leading-loose">
            ATPolymers, founded in 2012, is a leading supplier of automotive
            rubber components and parts in Faridabad, India. we offer
            high-quality products like Black Circular Flush Door Pulls, Recessed
            Sliding Door Handles, and Brackets. we are known for their bulk
            supplies and excellent service.
          </p>
        </article>
        <img src={aboutSvg} className="w-full h-full" />
      </div>
    </section>
  );
};
export default About;
