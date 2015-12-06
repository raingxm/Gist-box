var GistAddForm = React.createClass({
	handleSubmit: function(e) {
		e.preventDefault();
		console.log('hello');			
	},

	render: function() {
		return (
			<form className="form-group" onSubmit={this.handleSubmit}>
				<input className="form-control" placeholder="Type a github name here" />
				<button className="btn btn-primary">Fetch latest gist</button>
			</form>
		);
	}
});