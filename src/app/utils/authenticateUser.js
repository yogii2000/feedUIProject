export const authenticateUser = async (username, password) => {

    const response = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(username,password),
    });
    if (!response.ok) {
      throw new Error('Failed to create a new post');
    }
    return response.json();
  };