'use client';

import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { fetchUsers } from '@/redux/features/users/usersThunks';
import { setFilteredUserId } from '@/redux/features/posts/postsSlice';

const UserFilter: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items: users, status, error } = useAppSelector(state => state.users);
  const filteredUserId = useAppSelector(state => state.posts.filteredUserId);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUsers());
    }
  }, [status, dispatch]);

  const handleUserChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const userId = e.target.value ? Number(e.target.value) : null;
    dispatch(setFilteredUserId(userId));
  };

  if (status === 'loading') return <div className="text-center py-4">Cargando...</div>;
  if (status === 'failed') return <div className="text-center text-red-500 py-4">Error : {error}</div>;

  return (
    <div className="mb-6">
      <label htmlFor="user-filter" className="block text-md font-medium text-slate-700 mb-4">
        Filtrar por usuario
      </label>
      <select
        id="user-filter"
        value={filteredUserId || ''}
        onChange={handleUserChange}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
      >
        <option className='text-slate-600' value="">Usuarios</option>
        {users.map((user) => (
          <option key={user.id} value={user.id} className='text-slate-600'>
            {user.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default UserFilter;