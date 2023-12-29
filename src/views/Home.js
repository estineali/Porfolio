import { SectionHeading } from "../components/Headings";

const Home = (props) => {
  return (
    <div>
      <SectionHeading label={"Skills & Expertise"} />
      <div style={{ minHeight: 500 }}></div>
      <SectionHeading label={"Current Projects"} />
      <div style={{ minHeight: 500 }}></div>
      <SectionHeading label={"Past Projects"} />
      <div style={{ minHeight: 150 }}></div>
    </div>
  );
};

export default Home;
