<template>
  <div class="tags">
    <div class="new">
      <Button @click.native="createTag">新增标签</Button>
    </div>
    <ul class="current">
      <li v-for="tag in tagList" :key="tag.id">
        <div class="dtags" @click="toggle(tag)"
             :class="{selected:selectedTags.indexOf(tag)>=0}">
          {{ tag.name }}
        </div>
      </li>
    </ul>
  </div>

</template>

<script lang="ts">

import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Button from '@/components/Button.vue';

@Component({
  components: {Button},
})
export default class Tagss extends Vue {
  selectedTags: string[] = [];

  get tagList() {
    return this.$store.state.tagList;
  }

  created() {
    this.$store.commit('fetchTags');
  }

  toggle(tag: string) {
    const index = this.selectedTags.indexOf(tag);
    if (index >= 0) {
      this.selectedTags.splice(index, 1);
    } else {
      this.selectedTags.push(tag);
    }
    this.$emit('update:value', this.selectedTags);
  }

  createTag() {
    const name = window.prompt('请输入标签名！');
    if (!name) {
      return window.alert('标签名不能为空！');
    }
    this.$store.commit('createTag', name);
    if(this.$store.state.createTagError){
      if(this.$store.state.createTagError.message==='tag name duplicated'){
        window.alert('标签名重复');
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.tags {
  background: white;
  font-size: 14px;
  padding: 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column-reverse;

  > .current {
    display: flex;
    flex-wrap: wrap;
    flex-grow: 1;
    //border: 1px solid red;

    > li {
      $h: 24px;
      $bg: #d9d9d9;
      $bg2: #F0625A;
      //width: 20%;
      height: $h;

      .dtags {
        //border: 1px solid #333333;
        display: flex;
        justify-content: center;
        align-items: center;
        background: $bg;
        height: $h;
        border-radius: 12px;
        padding: 0 8px;
        margin: 10px;

        &.selected {
          background: $bg2;
          color: #fff;
        }
      }


    }
  }

  > .new {
    padding-top: 16px;

    button {
      background: transparent;
      border: none;
      color: #999;
      border-bottom: 1px solid;
      padding: 0 4px;
    }
  }
}
</style>

