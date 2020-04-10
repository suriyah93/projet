class MyToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: "",
                                                text:"",
            itemArray: []
        };
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleKeyPress=this.handleKeyPress.bind(this);
    this.addItem=this.addItem.bind(this);
    this.deleteItem=this.deleteItem.bind(this);
    }
    handleChange(e) {
        this.setState({ text: e.currentTarget.value });
    }
 handleSubmit(e) {
                                let itemsArray = this.state.userInput.split(",");
        this.addItem();
    }
handleKeyPress(e) {
        if (e.key === "Enter") {
            this.addItem();
        }
    }
 addItem() {
        if (this.state.text !== "") {
            this.setState({ text: this.state.text });
            this.setState({ itemArray: [...this.state.itemArray, this.state.text] });
            this.setState({ text: "" });
        }
    }
 deleteItem(index, e) {
        let userData = Object.assign([], this.state.itemArray);
        userData.splice(index, 1);
        this.setState({ itemArray: userData });
    }


    render() {
        return (
            <div className="content">
                <div className="mainPage">
                    <h1>My To Do List</h1>
                    <div className="addList">
                        <textarea onChange={this.handleChange.bind(this)} onKeyPress={this.handleKeyPress.bind(this)} value={this.state.text} type="text" name="todo" placeholder="add list items" />
                                                                                    <br />
                        <button onClick={this.handleSubmit.bind(this)}>ADD</button>
                    </div>
                </div>
                <ul className="list">
                    {
                        this.state.itemArray.map((item, index) => {
                            return <ToDoList deleteItem={this.deleteItem.bind(this, index)} text={item} key={index}></ToDoList>
                        })
                    }
                </ul>
            </div>
        );
    }
}    
class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { className: "" };
    }
    render() {
        return (
         <ul className="list">
            <li className={this.state.className}>
                <span onClick={this.handleSubmit.bind(this)} className="item">{this.props.text}</span>
                <span onClick={this.props.deleteItem} className="delete">X</span>
            </li>
          </ul>
        );
    }
    handleSubmit(e) {
        if (this.state.className === "") {
            this.setState({ className: "checked" });
        } else {
            this.setState({ className: "" });
        }
    }
}

window.addEventListener('load', () => {
    ReactDOM.render(<MyToDoList />, document.getElementById('root'));
});