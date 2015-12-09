var GistAddForm = React.createClass({
	getInitialState: function() {
		return {
			search: ''
		}
	},

	handleChange: function(e) {
		this.setState({search: e.target.value})
	},
	
	
	handleSubmit: function(e) {
		e.preventDefault();
	},

	render: function() {
		return (
			<form className="form-group" onSubmit={this.handleSubmit}>
				<input onChange={this.handleChange} className="form-control" placeholder="Type a github name here" 
					value={this.state.search}/>
				<button className="btn btn-primary">Fetch latest gist</button>
			</form>
		);
	}
});