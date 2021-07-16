import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import App from '../src/App.vue';

describe('App', () => {
    it('creates an instance of the app', () => {
      const wrapper = shallowMount(App, {});
  
      expect(wrapper).toBeDefined();
    })
  })