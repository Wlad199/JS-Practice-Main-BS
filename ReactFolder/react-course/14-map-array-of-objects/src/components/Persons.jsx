import persons from "../data/persons"
import Person from "./Person"

export function Persons() {
	return (
		<div className="cards">
			{persons.map((person) => {
				return <Person key={person.id} {...person} />
			})}
		</div>
	)
}