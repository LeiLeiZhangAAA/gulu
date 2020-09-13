import Vue from 'vue'
import Button from '/src/vue/button'
import Icon from '/src/vue/icon'
import ButtonGroup from '/src/vue/button-group'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)

new Vue({
    el: '.example',
    data() {
        return {
            loadingStatus1: false,
            loadingStatus2: false,
            loadingStatus3: false
        }
    }
})

import chai from 'chai'
import spies from 'chai-spies'

const expect = chai.expect
chai.use(spies)
//单元测试
{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            iconName: 'loding'
        }
    })
    vm.$mount()
    let use = vm.$el.querySelector('use')
    let href = use.getAttribute('xlink:href')
    expect(href).to.eq('#icon-loding')

    vm.$el.remove()
    vm.$destroy()

}


{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            iconName: 'setting',
            loading: true
        }
    }).$mount()
    let use = vm.$el.querySelector('use')
    let href = use.getAttribute('xlink:href')
    expect(href).to.eq('#icon-loding')

    vm.$el.remove()
    vm.$destroy()
}

{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            iconName: 'setting',
            loading: true,
            position: 'right'
        }
    }).$mount()
    let svg = vm.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq('2')

    vm.$el.remove()
    vm.$destroy()
}

{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            iconName: 'setting',
            loading: true
        }
    }).$mount()
    let spy = chai.spy(function (){})
    vm.$on('click', spy)
    let button = vm.$el
    expect(spy).to.have.been.called()

}