import { use, useState } from "react";
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
  const [selectedTechnologies, setSelectedTechnologies] =
    useState<Technology[]>([]);

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900">
          Explore the <span className="bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent">Technologies</span>
        </h2>

        <p className="mt-2 text-sm text-slate-500">Pick one technology category to build your ideal stack.</p>
      </div>
      <div className="grid gap-5 lg:grid-cols-[1fr_280px]">
        {/* card section  */}
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {technologies.map((technology) => (
            <TechnologyCard
              key={technology.id}
              technology={technology}
              onAddToStack={(technology) => {
                setSelectedTechnologies([...selectedTechnologies, technology]);
              }}
            />
          ))}
        </div>
        {/* Stack sidebar */}
        <aside className="h-fit rounded-xl border border-slate-200 bg-white p-5">
          <h3 className="font-bold text-slate-900"> Your Stack </h3>
          <p className="mt-1 text-xs text-slate-400"> {selectedTechnologies.length} Technology Selected </p>

          <div className="mt-5 space-y-3"> {selectedTechnologies.length === 0 ? (
            
            <div className="rounded-lg border border-dashed border-slate-200 p-6 text-center text-xs text-slate-400">
              Your stack is empty.
            </div>
          ) : (selectedTechnologies.map((technology) => (

            <div key={technology.id} className="flex items-center gap-3 rounded-lg border border-slate-200 p-3">
              <img className="h-8 w-8 object-contain" src={technology.icon} alt="" />
              <span className="text-sm font-medium text-slate-700"> {technology.name} </span>
            </div>
          ))
          )}
          </div>
        </aside>
      </div>
    </section>
  );
};

export default TechnologySection;