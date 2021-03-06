import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from "@/view/demo4";
import page2 from '@/view/page2';
import page3 from '@/view/page3';
import page4 from '@/view/page4';
import page5 from '@/view/page5';
import page6 from '@/view/page6';
import page7 from '@/view/page7';
import page8 from '@/view/page8';

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Index',
      component: Index
    }, {
      path: '/page2',
      name: 'page2',
      component: page2
    }, {
      path: '/page3',
      name: 'page3',
      component: page3
    },
    {
      path: '/page4',
      name: 'page4',
      component: page4
    },
    {
      path: '/page5',
      name: 'page5',
      component: page5
    },
    {
      path: '/page6',
      name: 'page6',
      component: page6
    },
    {
      path: '/page7',
      name: 'page7',
      component: page7
    },
    {
      path: '/page8',
      name: 'page8',
      component: page8
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
