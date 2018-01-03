import {Router} from '@angular/router';
import {FightEventService} from '../../providers/fight-event/fight-event.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {
  public form: FormGroup;
  constructor(private fromBuilder: FormBuilder, private eventService: FightEventService,  private router: Router) {

    this.form = this.fromBuilder.group({
      from: [{ value: new Date(), disbaled: false }, [Validators.required]],
      to: [{ value: '', disabled: false }, [Validators.required]],
      name: [{ value: '', disabled: false }, [Validators.required]],
      description: [{ value: '', disabled: false }]
    });
  }

  ngOnInit() {
    console.log('test');
  }

  submit() {
    if (this.form.valid) {
      this.eventService.addEvent(this.form.value)
        .subscribe((event) => {
          this.router.navigate([`/event/view/${event.id}`]);
        });
    }
  }
}
