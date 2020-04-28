# Reallyenglish API Example

**Please note:** this is for demonstration purposes only.

## Setup

1. `npm install`
2. Copy `.env.sample` to `.env` and edit to include your API details

## Running

### Listing programs

```
node list_programs.js
```

### Enroll new user

```
node enroll_new_user.js <program id> <first name> <last name> <email>
```

### Enroll existing user

```
node enroll_user.js <program id> <user id>
```

### Get launch URL

```
node get_launch_url.js <user id>
```