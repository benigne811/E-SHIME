/// <reference types="vite/client" />

export const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:5000";
export const SOCKET_BASE = import.meta.env.VITE_SOCKET_BASE || API_BASE;