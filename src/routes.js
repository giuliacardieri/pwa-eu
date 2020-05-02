import HomeView from '@/components/HomeView'
import EventsView from '@/components/EventsView'
import MyDesignView from '@/components/MyDesignView'
import InterfaceElementsView from '@/components/InterfaceElementsView'
import ModalitiesView from '@/components/ModalitiesView'
import DisplayFormatView from '@/components/DisplayFormatView'
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
          path: 'mydesign/interfaceelements',
          component: InterfaceElementsView
        },
        {
          path: 'mydesign/modalities',
          component: ModalitiesView
        },
        {
          path: 'mydesign/displayformat',
          component: DisplayFormatView
        }
    ]},
    {
      path: '/add',
      name: 'AddForm',
      component: AddFormView
    }
]

export default routes