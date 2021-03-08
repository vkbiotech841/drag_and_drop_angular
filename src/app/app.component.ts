import { Component } from '@angular/core';
import { DragulaService } from 'ng2-dragula';


let personId = 0;

class Person {
  id: number;
  constructor(public name: string) {
    this.id = personId++;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'drag-and-drop-angular';

  vamps = [
    { name: "Bad Vamp" },
    { name: "Petrovitch the Slain" },
    { name: "Bob of the Everglades" },
    { name: "The Optimistic Reaper" }
  ];

  vamps2 = [
    { name: "Dracula" },
    { name: "Kurz" },
    { name: "Vladislav" },
    { name: "Deacon" }
  ];

  vamps3 = [
    { name: "Bad Vamp" },
    { name: "Petrovitch the Slain" },
    { name: "Bob of the Everglades" },
    { name: "The Optimistic Reaper" }
  ];

  vamps4 = [
    { name: "Dracula" },
    { name: "Kurz" },
    { name: "Vladislav" },
    { name: "Deacon" }
  ];


  left = [
    new Person('Steven'),
    new Person('Paula'),
    new Person('Persephone'),
    new Person('Jacob'),
  ];
  right = [
    new Person('Delia'),
    new Person('Jackson'),
  ];


  contentLeft = [
    { text: "VIKRAM 1", text2: "ku" },
    { text: "VIKRAM 2", text2: "ku" },
    { text: "VIKRAM 3", text2: "ku" },
    { text: "VIKRAM 4", text2: "ku" },
  ];

  contentRight = [
    { text: "KUMAR 1" },
    { text: "KUMAR 2" },
    { text: "KUMAR 3" },
    { text: "KUMAR 4" },
  ];






  constructor(
    private dragulaService: DragulaService
  ) {

    ///////////////////////////////////////////////////////////////
    this.dragulaService.createGroup("VAMPIRES", {
    });

    ///////////////////////////////////////////////////////////////
    this.dragulaService.dropModel("VAMPIRES").subscribe(args => {
      console.log(args);
      console.log("sourceModel", args.sourceModel);
      console.log("targetModel", args.targetModel);
    });


    ///////////////////////////////////////////////////////////////
    dragulaService.createGroup('PERSON', {
      copy: (el, source) => {
        return source.id === 'left';
      },
      copyItem: (person: Person) => {
        return new Person(person.name);
      },
      accepts: (el, target, source, sibling) => {
        // To avoid dragging from right to left container
        return target?.id !== 'left';
      }
    });

    this.dragulaService.dropModel("PERSON").subscribe(args => {
      console.log(args);
      console.log("sourceModel", args.sourceModel);
      console.log("targetModel", args.targetModel);
    });


    ///////////////////////////////////////////////////////////////
    dragulaService.createGroup('COPYABLE', {
      copy: (el, source) => {
        return source.id === 'left';
      },
      accepts: (el, target, source, sibling) => {
        // To avoid dragging from right to left container
        return target?.id !== 'left';
      }
    });





  }


}
