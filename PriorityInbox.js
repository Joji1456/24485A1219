import React from "react";
import { Typography } from "@mui/material";
import NotificationCard from "./NotificationCard";
export default function PriorityInbox({ notifications, title }) {
return (
<div>
<Typography variant="h5" gutterBottom>
{title}
</Typography>
{notifications.map((item) => (
<NotificationCard key={item.ID} item={item} />
))}
</div>
);
}
