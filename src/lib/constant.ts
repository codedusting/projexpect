export const WEBSOCKET_CHAT_RESPONSE_THINKING = "THINKING";
export const WEBSOCKET_CHAT_RESPONSE_FAILED = "FAILED";
export const WEBSOCKET_CHAT_RESPONSE_COMPLETED = "COMPLETED";

export const PROJECT_STATUS_CHAT_PROGRESS = "CHAT_PROGRESS";
export const PROJECT_STATUS_ESTIMATION_PROGRESS = "ESTIMATION_PROGRESS";
export const PROJECT_STATUS_COMPLETED = "COMPLETED";
export const PROJECT_STATUS_FAILED = "FAILED";

export const BACKEND_CHAT_STATUS_DONE = "DONE";
export const FRONTEND_CHAT_STATUS_SKIP = "SKIP";

/**
 * - take id and call project creation api
 * - WEBSOCKET_CHAT_RESPONSE_THINKING shows up till response is received
 * - check if failed or completed
 * - if failed, reload to create new project with the same query id
 * - if completed, show the Markdown repsonse to the user with options
 * - user can choose the option to be send to backend again as a chat or type message and send that to backend
 * - again THINKING shows up till response is received
 * - if DONE, show ESTIMATION_PROGRESS
 */
