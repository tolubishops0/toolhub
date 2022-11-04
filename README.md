# toolhubb


Hello! 
This is an Outreachy OS project. It is titled : ToolHub, a community tool's catalog used across a lot of Wikimedia project. 

This project is a front-end web application for Toolhub records management, which is inspired by the ToolHub website. 


The application is a multipage which consist of the homepage/landing page, where a search functionality is implemented, a Leaderboard page to keep score of how much contributions uses have made so far and also a dashboard page, with metrics such as the Total number of Tools in the records, number of tools with missing information, percentage of tools with missing information compared with the total number of tools in the records, number of tools edited using this record management tool.

These metrics are displayed as separate cards to keep track of each change. Although no API is consumed in this application as all the data used are hardcoded (mock data).

On the dashboard page is a chart that is implemented with React-vis library, to et accurate co-ordinates and pricision. 

Also in the Application is error-handling (error 404) which loads when a user attempts to access a page that does not exist or simply boken in the application.

I hope to enable the project with support for unit testing in the future(very soon), I couldn't do this due to time constrainghts as the deadline is fast approaching.

React Icons, Routers, Routes, React-vis etc are used. 

The UI is responsive accross all devices!!

More updates to come both on designs an testing and other great stuff!!
