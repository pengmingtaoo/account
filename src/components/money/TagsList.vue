<!--<template>-->
<!--  <ul class="tags" :class="{[classPrefix+'-tags']:classPrefix}">-->
<!--&lt;!&ndash;    <li v-for="tag in tagList" :key="tag" @click="select(tag)" class="tags-item" :class="{[classPrefix+'-tags-item']: classPrefix}">&ndash;&gt;-->
<!--&lt;!&ndash;      <div class="tags-item-icon" :class="{'selected': tag.name === selectedTag.name, [classPrefix+'-tags-item-icon']: classPrefix}">&ndash;&gt;-->
<!--&lt;!&ndash;        <Icon :name='tag.name' />&ndash;&gt;-->
<!--&lt;!&ndash;      </div>&ndash;&gt;-->
<!--&lt;!&ndash;      <span>{{tag.value}}</span>&ndash;&gt;-->
<!--&lt;!&ndash;    </li>&ndash;&gt;-->
<!--&lt;!&ndash;    <li v-if="dynamic" class="tags-item">&ndash;&gt;-->
<!--&lt;!&ndash;      <div class="tags-item-icon" @click="add">&ndash;&gt;-->
<!--&lt;!&ndash;        <Icon name="add" />&ndash;&gt;-->
<!--&lt;!&ndash;      </div>&ndash;&gt;-->
<!--&lt;!&ndash;      <span>添加</span>&ndash;&gt;-->
<!--&lt;!&ndash;    </li>&ndash;&gt;-->
<!--  </ul>-->
<!--</template>-->

<!--<script lang="ts">-->
<!--import Vue from 'vue';-->
<!--import {Component, Prop} from 'vue-property-decorator';-->



<!--@Component-->
<!--export default class TagList extends Vue {-->
<!--  @Prop(String) classPrefix?: string;-->
<!--  // eslint-disable-next-line no-undef-->
<!--  @Prop({required: true,type: Object}) selectedTag!: TagItem;-->
<!--  @Prop({required: true,default: false}) dynamic!: boolean;-->
<!--  // eslint-disable-next-line no-undef-->
<!--  @Prop({required: true,type: Array}) tagList!: TagItem[];-->

<!--  // eslint-disable-next-line no-undef-->
<!--  select(tag: TagItem){-->
<!--    this.$emit('update:selectedTag',tag);-->
<!--  }-->

<!--  add(){-->
<!--    this.$router.replace('/tags');  //TODO-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style lang="scss" scoped>-->
<!--.tags {-->
<!--  padding: 16px;-->
<!--  display: flex;-->
<!--  flex-direction: row;-->
<!--  flex-wrap: wrap;-->
<!--  align-content: flex-start;-->
<!--  overflow: auto;-->
<!--  &-item {-->
<!--    width: 25%;-->
<!--    padding: 12px 0;-->
<!--    font-size: 12px;-->
<!--    display: flex;-->
<!--    flex-direction: column;-->
<!--    align-items: center;-->
<!--    &-icon {-->
<!--      width: 48px;-->
<!--      height: 48px;-->
<!--      padding: 4px;-->
<!--      border-radius: 50%;-->
<!--      background: #f5f5f5;-->
<!--      margin-bottom: 4px;-->
<!--      display: flex;-->
<!--      flex-direction: column;-->
<!--      justify-content: center;-->
<!--      align-items: center;-->
<!--      &.selected {-->
<!--        background: #F0625A;-->

<!--        svg {-->
<!--          width: 30px;-->
<!--          height: 30px;-->
<!--          color:white-->
<!--        }-->
<!--      }-->
<!--      svg {-->
<!--        width: 30px;-->
<!--        height: 30px;-->
<!--        color:rgb(128, 130, 131)-->
<!--      }-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</style>-->