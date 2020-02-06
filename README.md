# 100 Worte IFrame Integration

This javascript module allows communication between a host application and the Augmented Writing Integration of 100 Worte in an IFrame. The 100 Worte UI is able to send the text from Augmented Writing to the parent window and can receive the values to display from the parent.

## IFrame optimized UI

The UIs which are optimized for the IFrame and should be used as IFrame source can be found at:

- `/dashboard/integration/augmented-writing-c` - Augmented Writing Customer Intelligence
- `/dashboard/integration/augmented-writing-ti` - Augmented Writing Talent Intelligence
- `/dashboard/integration/augmented-writing-b` - Augmented Writing Brand Intelligence

## Integration

The basic usage is shown in the `index.html` file as an example. It represents the host application in a real life application.

The minified file can be directly imported into the parent page.
```html
<script type="text/javascript" src="./dist/100worte-iframe-host.min.js"></script>
```

It provides two basic functions to listen for and to send messages.

| Function name | Description |
|----------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| subscribeTextListener | Attaches an event listener to the current window that listens for messages sent by the IFrame client. It takes a callback as an attribute that receives the text from Augmented Writing |
| sendAugmentedWritingResult | Sends a message with the returned result values from the API to the client. Those values are then visualised in the client IFrame. Input attributes are the response object as well as the reference to the IFrame HTML-element. |

## Workflow

1. User enters text in the Augmented Writing UI and presses the "Analyze" button
2. The entered text is sent to the parent window and calls the callback that was passed to `subscribeTextListener`
3. The parent application calls the 100 Worte-API with the received text
4. The parent application uses the response from the API call and passes it to the child using `sendAugmentedWritingResult`
5. The Augmented Writing UI displays the Highlights, Scores and Sidebar Notes
