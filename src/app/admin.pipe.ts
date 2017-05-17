import {Pipe, PipeTransform} from '@angular/core';
import {User} from './user.model';

@Pipe({
  name: "admin",
  pure: false
})


export class AdminPipe implements PipeTransform {
  transform(input: User[], desiredStatus) {
    var output: User[] = [];
    if(desiredStatus === "admin") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].admin === "true") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredStatus === "nonAdmin") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].admin === "false") {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
