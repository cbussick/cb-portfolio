import { Box, useTheme } from "@mui/material";
import { ___Component_Name___Props } from "./___componentName___Interfaces";
import { ___Component_Name___Styles } from "./___componentName___Styles";
import { use___Component_Name___ViewModel } from "./___componentName___ViewModel";

function ___Component_Name___(props: ___Component_Name___Props): JSX.Element {
  const viewModel = use___Component_Name___ViewModel(props);
  const theme = useTheme();

  return (
    <Box sx={___Component_Name___Styles(theme)}>
      Hey ___Component_Name___ 🚀
    </Box>
  );
}

export default ___Component_Name___;
