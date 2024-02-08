// Your code here
class PartyPlanner {
	guestList = [];

	addToGuestList = (name) => {
		this.guestList.push(name);
	}

	throwParty = () => {
		let greeting = "Welcome to the party ";
		if(this.guestList.length == 0) {
			return `Gotta add people to the guest list`;
		} else {
			for(let i = 0; i  < this.guestList.length; i += 1) {
				if(this.guestList.length > 1) {
					
					greeting += this.guestList[i];
					if (i == this.guestList.length - 1) {
						break;
					}
					greeting += ' and '
				} else {
					greeting += this.guestList[i];
				}
			}
		}
		return greeting;
	}
}

const party = new PartyPlanner();

console.log(party.throwParty()); // prints "Gotta add people to the guest list"

party.addToGuestList("James");
console.log(party.throwParty()); // prints "Welcome to the party James"

party.addToGuestList("Alvin");
console.log(party.throwParty()); // prints "Welcome to the party James and Alvin"

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = PartyPlanner;
} catch {
	module.exports = null;
}