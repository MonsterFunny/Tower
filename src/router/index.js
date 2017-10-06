import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/login'
import Team from '@/components/team/team'
import TeamDetail from '@/components/team-detail/team-detail'
import User from '@/components/user/user'
import Mission from '@/components/mission/mission'
import Project from '@/components/project/project'
import Dynamic from '@/components/dynamic/dynamic'
import Calendar from '@/components/calendar/calendar'
import More from '@/components/more/more'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    // {
    //   path: '/team',
    //   name: 'Team',
    //   component: Team
    // },
    {
      path: '/user/:id',
      name: 'User',
      component: User,
      children: [
        {
          path: 'team',
          name: 'Team',
          component: Team
        },
        {
          path: 'team/:team_id',
          name: 'TeamDetail',
          component: TeamDetail,
          children: [
            {
              path: 'mission',
              name: 'Mission',
              component: Mission
            },
            {
              path: 'project',
              name: 'Project',
              component: Project
            },
            {
              path: 'dynamic',
              name: 'Dynamic',
              component: Dynamic
            },
            {
              path: 'calendar',
              name: 'Calendar',
              component: Calendar
            },
            {
              path: 'more',
              name: 'More',
              component: More
            }
          ]
        }
        // {
        //   path: 'mission',
        //   name: 'Mission',
        //   component: Mission
        // },
        // {
        //   path: 'project',
        //   name: 'Project',
        //   component: Project
        // },
        // {
        //   path: 'dynamic',
        //   name: 'Dynamic',
        //   component: Dynamic
        // },
        // {
        //   path: 'calendar',
        //   name: 'Calendar',
        //   component: Calendar
        // },
        // {
        //   path: 'more',
        //   name: 'More',
        //   component: More
        // }
      ]
    }
/*
    {
      path: '/mission',
      name: 'Mission',
      component: Mission
    },
    {
      path: '/project',
      name: 'Project',
      component: Project
    },
    {
      path: '/dynamic',
      name: 'Dynamic',
      component: Dynamic
    },
    {
      path: '/calendar',
      name: 'Calendar',
      component: Calendar
    },
    {
      path: '/more',
      name: 'More',
      component: More
    }
*/
  ]
})
