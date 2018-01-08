import {FightEventService} from '../../providers/fight-event/fight-event.service';
import { Tournament } from '../../models/event.model';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-event-fight',
  templateUrl: './create-event-fight.component.html',
  styleUrls: ['./create-event-fight.component.scss']
})
export class CreateEventFightComponent implements OnInit {
  public form: FormGroup;
  private event: Tournament;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private eventService: FightEventService) {

  }

  ngOnInit() {
  //   this.route.params
  //   .concatMap((params) => {
  //     return this.eventService.byId(params.id);
  //   })
  //   .subscribe((data) => {
  //     this.form = this.formBuilder.group({
  //     from: [{ value: data.from, disbaled: false }, [Validators.required]],
  //     to: [{ value: data.to, disabled: false }, [Validators.required]],
  //     name: [{ value: data.name, disabled: false }, [Validators.required]],
  //     description: [{ value: data.description, disabled: false }],
  //     id: [data.id]
  //   });
  //     console.log('data', this.form.value);
  //   },
  //   e => console.error(e)
  // );


  }

}

