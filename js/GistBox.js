var GistBox = React.createClass({
	getInitialState: function() {
		return {
			gists: [
				{username: 'raingxm', url: 'https://gist.github.com/raingxm/f9b0aaf9c1868d09b42d'}
			]
		};
	},

	newGist: function(gist) {
		return <Gist username={gist.username} url={gist.url} />;
	},

	render: function() {
		return (
			<div className='gist-box'>
				<h1>Gist Box</h1>
				<GistAddForm />
				{ this.state.gists.map(this.newGist) }
			</div>
		);
	}
});

React.render(<GistBox />, document.getElementById('app'));