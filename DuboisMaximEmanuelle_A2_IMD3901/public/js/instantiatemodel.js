"use strict"

AFRAME.registerComponent('instantiatemodel', {
    init: function(){
      let el = this.el;
 
      this.addMarker = function(e){
        let scene = document.querySelector('a-scene');

        let newMark = document.createElement('a-entity');
        newMark.setAttribute('id', 'tree_model');
        newMark.setAttribute('response-type', 'arraybuffer');
        newMark.setAttribute('gltf-model', '#tree_model');
        //newMark.setAttribute('material', '#tree_map');
        newMark.setAttribute('position', '3 0 -6');
        newMark.setAttribute('scale', '0.01 0.01 0.01');
        newMark.setAttribute('grabbable', {});
        newMark.setAttribute('droppable', {});
        scene.appendChild(newMark);

        console.log("instantiate tree");
        }
 
        this.el.addEventListener('click', this.addMarker);
      },
      remove: function(){
        this.el.removeEventListener('click', this.addMarker);
      }
  });

  const onClick = (event) => {
                if(event.srcElement.id == 'universal_button_3'){
                  console.log("tree destroyed");
                  document.getElementById("tree_model").parentElement.removeChild(document.getElementById("tree_model"));
                      }
                    }
                window.addEventListener('click', onClick);