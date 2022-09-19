import React from "react";


class ClassCounter extends React.Component { /* создаем класс ClassCounter и наследуемся от React.Component */

constructor(props) {    /* создаем конструктор который принимает параметрами пропсы */
    super(props);
    this.state = {     /* инициализирум состояние и в нутри создаем поле const */
        count: 0
    }

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);

}


 increment() {     /* создаем функцию с increment */
    this.setState( {count:this.state.count + 1} )  /* чтобы изменить состояние мы передаем функцию setState, куда мы передаем новое состоние count с измененными значениями */
}

 decrement() {     /* создаем функцию с переменной decrement */
    this.setState( {count:this.state.count - 1} )
}

render() {    /* пищем функцию render, которая возвращает jsx */
    return (   /* возвращаем не обьект поэтому круглые скобки */
        <div>
        <h1>{this.state.count}</h1> {/* поскольку мы находимся внутри сласса, нам необходимо использовать this */}
        <button onClick={this.increment}>Increment</button>   
        <button onClick={this.decrement}>Decrement</button>
    </div>

    )
}
}

export default ClassCounter;   /* експортируем обязательно */