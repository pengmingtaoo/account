import Vue from 'vue';
import Vuex from 'vuex';
import clone from '@/lib/clone';

import createId from '@/lib/idCreator';
import router from '@/router';
import {types} from 'sass';
import Error = types.Error;

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    recordList: [],
    createRecordError:null,
    createTagError:null,
    tagList: [],
    currentTag: undefined,
  } as RootState,

  mutations: {
    fetchTags(state) {
      state.tagList = JSON.parse(window.localStorage.getItem('tagList') || '[]');
      if (!state.tagList || state.tagList.length === 0) {
        store.commit('createTag', '衣');
        store.commit('createTag', '食');
        store.commit('createTag', '住');
        store.commit('createTag', '行');
      }
    },
    createTag: function (state, name: string) {
      const names = state.tagList.map(item => item.name);//names是把data里面的每一项name收集起来的集合
      if (names.indexOf(name) >= 0) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        state.createTagError = new Error('tag name duplicated');
        return;
      }
      //id生成器
      const id = createId().toString();
      state.tagList.push({id, name: name});
      store.commit('saveTags');
    },
    saveTags(state) {
      window.localStorage.setItem('tagList', JSON.stringify(state.tagList));
    },
    setCurrentTag(state, id: string) {
      //找到路由ID
      state.currentTag = state.tagList.filter(t => t.id === id)[0];
    },

    updateTag(state, {id, name}: { id: string, name: string }) {
      const idList = state.tagList.map(item => item.id);
      if (idList.indexOf(id) >= 0) {
        const nameList = state.tagList.filter((t) => t.id.toString() !== id.toString()).map(item => item.name);
        if (nameList.indexOf(name) >= 0) {
          window.alert('标签名重复');
          return 'duplicated';
        } else {
          const tag = state.tagList.filter(item => item.id === id)[0];
          tag.name = name;
          store.commit('saveTags');
        }
      }
    },
    removeTag(state, id: string) {
      let index = -1;
      for (let i = 0; i < state.tagList.length; i++) {
        if (state.tagList[i].id === id) {
          index = i;
          break;
        }
      }
      if (index >= 0) {
        state.tagList.splice(index, 1);
        store.commit('saveTags');
        router.back();
      } else {
        window.alert('删除失败');
      }
    },

    fetchRecords(state) {
      state.recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]') as RecordItem[];

    },

    saveRecords(state) {
      window.localStorage.setItem('recordList', JSON.stringify(state.recordList));
    },

    createRecord(state, record: RecordItem) {
      const deepClone = clone(record);
      deepClone.createdDate = new Date();
      state.recordList.push(deepClone);//更新数据
      store.commit('saveRecords');
    }
  },
});
export default store;