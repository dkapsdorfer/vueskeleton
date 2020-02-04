const ROLE_SUPER_ADMIN = 'ROLE_SUPER_ADMIN'

const routes = [
  {
    path: 'rubric/:id/edit',
    component: () => import('../views/rubric/RubricEditView'),
    name: 'rubric_edit',
    meta: {
      description: 'Rubric edit',
      requiresAuth: true,
      requiredRoles: [
        ROLE_SUPER_ADMIN
      ]
    }
  },
  {
    path: 'rubric/new',
    component: () => import('../views/rubric/RubricNewView'),
    name: 'rubric_new',
    meta: {
      description: 'Rubric new',
      requiresAuth: true,
      requiredRoles: [
        ROLE_SUPER_ADMIN
      ]
    }
  },
  {
    path: 'rubric',
    component: () => import('../views/rubric/RubricListView'),
    name: 'rubric_list',
    meta: {
      description: 'Rubric list',
      requiresAuth: true,
      requiredRoles: [
        ROLE_SUPER_ADMIN
      ]
    }
  }
]

export default routes
