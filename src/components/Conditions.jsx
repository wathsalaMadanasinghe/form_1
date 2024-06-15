import {
  Container,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  Grid,
} from "@mui/material";
import { boldList } from "../assets";
import Table1 from "./Table1";
import Table2 from "./Table2";

const Conditions = () => {
  const startIndex = "a".charCodeAt(0);
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          textAlign: "justify",
          pt: 4,
          px: { xl: 20, xs: 10 },
        }}
      >
        <List>
          {boldList.map((item, index) => (
            <ListItem key={index}>
              <Typography
                sx={{
                  textAlign: "left",
                  fontWeight: "bold",
                  fontSize: { xs: "1rem", md: "1.4rem ", xl: "1.8rem" },
                  color: "black",
                }}
              >
                {item.text}
                <List>
                  {item.features.map((feature, index) => (
                    <ListItem
                      key={index}
                      alignItems="flex-start"
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: feature.title ? "column" : "row",
                        }}
                      >
                        <Box sx={{ display: "flex" }}>
                          <Typography
                            variant="body1"
                            component="span"
                            sx={{
                              mr: 2,
                              textAlign: "justify",
                              fontSize: {
                                xs: "0.75rem",
                                md: "1rem ",
                                xl: "1.2rem",
                              },
                            }}
                          >
                            {index + 1}.
                          </Typography>
                          {feature.title && (
                            <Typography
                              mb={3}
                              sx={{
                                color: feature.red ? "red" : "black",
                                fontWeight: "bold",
                                fontSize: {
                                  xs: "0.75rem",
                                  md: "1rem ",
                                  xl: "1.5rem",
                                },
                              }}
                            >
                              {feature.title}
                            </Typography>
                          )}
                        </Box>
                        <Typography
                          mb={1}
                          ml={3}
                          sx={{
                            textAlign: "justify",
                            fontSize: {
                              xs: "0.75rem",
                              md: "1rem ",
                              xl: "1.2rem",
                            },
                          }}
                        >
                          {feature.text}
                          {feature.table1 && <Table1 />}
                          {feature.table2 && <Table2 />}
                          {feature.point && (
                            <List>
                              {feature.points.map((text, index) => (
                                <ListItem
                                  alignItems="flex-start"
                                  sx={{ display: "flex" }}
                                >
                                  <Typography
                                    mr={2}
                                    sx={{
                                      fontSize: {
                                        xs: "0.75rem",
                                        md: "1rem ",
                                        xl: "1.2rem",
                                      },
                                    }}
                                  >
                                    {String.fromCharCode(startIndex + index)}.
                                  </Typography>
                                  <Typography
                                    sx={{
                                      textAlign: "justify",
                                      fontSize: {
                                        xs: "0.75rem",
                                        md: "1rem ",
                                        xl: "1.2rem",
                                      },
                                    }}
                                  >
                                    {text.text}
                                  </Typography>
                                </ListItem>
                              ))}
                            </List>
                          )}
                        </Typography>
                      </Box>
                    </ListItem>
                  ))}
                </List>
              </Typography>
            </ListItem>
          ))}
        </List>
        <List>
          <ListItem>
            <Typography
              ml={20}
              sx={{
                fontSize: {
                  xs: "0.75rem",
                  md: "1rem ",
                  xl: "1.2rem",
                },
              }}
            >
              Term1 Fee - by <b>cash or cheque 15th March 20------</b>
            </Typography>
          </ListItem>
          <ListItem>
            <Typography
              ml={20}
              sx={{
                fontSize: {
                  xs: "0.75rem",
                  md: "1rem ",
                  xl: "1.2rem",
                },
              }}
            >
              Term 2 Fee - by a <b>PDC </b> dated <b>15th August 20--------</b>
            </Typography>
          </ListItem>
          <ListItem>
            <Typography
              ml={20}
              sx={{
                fontSize: {
                  xs: "0.75rem",
                  md: "1rem ",
                  xl: "1.2rem",
                },
              }}
            >
              Term 3 Fee- by a <b>PDC</b> dated <b>15th November 20-----</b>
            </Typography>
          </ListItem>
        </List>
      </Box>
    </Container>
  );
};

export default Conditions;
