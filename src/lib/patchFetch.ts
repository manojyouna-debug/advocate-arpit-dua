// Ensure window.fetch is writable and has a setter on all prototypes in the chain to avoid:
// "TypeError: Cannot set property fetch of #<Window> which has only a getter"
(function patchGlobalFetch() {
  try {
    const win =
      typeof window !== 'undefined'
        ? window
        : typeof globalThis !== 'undefined'
          ? (globalThis as unknown as Window)
          : null;
    if (!win) return;

    let _fetch = typeof win.fetch === 'function' ? win.fetch.bind(win) : null;

    const getFetch = () => _fetch;
    const setFetch = (val: typeof fetch) => {
      _fetch = val;
    };

    // 1. Walk full prototype chain of window
    let curr: object | null = win;
    while (curr) {
      try {
        const desc = Object.getOwnPropertyDescriptor(curr, 'fetch');
        if (desc) {
          Object.defineProperty(curr, 'fetch', {
            get: getFetch,
            set: setFetch,
            configurable: true,
            enumerable: true,
          });
        }
      } catch {
        // Ignore descriptor restrictions on protected prototypes
      }
      try {
        curr = Object.getPrototypeOf(curr);
      } catch {
        break;
      }
    }

    // 2. Explicitly patch Window.prototype if available
    if (typeof Window !== 'undefined' && Window.prototype) {
      try {
        Object.defineProperty(Window.prototype, 'fetch', {
          get: getFetch,
          set: setFetch,
          configurable: true,
          enumerable: true,
        });
      } catch {
        // Ignore if already patched or protected
      }
    }

    // 3. Explicitly define on window itself
    try {
      Object.defineProperty(win, 'fetch', {
        get: getFetch,
        set: setFetch,
        configurable: true,
        enumerable: true,
      });
    } catch {
      // Ignore
    }

    // 4. Also define on globalThis if distinct
    if (typeof globalThis !== 'undefined' && (globalThis as unknown) !== win) {
      try {
        Object.defineProperty(globalThis, 'fetch', {
          get: getFetch,
          set: setFetch,
          configurable: true,
          enumerable: true,
        });
      } catch {
        // Ignore
      }
    }
  } catch {
    // Top-level fail-safe
  }
})();

export {};
