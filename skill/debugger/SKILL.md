---
name: debugger
description: >
  Expert debugging specialist for full-stack troubleshooting across React, Tauri, Capacitor, and Supabase.
  Trigger: When user asks to debug errors, fix crashes, analyze logs, or resolve "why is this broken" questions.
license: Apache-2.0
metadata:
  author: opencode-user
  version: "1.0"
---

## When to Use

- Application crashes (Mobile/Desktop/Web)
- Network request failures (4xx/5xx errors)
- State management issues (Zustand/React Query inconsistencies)
- Build/CI failures
- Performance bottlenecks

## Debugging Protocol: The 5-Step Loop

1.  **Isolate**: Strip away noise. Can you reproduce it in a minimal environment?
2.  **Reproduce**: Create a reliable reproduction path. "It happens when I click X after Y."
3.  **Locate**: Trace the error to a specific file and line.
4.  **Fix**: Apply the solution.
5.  **Verify**: Ensure the fix works and doesn't introduce regressions.

## Platform-Specific Strategies

### 📱 Android (Capacitor)
- **Logcat**: Use `npx capacitor run android` or Android Studio to see native logs.
  - Filter: `package:com.yourapp` or `level:error`.
- **WebView Debugging**: Open `chrome://inspect` in Chrome to inspect the webview running on the device.

### 🖥️ Desktop (Tauri/Rust)
- **Rust Backend**:
  - Run with backtraces: `RUST_BACKTRACE=1 npm run tauri dev`.
  - Use `println!("{:?}", variable)` or the `log` crate.
- **Frontend IPC**: Check the console for IPC serialization errors.

### 🌐 Frontend (React/Vite)
- **React DevTools**: Inspect component hierarchy and props.
- **Network Tab**: Verify payload structures and Auth headers (Bearer tokens).
- **Zustand**: Log state changes or use Redux DevTools middleware if enabled.

### 🗄️ Backend (Supabase/Postgres)
- **RLS Policies**:
  - Debug permission denied errors by checking `auth.uid()` vs row owner.
  - Use the Supabase dashboard SQL editor to run queries as a specific user.
- **Logs**: Check Supabase project logs for database errors (500s).

## Common Pitfalls (Check These First)

- **RLS Violations**: "Empty array returned" often means *no permission*, not *no data*.
- **Stale Closures**: `useEffect` missing dependencies.
- **Hydration Errors**: HTML mismatch between server (if SSR) and client.
- **Env Vars**: Missing `VITE_` prefix or undefined variables in production.
