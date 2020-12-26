import { Component } from "react";
import { Monster } from "../Monster/monster.model";
import { toMonster } from "../Monster/monster.helper";
import { SearchBox } from "../SearchBox/SearchBox";
import { ItemsGallery } from "../ItemsGallery/ItemsGallery";
import "./monsters-rolodex.styles.css";

type MonstersRolodexProps = {
  monstersDatasourceUrl?: string;
  numberOfMonsters?: number;
};
type MonstersRolodexState = {
  monsters: Monster[];
  foundMonsters: Monster[];
};

export class MonstersRolodex extends Component<
  MonstersRolodexProps,
  MonstersRolodexState
> {
  constructor(props: MonstersRolodexProps) {
    super(props);
    this.state = {
      monsters: [],
      foundMonsters: [],
    };
  }

  public static defaultProps = {
    monstersDatasourceUrl: "https://jsonplaceholder.typicode.com/users",
    numberOfMonsters: 8,
  };

  componentDidMount() {
    this._fetchMonsters();
  }

  private _fetchMonsters() {
    const canFetchMonsters: boolean =
      (this.props?.monstersDatasourceUrl || "").startsWith("http") &&
      (this.props?.numberOfMonsters || 0) > 0;

    canFetchMonsters &&
      fetch(this.props?.monstersDatasourceUrl || "")
        .then((response) => response.json())
        .then((rawMonsters) => {
          const monsters = (rawMonsters || [])
            .splice(0, this.props?.numberOfMonsters || 0)
            .map(toMonster);

          this.setState({
            monsters,
            foundMonsters: monsters,
          });
        });
  }

  private get _monsters(): Monster[] {
    return this.state.monsters || [];
  }

  private get _foundMonsters(): Monster[] {
    return this.state.foundMonsters;
  }

  removeMonster = (monsterToRemove: Monster) => {
    this.setState({
      foundMonsters: [...this.state.foundMonsters].filter(
        (monster) => monster.id !== monsterToRemove.id
      ),
    });
  };

  updateListMonsters = (
    foundMonsters: { id: number; name: string; email: string }[]
  ) => {
    this.setState({
      foundMonsters: foundMonsters.map(toMonster),
    });
  };

  render() {
    return (
      <>
        <div className="searchbox-container">
          <SearchBox
            items={this._monsters}
            placeholder={"search monster by name"}
            onResults={this.updateListMonsters}
            searchOnKey={"name"}
          />
        </div>
        <ItemsGallery
          {...{
            items: this._foundMonsters,
            removeMonster: this.removeMonster,
          }}
        />
      </>
    );
  }
}
