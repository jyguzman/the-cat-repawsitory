const Image = (props) => {
	return (
		<div>
			<img src={props.url} 
				alt={props.url}
				style={{
					'borderRadius': '5px',
					'display': 'flex',
					'justifyContent': 'center',
					'maxWidth': '100%',
					'maxHeight': '100%'}} />
		</div>
	);
};

export default Image;