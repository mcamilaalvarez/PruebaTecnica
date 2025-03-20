import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './features/posts/postsSlice';
import usersReducer from './features/users/usersSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      posts: postsReducer,
      users: usersReducer,
    },
    // Configuraciones adicionales como middleware, etc.
  });
};

// Tipos inferidos del store para usar en toda la aplicación
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];