import { Grid } from "@mui/material";
import Image from "./Image";

const Gallery = props => {
	const pics = props.pics;

	return (
		<Grid container direction="row" justify="center" alignItems="center" 
			spacing={1}>
			{pics
				.map((pic, index) => {
					return (
						<Grid item key={index} xs={6} sm={6} md={4} lg={4} xl={4}>
							<Image url={pic.url} title={"dog"} key={index+1} />      
						</Grid>
					);
			})}
		</Grid> 
  	);
};

export default Gallery;