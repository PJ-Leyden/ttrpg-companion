export interface IWarhammerCharacterSheet {
	characteristics: IWarhammerCharacteristics;
}

export interface IWarhammerCharacteristics {
	weaponSkill: number;
	ballisticSkill: number;
	strength: number;
	toughness: number;
	initiative: number;
	agility: number;
	dexterity: number;
	intelligence: number;
	willpower: number;
	fellowship: number;
	test: string;
}
