import React from "react";
import Layout from "../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px) ": {
            mt: 0,
            "& h4": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome to my Fresh Juice</Typography>
        <p>
          Juices have different shelf lives depending on the packing process
          used. Long-life juices usually keep for six to 12 months while the
          packaging is kept sealed, and because of the pasteurisation process
          applied and packing method, do not require chilling. Short-life juices
          have a shelf life of up to 30 days and must be kept chilled. In the
          UK, freshly-squeezed fruit juices must have a shelf-life of no more
          than 14 days and undergo little or no pasteurisation treatment; they
          are usually packed and delivered to retailers within 24 hours. Is
          fruit juice good for me?
        </p>
        <br />
        <p>
          Juices have different shelf lives depending on the packing process
          used. Long-life juices usually keep for six to 12 months while the
          packaging is kept sealed, and because of the pasteurisation process
          applied and packing method, do not require chilling. Short-life juices
          have a shelf life of up to 30 days and must be kept chilled. In the
          UK, freshly-squeezed fruit juices must have a shelf-life of no more
          than 14 days and undergo little or no pasteurisation treatment; they
          are usually packed and delivered to retailers within 24 hours. Is
          fruit juice good for me?
        </p>
      </Box>
    </Layout>
  );
};

export default About;
