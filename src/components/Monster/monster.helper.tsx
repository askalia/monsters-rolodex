import { Monster } from "./monster.model";
import * as shortid from "shortid";

export const toMonster = ({
  id,
  name,
  email,
}: {
  id: number;
  name: string;
  email: string;
}): Monster => ({ id, name, email });

export const keygen = () => shortid.generate();
