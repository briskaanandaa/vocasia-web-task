const API_URL = "http://localhost:8080/api/users";

export async function loginUser(email, password) {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Login failed");
    }

    return data;
  } catch (error) {
    console.error("Error logging in:", error);
    throw new Error("Failed to log in, please try again later.");
  }
}

export async function getUserProfile(token) {
  try {
    const response = await fetch(`${API_URL}/profile`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to fetch profile");
    }

    return data.data;
  } catch (error) {
    console.error("Error fetching user profile:", error);
    throw new Error("Unable to retrieve profile, please try again.");
  }
}

export async function updateUserProfile(token, profileData) {
  try {
    const response = await fetch(`${API_URL}/profile`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(profileData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to update profile");
    }

    return data;
  } catch (error) {
    console.error("Error updating user profile:", error);
    throw new Error("Unable to update profile, please try again.");
  }
}
