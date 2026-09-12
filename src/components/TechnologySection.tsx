import { use } from "react";
import TechnologyCard from "./TechnologyCard";

interface Technology {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
}

interface TechnologySectionProps {
  technologypromise: Promise<Technology[]>;
}

const TechnologySection = ({
  technologypromise,
}: TechnologySectionProps) => {
  const technologies = use(technologypromise);

  return (
    <section>
      <div>
        <h2>
          Explore the <span>Technologies</span>
        </h2>

        <p>Pick one technology category to build your ideal stack.</p>
      </div>

      <div>
        {technologies.map((technology) => (
          <TechnologyCard
            key={technology.id}
            technology={technology}
          />
        ))}
      </div>
    </section>
  );
};

export default TechnologySection;