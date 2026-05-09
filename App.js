import React, { useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";
import Header from "./components/Header";
import Filters from "./components/Filters";
import PriorityInbox from "./components/PriorityInbox";
import { fetchNotifications } from "./api";
const weightMap = {
Placement: 3,
Result: 2,
Event: 1,
};
export default function App() {
const [notifications, setNotifications] = useState([]);
const [filter, setFilter] = useState("");
useEffect(() => {
loadData();
}, [filter]);
const loadData = async () => {
const data = await fetchNotifications(50, 1, filter);
const sorted = data.sort((a, b) => {
if (weightMap[b.Type] !== weightMap[a.Type]) {
return weightMap[b.Type] - weightMap[a.Type];
}
return new Date(b.Timestamp) - new Date(a.Timestamp
});
setNotifications(sorted);
};
return (
<Container>
<Header />
<Filters setFilter={setFilter} />
<Grid container spacing={2}>
<Grid item xs={12} md={6}>
<PriorityInbox notifications={notifications.slice(0, 10)}
title="Priority Inbox" />
</Grid>
<Grid item xs={12} md={6}>
<PriorityInbox notifications={notifications} title="All
Notifications" />
</Grid>
</Grid>
</Container>
);
}

