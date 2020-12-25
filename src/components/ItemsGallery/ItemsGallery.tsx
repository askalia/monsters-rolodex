import { FC, ReactElement } from "react";
import { keygen } from "../Monster/monster.helper";
import { MonsterCard } from "../Monster/MonsterCard";
import "./items-gallery.css";

type Item = { id: number; name: string; email: string };

export type ItemsGalleryProps = {
  items: Item[];
};

export const ItemsGallery: FC<ItemsGalleryProps> = ({
  items,
}): ReactElement => (
  <div className="items-gallery">
    {(items || []).map((monster) => (
      <MonsterCard {...{ key: keygen(), monster }} />
    ))}
  </div>
);
