import { Directive, ElementRef, OnInit } from '@angular/core';

export type supportedExtensions = 'fbx' | 'gltf' | 'glb' | 'dxf' | 'json'

@Directive({
  selector: '[appAcceptFiles]',
  standalone: true
})
export class AcceptFilesDirective implements OnInit {
  constructor(private el: ElementRef) { }
  ngOnInit() {
    this.el.nativeElement.setAttribute('accept', '.fbx, .gltf, .glb, .dxf, .json');
  }
}