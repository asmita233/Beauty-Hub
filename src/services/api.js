const API_BASE = "http://localhost:8080";

/**
 * Generic fetch wrapper with error handling
 */
async function apiRequest(endpoint, options = {}) {
  const token = localStorage.getItem("token");
  
  const headers = {
    "Content-Type": "application/json",
    ...options.headers,
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  try {
    const response = await fetch(`${API_BASE}${endpoint}`, {
      ...options,
      headers,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Something went wrong");
    }

    return data;
  } catch (error) {
    console.error(`API Error [${endpoint}]:`, error);
    throw error;
  }
}

// ==========================================
// Auth APIs
// ==========================================
export const authApi = {
  login: (credentials) =>
    apiRequest("/auth/login", {
      method: "POST",
      body: JSON.stringify(credentials),
    }),
};

// ==========================================
// Services APIs (Public)
// ==========================================
export const servicesApi = {
  getAll: () => apiRequest("/services"),
};

// ==========================================
// Categories APIs (Public)
// ==========================================
export const categoriesApi = {
  getAll: () => apiRequest("/categories"),
};

// ==========================================
// Courses APIs (Public)
// ==========================================
export const coursesApi = {
  getAll: () => apiRequest("/courses"),
};

// ==========================================
// Bookings APIs (Public)
// ==========================================
export const bookingsApi = {
  bookService: (data) =>
    apiRequest("/book-service", {
      method: "POST",
      body: JSON.stringify(data),
    }),
  bookCourse: (data) =>
    apiRequest("/book-course", {
      method: "POST",
      body: JSON.stringify(data),
    }),
  getMyServiceBookings: (clientName, phone) =>
    apiRequest(`/my-service-bookings?clientName=${encodeURIComponent(clientName)}&phone=${encodeURIComponent(phone)}`),
  getMyCourseBookings: (clientName, phone) =>
    apiRequest(`/my-course-bookings?clientName=${encodeURIComponent(clientName)}&phone=${encodeURIComponent(phone)}`),
  cancelService: (bookingId) =>
    apiRequest(`/cancel-service/${bookingId}`, { method: "DELETE" }),
  cancelCourse: (bookingId) =>
    apiRequest(`/cancel-course/${bookingId}`, { method: "DELETE" }),
};

// ==========================================
// Certificates APIs (Public)
// ==========================================
export const certificatesApi = {
  getAll: () => apiRequest("/certificates"),
};

// ==========================================
// Success Students APIs (Public)
// ==========================================
export const successStudentsApi = {
  getAll: () => apiRequest("/success-students"),
};
