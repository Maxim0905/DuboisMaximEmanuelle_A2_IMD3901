"use strict"

AFRAME.registerComponent('rock', {
    init: function(){
      console.log('rock-instantiated');
      let el = this.el;
   
      this.addMarker = function(e){
       let p = e.detail.intersection.point;
        let scene = document.querySelector('a-scene');
   
        let newMark = document.createElement('a-sphere');
        newMark.setAttribute('material', 'color: #808487');
        newMark.setAttribute('radius', '0.5');
        newMark.setAttribute('position', (Math.random() * -10) + " 0.5 " + (Math.random() * -10));
        newMark.setAttribute('destroyrock', {});
        scene.appendChild(newMark);
        }
   
        this.el.addEventListener('click', this.addMarker);
      },
      remove: function(){
        this.el.removeEventListener('click', this.addMarker);
      }
  });