import { generateId } from '@/logic/generateId'
import { NavLink } from 'react-router-dom'

const paths = [
  {
    id: generateId(),
    name: 'Inicio',
    path: '/'
  },
  {
    id: generateId(),
    name: 'Entradas',
    path: '/entradas'
  },
  {
    id: generateId(),
    name: 'Alquiler de Stands',
    path: '/stands'
  },
  {
    id: generateId(),
    name: 'Ayuda',
    path: '/ayuda'
  },
  {
    id: generateId(),
    name: 'Contacto',
    path: '/contacto'
  },
  {
    id: generateId(),
    name: 'Iniciar Sesion',
    path: '/login'
  }
]

export const MenuRoutes = () => paths.map(path =>
  <NavLink
    className={({ isActive }) => isActive
      ? 'text-text-color-terciary hover:underline hover:underline-offset-4'
      : 'text-text-color-secondary hover:underline hover:underline-offset-4'}
    key={path.id}
    to={path.path}
  >
    {path.name}
  </NavLink>)
