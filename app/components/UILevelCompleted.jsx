import { useAppContext } from "../AppContext";

export default function UILevelCompleted() {
  const { levelCompleted, setLevelCompleted, itemsCollected } = useAppContext();

  if (itemsCollected === 5) setLevelCompleted(true);

  return levelCompleted ? (
    <div className="levelCompleted"><img src="collected.png"/></div>
  ) : null;
}
