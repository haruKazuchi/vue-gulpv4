import {Header} from './header';
import {MainVisual} from './mainvisual';
import {Service} from './service';

class Main {
	constructor() {
		this.buildComponent()
	}

	buildComponent(){
		Header()
		MainVisual()
		Service()
	}
}

let main = new Main();