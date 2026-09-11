import { use } from "react";
import TechnologyCard from "./TechnologyCard";

const TechnologySection = ({ technologypromise }) => {
  const technologies = use(technologypromise);

  return (
    <div>
      {technologies.map((technology) => (
        <TechnologyCard
          key={technology.id}
          technology={technology}
        />
      ))}
    </div>
  );
};

export default TechnologySection;