import { useAppContext } from "../AppContext";

export default function UILevelCompleted() {
  const { levelCompleted, setLevelCompleted, itemsCollected } = useAppContext();

  if (itemsCollected === 5) setLevelCompleted(true);

  return levelCompleted ? (
    <div className="levelCompleted">Level finished</div>
  ) : null;
}
