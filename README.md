# Data Booster Intern Challenge
<img width="903" alt="Ekran Resmi 2024-08-22 13 07 05" src="https://github.com/user-attachments/assets/f71eca62-3b3d-4795-b6ea-e20ce6bb78aa">

## Description

This project contains the solution for the Data Booster intern challenge. The task was to interact with an API to find a hidden flag by making a series of requests and following the cursor values.

## Solution

1. **Send Initial API Request:** An initial POST request was sent to the provided API endpoint.
2. **Use of Cursor:** The response included a "nextCursor" value which was used to make subsequent requests.
3. **Loop and Requests:** This process continued until a response without a "nextCursor" was received. Each response provided a new cursor value to use in the next request.
4. **Result:** Eventually, a response containing the flag was received. The flag is: **`FLAG{C0ngr4ts_Y0u_F0und_M3}`**.

## Running the Code

To run the code:

1. **Install Node.js and `node-fetch`:** First, install the `node-fetch` package:

    ```bash
    npm install node-fetch
    ```

2. **Execute the Code:** Run the code to obtain the result:

    ```bash
    node api_challenge.js
    ```

## Conclusion

When the code is executed, it will print out the flag contained in the final response. The successful solution message and the flag is: **`FLAG{C0ngr4ts_Y0u_F0und_M3}`**.
