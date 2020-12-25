import { FC, ReactElement } from "react";
import { Monster } from "./monster.model";
import "./monster-card.styles.css";
const PICTURE_SOURCE = "https://robohash.org/";

export type MonsterProps = {
  monster: Monster;
};

export const MonsterCard: FC<MonsterProps> = ({ monster }): ReactElement => (
  <div className="monster-card">
    <img
      src={`${PICTURE_SOURCE}/${monster.id}?set=set2&size=200x200`}
      alt={monster.name}
    />
    <h2>{monster.name}</h2>
    <p>{monster.email}</p>
  </div>
);
/*
<img
      src={`${pictureSource}/${monster.id}?size=200x200`}
      alt={monster.name}
    />
    <h3>{monster?.name}</h3>
    <p>
      <a href={`mailto://${monster.email}`}>{monster.email}</a>
    </p>
*/
