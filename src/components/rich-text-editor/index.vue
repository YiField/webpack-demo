<template>
  <div class="rich-text-editor">
    <div class="menu-wrapper">
      <div class="menu-item" @click="fontBold($event)">加粗</div>
      <div class="menu-item" @click="textIndent($event)">缩进</div>
      <div class="menu-item" @click="insertHorizontalRule($event)">插入分隔符</div>
      <div class="menu-item" @click="linkUrl($event)">链接百度</div>
    </div>
    <div class="editor-area" contenteditable></div>
  </div>
</template>

<script>
export default {
  name: 'rich-text-editor',
  data() {
    return {};
  },
  mounted() {
    let $editArea = document.querySelector('.editor-area');
    $editArea.addEventListener('paste', e => {
      // 阻止默认的复制事件
      e.preventDefault();
      let txt = '';
      let range = null;
      // 获取复制的文本
      txt = e.clipboardData.getData('text/plain');
      // 获取页面文本选区
      range = window.getSelection().getRangeAt(0);
      // 删除默认选中文本
      range.deleteContents();
      // 创建一个文本节点，用于替换选区文本
      let pasteTxt = document.createTextNode(txt);
      // 插入文本节点
      range.insertNode(pasteTxt);
      // 将焦点移动到复制文本结尾
      range.collapse(false);
    });
  },
  methods: {
    fontBold(e) {
      console.log('fontbold', e);
      e.preventDefault();
      document.execCommand('bold');
    },
    textIndent(e) {
      console.log('textIndent');
      e.preventDefault();
      document.execCommand('indent');
    },
    insertHorizontalRule(e) {
      console.log('insertHorizontalRule');
      e.preventDefault();
      document.execCommand('inserthorizontalrule');
    },
    linkUrl(e) {
      console.log('linkUrl');
      e.preventDefault();
      document.execCommand('createlink', null, 'www.baidu.com');
    }
  }
};
</script>

<style lang="scss" scoped>
.rich-text-editor {
  .menu-wrapper {
    display: flex;
    .menu-item {
      flex: 1 1 auto;
      color: #000;
      margin: 0 10px;
      text-align: center;
      background-color: bisque;
    }
  }
  .editor-area {
    width: 100%;
    height: 500px;
    color: #fff;
    background-color: yellowgreen;
  }
}
</style>
