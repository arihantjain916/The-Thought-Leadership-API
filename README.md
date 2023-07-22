# The Thought Leadership API
The Thought Leadership API is a server-side application that provides the necessary functionality to support a social media platform. It handles user authentication, user profiles, posts, comments, likes, and follows. The backend interacts with a database to store and retrieve user data and social interactions.

## Key Features:

- **User Authentication** : Users can register, log in, and log out of the platform. Passwords are securely hashed and stored in the database.

- **User Profiles**: Each user has a profile containing basic information such as name, username, email, and profile picture.

- **Post Creation and Retrieval**: Users can create new posts with text, images, or videos. They can also retrieve their own posts and view posts from other users.

- **Comments and Likes**: Users can comment on posts and like them. The number of likes and comments for each post is tracked.

- **Follow System**: Users can follow other users to see their posts in their feed. The feed displays the latest posts from followed users.

- **Search Functionality**: Users can search for other users and posts based on keywords or hashtags.

- **Security**: The backend ensures secure communication, protects against common web vulnerabilities (e.g., SQL injection, XSS), and implements authentication and authorization mechanisms to control access to certain endpoints.
## Tech Stack

**Server:** Node, Express  
**Database:** MongoDB

