import { ChangeEvent, FC, ReactElement, useState } from "react";

export type SearchBoxProps = {
  onSearch: (searchString: string) => void;
};

export const SearchBox: FC<SearchBoxProps> = ({ onSearch }): ReactElement => {
  const [searchString, updateSearchString] = useState("");

  const updateSearch = (searchTyped: string) => {
    updateSearchString(searchTyped);
    onSearch(searchString);
  };

  return (
    <div>
      <input
        type="search"
        placeholder="search monster by name"
        onChange={(e: ChangeEvent) =>
          updateSearch((e.target as HTMLInputElement).value)
        }
      />
    </div>
  );
};
