import fetch from "node-fetch";

const url = "https://flag-gilt.vercel.app/api/challenge";
const bearerToken = "uM0M7uypyeeHZ741XIrs9KsFOUEhxUdtXJA=";

const options = (cursor) => ({
  method: "POST",
  headers: {
    Authorization: `Bearer ${bearerToken}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ cursor }),
});

const getFlag = async () => {
  let cursor = null;
  let flagFound = false;

  while (!flagFound) {
    const response = await fetch(url, options(cursor));
    const data = await response.json();

    console.log("Full Response:", data);

    if (data.flag) {
      console.log("Flag:", data.flag);
      flagFound = true;
    } else if (data.nextCursor) {
      cursor = data.nextCursor;
    } else {
      console.log("No more cursors. Process ended.");
      break;
    }
  }
};

getFlag();
