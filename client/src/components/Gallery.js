import { Grid } from "@mui/material";
import Image from "./Image";
import useFetchBreedImages from '../hooks/useFetchBreedImages';

const Gallery = props => {
	return (
		<Grid container direction="row" justify="center" alignItems="center" 
			spacing={1}>
			{props.images
				.map((image, index) => {
					return (
						<Grid item key={index} xs={12} sm={6} md={4} lg={4} xl={4}>
							<Image url={image.url} title={image.url} />      
						</Grid>
					);
			})}
		</Grid> 
  	);
};

export default Gallery;