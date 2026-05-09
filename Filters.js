import React from "react";
import { FormControl, InputLabel, Select, MenuItem, Box } from "@mui/material";
export default function Filters({ setFilter }) {
return (
<Box mb={3}>
<FormControl fullWidth>
<InputLabel>Filter by Type</InputLabel>
<Select defaultValue="" onChange={(e) => setFilter(e.target.value)}>
<MenuItem value="">All</MenuItem>
<MenuItem value="Placement">Placement</MenuItem>
<MenuItem value="Result">Result</MenuItem>
<MenuItem value="Event">Event</MenuItem>
</Select>
</FormControl>
</Box>
);
}
