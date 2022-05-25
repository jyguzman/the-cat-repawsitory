import { Grid, CircularProgress} from "@mui/material";
import GalleryImage from "./GalleryImage";

const Gallery = props => {
	const images = props.images;
	return (
		<Grid container direction="row" justifyContent="center" alignItems="center" 
			spacing={1}>
			{images && images.length > 0 ? 
				(images.map((image, index) => {
					return (
						<Grid item key={index} xs={12} sm={6} md={4} lg={4} xl={4}>
							<GalleryImage url={image.url} title={image.url} />      
						</Grid>
					);
				}))
			: <CircularProgress/>}
		</Grid>
  	);
};

export default Gallery;