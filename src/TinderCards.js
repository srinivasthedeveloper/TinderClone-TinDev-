import React, {useState,useEffect} from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';
import database from './firebase.js';

function TinderCards() {
// Variable Creation (normal way)
	// const people=[];
	// people.push['item1','item2'];

//React Way variable creation
	// const [people, setpeople] = useState([]);
	// setpeople([...people, 'item1', 'item2'])
	// [...] is used to not to overwrite completly (keep the previous data and append the new data with out deleting previous one) it is the use of [...]

	const [people, setpeople] = useState([]);

useEffect(()=>{
        database.collection("TheDeveloperPeople").onSnapshot(snapshot => (
                setpeople(snapshot.docs.map(doc => doc.data()))
            ))
    },[]);

	return (
		<div>
			{ /*<h1>I am tindercard</h1>*/}

			<div className="TinderCards_Container">
				{people.map((person) =>(
					<TinderCard
						className="swipe"
						key={person.name}
						preventSwipe={['down']}
					>
						<div style={{backgroundImage: `url(${person.url})`}}
							className="card">
							<h3>{person.name}</h3>
						</div>
					</TinderCard>
				))}
			</div>
		</div>
	)
}

export default TinderCards;