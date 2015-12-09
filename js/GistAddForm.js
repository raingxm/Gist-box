var GistAddForm = React.createClass({
	getInitialState: function() {
		return {
			search: ''
		}
	},

	handleChange: function(e) {
		this.setState({search: e.target.value})
	},
	
	
	addGist: function(e) {
		e.preventDefault();
		this.props.onAdd(this.state.search);
	},

	render: function() {
		return (
			<form className="form-group" onSubmit={this.addGist}>
				<input onChange={this.handleChange} className="form-control" placeholder="Type a github name here" 
					value={this.state.search}/>
				<button className="btn btn-primary">Fetch latest gist</button>
			</form>
		);
	}
});