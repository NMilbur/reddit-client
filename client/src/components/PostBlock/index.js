import { Box, Card, CardActions, CardContent, CardHeader } from "@mui/material";

const PostBlock = ({ num }) => (
  <Box py={1}>
    <Card>
      <CardHeader title={`Post #${num}`} />
      <CardContent>
        Did you hear that? They've shut down the main reactor. We'll be destroyed for sure. This{" "}
        is madness! We're doomed! There'll be no escape for the Princess this time. What's that?{" "}
        Artoo! Artoo-Detoo, where are you? At last! Where have you been? They're heading in{" "}
        this direction. What are we going to do? We'll be sent to the spice mine of Kessel or{" "}
        smashed into who knows what! Wait a minute, where are you going? The Death Star plans{" "}
        are not in the main computer. Where are those transmissions you intercepted? What have{" "}
        you done with those plans? We intercepted no transmissions. Aaah....This is a consular{" "}
        ship. All right, I'll be there in a few minutes. Boy, am I gonna get it. You know that{" "}
        little droid is going to cause me a lot of trouble. Oh, he excels at that, sir. Luke?{" "}
        Luke? Luke? Have you seen Luke this morning? He said he had some things to do before he{" "}
        started today, so he left early.
      </CardContent>
      <CardActions>
        Button area
      </CardActions>
    </Card>
  </Box>
);

export default PostBlock;
