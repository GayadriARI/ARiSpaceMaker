import React from "react";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import HomeIcon from "@mui/icons-material/Home";
import AssignmentIcon from "@mui/icons-material/Assignment";
import Stack from "@mui/material/Stack";
import { emphasize, styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
function Artifacts() {
  const cardData = [
    {
      title: "3T 2S 1M SD",
      image:
        "https://www.sketchup4architect.com/sketchup-3d-components/windows/large/horizontal-sliding-window-in-sketchup-warehouse.jpg",
      description: "Saint Gobain 50mm Sliding Series",
    },
    {
      title: "3T 2S 1M SD",
      image:
        "https://www.sketchup4architect.com/sketchup-3d-components/windows/large/french-casement-window-in-sketchup-warehouse.jpg",
      description: "Saint Gobain 50mm Sliding Series",
    },
    {
      title: "3T 2S 1M SD",
      image:
        "https://www.sketchup4architect.com/sketchup-3d-components/windows/large/bay-window-in-sketchup-warehouse.jpg",
      description: "Saint Gobain 50mm Sliding Series",
    },
    {
      title: "3T 2S 1M SD",
      image:
        "https://www.sketchup4architect.com/sketchup-3d-components/door/large/maple-door-in-SketchUp.jpg",
      description: "Saint Gobain 50mm Sliding Series",
    },
    {
      title: "3T 2S 1M SD",
      image:
        "https://www.sketchup4architect.com/sketchup-3d-components/door/large/normal-door-in-SketchUp.jpg",
      description: "Saint Gobain 50mm Sliding Series",
    },
    {
      title: "3T 2S 1M SD",
      image:
        "https://www.sketchup4architect.com/sketchup-3d-components/door/large/maple-door-in-SketchUp.jpg",
      description: "Saint Gobain 50mm Sliding Series",
    },
    // Add more card data here
  ];
  const [showAnotherComponent, setShowAnotherComponent] = useState(false); // State to control component visibility
  const handleButtonClick = () => {
    setShowAnotherComponent(true);
  };
  const StyledBreadcrumb = styled(Chip)(({ theme }) => {
    const backgroundColor =
      theme.palette.mode === "light"
        ? theme.palette.grey[100]
        : theme.palette.grey[800];
    return {
      backgroundColor,
      height: theme.spacing(3),
      color: theme.palette.text.primary,
      fontWeight: theme.typography.fontWeightRegular,
      "&:hover, &:focus": {
        backgroundColor: emphasize(backgroundColor, 0.06),
      },
      "&:active": {
        boxShadow: theme.shadows[1],
        backgroundColor: emphasize(backgroundColor, 0.12),
      },
    };
  }); // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591

  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }
  return (
    <div
      style={{
        overflowY: "auto",
        marginLeft: "7%",
        width: "90%",
      }}
    >
      <Paper
        variant="outlined"
        square
        style={{ marginTop: "3%", height: "10vh", padding: "10px" }}
      >
        <div
          style={{
            marginTop: "1%",
            float: "left",
            fontWeight: "bold",
            color: "#254A9A",
          }}
        >
          Artifacts
        </div>
        <div
          role="presentation"
          style={{ marginTop: ".5%", float: "right" }}
          onClick={handleClick}
        >
          <Breadcrumbs aria-label="breadcrumb">
            <StyledBreadcrumb
              component="a"
              label="Home"
              href="#"
              icon={<HomeIcon fontSize="small" />}
            />
            {/* <StyledBreadcrumb component="a" href="#" label="Catalog" /> */}
            <StyledBreadcrumb
              label="Artifacts"
              component="a"
              href="#"
              icon={<AssignmentIcon fontSize="small" />}
            />
          </Breadcrumbs>
        </div>
      </Paper>
      <Grid container spacing={1} style={{ marginTop: "1%" }}>
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ maxWidth: 220 }}>
              <CardMedia
                component="img"
                alt={card.title}
                height="100"
                image={card.image}
              />
              <CardContent style={{ padding: "6px", marginBottom: "0px" }}>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  style={{ fontSize: "1rem", marginBottom: "0px" }}
                >
                  {card.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Stack direction="row" spacing={2}>
                  <Button
                    variant="contained"
                    size="small"
                    onClick={handleButtonClick}
                  >
                    Select design
                  </Button>
                </Stack>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
export default Artifacts;
