var Gist = React.createClass({
	render: function() {
		return (
			<li>{this.props.username}'s last gist is <a href={this.props.url}>here</a>.</li>
		);
	}
});