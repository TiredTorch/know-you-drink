import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useCanvasState, useDrinksData, useDrinkState } from "../../store/store";
import { drinkDescriptionBoxStyles } from "./DrinkDescriptionBox.styles";

export const DrinkDescriptionBox = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const { isDescriptionActive } = useCanvasState();
  const { title, description, setDrinkState } = useDrinkState();
  const { data } = useDrinksData();

  const handlePrevPage = () => {
    if (currentPage !== 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNextPage = () => {
    if (currentPage !== (data.length - 1)) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    setDrinkState(data[currentPage]);

  }, [currentPage]);


  return (
    <Box
      component={"div"}
      sx={drinkDescriptionBoxStyles.root}
      className={isDescriptionActive ? "active" : ""}
    >
      <Box
        component={"div"}
        sx={{
          width: "85%",
        }}
      >
        <Typography
          sx={drinkDescriptionBoxStyles.title}
        >
          {title}
        </Typography>
        <Typography
          sx={drinkDescriptionBoxStyles.description}
        >
          {description}
        </Typography>
      </Box>
      <Box
        component={"div"}
        sx={drinkDescriptionBoxStyles.buttonWrapper}
      >
        <Button
          sx={drinkDescriptionBoxStyles.button}
          onClick={handlePrevPage}
        >
          Prev
        </Button>
        <Button
          sx={drinkDescriptionBoxStyles.button}
          onClick={handleNextPage}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};
