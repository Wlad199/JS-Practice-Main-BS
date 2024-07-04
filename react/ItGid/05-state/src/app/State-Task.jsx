
//? Вывести в блок value из input =================//

//export default class App extends React.Component {
//	constructor(props) {
//		super(props)
//		this.state = {
//			text: ''
//		}
//	}
//	showInputText = (e) => {
//		this.setState({
//			text: e.target.value
//		})
//	}
//	render() {
//		return (
//			<div className='Wrapper'>
//				<input onInput={this.showInputText} type="text" />
//				<p>{this.state.text}</p>
//			</div >
//		)
//	}
//}

// С привязкой через bind ========//

//class App extends React.Component {

//	constructor(props) {
//		super(props)
//		this.state = {
//			text: ''
//		}
//		this.showText = this.showText.bind(this)
//	}
//	showText(e) {
//		this.setState({
//			text: e.target.value
//		})
//	}

//	render() {
//		return (
//			<div>
//				<input onInput={this.showText} type="text" />
//				<p>{this.state.text}</p>
//			</div>
//		)
//	}
//}



//? Добавьте checkbox - при изменении его состояния выводите checkbox checked или checkbox unchecked в консоль. =================//

//export default class App extends React.Component {
//	constructor(props) {
//		super(props)
//		this.state = {
//			text: 'unchecked',
//			checkbox: false
//		}
//	}
//	showState = () => {
//		if (this.state.checkbox === false) {
//			this.setState({
//				text: 'checked',
//				checkbox: true
//			})
//		} else {
//			this.setState({
//				text: 'unchecked',
//				checkbox: false
//			})
//		}
//	}

//	render() {
//		return (
//			<>
//				<input onChange={this.showState} type="checkbox" name='radioButton' checked={this.state.checkbox} />
//				<p>{this.state.text}</p>
//			</>
//		)
//	}
//}


//? Добавьте 3 radiobutton с одним именем. При изменении состояния radiobutton выводите value выбранного на страницу. =================//

//export default class App extends React.Component {
//	constructor(props) {
//		super(props)
//		this.state = {
//			text: ''
//		}
//	}
//	showValue = (e) => {
//		this.setState({
//			text: e.target.value
//		})
//	}

//	render() {
//		return (
//			<>
//				<input type="radio" name='radiobutton' value={111} onChange={this.showValue} />
//				<input type="radio" name='radiobutton' value={222} onChange={this.showValue} />
//				<input type="radio" name='radiobutton' value={333} onChange={this.showValue} />
//				<p>{this.state.text}</p>
//			</>
//		)
//	}
//}


//? Добавьте выпадающий список. При изменении состояния - выводите value выбранного на страницу. =================//


//export default class App extends React.Component {
//	constructor(props) {
//		super(props)
//		this.state = {
//			text: ''
//		}
//		this.showValue = this.showValue.bind(this)
//	}
//	showValue(e) {
//		this.setState({
//			text: e.target.value
//		})
//	}

//	render() {
//		return (
//			<>
//				<select name="select" onChange={this.showValue}>
//					<option value="111">111</option>
//					<option value="222">222</option>
//					<option value="333">333</option>
//				</select>
//				<p>{this.state.text}</p>
//			</>
//		)
//	}
//}


//? Добавьте div и кнопку. При нажатии кнопки - увеличивайте ширину div на 3 px. Добавьте кнопку Reset позволяющую сбрасывать состояние до начальной ширины. =================//


//export default class App extends React.Component {
//	constructor(props) {
//		super(props)
//		this.state = {
//			width: 100
//		}
//		this.resetWidth = this.resetWidth.bind(this)
//	}
//	increaseWidth = () => {
//		this.setState({
//			width: this.state.width + 3
//		})
//	}
//	resetWidth() {
//		this.setState({
//			width: 100
//		})
//	}

//	render() {
//		return (
//			<>
//				<div style={{ background: 'green', width: this.state.width, height: 40 }}>############</div >
//				<button onClick={this.increaseWidth}>button +3px</button>
//				<button onClick={this.resetWidth}>reset</button>
//			</>
//		)
//	}
//}


//? Добавьте полнузок. При изменении ползунка выводите его value на страницу. =================//

//export default class App extends React.Component {
//	constructor(props) {
//		super(props)
//		this.state = {
//			rangeValue: 50
//		}
//	}
//	showValue = (e) => {
//		this.setState({
//			rangeValue: e.target.value
//		})
//	}

//	render() {
//		return (
//			<>
//				<input onChange={this.showValue} type="range" min={0} max={10000} />
//				<p>{this.state.rangeValue}</p>
//			</>
//		)
//	}
//}


//? Добавьте кнопку и изображение. При клике на кнопку скрывайте изображение, при повторном клике - показывайте. =================//


//import imgSrc from './chess-king.svg'

//export default class App extends React.Component {
//	constructor(props) {
//		super(props)
//		this.state = {
//			imgLink: imgSrc
//		}
//	}
//	showHideImage = () => {
//		if (this.state.imgLink) {
//			this.setState({
//				imgLink: ''
//			})
//		} else {
//			this.setState({
//				imgLink: imgSrc
//			})
//		}
//	}

//	render() {
//		return (
//			<>
//				<img src={this.state.imgLink}></img>
//				<button onClick={this.showHideImage}>Click me</button>
//			</>
//		)
//	}
//}