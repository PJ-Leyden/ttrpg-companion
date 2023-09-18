import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Table from "./common/Table";
import { IWarhammerCharacteristics } from "./warhammer/models";
import { Container } from "@mui/material";
import WarhammerCharacterSheet from "./warhammer/WarhammerCharacterSheet";
import NumberInputControl from "./common/NumberInputControl";

function App() {
  const initSheet: IWarhammerCharacteristics = {
    weaponSkill: 80,
    ballisticSkill: 75,
    strength: 60,
    toughness: 65,
    agility: 45,
    dexterity: 70,
    initiative: 90,
    intelligence: 40,
    willpower: 20,
    fellowship: 70,
  };

  const [testValue, setTestValue] = useState<number | undefined>();

  return (
    <div className="App">
      <Container className="CoreContainer">
        <WarhammerCharacterSheet sheet={initSheet} />
        <NumberInputControl
          label="Test"
          value={testValue}
          onChange={(event) => {
            setTestValue(parseInt(event.target.value));
          }}
        />
      </Container>
    </div>
  );
}

export default App;
