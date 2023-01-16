import { Box } from "@mui/material";
import PostBlock from "components/PostBlock";

const ListView = () => (
  <Box display="flex" flexDirection="column" gridRowGap={5}>
    {Array.from({ length: 10 }, (_, i) => i).map((idx) => <PostBlock key={idx} num={idx + 1} />)}
  </Box>
);

export default ListView;
