import { useState, useCallback } from 'react';

const CSRF_TOKEN = import.meta.env.VITE_CSRF_TOKEN || 'default-csrf-token';

export function useCSRF() {
  const [token] = useState(CSRF_TOKEN);

  const addCSRFToken = useCallback((headers: HeadersInit) => {
    if (headers instanceof Headers) {
      headers.set('X-CSRF-Token', token);
    } else if (Array.isArray(headers)) {
      headers.push(['X-CSRF-Token', token]);
    } else {
      (headers as Record<string, string>)['X-CSRF-Token'] = token;
    }
    return headers;
  }, [token]);

  const validateCSRFToken = useCallback((receivedToken: string) => {
    return receivedToken === token;
  }, [token]);

  return { token, addCSRFToken, validateCSRFToken };
}