<template>
  <div class="trix-wrapper">
    <div ref="trixContainer" :id="id">
      <trix-editor :input="inputId" :placeholder="placeholder"></trix-editor>
    </div>
  </div>
</template>

<script>
  import * as Trix from 'trix'
  import 'trix/dist/trix.css'

  export default {
    name: 'trix-vue',
    directives:{
        'trix-editor-options':{
            bind(el, binding, vnode) {
                  var _node = (el.className.indexOf('trix-wrapper') + 1)
                                ? el.getElementsByTagName('trix-editor')[0]
                                : el,
                      _editor = node.editor;
                  
                  if((binding.arg
                    && binding.arg === 'readonly')
                      || binding.value.readonly === true){
                        _node.contentEditable = false;
                        _node.parentNode.classList.add("trix-disabled");
                  }
                  
                  if(binding.value.attachments instanceof Object){
                    Trix.config.attachments.preview.caption = binding.attachments.preview.caption; /*{
                      name: false,
                      size: false
                  };*/

                  let eventCallback = function(event) {
                        var payload;
                        if(event.attachment){
                            if (event.attachment.file) {
                                  payload = {
                                    file:event.attachment.file,
                                    type:event.type,
                                    target:_editor
                                  };
                            }
                        }else if(event.type){
                            payload = {
                                type:event.type,
                                target:_editor
                            };
                        }
                        
                        if(typeof binding.value === 'function'){
                            return binding.value(payload);
                        }else if(typeof (binding.value.events[event.type]) === 'function'){
                            return binding.value.events[event.type](payload);
                        }
                  }
                  
                  if((binding.arg && binding.arg === 'events')
                      || binding.value.events instanceof Object){
                      var _events = (binding.arg === 'events')? binding.value : binding.value.events;
                      for(let event of _events){
                          switch(event){ 
                              case 'trix-attachment-add':
                              case 'trix-attachment-remove':
                              case 'trix-selection-change':
                              case 'trix-change':
                              case 'trix-initialize':
                              case 'trix-focus':
                              case 'trix-blur':
                                    document.addEventListener(event, eventCallback);
                              break;
                              default:
                              break;
                          }
                      }
                  }
                  
                  if((binding.arg && binding.arg === 'savestatekey')
                    || typeof binding.value.savestatekey === 'string'){
                      var _key = (binding.arg === 'savestatekey')
                      ? binding.value 
                      : binding.value.savestatekey;
                      
                      _editor.loadJSON(
                          JSON.parse(window.localStorage[_key])
                       || '{}');
                  }
            }
        }
    },
    props: {
      id: {
        type: String,
        default: 'trix-container'
      },
      inputId: {
        type: String,
        default: ''
      },
      placeholder:{
        type: String,
        default:'Start typing...'
      }
    },

    data() {
      return {
      
      }
    },

    methods: {
        
    }
  }
</script>

<style scoped>
  #trix-container {
      width:auto !important;
      min-height:200px;
  }
  
  .trix-disabled .trix-editor, 
  .trix-disabled .trix-toolbar {
      pointer-events: none;
  }

  .trix-disabled .trix-toolbar {
      opacity:0.45;
  }
</style>
