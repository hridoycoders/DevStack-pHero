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
}

const TechnologyCard = ({ technology }: TechnologyCardProps) => {
  return (
    <div>
      <img src={technology.icon} alt="" />

      <h2>{technology.name}</h2>

      <p>{technology.category}</p>

      <p>{technology.description}</p>

      <p>⭐ Rating: {technology.rating}</p>

      <p>Difficulty: {technology.difficulty}</p>

      <span>{technology.badge}</span>

      <button>Add to Stack</button>
    </div>
  );
};

export default TechnologyCard;