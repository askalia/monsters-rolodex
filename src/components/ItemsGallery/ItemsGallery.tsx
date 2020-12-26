import { FC, ReactElement } from "react";
import { keygen } from "../Monster/monster.helper";
import { Monster } from "../Monster/monster.model";
import { MonsterCard } from "../Monster/MonsterCard";
import "./items-gallery.css";

type Item = { id: number; name: string; email: string };

export type ItemsGalleryProps = {
  items: Item[];
  removeMonster: (monster: Monster) => void;
};

export const ItemsGallery: FC<ItemsGalleryProps> = ({
  items,
  removeMonster,
}): ReactElement => (
  <div className="items-gallery">
    {(items || []).map((monster) => (
      <MonsterCard {...{ monster, removeMonster, key: keygen() }} />
    ))}
  </div>
);
