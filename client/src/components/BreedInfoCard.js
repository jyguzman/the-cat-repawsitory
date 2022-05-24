import { Card, CardMedia } from "@mui/material";

const BreedInfoCard = (props) => {
    const currentBreed = props.currentBreed;
    const image = currentBreed.image;
    return (
        <Card>
            <CardMedia
                component='img'
                image={image}
            />
        </Card>
    )
}

export default BreedInfoCard;