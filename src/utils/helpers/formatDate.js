export function formatTimestamp(timestamp) {
    const date = new Date(timestamp.seconds * 1000);

    const options = {
        timeZone: "Asia/Manila",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
        timeZoneName: "short",
    };

    const formattedDate = date.toLocaleString("en-US", options);

    return formattedDate;
}
