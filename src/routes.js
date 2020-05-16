import HomeView from '@/components/HomeView'
import EventsView from '@/components/EventsView'
import MyDesignView from '@/components/MyDesignView'
import PreferencesView from '@/components/PreferencesView'
import AddFormView from '@/components/AddFormView'

const routes = [
    {
      path: '/',
      component: HomeView,
      children: [
        {
          path: '/',
          name: 'events',
          component: EventsView
        },     
        {
          path: 'mydesign',
          component: MyDesignView
        },    
        {
          path: 'mydesign/:id/:type?',
          component: PreferencesView,
          props: { default: true }
        }
    ]},
    {
      path: '/add',
      name: 'AddForm',
      component: AddFormView
    }
]

export default routes