import React from 'react';
import Pagination from '@mui/material/Pagination';

const Paginator = props => {
	return (
		<Pagination
			count={props.pages}
			page={props.page}
			onChange={props.handlePageChange}
			defaultPage={1}
			color="primary"
     		size="large"
            variant="outlined"
			showFirstButton
			showLastButton
			disabled={props.isDisabled}
		/>
    );
};

export default Paginator;