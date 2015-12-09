var GistBox = React.createClass({
	getInitialState: function() {
		return {
			gists: []
		};
	},

	handleAddGist: function(userName) {
		var url = 'https://api.github.com/users/' + userName + '/gists';
		$.get(url, function(data) {
			this.setState({gists: this.state.gists.concat({username: userName, url: data[0].html_url})});
		}.bind(this));
	},

	render: function() {
		var newGist = function(gist) {
			return <Gist username={gist.username} url={gist.url} />;	
		};

		return (
			<div className='gist-box'>
				<h1>Gist Box</h1>
				<GistAddForm onAdd={this.handleAddGist} />
				{ this.state.gists.map(newGist) }
			</div>
		);
	}
});

React.render(<GistBox />, document.getElementById('app'));