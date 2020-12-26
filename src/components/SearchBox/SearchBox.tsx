import { ChangeEvent, FC, ReactElement } from "react";
import { Monster } from "../Monster/monster.model";
import "./search-box.styles.css";
export type SearchBoxProps<T = any> = {
  items: T[];
  placeholder: string;
  searchOnKey: keyof Monster;
  onResults: (foundMonsters: Monster[]) => void;
};

export const SearchBox: FC<SearchBoxProps> = ({
  items,
  searchOnKey,
  placeholder,
  onResults,
}): ReactElement => {
  const searchMonsters = (searchQuery: string) => {
    const foundItems = items.filter((item) =>
      String((item as any)[searchOnKey])
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    );
    onResults(foundItems);
  };

  return (
    <div>
      <input
        className="search-box"
        type="search"
        placeholder={placeholder || ""}
        onChange={(e: ChangeEvent) =>
          searchMonsters((e.target as HTMLInputElement).value)
        }
      />
    </div>
  );
};
