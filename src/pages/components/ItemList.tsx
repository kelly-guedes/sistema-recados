import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Box } from "@mui/material";

export default function ItemList() {
  const [todos, setTodos] = useState([]);
  return (
    <List sx={{ bgcolor: "background.paper", marginTop: "1em" }}>
      return (
      {todos.map((todo) => (
        <Box style={{ marginTop: "1em" }}>
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="comments">
                <DeleteForeverIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton role={undefined} dense>
              <ListItemIcon>
                <Checkbox edge="start" tabIndex={-1} disableRipple />
              </ListItemIcon>
              <ListItemText primary={`Line item`} />
            </ListItemButton>
          </ListItem>
        </Box>
      ))}
      );
    </List>
  );
}
