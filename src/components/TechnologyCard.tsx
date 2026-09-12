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

interface TechnologyCardProps {
  technology: Technology;
  onAddToStack: (technology: Technology) => void;
}

const TechnologyCard = ({
  technology,
  onAddToStack,
}: TechnologyCardProps) => {

  return (
    <div className="grid grid-cols-3 gap-y-4 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
      
      <img className="col-span-1 h-10 w-10 object-contain" src={technology.icon} alt="" />

      <span className="col-span-2 justify-self-end self-center rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-500">{technology.badge}</span>

      <h2 className="col-span-3 text-2xl font-bold text-slate-900">{technology.name}</h2>

      <p className="col-span-3 text-sm leading-relaxed text-slate-500">{technology.description}</p>

      <p className="col-span-1 justify-self-start rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">{technology.category}</p>

      <p className="col-span-1 justify-self-center text-xs font-medium text-slate-500">{technology.difficulty}</p>

      <p className="col-span-1 justify-self-end text-sm font-semibold text-slate-800">⭐ {technology.rating}</p>

      <button onClick={() => onAddToStack(technology)} className="col-span-3 mt-2 w-full rounded-2xl bg-[#090D16] py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90">Add to Stack</button>
    </div>
  );
};
export default TechnologyCard;