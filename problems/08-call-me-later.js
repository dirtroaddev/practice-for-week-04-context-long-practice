// Your code here
class CallCenter {
	cosntructor(name) {
		this.name = name;
	}

	sayHello = () => {
		 return `Hello this is ${this.name}`;
	}

}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = CallCenter;
} catch {
	module.exports = null;
}