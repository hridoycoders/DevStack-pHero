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
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900">
          Explore the <span  className="bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent">Technologies</span>
        </h2>

        <p  className="mt-2 text-sm text-slate-500">Pick one technology category to build your ideal stack.</p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
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