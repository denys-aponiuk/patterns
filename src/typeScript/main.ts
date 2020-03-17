import { JsInject } from './jsInject';

const jsInject = new JsInject();


class Bricks {
    action(): void {
        console.log('Bricks were created');
    }
}

jsInject.register('bricks', [Bricks])

class Walls {

    // bricks = new Bricks();
    bricks: any;

    constructor(Bricks: any) {
        this.bricks = Bricks;
    }

    action(): void {
        this.bricks.action();
        console.log('Walls were created');
    }
}

jsInject.register('walls', ['bricks', Walls])

class House {
    // roof = new Roof();
    // walls = new Walls();
    roof: any;
    walls: any;

    constructor(Roof: any, Walls: any) {
        this.roof = Roof;
        this.walls = Walls;
    }

    action(): void {
        this.roof.action();
        this.walls.action();
        console.log('House were created');
    }
}

jsInject.register('house', ['walls', 'roof', House])

const house = jsInject.get('house');
house.action()

class Roof {
    action(): void {
        console.log('Roof was created');
    }
}

jsInject.register('roof', [Roof])
