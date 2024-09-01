import { useAppContext } from "../AppContext";
import uiImage from "../assets/Ui.png";

export default function UICollectedItems() {
  const { itemsCollected } = useAppContext();
  return (
    <div className="uiCollected" style={{ backgroundImage: `url(${uiImage})` }}>
      {itemsCollected}
    </div>
  );
}
