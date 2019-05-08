# ReactBudget

ReactBudget is the all-in-one spending tracker and money management app . That brings together your bank accounts, credit cards, bills, and investments so you know where you stand. See what you’re spending, where you can save money, and track your bills

The progressive web app can work without internet wihe the data being synced with the server when internet is available

## Flow

1. Browser loads Progressive Web App's resources from the web server.
2. User interacts with the web app.
3. Data is persisted to localStorage with redux-persist.
4. Data is synced with Nodejs backend

## Key concepts

ReactBudget is the all-in-one spending tracker and money management app . That brings together your bank accounts, credit cards, bills, and investments so you know where you stand. See what you’re spending, where you can save money, and track your bills

So what sets this app apart? Its Offline First architecture. The Offline First approach plans for the most constrained network environment first, enabling a great user experience even while the device is offline or has only an intermittent connection, and providing progressive enhancement as network conditions improve. This design also makes the app incredibly performant (fast!) on the best of networks.

**Data stays reliably on your device, even while it's offline.**
Persistence of the data entered by the user is achieved using the in-browser localStorage. This will allow your data to survive between sessions and when disconnected from the network. (Whether you remember that you need juice while you're on your trusty home Wi-Fi or in the middle of the wilderness, you can still manage your finances.)

**Data syncs between devices when a connection is available.**
When a connection is available, the data is synced from the local device to a MongoDb in the cloud, and can thus be shared across multiple devices or users. (Need to access your data on both your phone and your laptop? No problem!)

**The app loads quickly, even while offline.**
To keep the app itself functional while offline, a Service Worker is used to cache page resources (the most important HTML, CSS, and JavaScript files) when the web application is first visited. Each device must have a connection for this first visit, after which the app will be fully functional even while offline or in shoddy network conditions. (No more error messages or frustratingly slow page loads.)

**The app can be installed on a mobile device.**
In combination with the Service Worker used for caching, a manifest file containing metadata allows the app to become a Progressive Web App, an enhanced website that can be installed on a mobile device and can then be used with or without an internet connection. (It's secretly still a website, but you can access it through one of those handy dandy little app icons on your homescreen!)

Explore the code in this GitHub repository to see how the Offline First design is applied.

## Live demo

To see this app in action without installing anything, simply visit https://lakeside213.github.io/ReactBudget/ in a web browser or on a mobile device(preferably android to see the progressive web app features).
